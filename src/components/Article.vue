<template>
  <v-container class="CL">
    <h1>Liste des articles</h1>
    <v-data-table
      :headers="headers"
      :items="articles"
      item-key="id"
      class="elevation-1 CL"
    >
      <template v-slot:item.actions="{ item }" class="CL">
        <v-btn color="primary" @click="addItem(item)" class="CL">
          Ajouter au panier
        </v-btn>
      </template>
      <template v-slot:no-data class="CL">
        <v-btn color="primary" @click="initialize" class="CL">
          Reset
        </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import json from "../assets/data/articles.json";

export default {
  name: "Article",

  data: () => ({
    articles: json.articles,
  }),
  computed: {
    headers() {
      return [
        { text: "id", value: "id" },
        { text: "Nom", value: "name" },
        { text: "Description", value: "description" },
        { text: "Prix", value: "price" },
        { text: "Actions", value: "actions", sortable: false },
      ];
    },
  },
  methods: {
    addItem(item) {
      let panier = localStorage.panier ? JSON.parse(localStorage.panier) : [];
      for (let i = 0; i < Math.floor(Math.random() * Math.floor(100)); i++) {
        panier.push(item);
      }

      let data = JSON.stringify(panier);
      localStorage.panier = data;
    },
  },
};
</script>
<style>
.CL {
  color: black !important;
}
</style>
