<script>
  import Range from '../lib/Range.svelte';
  export let value;
</script>
<div class="cls-control">
  <label class="cls-control__label">Ascent Override</label>
  <Range bind:value={value.ascentOverride} initial={null} min={0} suffix="%" placeholder="normal" />
</div>
<div class="cls-control">
  <label class="cls-control__label">Descent Override</label>
  <Range bind:value={value.descentOverride} initial={null} min={0} suffix="%" placeholder="normal" />
</div>
<div class="cls-control">
  <label class="cls-control__label">Line Gap Override</label>
  <Range bind:value={value.lineGapOverride} initial={null} min={0} suffix="%" placeholder="normal" />
</div>