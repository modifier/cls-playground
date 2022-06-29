<script>
  import App from "./App.svelte";
</script>

<div class="cls-content">
  <header class="cls-header">
    <h1 class="cls-header-title">
      <span class="cls-header-code">@font-face</span> playground
    </h1>
  </header>
  <App />
  <footer class="cls-footer">
    Made in Russia. Inspired by
    <a href="https://meowni.ca/font-style-matcher/">Font Style Matcher</a>.
    Check this out on
    <a href="https://github.com/modifier/cls-playground">Github</a>.
  </footer>
</div>

<style>
  .cls-content {
    font-size: 16px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .cls-header {
    max-width: 81rem;
    margin: 0 auto;
    flex: 0 0 auto;
    padding: 1rem 0;
  }

  .cls-header-title {
    font-weight: 500;
    margin: 0;
  }

  .cls-header-code {
    font-family: var(--monospace);
  }

  .cls-footer {
    max-width: 81rem;
    margin: 0 auto;
    flex: 0 0 auto;
    padding: 1rem 0;
  }
</style>
