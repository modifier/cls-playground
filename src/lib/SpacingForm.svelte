<script>
  import Range from './Range.svelte';
  export let value;
</script>
<div>
  <Range bind:value={value.letterSpacing} max="10" min="-10" step="0.25" />
  <label>Letter Spacing: <span>{value.letterSpacing}px</span></label>
</div>
<div>
  <Range bind:value={value.wordSpacing} max="10" min="-10" step="0.25" />
  <label>Word Spacing: <span>{value.wordSpacing}px</span></label>
</div>