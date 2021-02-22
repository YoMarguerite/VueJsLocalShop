<template>
  <v-container>
    <v-row>
      <v-list class="CL">
        <v-subheader>PANIER : {{ articles.length }} articles</v-subheader>
        <v-list-item-group v-model="select" color="primary" class="CL">
          <v-list-item three-line v-for="(article, i) in articles" :key="i">
            <v-list-item-content class="CL">
              <v-list-item-title class="CL">{{
                article.name
              }}</v-list-item-title>
              <v-row>
                <v-col md="10" class="CL">
                  <v-list-item-subtitle class="CL">
                    {{ article.price }} €
                  </v-list-item-subtitle>
                  <v-list-item-subtitle class="CL">
                    {{ article.description }}
                  </v-list-item-subtitle>
                </v-col>
                <v-col md="2">
                  <v-list-item-action>
                    <v-btn color="error" @click="delArticle(i)">
                      <v-icon>{{ icon }} </v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-row>
    <v-row>
      <v-card fill-width>
        <v-card-text>
          Prix actuel :
          {{ priceTotal }}€
        </v-card-text>
      </v-card>
    </v-row>
    <v-row>
      <v-btn color="success" @click="valid()" :disabled="articles.length === 0">
        Valider la commande
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { mdiDelete } from "@mdi/js";

export default {
  name: "Panier",

  data: () => ({
    icon: mdiDelete,
    select: 0,
    articles: [],
  }),
  mounted() {
    this.articles = localStorage.panier ? JSON.parse(localStorage.panier) : [];
    console.log(this.articles);
  },
  computed: {
    priceTotal: function() {
      if (this.articles.length > 0) {
        if (this.articles.length > 1) {
          return this.articles.reduce((a, b) => {
            return a.price + b.price;
          });
        } else {
          return this.articles[0].price;
        }
      } else {
        return 0;
      }
    },
  },
  methods: {
    delArticle(index) {
      if (confirm("Are you sure you want to delete this article ?")) {
        this.articles.push(index, 0);
        let data = JSON.stringify(this.articles);
        localStorage.panier = data;
      }
    },
    valid() {
      let commandes = localStorage.commandes
        ? JSON.parse(localStorage.commandes)
        : [];
      commandes.push(this.articles);
      console.log(commandes);
      let data = JSON.stringify(commandes);
      localStorage.commandes = data;
      localStorage.panier = "[]";
      this.$router.push("/article");
    },
  },
};
</script>
<style>
.CL {
  color: black !important;
}
</style>
