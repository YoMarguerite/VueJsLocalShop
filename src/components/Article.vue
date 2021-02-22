<template>
  <v-container>
    <h1>Liste des articles</h1>
    <v-data-table
      :headers="headers"
      :items="articles"
      item-key="id"
      class="elevation-1 CL"
    >
      <template v-slot:item.actions="{ item }">
        <v-btn color="primary" @click="addItem(item)">
          Ajouter au panier
        </v-btn>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">
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
      panier.push(item);

      let data = JSON.stringify(panier);
      localStorage.panier = data;
    },
  },
};
</script>

