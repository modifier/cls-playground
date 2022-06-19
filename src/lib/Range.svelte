<script>
  import RepeatButton from './RepeatButton.svelte';
  import {createEventDispatcher} from 'svelte';
  import ResetButton from './ResetButton.svelte';

  export let max = null;
  export let min = null;
  export let initial = 0
  export let step = 1;
  export let value;
  export let suffix;
  const dispatch = createEventDispatcher();

  function decrease() {
    value -= step;
    if (min !== null && value < min) {
      value = min;
    }

    dispatch('input');
  }

  function increase() {
    value += step;
    if (max !== null && value > max) {
      value = max;
    }
    dispatch('input');
  }

  function onChange() {
    value = Math.round(value / step) * step;
    if (max !== null && value > max) {
      value = max;
    }
    if (min !== null && value < min) {
      value = min;
    }
  }

  function reset() {
    value = initial;
  }
</script>

<div class="range">
  <RepeatButton action={decrease} value="&minus;" />
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
  <RepeatButton action={increase} value="+" />
</div>
<ResetButton action={reset} />

<style>
  .range {
    display: inline-flex;
    width: 7.5rem;
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