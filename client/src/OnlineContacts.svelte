<script>
  import { addChatWindow } from "./ChatContainer.svelte";
  let ajUsers = [];
  const getData = async () => {
    let connection = await fetch("http://localhost/users");

    let data = await connection.json();
    ajUsers = data;
    console.log(ajUsers);
    // return ajUsers;
  };

  getData();

  const showChatWindow = () => {
    // console.log("open window");
    addChatWindow();
  };
</script>

<style>
  div#onlineContacts {
    width: 30rem;
    height: 100%;
    border: 1px solid black;
    float: right;
  }

  .profileImg {
    width: 5rem;
    height: 4rem;
  }
</style>

<div id="onlineContacts">
  {#each ajUsers as jUser}
    <div class="onlineFriend" on:click={showChatWindow}>
      <img class="profileImg" src="imgs/{jUser.picture}" alt="userImage" />
      {jUser.name} {jUser.lastName}
    </div>
  {/each}
</div>
