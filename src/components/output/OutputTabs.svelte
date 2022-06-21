<script>
  export let mode;

  function showComparison() {
    mode = "comparison";
  }

  function showResult() {
    mode = "result";
  }

  function showAlphabet() {
    mode = "alphabet";
  }

  function showInfo() {
    mode = "info";
  }
</script>

<nav class="output-tabs">
  <ul class="tabs-container">
    <li
      on:click={showComparison}
      class="tab-button"
      class:button--selected={mode === "comparison"}
    >
      Comparison
    </li>
    <li
      on:click={showAlphabet}
      class="tab-button"
      class:button--selected={mode === "alphabet"}
    >
      Alphabet
    </li>
    <li
      on:click={showResult}
      class="tab-button"
      class:button--selected={mode === "result"}
    >
      Result
    </li>
    <li
      on:click={showInfo}
      class="tab-button"
      class:button--selected={mode === "info"}
    >
      Info
    </li>
  </ul>
  <span class={`tabs-slider tabs-slider--${mode}`} />
</nav>

<style>
  .output-tabs {
    font-size: 0;
    margin-bottom: 1rem;
    border-bottom: var(--border-size) var(--border-color) solid;
    position: relative;
    --distance: 2rem;
    --size: 6rem;
  }

  .tabs-container {
    width: fit-content;
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .tab-button {
    font-size: 0.9rem;
    margin: 0;
    cursor: pointer;
    padding: 1rem 0.25rem;
    display: inline-block;
    width: var(--size);
    font-weight: 500;
    box-sizing: border-box;
    text-align: center;
  }

  .tab-button + .tab-button {
    margin-left: var(--distance);
  }

  .tabs-slider {
    border-bottom: calc(2 * var(--border-size)) var(--primary-color) solid;
    width: var(--size);
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: 0.3s left;
  }

  .tabs-slider--alphabet {
    left: calc(var(--distance) + var(--size));
  }

  .tabs-slider--result {
    left: calc(2 * (var(--distance) + var(--size)));
  }

  .tabs-slider--info {
    left: calc(3 * (var(--distance) + var(--size)));
  }

  @media screen and (max-width: 62rem) {
    .tabs-container {
      --distance: 1rem;
      --size: 5rem;
    }
  }

  .tabs--selected {
    text-decoration: none;
    cursor: default;
    color: var(--link-color);
  }
</style>
