<template>
  <v-container height="100%" width="100%">
    <div id="accountContent">
      <h3 class="display-1" id="accounth3">Change password</h3>
      <hr class="light-blue lighten-4 my-2" />

      <v-sheet height="100%" width="100%" elevation="10">
        <v-form v-model="valid">
          <v-container>
            <div class="d-block">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                name="email"
                :counter="30"
                label="Email"
                required
              ></v-text-field>
            </div>

            <div class="d-block">
              <v-text-field
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show2 = !show2"
                :type="show1 ? 'text' : 'password'"
                name="newpassword"
                v-model="password"
                :rules="passwordRules"
                :counter="15"
                label="New password"
                required
              ></v-text-field>
            </div>

            <div class="d-block">
              <v-text-field
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show2 ? 'text' : 'password'"
                @click:append="show2 = !show2"
                v-model="newpassword"
                :rules="passwordRules"
                name="repeatnewpassword"
                :counter="15"
                label="Repeat new password"
                required
              ></v-text-field>
            </div>
          </v-container>
          <div class="text-center pa-5">
            <v-btn rounded class="gradientBtn" elevation="5" dark>
              Submit changes
            </v-btn>
          </div>
        </v-form>
      </v-sheet>

      <br />

      <v-sheet height="100%" width="100%">
        <h3 class="display-1" id="accounth3">Security and Login</h3>

        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="pa-5 gradient white--text text rounded"
              >Where you logged in</v-list-item-title
            >
            <v-list-item-subtitle>
              <v-icon class="black--text display-2 pa-5"> mdi-laptop </v-icon>
              Windows laptop · Madrid, Spain
            </v-list-item-subtitle>
            <v-list-item-subtitle
              >Chrome · <span class="green--text">Active now</span>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="pa-5 gradient2 white--text text rounded"
              >Additional security</v-list-item-title
            >
            <v-list-item-subtitle>
              <template>
                <v-dialog v-model="dialog" width="1000">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      class="ma-5"
                      outlined
                      color="indigo"
                      v-bind="attrs"
                      v-on="on"
                    >
                      Set up two-steps authentication
                    </v-btn>
                  </template>

                  <v-card>
                    <v-card-title class="headline gradient2 white--text">
                      Two-steps authentication
                    </v-card-title>
                    <h3 class="text-center ma-5">Choose a security method</h3>
                    <v-card-text>
                      <v-row>
                        <v-col cols="6">
                          <h2 class="text-center">Login application</h2>

                          <v-card-text class="text-justify">
                            <v-card
                              id="loginAppCard"
                              elevation="10"
                              class="pa-5"
                            >
                              <v-row>
                                <v-col cols="3">
                                  <v-icon class="display-3 blue--text">
                                    mdi-cellphone-android
                                  </v-icon>
                                </v-col>

                                <v-col cols="9">
                                  <span class="green--text font-weight-bold"
                                    >Recommended</span
                                  >
                                  - Use an application such as Google
                                  Authenticator or Duo Mobile to generate
                                  verification codes and strengthen your
                                  protection.
                                </v-col>
                              </v-row>
                            </v-card>
                          </v-card-text>
                        </v-col>
                        <v-col cols="6">
                          <h2 class="text-center">Text message (SMS)</h2>

                          <v-card-text class="text-justify">
                            <v-card
                              id="loginAppCard"
                              elevation="10"
                              class="pa-5"
                            >
                              <v-row>
                                <v-col cols="3">
                                  <v-icon class="display-3 blue--text">
                                    mdi-message-processing
                                  </v-icon>
                                </v-col>

                                <v-col cols="9">
                                  Use text messages (SMS) to receive
                                  verification codes. For your protection, phone
                                  numbers used with two-step authentication
                                  cannot be used to reset the password when this
                                  type of authentication is enabled.
                                </v-col>
                              </v-row>
                            </v-card>
                          </v-card-text>
                        </v-col>
                      </v-row>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" text @click="dialog = false">
                        Close
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </template>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-sheet>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Security",
  data() {
    return {
      dialog: false,
      valid: false,
      show1: false,
      show2: false,
      pssword: "Password",
      newpassword: "",
      firstname: "",
      lastname: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length <= 10 || "Name must be less than 3 characters",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => v.length <= 10 || "Password must be less than 6 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";

#accounth3 {
  margin-top: 50px;
}

h3 {
  background: $h3;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.gradient {
  background: $bar1;
}

.gradient2 {
  background: $bar2;
}

#loginAppCard:hover {
  transform: scale(1.1);
  transition: 0.6s;
  cursor: pointer;
}

.gradientBtn {
  background: $gradient4;
}
</style>
