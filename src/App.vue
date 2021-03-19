<template>
  <div>
    <v-app>
      <v-app-bar app color="primary">
        <div class="d-flex align-center">
          <v-btn text :to="'/article'">
            Liste des Articles
          </v-btn>
        </div>

        <v-chip
          close
          close-icon="mdi-close"
          color="orange"
          v-show="displayChip"
          @click:close="displayChip = false"
        >
          Vous avez {{ reduction() }}% de réduction à utiliser !
        </v-chip>

        <v-spacer></v-spacer>

        <v-btn text :to="'/Commande'">
          Liste des commandes
        </v-btn>

        <v-btn text :to="'/panier'">
          <v-icon>mdi-basket</v-icon>
        </v-btn>

        <v-btn text :to="'/parametre'">
          <v-icon>mdi-wrench</v-icon>
        </v-btn>
      </v-app-bar>

      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
  </div>
</template>
<script>
export default {
  name: "App",

  data: () => ({
    displayChip: true
  }),
  mounted() {
    this.$vuetify.theme.dark = JSON.parse(localStorage.darkMode);
  },
  methods: {
    reduction() {
      if (!localStorage.reduction) return 0;
      let round = Math.floor(localStorage.reduction / 100) * 10;
      return round > 40 ? 40 : round;
    }
  }
};
</script>
