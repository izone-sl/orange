<template>
  <div>
    <v-card color="teal darken-4" flat height="10px" tile>
      <v-toolbar dense color="teal darken-4" height="60">
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

        <v-toolbar-title class="text-light ">
          <v-avatar>
            <img
              src="https://lh3.googleusercontent.com/proxy/iK1yZAOD3hCDPkujicI5GFzv-MrpsYtQJbo-CMhkWM8NUeMvbko9_tmSWQPmiG6NfDlm9cnfUgqb8lEfrddm8Ltpiai5jJkaXTjLDAxXAKsn7ZNyBYI"
              alt="Logo"
            />
          </v-avatar>
          <span class="Webtitle"> ORANGE.LK</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn
          color="teal darken-4"
          depressed
          class="text-light"
          @click="dialog = true"
        >
          POST YOUR ADS <v-icon class="pl-3"> mdi-google-ads</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>


    <!-- Dialog -->
    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title class="headline grey lighten-2">
            POST YOUR NEW PRODUCT
          </v-card-title>

          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">
              NEXT
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style>
/* small size */
@media screen and (max-width: 320px) {
  .Webtitle {
    display: none;
  }
}

/* medium size */
@media screen and (max-width: 375px) {
  .Webtitle {
    display: none;
  }
}

/* large size */
@media screen and (max-width: 425px) {
}

/* tablet size */
@media screen and (max-width: 768px) {
}

/* laptop size */
@media screen and (max-width: 1024px) {
}

/* laptop Large size */
@media screen and (min-width: 1440px) {
}

/* 4K size */
@media screen and (max-width: 2560px) {
}
</style>
