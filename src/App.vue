<template>
  <div>
    <v-app>
      <v-app-bar app color="primary">
        <div class="d-flex align-center">
          <v-btn text :to="'/article'">
            Liste des Articles
          </v-btn>
        </div>

        <v-spacer></v-spacer>

        <v-btn text :to="'/Commande'">
          Liste des commandes
        </v-btn>

        <v-btn text :to="'/panier'">
          <v-icon>mdi-basket</v-icon>
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

  data: () => ({})
};
</script>
