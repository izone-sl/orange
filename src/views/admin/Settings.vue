<template>
  <div id="Settings">
    <v-app>
      <v-main>
        <dashboardLayout />
        <v-container>
          <v-row class="m-0">
            <v-col md="12" cols="12" class=" ">
              Settings screen
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import dashboardLayout from "../../components/adminLayout";
export default {
  name: "Settings",
  components: {
    dashboardLayout,
  },
};
</script>

<style></style>
