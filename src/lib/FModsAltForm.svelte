<script>
  import Range from './Range.svelte';
  export let value;
  let altValue = getAlternativeValues(value);

  function updateValue() {
    value = getOriginalValues(altValue);
  }

  function getOriginalValues({ totalLineHeight, ascentHeight, lineGapOverride }) {
    const ascentOverride = Math.max(Math.round(ascentHeight - lineGapOverride / 2), 1);
    const descentOverride = Math.max(totalLineHeight - ascentOverride - lineGapOverride, 1);

    return {
      ascentOverride,
      descentOverride,
      lineGapOverride,
    };
  }

  function getAlternativeValues({ ascentOverride, descentOverride, lineGapOverride }) {
    const totalLineHeight = ascentOverride + descentOverride + lineGapOverride;
    const ascentHeight = Math.round(ascentOverride + lineGapOverride / 2);

    return {
      ascentHeight,
      totalLineHeight,
      lineGapOverride,
    };
  }
</script>
<div>
  <Range bind:value={altValue.totalLineHeight} on:input={updateValue} />
  <label>Total Line Height: <span>{altValue.totalLineHeight}%</span></label>
</div>
<div>
  <Range bind:value={altValue.ascentHeight} on:input={updateValue} />
  <label>Ascent Height: <span>{altValue.ascentHeight}%</span></label>
</div>
<div>
  <Range bind:value={altValue.lineGapOverride} on:input={updateValue} />
  <label>Line Gap Override: <span>{altValue.lineGapOverride}%</span></label>
</div>