<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>

    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100px" class="grey">
                <img :src="person.avatar" alt="Avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{person.name}}</div>
              <div class="grey--text">{{person.role}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="gray">
                <v-icon small left>message</v-icon>
                <span>Message</span>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="person.show = !person.show">
                <v-icon>{{ person.show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-slide-y-transition>
              <v-card-text v-show="person.show" class="text-sm-left">{{person.more}}</v-card-text>
            </v-slide-y-transition>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: "The Net Ninja",
          role: "Web developer",
          more:
            "Something more about net ninja.  He likes long walks and throwing stars.",
          show: false,
          avatar: "/avatar-2.png"
        },
        {
          name: "Hank Rearden",
          role: "Metal Maker",
          more:
            "Hank Rearden is a personal hero from Atlas Shrugged.  He is the inventor and manufacturer of Rearden Metal.",
          show: false,
          avatar: "/avatar-1.png"
        },
        {
          name: "Newbster",
          role: "Web developer",
          more: "Newbster is a heroic figure.",
          show: false,
          avatar: "/avatar-3.png"
        },
        {
          name: "Gouken",
          role: "Social media maverick",
          more: "Gouken is a suspect figure... something of a maverick.",
          show: false,
          avatar: "/avatar-5.png"
        },
        {
          name: "Yoshi",
          role: "Sales guru",
          more: "Yoshi.  What kind of a name is that?",
          show: false,
          avatar: "/avatar-4.png"
        }
      ]
    };
  }
};
</script>
