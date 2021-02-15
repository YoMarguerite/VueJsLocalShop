
<template>
  <v-container>
    <h1>Liste des Commandes</h1>
  <!-- <li v-if="this.panierActual != []">  -->
     <!-- {{this.panierActual}} -->
<!-- <li  v-for="item in this.panierActual[0]" :key="item.message">   -->
    <!-- {{this.panierActual}} -->
      <v-data-table
      :headers="headers"
      :items="panierActual"
      item-key="id"
      class="elevation-1"
    >
    </v-data-table>
 <!-- </li> -->
<!-- </li> -->
 <li v-for="item in this.indexCommandesDisplay" :key="item.message">     
<!-- {{commandes[item].articles}} -->
      <v-data-table
      :headers="headers"
      :items="commandes[item].articles"
      item-key="id"
      class="elevation-1"
    >
     
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
  panierActual: null
  }),
  mounted() {
    this.panierActual = []
    this.panierActual = JSON.parse(localStorage.getItem('panier'))
    console.log(this.panierActual[0])
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
