<template>
  <div class="container">
    <h1>Redirection is being performed ...</h1> <br>
    <h2>Minified link: {{ frontendHost + '/' +link }} <br>
      You are being redirected to: {{ responseCaption }}</h2>
  </div>
</template>

<script>
import axios from 'axios';
import { redirect, decode, addHttpToURLIfNeeded } from '@/util/util';
import { frontendHost, backendHost } from '@/consts/consts';

function prepareURL(hex) {
  return addHttpToURLIfNeeded(decode(hex));
}

export default {
  name: 'MinifiedLinkReceiver',
  data() {
    return {
      frontendHost,
      backendHost,
      link: this.$route.params.link,
      responseCaption: 'waiting',
    };
  },
  created() {
    axios
      .get(`${this.backendHost}/api/redirect/${this.link}`)
      .then((response) => {
        if (response.status === 204) {
          this.responseCaption = 'Error: The link is invalid';
        } else {
          this.responseCaption = prepareURL(response.data.original);
          redirect(this.responseCaption);
        }
      });
  },
};
</script>

<style scoped>
.container {
  font-family: Avenir, Avenir, Helvetica, Arial, sans-serif;
  margin: 50px 0 0 20px;
  word-break: break-word;
}
</style>
