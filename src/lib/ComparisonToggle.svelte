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
</script>

<div class="comparison-toggle">
  <div class="toggle-container">
    <span on:click={showComparison} class="button" class:button--selected={mode === 'comparison'}>Comparison</span>
    <span on:click={showAlphabet} class="button" class:button--selected={mode === 'alphabet'}>Alphabet</span>
    <span on:click={showResult} class="button" class:button--selected={mode === 'result'}>Result</span>
    <span class={['toggle-slider', `toggle-slider--${mode}`].join(' ')}></span>
  </div>
</div>

<style>
  .comparison-toggle {
    font-size: 0;
    margin-bottom: 1rem;
    border-bottom: 1px #d9d9d9 solid;
  }

  .toggle-container {
    width: fit-content;
    position: relative;
  }

  .button {
    font-size: 0.9rem;
    cursor: pointer;
    padding: 1rem 0.25rem;
    display: inline-block;
    width: 6rem;
    font-weight: 500;
    box-sizing: border-box;
    text-align: center;
  }

  .button + .button {
    margin-left: 2rem;
  }

  .toggle-slider {
    border-bottom: 2px #2a92c6 solid;
    width: 6rem;
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: 0.3s left;
  }

  .toggle-slider--alphabet {
    left: 8rem;
  }

  .toggle-slider--result {
    left: 16rem;
  }

  .button--selected {
    text-decoration: none;
    cursor: default;
    color: #2a92c6;
  }
</style>