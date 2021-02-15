<template>
  <v-container>
    <v-row class="text-center"> 

   <ul id="example-1">
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
    commandes: "../assets/data/commandes.json"
  }),
  computed: {
    abbort: function() {
      //suppression de la commande
      },
         payer: function() {
      //suppression de la commande
      },
     }
};
</script>
