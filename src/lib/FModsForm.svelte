<script>
  import Range from './Range.svelte';
  export let value;
</script>
<div>
  <label>Ascent Override</label>
  <Range bind:value={value.ascentOverride} suffix="%" />
</div>
<div>
  <label>Descent Override</label>
  <Range bind:value={value.descentOverride} suffix="%" />
</div>
<div>
  <label>Line Gap Override</label>
  <Range bind:value={value.lineGapOverride} suffix="%" />
</div>
<div>
  <label>Size Adjust</label>
  <Range bind:value={value.sizeAdjust} suffix="%" />
</div>