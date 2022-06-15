<script>
  import FModsForm from './lib/FModsForm.svelte';
  import SpacingForm from './lib/SpacingForm.svelte';
  import PrimaryFontSelector from './lib/PrimaryFontSelector.svelte';
  import FallbackFontSelector from './lib/FallbackFontSelector.svelte';
  import CommonForm from './lib/CommonForm.svelte';
  import Comparison from './lib/Comparison.svelte';

  let fontSize = 16;
  let primaryFontFamily = '';
  let fallbackFontProps = {};

  function changePrimaryFontFamily({ detail: { value }}) {
    primaryFontFamily = value;
  }

  function changeFallbackFontFamily({ detail: { value }}) {
    fallbackFontProps.fontFamily = value;
  }

  function changeFontSize({ detail }) {
    fontSize = detail.fontSize;
  }

  function changeSpacing({ detail }) {
    fallbackFontProps = { ...fallbackFontProps, ...detail };
  }

  function changeFmods({ detail }) {
    fallbackFontProps = { ...fallbackFontProps, ...detail };
  }

  function getFontFace({ fontFamily, ascentOverride, descentOverride, lineGapOverride }) {
    const params = {
      'font-family': 'fallback-font',
      src: `local(${fontFamily})`
    };

    if (ascentOverride) {
      params['ascent-override'] = `${ascentOverride}%`;
    }

    if (descentOverride) {
      params['descent-override'] = `${descentOverride}%`;
    }

    if (lineGapOverride) {
      params['line-gap-override'] = `${lineGapOverride}%`;
    }

    return Object.entries(params)
            .map(([key, value]) => `${key}: ${value};`)
            .join('\n');
  }
</script>

<svelte:head>
  {#if primaryFontFamily !== ''}
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family={primaryFontFamily.trim()}:300,300i,400,400i,700,700i,900,900i" />
  {/if}
  {@html `
  <style>
    @font-face {
      ${getFontFace(fallbackFontProps)}
    }
  </style>`}
</svelte:head>

<main>
  <div class="primary">
    <PrimaryFontSelector on:change={changePrimaryFontFamily} />
    <SpacingForm on:change={changeSpacing} />
    <FModsForm on:change={changeFmods} />
  </div>
  <div class="fallback">
    <FallbackFontSelector on:change={changeFallbackFontFamily} />
    <CommonForm on:change={changeFontSize} />
  </div>
  <div class="comparison">
    <Comparison fontSize={fontSize} fallbackFontProps={fallbackFontProps} primaryFontFamily={primaryFontFamily} />
  </div>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    padding: 1em;
    display: flex;
    flex-direction: row;
    max-width: 1600px;
    margin: 0 auto;
  }

  .primary,
  .fallback {
    flex: 1 0 auto;
    padding: 10px;
    max-width: 350px;
  }

  .comparison {
    flex: 3 0 auto;
    padding: 10px;
  }
</style>
