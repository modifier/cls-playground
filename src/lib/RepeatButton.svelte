<script>
  export let value;
  export let action;

  const INITIAL_TIME = 100;
  let timer;
  let period = INITIAL_TIME;
  let repeats = 0;
  function start() {
    action();
    repeats++;
    timer = setTimeout(() => {
      if (repeats > 10) {
        period = 20;
      } else if (repeats > 5) {
        period = 50;
      }
      clearTimeout(timer);
      start();
    }, period);
  }

  function stop() {
    clearTimeout(timer);
    repeats = 0;
    period = INITIAL_TIME;
  }
</script>

<input type="button"
       value={value}
       on:mousedown={start}
       on:mouseup={stop}
       on:mouseout={stop}
       class="button" />

<style>
  .button {
    --color: #50b9de;
    color: white;
    flex: 0 0 auto;
    background-color: var(--color);
    border: 1px var(--color) solid;
    font-size: 1rem;
    cursor: pointer;
  }
</style>