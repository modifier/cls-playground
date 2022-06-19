<script>
  import SpacingForm from './lib/SpacingForm.svelte';
  import PrimaryFontSelector from './lib/PrimaryFontSelector.svelte';
  import FallbackFontSelector from './lib/FallbackFontSelector.svelte';
  import CommonForm from './lib/CommonForm.svelte';
  import Comparison from './lib/Comparison.svelte';
  import FModsBothForm from './lib/FModsBothForm.svelte';
  import Result from './lib/Result.svelte';
  import ComparisonToggle from './lib/ComparisonToggle.svelte';

  let commonProps = {
    fontSize: 16,
    fontWeight: 200,
  };
  let primaryFontFamily = 'Merriweather';
  let fallbackFontFamily = 'Georgia';
  let fallbackSpacing = {
    letterSpacing: 0,
    wordSpacing: 0,
  };
  let fallbackFontProps = {
    ascentOverride: null,
    descentOverride: null,
    lineGapOverride: null,
    sizeAdjust: 100,
  };
  let fontFace;
  let showComparison = true;

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

    if (sizeAdjust !== 100) {
      params['size-adjust'] = `${sizeAdjust}%`;
    }

    return Object.entries(params)
            .map(([key, value]) => `  ${key}: ${value};`)
            .join('\n');
  }

  $: fontFace = getFontFace(fallbackFontFamily, fallbackFontProps);
</script>

<svelte:head>
  {@html `
  <style>
    @font-face {
      ${fontFace}
    }
  </style>`}
</svelte:head>

<main class="cls-main">
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
    <ComparisonToggle bind:showComparison={showComparison} />
    <Comparison commonProps={commonProps} fallbackSpacing={fallbackSpacing} primaryFontFamily={primaryFontFamily} hidden={!showComparison} />
    <Result fontFace={fontFace} hidden={showComparison} />
  </div>
</main>

<style>
  :root {
    font-family: var(--sans-serif);
  }

  .cls-main {
    display: flex;
    flex-direction: row;
    max-width: 1300px;
    margin: 0 auto;
    box-sizing: border-box;
    gap: 2rem;
    justify-content: center;
    position: relative;
    flex: 0 1 1300px;
  }

  .primary,
  .fallback {
    flex: 0 0 auto;
    align-self: flex-start;
    position: sticky;
    top: 0;
  }

  .comparison {
    flex: 3 1 auto;
    max-width: 40rem;
    display: flex;
    flex-direction: column;
  }
</style>
