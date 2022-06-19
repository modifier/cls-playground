<script>
  import Range from './Range.svelte';
  export let value;
  let altValue = getAlternativeValues(value);

  function updateValue({ detail }) {
    if (detail !== null) {
      altValue.ascentHeight = altValue.ascentHeight || 0;
      altValue.totalLineHeight = altValue.totalLineHeight || 0;
      altValue.lineGapOverride = altValue.lineGapOverride || 0;
    } else {
      altValue.ascentHeight = null;
      altValue.totalLineHeight = null;
      altValue.lineGapOverride = null;
    }
    value = getOriginalValues(altValue);
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
    const ascentOverride = Math.max(ascentHeight - lineGapOverride / 2, 0);
    const descentOverride = Math.max(totalLineHeight - ascentOverride - lineGapOverride, 0);

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
  <Range bind:value={altValue.totalLineHeight} on:change={updateValue} min={0} initial={null} suffix="%" placeholder="normal" />
</div>
<div class="cls-control">
  <label class="cls-control__label">Ascent Height</label>
  <Range bind:value={altValue.ascentHeight} on:change={updateValue} min={0} initial={null} suffix="%" placeholder="normal" />
</div>
<div class="cls-control">
  <label class="cls-control__label">Line Gap Override</label>
  <Range bind:value={altValue.lineGapOverride} on:change={updateValue} min={0} initial={null} suffix="%" placeholder="normal" />
</div>