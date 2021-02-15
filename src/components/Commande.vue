
<template>
  <v-container>
    <h1>Liste des Commandes</h1>
  <li v-for="item in this.indexCommandesDisplay" :key="item.message">     
      <v-data-table
      :headers="headers"
      :items="commandes[item].articles"
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
 </li>
  </v-container>
</template>





<script>
import jsonFile from '../assets/data/commandes.json'
export default {
  name: "Commande",

data: () => ({
  commandes: jsonFile,
  indexCommandesDisplay : null,
  user: null,
  }),
  mounted() {
    this.indexCommandesDisplay = []
    this.local
     for (var index in jsonFile) {
       if(this.commandes[index].user.name === "Corentin"){
         this.indexCommandesDisplay.push(index)
         }
      }
      console.log(this.indexCommandesDisplay);
  },
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
