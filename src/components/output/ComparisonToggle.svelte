<script>
  export let mode;

  function showComparison() {
    mode = 'comparison';
  }

  function showResult() {
    mode = 'result';
  }

  function showAlphabet() {
    mode = 'alphabet';
  }

  function showInfo() {
    mode = 'info';
  }
</script>

<div class="comparison-toggle">
  <div class="toggle-container">
    <span on:click={showComparison} class="button" class:button--selected={mode === 'comparison'}>Comparison</span>
    <span on:click={showAlphabet} class="button" class:button--selected={mode === 'alphabet'}>Alphabet</span>
    <span on:click={showResult} class="button" class:button--selected={mode === 'result'}>Result</span>
    <span on:click={showInfo} class="button" class:button--selected={mode === 'info'}>Info</span>
    <span class={['toggle-slider', `toggle-slider--${mode}`].join(' ')}></span>
  </div>
</div>

<style>
  .comparison-toggle {
    font-size: 0;
    margin-bottom: 1rem;
    border-bottom: var(--border-size) var(--border-color) solid;
  }

  .toggle-container {
    --distance: 2rem;
    --size: 6rem;
    width: fit-content;
    position: relative;
    display: flex;
  }

  .button {
    font-size: 0.9rem;
    cursor: pointer;
    padding: 1rem 0.25rem;
    display: inline-block;
    width: var(--size);
    font-weight: 500;
    box-sizing: border-box;
    text-align: center;
  }

  .button + .button {
    margin-left: var(--distance);
  }

  .toggle-slider {
    border-bottom: calc(2 * var(--border-size)) var(--primary-color) solid;
    width: var(--size);
    display: block;
    position: absolute;
    bottom: calc(-1 * var(--border-size));
    left: 0;
    transition: 0.3s left;
  }

  .toggle-slider--alphabet {
    left: calc(var(--distance) + var(--size));
  }

  .toggle-slider--result {
    left: calc(2 * (var(--distance) + var(--size)));
  }

  .toggle-slider--info {
    left: calc(3 * (var(--distance) + var(--size)));
  }

  @media screen and (max-width: 62rem) {
    .toggle-container {
      --distance: 1rem;
      --size: 5rem;
    }
  }

  .button--selected {
    text-decoration: none;
    cursor: default;
    color: var(--link-color);
  }
</style>