<template>
  <v-app class="gray lighten-4">
    <Navbar/>
    <v-content class="mx-4 my-3">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>


<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: { Navbar },
  data() {
    return {
      latestReleaseLink: "https://github.com/vuetifyjs/vuetify/releases/latest"
    };
  }
};
</script>
