<script>
  export let value;

  const SAFE_FONTS = [
    "Arial",
    "Courier New",
    "Georgia",
    "Tahoma",
    "Times New Roman",
    "Trebuchet MS",
    "Verdana",
  ];
</script>

<div class="cls-control cls-control--column">
  <label for="fallback-font-family" class="cls-control__text-label"
    >Fallback font</label
  >
  <input
    bind:value
    placeholder="Font name"
    class="cls-control__text"
    name="fallback-font-family"
    list="safe-fonts"
  />
  <datalist id="safe-fonts">
    {#each SAFE_FONTS as family}
      <option value={family}></option>
    {/each}
  </datalist>
</div>
