<script>
  import Range from './Range.svelte';
  export let value;
  let altValue = getAlternativeValues(value);
  let minTotalHeight = 0;
  let minAscentHeight = 0;
  let maxLineGap = null;
  let maxAscentHeight = null;
  updateBorderValues();

  function updateValue({ detail }) {
    if (detail !== null) {
      altValue.ascentHeight = altValue.ascentHeight || 0;
      altValue.totalLineHeight = altValue.totalLineHeight || 0;
      altValue.lineGapOverride = altValue.lineGapOverride || 0;
      updateBorderValues();
    } else {
      altValue.ascentHeight = null;
      altValue.totalLineHeight = null;
      altValue.lineGapOverride = null;
      minTotalHeight = 0;
      minAscentHeight = 0;
      maxLineGap = null;
      maxAscentHeight = null;
    }
    value = getOriginalValues(altValue);
  }

  function updateBorderValues() {
    minTotalHeight = altValue.ascentHeight + altValue.lineGapOverride / 2;
    maxAscentHeight = altValue.totalLineHeight - altValue.lineGapOverride / 2;
    maxLineGap = Math.min(2 * (altValue.totalLineHeight - altValue.ascentHeight), altValue.ascentHeight * 2);

    minAscentHeight = altValue.lineGapOverride / 2;
  }

  function getOriginalValues({ totalLineHeight, ascentHeight, lineGapOverride, ...rest }) {
    if (totalLineHeight === null || ascentHeight === null || lineGapOverride === null) {
      return {
        ascentOverride: null,
        descentOverride: null,
        lineGapOverride: null,
        ...rest
      };
    }
    const ascentOverride = ascentHeight - lineGapOverride / 2;
    const descentOverride = totalLineHeight - ascentOverride - lineGapOverride;

    return {
      ascentOverride,
      descentOverride,
      lineGapOverride,
      ...rest
    };
  }

  function getAlternativeValues({ ascentOverride, descentOverride, lineGapOverride, ...rest }) {
    if (ascentOverride === null && descentOverride === null && lineGapOverride === null) {
      return {
        ascentHeight: null,
        totalLineHeight: null,
        lineGapOverride,
        ...rest
      };
    }
    const totalLineHeight = ascentOverride + descentOverride + lineGapOverride;
    const ascentHeight = ascentOverride + lineGapOverride / 2;

    return {
      ascentHeight,
      totalLineHeight,
      lineGapOverride,
      ...rest
    };
  }
</script>
<div class="cls-control">
  <label class="cls-control__label">Total Line Height</label>
  <Range bind:value={altValue.totalLineHeight}
         on:change={updateValue}
         min={minTotalHeight}
         initial={0}
         nullable={true}
         nonBlockingValidation={true}
         suffix="%"
         placeholder="normal" />
</div>
<div class="cls-control">
  <label class="cls-control__label">Ascent Height</label>
  <Range bind:value={altValue.ascentHeight}
         on:change={updateValue}
         min={minAscentHeight}
         max={maxAscentHeight}
         initial={0}
         nullable={true}
         nonBlockingValidation={true}
         suffix="%"
         placeholder="normal" />
</div>
<div class="cls-control">
  <label class="cls-control__label">Line Gap Override</label>
  <Range bind:value={altValue.lineGapOverride}
         on:change={updateValue}
         min={0}
         max={maxLineGap}
         initial={0}
         nullable={true}
         nonBlockingValidation={true}
         suffix="%"
         placeholder="normal" />
</div>