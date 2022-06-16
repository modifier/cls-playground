<script>
  import Range from './Range.svelte';
  import {createEventDispatcher} from 'svelte';

  const dispatch = createEventDispatcher();
  export let fontSize;
</script>
<div>
  <Range bind:value={fontSize} max="70" />
  <label>Font Size: <span>{fontSize}px</span></label>
</div>