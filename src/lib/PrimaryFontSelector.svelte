<script>
  import FontUpload from './FontUpload.svelte';
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
    request.onreadystatechange = function() {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        families = data.items;
      }
    };
    request.send();
  }

  function onFileUploaded({ detail: { source, fileName }}) {
    uploadedFontValue = fileName;
    uploadedFileSource = source;
    value = 'webfont-uploaded';
  }

  getGoogleFonts();

  $: value = useGoogleFonts ? googleFontValue : 'webfont-uploaded';
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

{#if useGoogleFonts}
  <input bind:value={value} placeholder="Font name" list="families" />
  <datalist id="families">
    {#each families as family}
      <option value={family.family} />
    {/each}
  </datalist>
{:else}
  <FontUpload on:upload={onFileUploaded} />
{/if}
<div>
  <label>
    <input type="checkbox" bind:checked={useGoogleFonts}>
    <span>
      {#if useGoogleFonts}
        Download from Google Fonts
      {:else if uploadedFontValue}
        Use uploaded file &mdash; {uploadedFontValue}
      {:else}
        Upload file
      {/if}
    </span>
  </label>
</div>
