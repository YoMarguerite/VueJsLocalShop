<template>
  <v-container>
    <v-row > 

    <ul>
      <li v-for="commande in commande" :key="commande.id">
      {{ commande }}
      </li>
    </ul>
    
    <button type="button" v-on:click="abbort()">Annuler la commande</button>
    <button type="button" v-on:click="payment()">payer</button>
    </v-row>
  </v-container>
</template>


<script>
export default {
  name: "Commande",

data: () => ({
  commandes: "../assets/data/commandes.json",
  
  }),
  mounted() {
    //Récupération des commande
    // this.commandes = localStorage.
    //   ? JSON.parse(localStorage.panier) : null
    console.log(this.commandes);
  },
  computed: {
    abbort: function() {
      //suppression de la commande
      for (let commande of this.commandes) {
        // if(){

        // }
      console.log(commande);
      
      }
      return true
      },
         payer: function() {
      //suppression de la commande
      return true

      },
     }
};
</script>
