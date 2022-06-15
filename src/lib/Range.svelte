<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  export let max = 200;
  export let min = 0;
  export let step = 1;
  export let initial = 0;
  let value = initial;

  function handleChange(e) {
    value = e.target.value;
    dispatch('change', { value });
  }
</script>


<input type="range" value={value} min={min} max={max} step={step} on:change={handleChange} />