<template>
  <v-container>
    <v-row>
      <h3>PANIER : {{ articles.length }} articles</h3>
      <v-list>
        <v-list-item-group v-model="select" color="primary">
          <v-list-item three-line v-for="(article, i) in articles" :key="i">
            <v-list-item-content>
              <v-list-item-title>{{ article.name }}</v-list-item-title>
              <v-row>
                <v-col md="10">
                  <v-list-item-subtitle>
                    {{ article.price }} €
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    {{ article.description }}
                  </v-list-item-subtitle>
                </v-col>
                <v-col md="2">
                  <v-list-item-action>
                    <v-btn color="error">
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
          {{
            articles.length > 0
              ? articles.reduce((a, b) => {
                  return a.price + b.price;
                })
              : "0"
          }}€
        </v-card-text>
      </v-card>
    </v-row>
    <v-row>
      <v-btn color="success" :to="'/'">
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
    articles: []
  }),
  mounted() {
    this.articles = localStorage.panier ? JSON.parse(localStorage.panier) : [];
    console.log(this.articles);
  },
  methods: {
    delArticle(article) {
      if (confirm("Are you sure you want to delete this article ?")) {
        let index = this.articles.findIndex(article);
        console.log(index);
        this.articles.splice(index, 1);
        let data = JSON.Stringify(this.articles);
        localStorage.panier = data;
      }
    },
    valid() {
      let commandes = localStorage.commandes
        ? JSON.parse(localStorage.commandes)
        : [];
      commandes.push(this.article);
      let data = JSON.Stringify(commandes);
      localStorage.commandes = data;
    }
  }
};
</script>
