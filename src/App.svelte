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
    sizeAdjust: 100,
  };

  function getFontFace(fontFamily, {ascentOverride, descentOverride, lineGapOverride, sizeAdjust}) {
    const params = {
      'font-family': 'fallback-font',
      src: `local(${fontFamily})`
    };

    if (typeof ascentOverride === 'number') {
      params['ascent-override'] = `${ascentOverride}%`;
    }

    if (typeof descentOverride === 'number') {
      params['descent-override'] = `${descentOverride}%`;
    }

    if (typeof lineGapOverride === 'number') {
      params['line-gap-override'] = `${lineGapOverride}%`;
    }

    if (typeof sizeAdjust === 'number') {
      params['size-adjust'] = `${sizeAdjust}%`;
    }

    return Object.entries(params)
            .map(([key, value]) => `${key}: ${value};`)
            .join('\n');
  }
</script>

<svelte:head>
  {@html `
  <style>
    @font-face {
      ${getFontFace(fallbackFontFamily, fallbackFontProps)}
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
    font-family: 'Trebuchet MS', sans-serif;
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
