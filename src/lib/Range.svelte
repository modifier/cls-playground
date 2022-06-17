<script>
  export let max = 200;
  export let min = 0;
  export let step = 1;
  export let value;
</script>


<input type="range" bind:value={value} min={min} max={max} step={step} on:input />