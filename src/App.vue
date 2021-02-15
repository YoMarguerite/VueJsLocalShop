<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center"></div>

      <v-spacer></v-spacer>

      <v-btn text :to="'/panier'">
        <v-icon>mdi-basket</v-icon>
        <v-btn
          color="amber accent-4"
          fab
          dark
          x-small
          absolute
          top
          right
          v-if="panier.length > 0"
        >
          {{ panier.length }}
        </v-btn>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    panier: []
  }),
  mounted() {
    this.panier = localStorage.panier ? JSON.parse(localStorage.panier) : [];
  }
};
</script>
