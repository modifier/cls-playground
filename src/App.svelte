<script>
  import SpacingForm from './components/forms/SpacingForm.svelte';
  import PrimaryFontSelector from './components/font-selector/PrimaryFontSelector.svelte';
  import FallbackFontSelector from './components/font-selector/FallbackFontSelector.svelte';
  import CommonForm from './components/forms/CommonForm.svelte';
  import Comparison from './components/output/Comparison.svelte';
  import FModsBothForm from './components/forms/FModsBothForm.svelte';
  import Result from './components/output/Result.svelte';
  import ComparisonToggle from './components/output/ComparisonToggle.svelte';
  import Alphabet from './components/output/Alphabet.svelte';
  import Info from './components/output/Info.svelte';

  const PREVIEW_TEXT = 'The fox jumped over the lazy dog, the scoundrel.';

  let commonProps = {
    fontSize: 16,
    fontWeight: 200,
    lineHeight: null,
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
  let resultMode = 'comparison';

  function isResultValid({ascentOverride, descentOverride, lineGapOverride}) {
    if (typeof ascentOverride === 'number' && ascentOverride < 0) {
      return false;
    }
    if (typeof descentOverride === 'number' && descentOverride < 0) {
      return false;
    }
    if (typeof lineGapOverride === 'number' && lineGapOverride < 0) {
      return false;
    }
    return true;
  }

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
  <div class="controls">
    <div class="primary">
      <PrimaryFontSelector bind:value={primaryFontFamily} />
      <CommonForm bind:value={commonProps} />
    </div>
    <div class="fallback">
      <FallbackFontSelector bind:value={fallbackFontFamily} />
      <SpacingForm bind:value={fallbackSpacing} />
      <FModsBothForm bind:value={fallbackFontProps} />
    </div>
    <div class="primary-preview"
         style:font-weight={commonProps.fontWeight}
         style:font-family={primaryFontFamily}>
      <div class="preview">{PREVIEW_TEXT}</div>
    </div>
    <div class="fallback-preview"
         style:font-weight={commonProps.fontWeight}>
      <div class="preview">{PREVIEW_TEXT}</div>
    </div>
  </div>
  <div class="comparison">
    <ComparisonToggle bind:mode={resultMode} />
    <Comparison
            commonProps={commonProps}
            fallbackSpacing={fallbackSpacing}
            primaryFontFamily={primaryFontFamily}
            hidden={resultMode !== 'comparison'} />
    <Alphabet
            commonProps={commonProps}
            primaryFontFamily={primaryFontFamily}
            hidden={resultMode !== 'alphabet'} />
    <Result fontFace={fontFace}
            isValid={isResultValid(fallbackFontProps)}
            hidden={resultMode !== 'result'} />
    <Info hidden={resultMode !== 'info'} />
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
    flex: 0 1 81rem;
    padding: 0 1rem;
  }

  .controls {
    flex: 0 1 auto;
    position: sticky;
    top: 0;
    align-self: flex-start;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
  }

  @media screen and (max-width: 1000px) {
    .controls {
      grid-template-columns: 1fr;
    }

    .fallback-preview,
    .primary-preview {
      display: none;
    }
  }

  .primary-preview,
  .fallback-preview {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    position: relative;
  }

  .preview {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  .fallback-preview {
    font-family: "fallback-font", sans-serif;
  }

  .comparison {
    flex: 3 1 auto;
    max-width: 35rem;
    display: flex;
    flex-direction: column;
  }
</style>
