<script>
  export let hidden;
  export let commonProps;
  export let primaryFontFamily;
  let differentColor = true;

  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  const GLYPHS = [...ALPHABET.split(''), ...ALPHABET.toLocaleUpperCase().split('')];
</script>

<div class="alphabet-container" class:hidden={hidden}>
  <label class="cls-control">
    <input type="checkbox" bind:checked={differentColor} class="cls-control__checkbox" />
    <span>Use different colours for each font</span>
  </label>
  <div class="alphabet"
       class:alphabet--different-color={differentColor}>
    {#each GLYPHS as glyph}
      <div class="glyph"
           style:font-size="{commonProps.fontSize}px"
           style:font-weight={commonProps.fontWeight}>
        <div class="primary" style:font-family={primaryFontFamily}>{glyph}</div>
        <div class="fallback">{glyph}</div>
      </div>
    {/each}
  </div>
</div>

<style>
  .alphabet {
    display: flex;
    flex-wrap: wrap;
  }

  .alphabet--different-color .fallback {
    color: red;
  }

  .glyph {
    position: relative;
    width: 2em;
    height: 2em;
  }

  .fallback {
    position: absolute;
    top: 0;
    left: 0;
  }

  .fallback {
    font-family: "fallback-font", sans-serif;
  }
</style>