<script>
  export let fontSize;
  export let fallbackFontProps;
  export let primaryFontFamily;
  let differentColor = true;
  let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
</script>

<div>
  <label>
    <input type="checkbox" bind:checked={differentColor}>Use different colours for each font
  </label>
  <div class="overlapped" class:overlapped--different-color={differentColor} style:font-size="{fontSize}px">
    <div class="primary" style:font-family={primaryFontFamily}>
      {text}
    </div>
    <div class="fallback"
         style:letter-spacing="{fallbackFontProps.letterSpacing}px"
         style:word-spacing="{fallbackFontProps.wordSpacing}px">
      {text}
    </div>
  </div>
</div>

<style>
  .overlapped {
    position: relative;
  }

  .fallback {
    font-family: "fallback-font", sans-serif;
  }

  .primary,
  .fallback {
    position: absolute;
    top: 0;
    left: 0;
  }

  .overlapped--different-color .fallback {
    color: red;
  }
</style>