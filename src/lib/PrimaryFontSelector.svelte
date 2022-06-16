<script>
  const KEY = 'AIzaSyC6-Vr6LLjHcH_edpIXpJn6CZXUlSmhIvg';

  export let value;
  let families = [];

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

<input bind:value={value} placeholder="Font name" list="families" />
<datalist id="families">
  {#each families as family}
    <option value={family.family} />
  {/each}
</datalist>
