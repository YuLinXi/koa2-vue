<template>
  <div class="home">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component({
  components: {
  },

  mounted(): void {
    axios.get('/api/me/?a=1&b=2');
  },
})
export default class Home extends Vue {

}
</script>
