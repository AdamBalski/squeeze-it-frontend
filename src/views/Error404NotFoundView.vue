<template>
  <div id="app">
    <h1 class="title">
      Squeeze it!!!</h1>
    <h2 class="description">
      Error 404 Not Found</h2>
    <h3 class="instructions">
      The site you entered doesn't exist.
      If you want to go to the main page then hit the button below.</h3>

    <br><br><br>

    <router-link to="/">
      <button>
        Take me home
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Error404NotFoundView',
};
</script>

<style>
/* component */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* h1 */
h1 {
  font-size: 80px;
}

/* h2 */
h2 {
  font-size: 45px;
}

/* h3 */
h3 {
  color: #727272;
}

/* button */
button {
  margin: 0 0 20px 0;
  padding: 6px;
  color: #FFF;
  border: none;
  outline: none;
  border-radius: 5px;
  height: 66px;
  width: 120px;
  font-size: 21px;
  background-color: #007BFF;
}
button:hover {
  background-color: #005AFF;
}
button:active {
  background-color: #007BFF;
}
</style>
