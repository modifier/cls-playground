<script>
  import FModsForm from "./FModsForm.svelte";
  import FModsAltForm from "./FModsAltForm.svelte";
  import Range from "../lib/Range.svelte";

  let alternativeMode = false;
  export let value;
</script>

<label class="cls-control alternative-mode">
  <input
    type="checkbox"
    bind:checked={alternativeMode}
    class="cls-control__checkbox"
  />
  <span class="cls-control__checkbox-label">Use alternative mode</span>
</label>
{#if alternativeMode}
  <FModsAltForm bind:value />
{:else}
  <FModsForm bind:value />
{/if}
<div class="cls-control">
  <label class="cls-control__label" for="sizeAdjust">Size Adjust</label>
  <Range bind:value={value.sizeAdjust} min={0} initial={100} suffix="%" name="sizeAdjust" />
</div>

<style>
  .alternative-mode {
    margin-bottom: 0.25rem;
  }
</style>
