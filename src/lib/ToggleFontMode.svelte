<script>
  export let useGoogleFonts;

  function useGoogle() {
    useGoogleFonts = true;
  }

  function useFile() {
    useGoogleFonts = false;
  }
</script>

<span class="toggle-font-mode">
  <span class="separator">(</span>
  <span on:click={useGoogle} class="link" class:link--selected={useGoogleFonts}>Google Fonts</span>
  <span class="separator">|</span>
  <span on:click={useFile} class="link" class:link--selected={!useGoogleFonts}>File</span>
  <span class="separator">)</span>
</span>

<style>
  .toggle-font-mode {
    font-size: 0;
  }

  .separator {
    font-size: 0.9rem;
    margin: 0 0.25rem;
  }

  .link {
    font-size: 0.9rem;
    color: #50b9de;
    text-decoration: underline;
  }

  .link--selected {
    color: black;
    text-decoration: none;
    font-weight: 700;
  }
</style>