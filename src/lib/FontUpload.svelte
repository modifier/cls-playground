<script>
  import { createEventDispatcher } from 'svelte';
  let source;
  let fileName;
  let fileInput;
  let currentObjectURL;

  const dispatch = createEventDispatcher();

  function uploadFont(e) {
    e.preventDefault();
    fileInput.click();
  }

  function doUpload() {
    var file = fileInput.files[0];
    if (!file) {
      return;
    }
    fileName = file.name;
    processFile(file);
  }

  function processFile(file) {
    if (currentObjectURL) {
      URL.revokeObjectURL(currentObjectURL);
    }

    currentObjectURL = URL.createObjectURL(file);
    source = JSON.stringify(currentObjectURL);

    dispatch('upload', { source, fileName });
  }
</script>

<div class="cls-control">
  <button on:click={uploadFont} class="upload-button">
    <svg viewBox="0 0 24 24" class="upload-icon">
      <path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z" />
    </svg>
    <span>Upload font</span>
  </button>
  <input type="file" accept=".ttf,.otf,.woff,.woff2,.svg" bind:this={fileInput} on:change={doUpload} class="cls-control__hidden" />
</div>

<style>
  .upload-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    border: 0;
  }

  .upload-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
</style>