<script>
  import SpacingForm from './lib/SpacingForm.svelte';
  import PrimaryFontSelector from './lib/PrimaryFontSelector.svelte';
  import FallbackFontSelector from './lib/FallbackFontSelector.svelte';
  import CommonForm from './lib/CommonForm.svelte';
  import Comparison from './lib/Comparison.svelte';
  import FModsBothForm from './lib/FModsBothForm.svelte';

  let commonProps = {
    fontSize: 16,
    fontWeight: 300,
  };
  let primaryFontFamily = 'Merriweather';
  let fallbackFontFamily = 'Georgia';
  let fallbackSpacing = {
    letterSpacing: 0,
    wordSpacing: 0,
  };
  let fallbackFontProps = {
    ascentOverride: 0,
    descentOverride: 0,
    lineGapOverride: 0,
  };

  function getFontFace(fontFamily, { fontWeight }, {ascentOverride, descentOverride, lineGapOverride}) {
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
      ${getFontFace(fallbackFontFamily, commonProps, fallbackFontProps)}
    }
  </style>`}
</svelte:head>

<main>
  <div class="primary">
    <PrimaryFontSelector bind:value={primaryFontFamily} />
    <CommonForm bind:value={commonProps} />
  </div>
  <div class="fallback">
    <FallbackFontSelector bind:value={fallbackFontFamily} />
    <SpacingForm bind:value={fallbackSpacing} />
    <FModsBothForm bind:value={fallbackFontProps} />
  </div>
  <div class="comparison">
    <Comparison commonProps={commonProps} fallbackSpacing={fallbackSpacing} primaryFontFamily={primaryFontFamily} />
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
