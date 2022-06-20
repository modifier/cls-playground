<script>
  import RepeatButton from './RepeatButton.svelte';
  import { createEventDispatcher } from 'svelte';
  import ResetButton from './ResetButton.svelte';

  export let max = null;
  export let min = null;
  export let initial = 0;
  export let nullable = false;
  export let integer = false;
  export let placeholder = !integer ? initial : null;
  export let nonBlockingValidation = false;
  export let step = 1;
  export let value;
  export let suffix;
  let validationError = false;
  const dispatch = createEventDispatcher();
  $: validate(value, min, max, false);

  function decrease() {
    if (value === null) {
      value = initial;
    }
    value -= step;
    validate();

    dispatch('change', value);
  }

  function increase() {
    if (value === null) {
      value = initial;
    }
    value += step;
    validate();
    dispatch('change', value);
  }

  function integerify() {
    if (integer && value !== null) {
      if (step < 1) {
        const reverseStep = 1 / step;
        value = (Math.round(value * reverseStep) / reverseStep);
      } else {
        value = +(Math.round(value / step) * step);
      }
    }
  }

  function validate(providedValue = value, minValue = min, maxValue = max, isBlocking = !nonBlockingValidation) {
    validationError = false;
    if (maxValue !== null && providedValue !== null && providedValue > maxValue) {
      if (isBlocking) {
        value = max;
      } else {
        validationError = true;
      }
    }
    if (minValue !== null && providedValue !== null && providedValue < minValue) {
      if (isBlocking) {
        value = minValue;
      } else {
        validationError = true;
      }
    }
    integerify();
  }

  function onChange() {
    validate();
    dispatch('change', value);
  }

  function reset() {
    value = nullable ? null : initial;
    validate();
    dispatch('change', value);
  }
</script>

<div class="range"
     class:range--invalid={validationError}
     class:range--placeholder={value === null && initial === null}>
  <RepeatButton action={decrease} value="&minus;" />
  <input type="number"
         bind:value={value}
         min={min}
         max={max}
         step={step}
         on:input
         on:change={onChange}
         placeholder={placeholder}
         class="cls-control__number" />
  {#if suffix}
    <span class="suffix">{suffix}</span>
  {/if}
  <RepeatButton action={increase} value="+" />
</div>
<ResetButton action={reset} />

<style>
  .range {
    display: inline-flex;
    width: 8rem;
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
    font-family: var(--sans-serif);
  }

  .range--invalid .cls-control__number,
  .range--invalid .suffix {
    border-color: red;
    color: red;
  }

  .cls-control__number::-webkit-outer-spin-button,
  .cls-control__number::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  .cls-control__number {
    -moz-appearance: textfield;
  }
</style>