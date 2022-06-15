<script>
  import Range from './Range.svelte';
  import {createEventDispatcher} from 'svelte';

  const dispatch = createEventDispatcher();
  let fontSize = 14;

  function fontSizeChange({ detail: { value }}) {
    fontSize = value;
    dispatch('change', { fontSize });
  }
</script>
<div>
  <Range on:change={fontSizeChange} max="70" />
  <label>Font Size: <span>{fontSize}px</span></label>
</div>