<template>
  <v-card color="teal darken-4" flat height="50px" tile>
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

      <v-btn color="teal darken-4" depressed class="text-light">
        POST YOUR ADS <v-icon class="pl-3"> mdi-google-ads</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {};
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
