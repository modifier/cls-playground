<script>
  import Range from "../lib/Range.svelte";

  export let value;
</script>

<div class="cls-control">
  <label class="cls-control__label" for="fontSize">Font Size</label>
  <Range
    name="fontSize"
    bind:value={value.fontSize}
    min={1}
    initial={16}
    integer={true}
    suffix="px"
  />
</div>
<div class="cls-control">
  <label class="cls-control__label" for="fontWeight">Font Weight</label>
  <Range
    name="fontWeight"
    bind:value={value.fontWeight}
    max={900}
    min={100}
    step={100}
    initial={200}
    integer={true}
  />
</div>
<div class="cls-control">
  <label class="cls-control__label" for="lineHeight">Line Height</label>
  <Range
    name="lineHeight"
    bind:value={value.lineHeight}
    integer={true}
    step={0.1}
    initial={1}
    nullable={true}
    placeholder="normal"
  />
</div>
