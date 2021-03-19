<template>
  <v-container>
    <v-row>
      <v-dialog v-model="dialog" persistent max-width="600px" min-width="360px">
        <div>
          <v-tabs
            v-model="tab"
            show-arrows
            icons-and-text
            background-color="#1976d2"
            dark
            grow
          >
            <v-tabs-slider></v-tabs-slider>
            <v-tab v-for="i in tabs" :key="i.id">
              <v-icon large>{{ i.icon }}</v-icon>
              <div class="caption py-1">{{ i.name }}</div>
            </v-tab>
            <v-tab-item>
              <v-card class="px-4">
                <v-card-text>
                  <v-form ref="loginForm" v-model="valid" lazy-validation>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          v-model="loginEmail"
                          label="E-mail"
                          type="email"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="loginPassword"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="show1 ? 'text' : 'password'"
                          name="input-10-1"
                          label="Mot de passe"
                          counter
                          @click:append="show1 = !show1"
                        ></v-text-field>
                      </v-col>
                      <v-spacer></v-spacer>
                      <v-col class="d-flex" cols="12">
                        <v-btn x-large block @click="validateConnexion">
                          Connexion
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card class="px-4">
                <v-card-text>
                  <v-form ref="registerForm" v-model="valid" lazy-validation>
                    <v-row>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="firstName"
                          label="Prenom"
                          maxlength="20"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="lastName"
                          label="Nom"
                          maxlength="20"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="email"
                          label="E-mail"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="password"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="show1 ? 'text' : 'password'"
                          name="input-10-1"
                          label="Mot de passe"
                          counter
                          @click:append="show1 = !show1"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="verify"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="show1 ? 'text' : 'password'"
                          name="input-10-1"
                          label="Comfimer le mot de passe"
                          hint="8 caractères"
                          counter
                          @click:append="show1 = !show1"
                        ></v-text-field>
                      </v-col>
                      <v-spacer></v-spacer>
                      <v-col class="d-flex ml-auto" cols="12">
                        <v-btn x-large block @click="validateInscription"
                          >Inscription</v-btn
                        >
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </div>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import fileJson from "../assets/data/users.json";
export default {
  name: "Compte",
  data: () => ({
    dialog: true,
    tab: 0,
    tabs: [
      { id: 1, name: "Login", icon: "mdi-account" },
      { id: 2, name: "Inscription", icon: "mdi-account-outline" }
    ],
    users: "",
    valid: true,
    show1: false,
    loginEmail: "",
    loginPassword: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    verify: ""
  }),
  methods: {
    validateConnexion() {
      this.users = JSON.parse(localStorage.users);
      var valid = 1;
      for (var user in this.users) {
        if (
          this.loginEmail == this.users[user].email &&
          this.loginPassword == this.users[user].password
        ) {
          localStorage.userAuth = JSON.stringify(this.users[user]);
          this.$router.push({ name: "Article" });
        } else {
          valid = 0;
        }
      }
      if (valid == 0) {
        console.log("Connexion refusé");
      }
    },
    validateInscription() {
      var userData = {
        firstname: this.firstName,
        lastname: this.lastName,
        email: this.email,
        password: this.password
      };
      this.tab = 0;
      localStorage.removeItem("users");
      this.users.push(userData);
      localStorage.users = JSON.stringify(this.users);
    }
  },
  created() {
    this.users = fileJson.users;
    localStorage.users = JSON.stringify(this.users);
  }
};
</script>
