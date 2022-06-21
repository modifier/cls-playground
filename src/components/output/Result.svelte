<script>
  export let fontFace;
  export let hidden;
  export let isValid;
</script>

<code class:hidden={hidden} class:invalid={!isValid}>
  <div class="invalid-message">The resulting code is invalid. Check your font's parameters.</div>
  <pre>@font-face &lbrace;
{fontFace}
&rbrace;</pre>
</code>

<style>
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

  code {
    background-color: #fffcf2;
    padding: 1rem;
    border: 1px #d7bd65 solid;
    transition: 0.5s all;
  }

  pre {
    margin: 0;
    font-family: 'Inconsolata', 'inconsolata-fallback', monospace;
    font-weight: 400;
  }
</style>