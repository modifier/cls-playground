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
    value = Math.max(Math.min(Math.round(value / step) * step, max), min);
  }
</script>

<div class="range">
  <RepeatButton perform={decrease} value="&minus;" type="left" />
  <input type="number"
         bind:value={value}
         min={min}
         max={max}
         step={step}
         on:input
         on:change={onChange}
         class="input cls-control__number" />
  {#if suffix}
    <span class="suffix">{suffix}</span>
  {/if}
  <RepeatButton perform={increase} value="+" type="right" />
</div>

<style>
  .range {
    display: inline-flex;
    width: 8rem;
    font-size: 1rem;
  }

  .suffix {
    flex: 0 0 auto;
    border: #d9d9d9 solid;
    border-width: 1px 0;
    padding: 0 0.25rem;
  }

  .input {
    flex: 1 1 auto;
    min-width: 0;
    border: #d9d9d9 solid;
    border-width: 1px 0;
    font-size: 16px;
  }

  .input::-webkit-outer-spin-button,
  .input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
  }
</style>