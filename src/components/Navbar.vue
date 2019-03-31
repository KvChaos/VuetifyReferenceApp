<template>
  <nav>
    <v-toolbar app color="gray darken-1">
      <v-toolbar-side-icon class="grey--text" @click="showDrawer=!showDrawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase black--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>

      <!-- Pushes everything after the v-spacer to the right -->
      <v-spacer></v-spacer>

      <!-- Dropdown Menu -->
      <div class="text-xs-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn flat color="grey" dark v-on="on">
              <v-icon left>expand_more</v-icon>
              <span>Menu</span>
            </v-btn>
          </template>
          <v-list>
            <v-list-tile v-for="(link, index) in links" :key="index" router :to="link.route">
              <v-list-tile-action>
                <v-icon class="grey--text">{{link.icon}}</v-icon>
              </v-list-tile-action>
              <v-list-tile-title>{{ link.text }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </div>

      <!-- Signout Button -->
      <v-btn flat color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <!-- Navigation Drawer -->
    <v-navigation-drawer app class="primary" v-model="showDrawer">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100px" class="grey darken-3">
            <img src="/avatar-1.png">
          </v-avatar>
          <p class="white--text subheading mt-1">Hank Rearden</p>
          <v-divider></v-divider>
        </v-flex>

        <v-flex class="mt-4 mb-3">
          <Popup/>
        </v-flex>
      </v-layout>

      <v-list>
        <!-- Adding the router property tells vuetify that you want to user the router on 
        this element... then bind the to prop to the route destination-->
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{link.text}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "./Popup";

export default {
  components: { Popup },
  data() {
    return {
      showDrawer: false,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My Projects", route: "/projects" },
        { icon: "person", text: "Team", route: "/team" }
      ]
    };
  }
};
</script>

<style>
</style>
