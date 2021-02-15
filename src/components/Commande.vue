
<template>
  <v-container>
    <h1>Liste des articles</h1>
    {{displayCommande}}
  <li v-for="(item, index) in indexCommandesDisplay">
       {{ index }} - {{ item }}
    <p> Article  </p>
    <p> Nom</p>
    <p> Description</p>
    <p> Prix</p>

 </li>
    <button type="button" v-on:click="abbort()">Annuler la commande</button>
    <button type="button" v-on:click="payment()">payer</button>

  </v-container>
</template>





<script>
import jsonFile from '../assets/data/commandes.json'
export default {
  name: "Commande",

data: () => ({
  commandes: jsonFile,
  displayCommande : null,
  indexCommandesDisplay : null,
  
  }),
  mounted() {
    this.indexCommandesDisplay = []
     for (var index in jsonFile) {
       if(this.commandes[index].user.name === "Corentin"){
         console.log(index)        
         this.indexCommandesDisplay.push(index)
          console.log(" ---- indexCommandesDisplay", this.indexCommandesDisplay)
         }
      }
      console.log('//')
      console.log(this.indexCommandesDisplay);
      console.log('//')
  },
  computed: {
      headers () {
      return [
        { text: "id", value: "id" },
        { text: "Nom", value: "name" },
        { text: "Description", value: "description" },
        { text: "Prix", value: "price" } 
      ]
    },
    abbort: function() {
      //suppression de la commande
      return true
      },
         payer: function() {
      //suppression de la commande
      return true
      },
     }
};
</script>
