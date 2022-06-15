<script>
  import Range from './Range.svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  let ascentOverride = 0;
  let descentOverride = 0;
  let lineGapOverride = 0;

  function ascentOverrideChange({ detail: { value }}) {
    ascentOverride = value;
    dispatch('change', { ascentOverride, descentOverride, lineGapOverride });
  }

  function descentOverrideChange({ detail: { value }}) {
    descentOverride = value;
    dispatch('change', { ascentOverride, descentOverride, lineGapOverride });
  }

  function lineGapOverrideChange({ detail: { value }}) {
    lineGapOverride = value;
    dispatch('change', { ascentOverride, descentOverride, lineGapOverride });
  }
</script>
<div>
  <Range on:change={ascentOverrideChange} />
  <label>Ascent Override: <span>{ascentOverride}%</span></label>
</div>
<div>
  <Range on:change={descentOverrideChange} />
  <label>Descent Override: <span>{descentOverride}%</span></label>
</div>
<div>
  <Range on:change={lineGapOverrideChange} />
  <label>Line Gap Override: <span>{lineGapOverride}%</span></label>
</div>