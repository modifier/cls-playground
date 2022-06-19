<script>
  export let fontFace;
  export let hidden;
</script>

<code class:hidden={hidden}>
  <pre>@font-face &lbrace;
{fontFace}
&rbrace;</pre>
</code>

<style>
  code {
    background-color: #fffcf2;
    padding: 1rem;
    border: 1px #d7bd65 solid;
  }

  pre {
    margin: 0;
    font-family: 'Inconsolata', 'inconsolata-fallback', monospace;
    font-weight: 400;
  }
</style>