<template>
  <div id="AdsConfig">
    <v-app>
      <v-main>
        <dashboardLayout />
        <v-container>
          <v-row class="m-0">
            <v-col md="12" cols="12" class=" ">
              Ads Config screen
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
  name: "AdsConfig",
  components: {
    dashboardLayout,
  },
};
</script>

<style></style>
