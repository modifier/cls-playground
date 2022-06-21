<script>
  import Range from "../lib/Range.svelte";
  export let value;
</script>

<div class="cls-control">
  <label class="cls-control__label">Letter Spacing</label>
  <Range bind:value={value.letterSpacing} step={1} suffix="u" />
</div>
<div class="cls-control">
  <label class="cls-control__label">Word Spacing</label>
  <Range bind:value={value.wordSpacing} step={1} suffix="u" />
</div>
