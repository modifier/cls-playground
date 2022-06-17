<script>
  import FModsForm from './FModsForm.svelte';
  import FModsAltForm from './FModsAltForm.svelte';

  let alternativeMode = false;
  export let value;
</script>

<label>
  <input type="checkbox" bind:checked={alternativeMode} />Use alternative mode
</label>
{#if alternativeMode}
  <FModsAltForm bind:value={value} />
{:else}
  <FModsForm bind:value={value} />
{/if}