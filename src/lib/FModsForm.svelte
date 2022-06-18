<script>
  import Range from './Range.svelte';
  export let value;
</script>
<div class="cls-control">
  <label class="cls-control__label">Ascent Override</label>
  <Range bind:value={value.ascentOverride} suffix="%" />
</div>
<div class="cls-control">
  <label class="cls-control__label">Descent Override</label>
  <Range bind:value={value.descentOverride} suffix="%" />
</div>
<div class="cls-control">
  <label class="cls-control__label">Line Gap Override</label>
  <Range bind:value={value.lineGapOverride} suffix="%" />
</div>
<div class="cls-control">
  <label class="cls-control__label">Size Adjust</label>
  <Range bind:value={value.sizeAdjust} suffix="%" />
</div>