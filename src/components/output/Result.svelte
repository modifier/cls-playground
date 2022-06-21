<script>
  export let fontFace;
  export let hidden;
  export let isValid;
</script>

<code class="result" class:hidden class:invalid={!isValid}>
  <span class="invalid-message">
    The resulting code is invalid. Check your font's parameters.
  </span>
  <pre>@font-face &lbrace;
{fontFace}
&rbrace;</pre>
</code>

<style>
  .result {
    background-color: #fffcf2;
    padding: 1rem;
    border: var(--border-size) #d7bd65 solid;
    transition: 0.5s all;
  }

  .invalid {
    border-color: #d76565;
    background-color: #fff0f0;
  }

  .invalid-message {
    font-family: var(--sans-serif);
    margin-bottom: 1rem;
    font-weight: 500;
    display: none;
  }

  .invalid .invalid-message {
    display: block;
  }
</style>
