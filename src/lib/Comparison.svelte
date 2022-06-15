<script>
  let differentColor = true;
  let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  function changeDifferentColor(e) {
    differentColor = e.target.checked;
  }
</script>

<div>
  <label>
    <input type="checkbox" on:change={changeDifferentColor} checked={differentColor}>Use different colours for each font
  </label>
  <div class="overlapped" class:overlapped--different-color={differentColor}>
    <div class="primary">
      {text}
    </div>
    <div class="fallback">
      {text}
    </div>
  </div>
</div>

<style>
  .overlapped {
    position: relative;
  }

  .primary,
  .fallback {
    position: absolute;
    top: 0;
    left: 0;
  }

  .overlapped--different-color .fallback {
    color: red;
  }
</style>