<script>
  export let action;
</script>

<button on:click={action} class="button cls-control__button">
  <div class="reset-icon">
    <svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="matrix(0 1 1 0 2.5 2.5)"><path d="m3.98652376 1.07807068c-2.38377179 1.38514556-3.98652376 3.96636605-3.98652376 6.92192932 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8"/><path d="m4 1v4h-4" transform="matrix(1 0 0 -1 0 6)"/></g></svg>
  </div>
</button>

<style>
  .button {
    flex: 0 0 auto;
    margin-left: 0.25rem;
  }

  .reset-icon {
    width: 1rem;
    height: 1rem;
  }
</style>