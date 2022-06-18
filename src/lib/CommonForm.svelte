<script>
  import Range from './Range.svelte';

  export let value;
</script>
<div class="cls-control">
  <label class="cls-control__label">Font Size</label>
  <Range bind:value={value.fontSize} min={1} suffix="px" />
</div>
<div class="cls-control">
  <label class="cls-control__label">Font Weight</label>
  <Range bind:value={value.fontWeight} max={900} min={200} step={100} />
</div>