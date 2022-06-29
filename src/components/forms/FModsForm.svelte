<script>
  import Range from "../lib/Range.svelte";
  export let value;
</script>

<div class="cls-control">
  <label class="cls-control__label" for="ascentOverride">Ascent Override</label>
  <Range
    name="ascentOverride"
    bind:value={value.ascentOverride}
    initial={null}
    min={0}
    suffix="%"
    placeholder="normal"
  />
</div>
<div class="cls-control">
  <label class="cls-control__label" for="descentOverride"
    >Descent Override</label
  >
  <Range
    name="descentOverride"
    bind:value={value.descentOverride}
    initial={null}
    min={0}
    suffix="%"
    placeholder="normal"
  />
</div>
<div class="cls-control">
  <label class="cls-control__label" for="lineGapOverride"
    >Line Gap Override</label
  >
  <Range
    name="lineGapOverride"
    bind:value={value.lineGapOverride}
    initial={null}
    min={0}
    suffix="%"
    placeholder="normal"
  />
</div>
