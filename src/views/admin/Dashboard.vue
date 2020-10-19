<template>
  <div id="Dashboard">
    <v-app>
      <v-content>
        <dashboardLayout />
        <v-row class="m-0"  >
          <v-col md="12" cols="12">
            Dashboard page
          </v-col>
        </v-row>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import dashboardLayout from "../../components/adminLayout";
export default {
  name: "Dashboard",
  components: {
    dashboardLayout,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
