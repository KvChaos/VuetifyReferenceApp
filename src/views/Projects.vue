<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>

    <v-container class="my-5">
      <v-layout row class="mb-3">
        <v-flex xs12 sm12 md12 lg12>
          <v-badge right color="success">
            <template v-slot:badge>
              <span>{{myProjects.length}}</span>
            </template>
            <h2 class="grey--text text--darken-1">My Projects</h2>
          </v-badge>
        </v-flex>
      </v-layout>

      <!-- 
      Expansion panels containing myProjects
      Observation:  These are not in v-layouts
      -->
      <v-expansion-panel>
        <v-expansion-panel-content v-for="(project,i) in myProjects" :key="i">
          <template v-slot:header>
            <div>{{project.title}}</div>
          </template>
          <v-card>
            <v-card-text class="px-4 grey--text text--darken-3">
              <div class="font-weight-bold">Due by {{project.dueDate | mdate}}</div>
              <div>{{project.content}}</div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container>
  </div>
</template>

<script>
import db from "@/firebase";

export default {
  computed: {
    myProjects() {
      return this.projects.filter(p => p.person == "Newbster");
    }
  },
  data() {
    return {
      projects: []
    };
  },
  created() {
    db.collection("projects").onSnapshot(response => {
      const changes = response.docChanges();

      changes.forEach(change => {
        if (change.type === "added") {
          this.projects.push({
            // Get a reference to the changed document; but it does not include the id.   So we use the spread operator
            // so we can also add the ID.
            // On initial load, all the documents look like 'added' documents.
            ...change.doc.data(),
            id: change.doc.id
          });
        }
      });
    });
  }
};
</script>
