<script>
  export let value;
</script>

<div class="cls-control cls-control--column">
  <label for="fallback-font-family" class="cls-control__text-label">Fallback font</label>
  <input bind:value={value} placeholder="Font name" class="cls-control__text" name="fallback-font-family" />
</div>