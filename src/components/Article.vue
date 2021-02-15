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
      <template v-slot:top>
      </template>
      <template v-slot:body.append>
        <tr>
          <td></td>
          <td colspan="4"></td>
        </tr>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import json from '../assets/data/articles.json'
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
        { text: "Prix", value: "price" } 
      ]
    }
  }
};
</script>
