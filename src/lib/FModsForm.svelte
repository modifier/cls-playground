<script>
  import Range from './Range.svelte';
  export let value;
</script>
<div class="form">
  <label>Ascent Override</label>
  <Range bind:value={value.ascentOverride} suffix="%" />
</div>
<div class="form">
  <label>Descent Override</label>
  <Range bind:value={value.descentOverride} suffix="%" />
</div>
<div class="form">
  <label>Line Gap Override</label>
  <Range bind:value={value.lineGapOverride} suffix="%" />
</div>
<div class="form">
  <label>Size Adjust</label>
  <Range bind:value={value.sizeAdjust} suffix="%" />
</div>