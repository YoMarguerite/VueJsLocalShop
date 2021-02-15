
<template>
  <v-container>
    <h1>Liste des Commandes</h1>
    
     <div v-if="commandeActuel">
        <div v-for="item in commandeActuel" :key="item.message">  
          <p> Commande : </p>
              <v-data-table
              :headers="headers"
              :items="item"
              item-key="id"
              class="elevation-1"
            >
            </v-data-table>
        </div>
      </div>
 <div v-for="item in this.indexCommandesDisplay" :key="item.message">     
    <p> Commande : </p>
      <v-data-table
      :headers="headers"
      :items="commandes[item].articles"
      item-key="id"
      class="elevation-1"
    >
    </v-data-table>
 </div>
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
  commandeActuel: null
  }),
  mounted() {
    this.commandeActuel = []
    this.commandeActuel = JSON.parse(localStorage.getItem('commandes'))
    console.log(this.commandeActuel[0])
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
