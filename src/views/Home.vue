<template>
  <div id="app">
    <h1 class="title">
      Squeeze it!!!</h1>
    <h2 class="description">
      On this site you can squeeze your links</h2>
    <h4 class="instructions">
      Enter page and hit enter or submit!!! Then you can grab your squeezed link.</h4>

    <br><br><br>

    <label for="link">Your Link :</label> <br><br>
    <input type="url" id="link" placeholder="link"
           v-model="link" @keypress.enter="getMinifiedLink()"> <br>
    <button class="submit-button" type="button" @click="getMinifiedLink()">Submit</button>
    <div>
      <h1 class="link" id="" v-if="minifiedLink !== ''">
        Your minified link: {{ frontendHost + '/' + minifiedLink }}</h1>
    </div>

    <button class="copy-button"
            @click="copyMinifiedLinkToClipboard()" v-if="minifiedLink !== ''">Copy
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-clipboard-plus"
           fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2
        2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
        <path fill-rule="evenodd" d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0
        .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0
        11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3zM8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0
        1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"/>
      </svg>
    </button>
  </div>
</template>

<script>
import axios from 'axios';
import { encode, copyToClipboard } from '@/util/util';
import { frontendHost, backendHost } from '@/consts/consts';

export default {
  name: 'Home.vue',
  data() {
    return {
      frontendHost,
      backendHost,
      link: '',
      minifiedLink: '',
    };
  },
  methods: {
    getMinifiedLink() {
      this.link = this.link.trim();
      const encoded = encode(this.link);

      if (this.link !== '') {
        axios.get(`${this.backendHost}/api/minify/${encoded}`)
          .then((response) => {
            // noinspection JSUnresolvedVariable
            this.minifiedLink = response.data.minified;
          });
      }
    },
    copyMinifiedLinkToClipboard() {
      copyToClipboard(`${this.frontendHost}/${this.minifiedLink}`);
    },
  },
};
</script>

<style scoped>
/* component */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* input */
input {
  border-radius: 6px;
  height: 40px;
  width: 600px;
  outline: none;
  border: 2px solid #000;
  font-size: 150%;
  padding-left: 15px;
  padding-right: 15px;
  max-width: 80%;
  text-align: center;
}
input:focus {
  background-color: whitesmoke;
}
input:hover {
  background-color: whitesmoke;
}

/* label */
label {
  font-size: 20px;
}

/* link */
.link {
  word-break: break-word;
  display: inline;
}

/* title */
.title {
  font-size: 80px;
}

/* description */
.description {
  font-size: 30px;
}

/* instructions */
.instructions {
  color: #727272;
}

/* button */
button {
  margin: 13px 0 20px 0;
  padding: 6px;
  color: #FFF;
  border: none;
  outline: none;
  border-radius: 5px;
  height: 40px;
  width: 100px;
  font-size: 21px;
}

/* submit-button */
.submit-button {
  background-color: #007BFF;
}
.submit-button:hover {
  background-color: #005AFF;
}
.submit-button:active {
  background-color: #007BFF;
}

/* copy-button */
.copy-button {
  background-color: #1CB75D;
}
button:hover {
  background-color: #17a252;
}
button:active {
  background-color: #1CB75D;
}
</style>
