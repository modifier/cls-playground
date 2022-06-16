<script>
  import Range from './Range.svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  export let value;
</script>
<div>
  <Range bind:value={value.letterSpacing} max="30" />
  <label>Letter Spacing: <span>{value.letterSpacing}px</span></label>
</div>
<div>
  <Range bind:value={value.wordSpacing} max="30" />
  <label>Word Spacing: <span>{value.wordSpacing}px</span></label>
</div>