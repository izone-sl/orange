<template>
  <v-row class="mt-5">
    <v-col>
      <v-container class="mt-5 pt-5 card indigo lighten-4 p-5">
        <v-row>
            <v-col class=" text-center">
                <h2 class="text-dark">UNDER DEVELOPING ...</h2>
            </v-col>
        </v-row>
        <div class="text-center">
          <v-progress-circular
            :rotate="360"
            :size="100"
            :width="15"
            :value="value"
            color="teal"
          >
            {{ value }}
          </v-progress-circular>

          <v-progress-circular
            :rotate="-90"
            :size="100"
            :width="15"
            :value="value"
            color="primary"
          >
            {{ value }}
          </v-progress-circular>

          <v-progress-circular
            :rotate="90"
            :size="100"
            :width="15"
            :value="value"
            color="red"
          >
            {{ value }}
          </v-progress-circular>

          <v-progress-circular
            :rotate="180"
            :size="100"
            :width="15"
            :value="value"
            color="pink"
          >
            {{ value }}
          </v-progress-circular>
        </div>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      interval: {},
      value: 0,
    };
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0);
      }
      this.value += 10;
    }, 1000);
  },
};
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
