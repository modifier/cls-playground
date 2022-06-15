<script>
  import {createEventDispatcher} from 'svelte';

  export let initial = "Georgia";
  let value = initial;

  const dispatch = createEventDispatcher();
  function changeFontFamily(e) {
    value = e.target.value;

    dispatch('change', { value })
  }
</script>

<input value={value} placeholder="Font name" on:change={changeFontFamily} />