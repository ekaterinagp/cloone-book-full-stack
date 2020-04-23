<script>
  let ajUsers = [];
  let txtSearch;
  let searchResultsDisplay = "none";
  // rewrite as one function
  const showSearchResults = () => {
    searchResultsDisplay = "grid";
  };

  const hideSearchResults = () => {
    console.log("blur");
    searchResultsDisplay = "none";
  };

  const getData = async () => {
    ajUsers = [];

    let connection = await fetch("http://localhost/users");
    let data = await connection.json();
    ajUsers = data;
    showSearchResults();
  };
</script>

<style>
  nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    width: 100%;
    height: 3rem;
    padding: 0px 10vw;
    background-color: #4267b2;
    color: white;
  }

  div#searchResults {
    position: absolute;
    margin-top: -0.2rem;
    width: 100%;
    height: 25vh;
    padding: 0.2rem;
    background: white;
    color: #333;
    border: 1px solid #111;
    border-top: none;
  }

  div#searchContainer {
    position: relative;
  }
</style>

<nav>
  <div>CloneBook</div>
  <div id="searchContainer">
    <form action="">
      <input
        type="text"
        on:focus={getData}
        on:blur={hideSearchResults}
        bind:value={txtSearch} />
    </form>
    <div id="searchResults" style="display: {searchResultsDisplay}">
      {#each ajUsers as jUser}
        <div>{jUser.name} {jUser.lastName}</div>
      {/each}
    </div>

  </div>

</nav>
