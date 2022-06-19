<script>
  export let commonProps;
  export let fallbackSpacing;
  export let primaryFontFamily;
  export let hidden;
  let differentColor = true;
  let fout = false;
  let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
</script>

<div class="comparison" class:hidden={hidden}>
  <label class="cls-control">
    <input type="checkbox" bind:checked={fout} class="cls-control__checkbox" />
    <span>See layout shift due to FOUC</span>
  </label>
  <label class="cls-control">
    <input type="checkbox" bind:checked={differentColor} class="cls-control__checkbox" />
    <span>Use different colours for each font</span>
  </label>
  <div class="overlapped-container">
    <div class="overlapped"
         class:overlapped--different-color={differentColor}
         class:overlapped--fout={fout}
         style:font-size="{commonProps.fontSize}px"
         style:font-weight={commonProps.fontWeight}
    >
      <div class="primary" style:font-family={primaryFontFamily}>
        {text}
      </div>
      <div class="fallback"
           style:letter-spacing="{fallbackSpacing.letterSpacing / 64}em"
           style:word-spacing="{fallbackSpacing.wordSpacing / 64}em">
        {text}
      </div>
    </div>
  </div>
</div>

<style>
  @keyframes flicker {
    0%, 100% {
      visibility: visible;
    }

    25%, 75% {
      visibility: hidden;
    }
  }

  .comparison {
    height: 100%;
  }

  .overlapped-container {
    flex: 1 1 auto;
  }

  .overlapped {
    position: relative;
  }

  .fallback {
    font-family: "fallback-font", sans-serif;
  }

  .fallback {
    position: absolute;
    top: 0;
    left: 0;
  }

  .overlapped--different-color .fallback {
    color: red;
  }
  .overlapped--fout .primary,
  .overlapped--fout .fallback {
    animation-duration: 3s;
    animation-name: flicker;
    animation-iteration-count: infinite;
  }

  .overlapped--fout .fallback {
    animation-delay: -1.5s;
  }
</style>