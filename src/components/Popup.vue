
<template>
  <div class="text-xs-center">
    <v-dialog v-model="showDialog" width="600">
      <!-- The button that activates the dialog -->
      <template v-slot:activator="{ on }">
        <v-btn flat class="success" v-on="on">Add new project</v-btn>
      </template>

      <!-- This is the popup visible on the screen -->
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Add a New Project</v-card-title>

        <v-card-text>
          <v-form class="px-3" ref="newProjectForm">
            <v-text-field label="Title" prepend-icon="folder" v-model="title" :rules="inputRules"></v-text-field>
            <v-textarea label="Details" prepend-icon="edit" v-model="details" :rules="inputRules"></v-textarea>

            <template>
              <v-container grid-list-md>
                <v-layout row wrap>
                  <!-- Due Date Selector using a Date Picker Input -->
                  <v-flex xs12 lg6>
                    <v-menu
                      v-model="showDatePicker"
                      :close-on-content-click="false"
                      full-width
                      max-width="290"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          :value="computedDateFormattedMomentjs"
                          clearable
                          label="Due Date"
                          readonly
                          v-on="on"
                          prepend-icon="date_range"
                          :rules="inputRules"
                        ></v-text-field>
                      </template>

                      <v-date-picker v-model="dueDate" @change="showDatePicker = false"></v-date-picker>
                    </v-menu>
                  </v-flex>
                  <!-- END Due Date Selector using a Date Picker Input -->
                </v-layout>
              </v-container>
            </template>

            <v-spacer></v-spacer>
            <v-btn class="success ma-3" flat @click="submitFn" :loading="isLoading">Add project</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>





<script>
import moment from "moment";
import db from "@/firebase";

export default {
  data() {
    return {
      title: "",
      details: "",
      showDialog: false,
      showDatePicker: false,
      dueDate: new Date().toISOString().substr(0, 10),
      inputRules: [
        value => (value.length >= 3 ? true : "Minimum length is 3 characters")
      ],
      isLoading: false
    };
  },
  computed: {
    computedDateFormattedMomentjs() {
      return this.dueDate
        ? moment(this.dueDate).format("dddd, MMMM D, YYYY")
        : "";
    }
  },
  methods: {
    async submitFn() {
      if (this.$refs.newProjectForm.validate()) {
        const newProject = {
          title: this.title,
          content: this.details,
          dueDate: moment(this.dueDate).valueOf(),
          person: "Newbster",
          status: "ongoing"
        };

        console.log("New project:  ", newProject);
        let result = await db.collection("projects").add(newProject);

        // If the save worked, we're going to get a result._key; so we can use that to turn off the 'isLoading'
        console.log("result._key.path.segments:  ", result._key.path.segments);

        if (result._key) {
          this.isLoading = false;
          this.showDialog = false;
          // Send an event to the Navbar component indicating that the new project has been added.
          this.$emit("projectAddedEvent");
        }
        console.log("result:  ", result);
      }
    }
  }
};
</script>

