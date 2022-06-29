<script>
  import Range from "../lib/Range.svelte";
  export let value;
</script>

<div class="cls-control">
  <label class="cls-control__label" for="letterSpacing">Letter Spacing</label>
  <Range
    name="letterSpacing"
    bind:value={value.letterSpacing}
    step={1}
    suffix="u"
  />
</div>
<div class="cls-control">
  <label class="cls-control__label" for="wordSpacing">Word Spacing</label>
  <Range
    name="wordSpacing"
    bind:value={value.wordSpacing}
    step={1}
    suffix="u"
  />
</div>
