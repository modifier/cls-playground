<script>
  import Range from './Range.svelte';
  export let value;
</script>
<div class="form">
  <label>Letter Spacing</label>
  <Range bind:value={value.letterSpacing} max={10} min={-10} step={0.25} suffix="px" />
</div>
<div class="form">
  <label>Word Spacing</label>
  <Range bind:value={value.wordSpacing} max={10} min={-10} step={0.25} suffix="px" />
</div>