<template>
  <div>
    <v-card color="teal darken-4" flat height="30px" tile>
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
            Post New Ads
          </v-card-title>

          <!-- Steeper -->
          <v-stepper v-model="e1">
            <v-stepper-header>
              <v-stepper-step :complete="e1 > 1" step="1">
                Account Configuration
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step :complete="e1 > 2" step="2">
                Posting Ads
              </v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <!-- <v-card
                  class="mb-12"
                  color="grey lighten-1"
                  height="200px"
                ></v-card> -->

                <v-row>
                  <v-col cols="12" sm="12">
                    <v-text-field
                      v-model="message4"
                      label="User Name"
                      outlined
                      prepend-icon="mdi-account"
                      clearable
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12">
                    <v-text-field
                      v-model="message4"
                      label="Phone"
                      prepend-icon="mdi-phone"
                      outlined
                      clearable
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12">
                    <v-text-field
                      v-model="message4"
                      label="Email"
                      prepend-icon="mdi-email"
                      outlined
                      clearable
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12">
                    <v-text-field
                      v-model="message4"
                      label="Residential Address"
                      prepend-icon="mdi-map-marker"
                      outlined
                      clearable
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn text>
                    Cancel
                  </v-btn>

                  <v-btn color="primary" @click="e1 = 2">
                    Continue
                  </v-btn>
                </v-card-actions>
              </v-stepper-content>

              <v-stepper-content step="2">
                <!-- <v-card
                  class="mb-12"
                  color="grey lighten-1"
                  height="200px"
                ></v-card> -->

                <v-row>
                  <v-col cols="12" sm="12">
                    <v-text-field
                      v-model="message4"
                      label="Product Name"
                      prepend-icon="mdi-subtitles-outline"
                      outlined
                      clearable
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12">
                    <v-text-field
                      v-model="message4"
                      label="Price"
                      prepend-icon="mdi-cash-check"
                      outlined
                      clearable
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12">
                    <v-textarea
                      clearable
                      clear-icon="mdi-close-circle"
                      prepend-icon="mdi-pen"
                      label="Description"
                      outlined
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12" sm="12">
                    <v-file-input
                      v-model="files"
                      color="deep-purple accent-4"
                      counter
                      label="Pick Your Images"
                      multiple
                      placeholder="Upload Images"
                      prepend-icon="mdi-image"
                      outlined
                      :show-size="1000"
                    >
                      <template v-slot:selection="{ index, text }">
                        <v-chip
                          v-if="index < 2"
                          color="deep-purple accent-4"
                          dark
                          label
                          small
                        >
                          {{ text }}
                        </v-chip>

                        <span
                          v-else-if="index === 2"
                          class="overline grey--text text--darken-3 mx-2"
                        >
                          +{{ files.length - 2 }} File(s)
                        </span>
                      </template>
                    </v-file-input>
                  </v-col>
                </v-row>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn text>
                    Cancel
                  </v-btn>

                  <v-btn color="primary" @click="dialog = false">
                    Post
                  </v-btn>
                </v-card-actions>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
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
      e1: 1,
      files: [],
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
