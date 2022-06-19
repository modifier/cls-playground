<script>
  import RepeatButton from './RepeatButton.svelte';
  import { createEventDispatcher } from 'svelte';
  import ResetButton from './ResetButton.svelte';

  export let max = null;
  export let min = null;
  export let initial = 0;
  export let placeholder;
  export let step = 1;
  export let value;
  export let suffix;
  const dispatch = createEventDispatcher();

  function decrease() {
    if (value === null) {
      value = 0;
    }
    value -= step;
    if (min !== null && value < min) {
      value = min;
    }

    dispatch('input', value);
  }

  function increase() {
    if (value === null) {
      value = 0;
    }
    value += step;
    if (max !== null && value > max) {
      value = max;
    }
    dispatch('input', value);
  }

  function onChange() {
    value = Math.round(value / step) * step;
    if (max !== null && value > max) {
      value = max;
    }
    if (min !== null && value < min) {
      value = min;
    }
    dispatch('input', value);
  }

  function reset() {
    value = initial;
    dispatch('input', value);
  }
</script>

<div class="range" class:range--placeholder={value === null}>
  <RepeatButton action={decrease} value="&minus;" />
  <input type="number"
         bind:value={value}
         min={min}
         max={max}
         step={step}
         on:input
         on:change={onChange}
         placeholder={placeholder}
         class="input cls-control__number" />
  {#if suffix}
    <span class="suffix">{suffix}</span>
  {/if}
  <RepeatButton action={increase} value="+" />
</div>
<ResetButton action={reset} />

<style>
  .range {
    display: inline-flex;
    width: 7.5rem;
    font-size: 1rem;
  }

  .range--placeholder .suffix {
    display: none;
  }

  .suffix {
    flex: 0 0 auto;
    border: #d9d9d9 solid;
    border-width: 1px 0;
    padding: 0 0.25rem;
    font-size: 0.9rem;
  }

  .cls-control__number {
    flex: 1 1 auto;
    min-width: 0;
    border: #d9d9d9 solid;
    border-width: 1px 0;
    font-size: 0.9rem;
    padding: 0.125rem 0.25rem;
    font-family: "Open Sans", serif;
  }

  .input::-webkit-outer-spin-button,
  .input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
  }
</style>