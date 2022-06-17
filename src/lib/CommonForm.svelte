<script>
  import Range from './Range.svelte';

  export let value;
</script>
<div>
  <Range bind:value={value.fontSize} max="70" />
  <label>Font Size: <span>{value.fontSize}px</span></label>
</div>
<div>
  <Range bind:value={value.fontWeight} max="900" min="200" step="100" />
  <label>Font Weight: <span>{value.fontWeight}</span></label>
</div>