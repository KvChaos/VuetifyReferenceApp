<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" width="600">
      <template v-slot:activator="{ on }">
        <v-btn flat class="success" v-on="on">Add new project</v-btn>
      </template>

      <!-- This is the popup visible on the screen -->
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Add a New Project</v-card-title>

        <v-card-text>Dialog to add a new project</v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="dialog = false">I accept</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
