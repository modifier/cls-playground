<script>
  import Range from './Range.svelte';
  import {createEventDispatcher} from 'svelte';

  const dispatch = createEventDispatcher();
  let letterSpacing = 0;
  let wordSpacing = 0;

  function letterSpacingChange({ detail: { value }}) {
    letterSpacing = value;
    dispatch('change', { letterSpacing, wordSpacing });
  }

  function wordSpacingChange({ detail: { value }}) {
    wordSpacing = value;
    dispatch('change', { letterSpacing, wordSpacing });
  }
</script>
<div>
  <Range on:change={letterSpacingChange} />
  <label>Letter Spacing: <span>{letterSpacing}px</span></label>
</div>
<div>
  <Range on:change={wordSpacingChange} />
  <label>Word Spacing: <span>{wordSpacing}px</span></label>
</div>