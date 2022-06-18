<script>
  import FModsForm from './FModsForm.svelte';
  import FModsAltForm from './FModsAltForm.svelte';

  let alternativeMode = false;
  export let value;
</script>

<label class="cls-control">
  <input type="checkbox" bind:checked={alternativeMode} class="cls-control__checkbox" />
  <span class="cls-control__checkbox-label">Use alternative mode</span>
</label>
{#if alternativeMode}
  <FModsAltForm bind:value={value} />
{:else}
  <FModsForm bind:value={value} />
{/if}