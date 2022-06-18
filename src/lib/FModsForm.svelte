<script>
  import Range from './Range.svelte';
  export let value;
</script>
<div class="cls-control">
  <label class="cls-control__label">Ascent Override</label>
  <Range bind:value={value.ascentOverride} min={0} suffix="%" />
</div>
<div class="cls-control">
  <label class="cls-control__label">Descent Override</label>
  <Range bind:value={value.descentOverride} min={0} suffix="%" />
</div>
<div class="cls-control">
  <label class="cls-control__label">Line Gap Override</label>
  <Range bind:value={value.lineGapOverride} min={0} suffix="%" />
</div>
<div class="cls-control">
  <label class="cls-control__label">Size Adjust</label>
  <Range bind:value={value.sizeAdjust} min={0} suffix="%" />
</div>