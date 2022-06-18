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
<div class="cls-control">
  <label class="cls-control__label">Total Line Height</label>
  <Range bind:value={altValue.totalLineHeight} on:input={updateValue} min={0} suffix="%" />
</div>
<div class="cls-control">
  <label class="cls-control__label">Ascent Height</label>
  <Range bind:value={altValue.ascentHeight} on:input={updateValue} min={0} suffix="%" />
</div>
<div class="cls-control">
  <label class="cls-control__label">Line Gap Override</label>
  <Range bind:value={altValue.lineGapOverride} on:input={updateValue} min={0} suffix="%" />
</div>
<div class="cls-control">
  <label class="cls-control__label">Size Adjust</label>
  <Range bind:value={value.sizeAdjust} min={0} suffix="%" />
</div>