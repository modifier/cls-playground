<script>
  import Range from "../lib/Range.svelte";

  export let value;
</script>

<div class="cls-control">
  <label class="cls-control__label">Font Size</label>
  <Range
    bind:value={value.fontSize}
    min={1}
    initial={16}
    integer={true}
    suffix="px"
  />
</div>
<div class="cls-control">
  <label class="cls-control__label">Font Weight</label>
  <Range
    bind:value={value.fontWeight}
    max={900}
    min={100}
    step={100}
    initial={200}
    integer={true}
  />
</div>
<div class="cls-control">
  <label class="cls-control__label">Line Height</label>
  <Range
    bind:value={value.lineHeight}
    integer={true}
    step={0.1}
    initial={1}
    nullable={true}
    placeholder="normal"
  />
</div>
