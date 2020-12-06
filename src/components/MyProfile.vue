<template>
  <v-container height="100%" width="100%">
    <div id="accountContent">
      <h3 class="display-1" id="accounth3">Change profile image</h3>
      <hr class="light-blue lighten-4 my-2" />

      <v-img :src="randomUser.picture.large" width="200" class="rounded-circle" id="userImage"></v-img>
      <v-sheet width="100%" height="100%" elevation="10">
        <div class="container" id="profileContent">
          <v-card-text v-if="file" id="imagesMenu">
            <v-row class="d-block">
              <v-avatar width="250px" height="250px">
                <v-img :src="tempUrl"></v-img>
              </v-avatar>

              <h4 class="mt-3">{{ file.name }}</h4>
            </v-row>
          </v-card-text>

          <div id="buttons">
            <input type="file" ref="button" class="d-none" @change="searchImage($event)" />

            <v-btn class="ml-4" color="primary" @click="$refs.button.click()">Search Image</v-btn>
            <v-btn class="ml-4" color="secondary" :disabled="file === null" @click="uploadIMG">Upload image</v-btn>
          </div>
        </div>
      </v-sheet>
    </div>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "ChangeImage",
  data() {
    return {
      file: null,
      tempUrl: null,
      profile: Boolean,
    };
  },
  props: ["state"],
  methods: {
    searchImage(event) {
      console.log(event.target.files[0]);
      this.file = event.target.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = (e) => {
        // console.log(e.target.result);
        this.tempUrl = e.target.result;
      };
    },
    async uploadIMG() {
      // CONTINUAR //__________________________________________//
      try {
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    ...mapState(["loading", "randomUser", "loadingError"]),
  },
  methods: {
    ...mapActions(["getRandomUser"]),
  },
  async created() {
    try {
      await this.$store.dispatch("getRandomUser");
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";

#accounth3 {
  margin-top: 20px;
}

#accountContent {
  padding: 50px;
}

h3 {
  background: $h3;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#profileContent {
  text-align: center;
}

#imagesMenu {
  position: relative;
  margin: 0 auto;
  bottom: 0px;
}

#buttons {
  position: relative;
  margin: 0 auto;
  padding: 10px;
}

#userImage {
  margin: 0 auto;
  margin-bottom: 50px;
  border: 5px solid #314f8b;
}
</style>
