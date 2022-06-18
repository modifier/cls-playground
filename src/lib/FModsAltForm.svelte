<script>
  import Range from './Range.svelte';
  export let value;
  let altValue = getAlternativeValues(value);

  function updateValue() {
    value = getOriginalValues(altValue);
  }

  function getOriginalValues({ totalLineHeight, ascentHeight, lineGapOverride, sizeAdjust }) {
    const ascentOverride = Math.round(ascentHeight - lineGapOverride / 2);
    const descentOverride = totalLineHeight - ascentOverride - lineGapOverride;

    return {
      ascentOverride,
      descentOverride,
      lineGapOverride,
      sizeAdjust,
    };
  }

  function getAlternativeValues({ ascentOverride, descentOverride, lineGapOverride, sizeAdjust }) {
    const totalLineHeight = ascentOverride + descentOverride + lineGapOverride;
    const ascentHeight = Math.round(ascentOverride + lineGapOverride / 2);

    return {
      ascentHeight,
      totalLineHeight,
      lineGapOverride,
      sizeAdjust,
    };
  }
</script>
<div class="form">
  <label>Total Line Height</label>
  <Range bind:value={altValue.totalLineHeight} on:input={updateValue} suffix="%" />
</div>
<div class="form">
  <label>Ascent Height</label>
  <Range bind:value={altValue.ascentHeight} on:input={updateValue} suffix="%" />
</div>
<div class="form">
  <label>Line Gap Override</label>
  <Range bind:value={altValue.lineGapOverride} on:input={updateValue} suffix="%" />
</div>
<div class="form">
  <label>Size Adjust</label>
  <Range bind:value={value.sizeAdjust} suffix="%" />
</div>