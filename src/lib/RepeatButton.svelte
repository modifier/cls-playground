<script>
  export let value;
  export let perform;
  export let type;

  const INITIAL_TIME = 100;
  let timer;
  let period = INITIAL_TIME;
  let repeats = 0;
  function start() {
    perform();
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

<input type="button" value={value} on:mousedown={start} on:mouseup={stop} class="button" class:button--left={type === 'left'} class:button--right={type === 'right'} />
<style>
  .button {
    --border-radius: 0.3rem;
    --color: #1890ff;
    color: white;
    flex: 0 0 auto;
    background-color: var(--color);
    border: 1px var(--color) solid;
    font-size: 1rem;
    cursor: pointer;
  }

  .button--right {
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
  }

  .button--left {
    border-radius: var(--border-radius) 0 0 var(--border-radius);
  }
</style>