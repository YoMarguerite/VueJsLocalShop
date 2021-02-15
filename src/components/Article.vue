<template>
  <v-container>
    <h1>Liste des articles</h1>
     <v-data-table
      :headers="headers"
      :items="articles"
      item-key="id"
      class="elevation-1"
      :search="search"
      :custom-filter="filterOnlyCapsText"
    >
       <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="addItem(item)"
      >
        mdi-plus
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>

    </v-data-table>
  </v-container>
</template>

<script>
import json from '../assets/data/articles.json'
import panier from '../assets/data/panier.json'

export default {
  name: "Article",

  data: () => ({
      articles: json.articles,
  }),
  computed: {
    headers () {
      return [
        { text: "id", value: "id" },
        { text: "Nom", value: "name" },
        { text: "Description", value: "description" },
        { text: "Prix", value: "price" },
        { text: 'Actions', value: 'actions', sortable: false }
      ]
    }
  },
  methods: {
    addItem (item) {
      panier.panier.articles.push(item);
      console.log(panier.panier.articles);
    }
  }
};
</script>
