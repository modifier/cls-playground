<script>
  export let showComparison;

  function doShowComparison() {
    showComparison = true;
  }

  function doShowResult() {
    showComparison = false;
  }
</script>

<div class="comparison-toggle">
  <div class="toggle-container">
    <span on:click={doShowComparison} class="button" class:button--selected={showComparison}>Comparison</span>
    <span on:click={doShowResult} class="button" class:button--selected={!showComparison}>Result</span>
    <span class="toggle-slider" class:toggle-slider--right={!showComparison}></span>
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

  .toggle-slider--right {
    left: 8rem;
  }

  .button--selected {
    text-decoration: none;
    cursor: default;
    color: #2a92c6;
  }
</style>