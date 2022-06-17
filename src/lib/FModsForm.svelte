<script>
  import Range from './Range.svelte';
  export let value;
</script>
<div>
  <Range bind:value={value.ascentOverride} />
  <label>Ascent Override: <span>{value.ascentOverride}%</span></label>
</div>
<div>
  <Range bind:value={value.descentOverride} />
  <label>Descent Override: <span>{value.descentOverride}%</span></label>
</div>
<div>
  <Range bind:value={value.lineGapOverride} />
  <label>Line Gap Override: <span>{value.lineGapOverride}%</span></label>
</div>
<div>
  <Range bind:value={value.sizeAdjust} />
  <label>Size Adjust: <span>{value.sizeAdjust}%</span></label>
</div>