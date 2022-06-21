<script>
  import Range from "../lib/Range.svelte";
  export let value;
  let altValue = getAlternativeValues(value);
  let minTotalHeight = 0;
  let minBaselineHeight = 0;
  let maxLineGap = null;
  let maxBaselineHeight = null;
  updateBorderValues();

  function updateValue({ detail }) {
    if (detail !== null) {
      altValue.baselineHeight = altValue.baselineHeight || 0;
      altValue.totalLineHeight = altValue.totalLineHeight || 0;
      altValue.lineGapOverride = altValue.lineGapOverride || 0;
      updateBorderValues();
    } else {
      altValue.baselineHeight = null;
      altValue.totalLineHeight = null;
      altValue.lineGapOverride = null;
      minTotalHeight = 0;
      minBaselineHeight = 0;
      maxLineGap = null;
      maxBaselineHeight = null;
    }
    value = getOriginalValues(altValue);
  }

  function updateBorderValues() {
    minTotalHeight = altValue.baselineHeight + altValue.lineGapOverride / 2;
    maxBaselineHeight = altValue.totalLineHeight - altValue.lineGapOverride / 2;
    maxLineGap = Math.min(
      2 * (altValue.totalLineHeight - altValue.baselineHeight),
      altValue.baselineHeight * 2
    );

    minBaselineHeight = altValue.lineGapOverride / 2;
  }

  function getOriginalValues({
    totalLineHeight,
                               baselineHeight,
    lineGapOverride,
    ...rest
  }) {
    if (
      totalLineHeight === null ||
            baselineHeight === null ||
      lineGapOverride === null
    ) {
      return {
        ascentOverride: null,
        descentOverride: null,
        lineGapOverride: null,
        ...rest,
      };
    }
    const ascentOverride = baselineHeight - lineGapOverride / 2;
    const descentOverride = totalLineHeight - ascentOverride - lineGapOverride;

    return {
      ascentOverride,
      descentOverride,
      lineGapOverride,
      ...rest,
    };
  }

  function getAlternativeValues({
    ascentOverride,
    descentOverride,
    lineGapOverride,
    ...rest
  }) {
    if (
      ascentOverride === null &&
      descentOverride === null &&
      lineGapOverride === null
    ) {
      return {
        baselineHeight: null,
        totalLineHeight: null,
        lineGapOverride,
        ...rest,
      };
    }
    const totalLineHeight = ascentOverride + descentOverride + lineGapOverride;
    const baselineHeight = ascentOverride + lineGapOverride / 2;

    return {
      baselineHeight,
      totalLineHeight,
      lineGapOverride,
      ...rest,
    };
  }

  $: altValue.sizeAdjust = value.sizeAdjust;
</script>

<div class="cls-control">
  <label class="cls-control__label" for="totalLineHeight">Total Line Height</label>
  <Range
    name="totalLineHeight"
    bind:value={altValue.totalLineHeight}
    on:change={updateValue}
    min={minTotalHeight}
    initial={0}
    nullable={true}
    nonBlockingValidation={true}
    suffix="%"
    placeholder="normal"
  />
</div>
<div class="cls-control">
  <label class="cls-control__label" for="baselineHeight">Baseline Height</label>
  <Range
    name="baselineHeight"
    bind:value={altValue.baselineHeight}
    on:change={updateValue}
    min={minBaselineHeight}
    max={maxBaselineHeight}
    initial={0}
    nullable={true}
    nonBlockingValidation={true}
    suffix="%"
    placeholder="normal"
  />
</div>
<div class="cls-control">
  <label class="cls-control__label" for="lineGapOverride">Line Gap Override</label>
  <Range
    name="lineGapOverride"
    bind:value={altValue.lineGapOverride}
    on:change={updateValue}
    min={0}
    max={maxLineGap}
    initial={0}
    nullable={true}
    nonBlockingValidation={true}
    suffix="%"
    placeholder="normal"
  />
</div>
