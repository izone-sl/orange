<template>
  <div id="HomeWelcome">
    <!-- slideer -->
    <!-- <v-carousel height="500" :continuous="true">
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            class="img-fluid"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel> -->
    <v-row class="   ">
      <v-col md="12" cols="12" class=" ">
        <v-card
          elevation="20"
          max-width="w-100"
          class="mx-auto"
          style="margin-top: 90px;"
        >
          <v-system-bar lights-out></v-system-bar>
          <v-carousel
            :continuous="true"
            cycle
            :show-arrows="true"
            delimiter-icon="mdi-circle-slice-8"
            height="350"
          >
            <v-carousel-item v-for="(item, i) in items" :key="i">
              <v-sheet height="100%">
                <v-row class="fill-height" align="center">
                  <v-img :src="item.src" ></v-img>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
    </v-row>

    <v-container class="">
      <v-row class="mt-5 m-0">
        <v-col class="  mt-5">
          <v-row class="m-0">
            <div class="  col-xl-7 d-flex align-center" >
              <v-row >
                <div class="col-xl-12 ">
                  <h3>
                    Welcome to Orange.lk. The largest <br />
                    marketplace in your area!
                  </h3>
                  <p class="text-secondary">
                    Buy and sell everything from used cars to mobile phones and
                    computers, or search for property, jobs and more in your
                    area!
                  </p>
                </div>
              </v-row>
              <!-- <v-row>
                <div class="  col-xl-12">
                  <h6>Browse our top categories:</h6>
                </div>
              </v-row> -->
              <!-- <v-row>
                <div class="  col-xl-12">
                  <v-row>
                    <v-col sm="3" md="3" class=" text-center">
                      <v-btn elevation="2" icon large x-small href="/Products">
                        <img
                          src="https://thumbs.dreamstime.com/b/multimeter-flat-icon-illustration-long-shadow-vector-round-electrical-diagnostics-94460947.jpg"
                          alt="John"
                          width="50"
                          class="rounded-circle"
                        />
                      </v-btn>
                      <br />
                      <a href="/Products" class="btn"> Electronics</a>
                    </v-col>
                    <v-col sm="3" md="3" class=" text-center">
                      <v-btn elevation="2" icon large x-small href="/Products">
                        <img
                          src="data:image/png;base64,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"
                          alt="John"
                          width="50"
                          class="rounded-circle"
                        />
                      </v-btn>
                      <br />
                      <a href="/Products" class="btn"> Property</a>
                    </v-col>
                    <v-col sm="3" md="3" class=" text-center">
                      <v-btn elevation="2" icon large x-small href="/Products">
                        <img
                          src="https://cdn4.iconfinder.com/data/icons/auto-round/120/_-512.png"
                          alt="John"
                          width="50"
                          class="rounded-circle"
                        />
                      </v-btn>
                      <br />
                      <a href="/Products" class="btn"> Vehicles</a>
                    </v-col>
                    <v-col sm="3" md="3" class=" text-center">
                      <v-btn elevation="2" icon large x-small href="/Products">
                        <img
                          src="https://www.shareicon.net/data/512x512/2016/07/11/794386_woman_512x512.png"
                          alt="John"
                          width="50"
                          class="rounded-circle"
                        />
                      </v-btn>
                      <br />
                      <a href="/Products" class="btn"> Fashion & Beauty</a>
                    </v-col>
                  </v-row>
                </div>
              </v-row> -->
            </div>
            <div class=" col-xl-5 mt-5">
              <v-img
                src="https://images.freeclues.com/assets/images/coupons/coupon_46f177b23c602de5cdee649d5c4686a2.jpg"
                class=" "
                aspect-ratio="1.7"
              ></v-img>
            </div>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HomeWelcome",
  data() {
    return {
      dialog: false,
      e1: 1,
      files: [],
      items: [
        {
          src:
            "https://i.pinimg.com/originals/f4/9b/18/f49b1827466f1d57b9e9b3cebdf955ae.png",
        },
        {
          src:
            "https://i.pinimg.com/originals/7c/e0/b8/7ce0b8145c2a8150f4b971d18fc48d5c.jpg",
        },
        {
          src:
            "https://i.pinimg.com/originals/bb/6e/df/bb6edf8a1583d517b601f773b67efe32.jpg",
        },
        {
          src:
            "https://i.pinimg.com/originals/75/1d/2b/751d2b30f041d6a7ec336dbdef797311.jpg",
        },
        {
          src:
            "https://i.pinimg.com/originals/02/cf/cf/02cfcffac595c832c514d58704cd82ce.jpg",
        },
      ],
    };
  },
};
</script>

<style></style>
