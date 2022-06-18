<script>
  import Range from './Range.svelte';
  export let value;
</script>
<div>
  <label>Letter Spacing</label>
  <Range bind:value={value.letterSpacing} max={10} min={-10} step={0.25} suffix="px" />
</div>
<div>
  <label>Word Spacing</label>
  <Range bind:value={value.wordSpacing} max={10} min={-10} step={0.25} suffix="px" />
</div>