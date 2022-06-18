<script>
  import RepeatButton from './RepeatButton.svelte';
  import { createEventDispatcher } from 'svelte';

  export let max = null;
  export let min = null;
  export let step = 1;
  export let value;
  export let suffix;
  const dispatch = createEventDispatcher();

  function decrease() {
    value -= step;
    if (min !== null && value < min) {
        value = min;
    }
  }

  function increase() {
    value += step;
    if (max !== null && value > max) {
      value = max;
    }
  }

  function onChange() {
    value = Math.round(value / step) * step;
  }
</script>

<div class="range">
  <RepeatButton perform={decrease} value="-" />
  <input type="number" bind:value={value} min={min} max={max} step={step} on:input on:change={onChange} class="input" />
  {#if suffix}
    <span class="suffix">{suffix}</span>
  {/if}
  <RepeatButton perform={increase} value="+" />
</div>

<style>
  .range {
    display: inline-flex;
    width: 100px;
  }

  .suffix {
    flex: 0 0 auto;
    border: #000 solid;
    border-width: 1px 0;
    line-height: 1em;
    padding: 0 0.25rem;
  }

  .input {
    flex: 1 1 auto;
    min-width: 0;
    border: #000 solid;
    border-width: 1px 0;
  }

  .input::-webkit-outer-spin-button,
  .input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
  }
</style>