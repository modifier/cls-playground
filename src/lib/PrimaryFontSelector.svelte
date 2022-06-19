<script>
  import FontUpload from './FontUpload.svelte';
  import ToggleFontMode from './ToggleFontMode.svelte';

  const KEY = 'AIzaSyC6-Vr6LLjHcH_edpIXpJn6CZXUlSmhIvg';

  export let value;
  let googleFontValue = value;
  let useGoogleFonts = true;
  let uploadedFontValue;
  let uploadedFileSource;
  let families = [];

  function getGoogleFonts() {
    const request = new XMLHttpRequest();
    let url = `https://www.googleapis.com/webfonts/v1/webfonts?key=${KEY}`;
    request.open('GET', url, true);
    request.onreadystatechange = function () {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        families = data.items;
      }
    };
    request.send();
  }

  function onFileUploaded({detail: {source, fileName}}) {
    uploadedFontValue = fileName;
    uploadedFileSource = source;
    value = 'webfont-uploaded';
  }

  getGoogleFonts();

  $: value = !useGoogleFonts && uploadedFontValue ? 'webfont-uploaded' : googleFontValue;
</script>

<svelte:head>
  {#if uploadedFileSource && !useGoogleFonts}
    {@html `
    <style>
      @font-face {
        font-family: 'webfont-uploaded';
        src: url(${uploadedFileSource});
      }
    </style>
    `}
  {:else}
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family={googleFontValue.trim()}:300,300i,400,400i,700,700i,900,900i" />
  {/if}
</svelte:head>

<div class="cls-control cls-control--column">
  <label for="primary-font-family" class="cls-control__text-label">
    Primary font
    <ToggleFontMode bind:useGoogleFonts={useGoogleFonts} />
  </label>
{#if useGoogleFonts}
    <input bind:value={googleFontValue}
           placeholder="Font name"
           list="families"
           class="cls-control__text"
           name="primary-font-family" />
    <datalist id="families">
      {#each families as family}
        <option value={family.family} />
      {/each}
    </datalist>
{:else}
  {#if uploadedFontValue}
    <span class="cls-control__text">
      {uploadedFontValue}
    </span>
  {/if}
  <FontUpload on:upload={onFileUploaded} />
{/if}
</div>
