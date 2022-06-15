<script>
  const KEY = 'AIzaSyC6-Vr6LLjHcH_edpIXpJn6CZXUlSmhIvg';

  import {createEventDispatcher} from 'svelte';

  export let initial = "Merriweather";
  let value = initial;
  let families = [];

  const dispatch = createEventDispatcher();
  function changeFontFamily(e) {
    value = e.target.value;

    dispatch('change', { value })
  }

  function getGoogleFonts() {
    const request = new XMLHttpRequest();
    let url = `https://www.googleapis.com/webfonts/v1/webfonts?key=${KEY}`;
    request.open('GET', url, true);
    request.onreadystatechange = function() {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        families = data.items;
      }
    };
    request.send();
  }

  getGoogleFonts();
</script>

<input value={value} placeholder="Font name" list="families" on:change={changeFontFamily} />
<datalist id="families">
  {#each families as family}
    <option value={family.family} />
  {/each}
</datalist>
