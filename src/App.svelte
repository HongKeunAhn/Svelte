<script>
  let text = '';
  let number = 3;
  let checked = false;
  let fruits = ['Apple', 'Orange', 'Kiwi'];
  let selectedFruits = [];
  let group = 'Orange';
  let textarea = '';
  let select = 'Orange';
  let multipleSelect = ['Orange', 'Kiwi'];
</script>

<main>
  <!-- let text = ''; -->
  <section>
    <h2>Text</h2>
    <input type="text" bind:value={text} />
  </section>

  <!-- let number = 3; -->
  <section>
    <h2>Number/Range</h2>
    <div>
      <input type="number" bind:value={number} min="0" max="10" />
    </div>
    <div>
      <input type="range" bind:value={number} min="0" max="10" />
    </div>
  </section>

  <!-- let checkbox = false; -->
  <section>
    <h2>Checkbox</h2>
    <input type="checkbox" bind:checked /> Agree?
    <label><input type="checkbox" bind:checked /> Agree?(label wrapping)</label>
  </section>

  <!-- 
    let fruits = ['Apple', 'Orange', 'Kiwi'];
    let selectedFruits = []; 
  -->
  <section>
    <h2>Checkbox 다중 선택</h2>
    <strong>Selected: {selectedFruits}</strong>
    {#each fruits as fruit}
      <label>
        <input type="checkbox" value={fruit} bind:group={selectedFruits} />
        {fruit}
      </label>
    {/each}
  </section>

  <!-- let group = 'Orange';  -->
  <section>
    <h2>Radio</h2>
    <!-- <input type="radio" value="Apple" bind:group /> Apple
    <input type="radio" value="Orange" bind:group /> Orange
    <input type="radio" value="Kiwi" bind:group /> Kiwi -->
    <strong>Selected: {group}</strong>
    <label>
      <input type="radio" value="Apple" bind:group /> Apple
    </label>
    <label>
      <input type="radio" value="Orange" bind:group /> Orange
    </label>
    <label>
      <input type="radio" value="Kiwi" bind:group /> Kiwi
    </label>
  </section>

  <!-- let textarea = '';  -->
  <section>
    <h2>TextArea</h2>
    <pre>{textarea}</pre>
    <textarea bind:value={textarea} />
  </section>

  <!-- let select = 'Orange';  -->
  <section>
    <h2>Select 단일 선택</h2>
    <strong>Selected: {select}</strong>
    <div>
      <select bind:value={select}>
        <option disabled value="">Pleas select one!</option>
        <option value="Apple">Apple</option>
        <option value="Orange">Orange</option>
        <option value="Kiwi">Kiwi</option>
      </select>
    </div>
  </section>

  <!-- let multipleSelect = ['Orange', 'Kiwi']; -->
  <section>
    <h2>Select 다중 선택(Mutiple)</h2>
    <strong>Selected: {multipleSelect}</strong>
    <div>
      <select multiple bind:value={multipleSelect}>
        <option disabled value="">Pleas select one!</option>
        <option value="Apple">Apple</option>
        <option value="Orange">Orange</option>
        <option value="Kiwi">Kiwi</option>
      </select>
    </div>
  </section>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
