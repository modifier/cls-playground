<script>
  import FModsForm from './lib/FModsForm.svelte';
  import SpacingForm from './lib/SpacingForm.svelte';
  import PrimaryFontSelector from './lib/PrimaryFontSelector.svelte';
  import FallbackFontSelector from './lib/FallbackFontSelector.svelte';
  import CommonForm from './lib/CommonForm.svelte';
  import Comparison from './lib/Comparison.svelte';
</script>

<main>
  <div class="primary">
    <PrimaryFontSelector />
    <SpacingForm />
    <FModsForm />
  </div>
  <div class="fallback">
    <FallbackFontSelector />
    <CommonForm />
  </div>
  <div class="comparison">
    <Comparison />
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
    max-width: 800px;
    margin: 0 auto;
  }

  .primary,
  .fallback,
  .comparison {
    flex: 1 0 auto;
    padding: 10px;
  }
</style>
