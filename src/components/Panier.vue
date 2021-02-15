<template>
  <v-container>
    <v-row>
      <h3>PANIER : {{ articles.length }} articles</h3>
      <v-list>
        <v-list-item-group v-model="select" color="primary">
          <v-list-item three-line v-for="(article, i) in articles" :key="i">
            <v-list-item-content>
              <v-list-item-title>{{ article.name }}</v-list-item-title>
              <v-list-item-subtitle>
                {{ article.price }} €
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                {{ article.description }}
              </v-list-item-subtitle>
              <v-list-item-action>
                <v-btn color="danger">
                  <v-icon>{{ icon }} </v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
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
    //Récupération des articles
    this.articles = localStorage.panier
      ? JSON.parse(localStorage.panier)
      : [
          {
            id: 1,
            name: "Table basse en bois",
            description:
              "une table basse en bois qui vous permettra de passer vos meilleures soirées",
            price: 80
          },
          {
            id: 2,
            name: "Etagère en aluminium",
            description: "Pour posez tout vos livres, que vous ne lirez pas.",
            price: 30
          }
        ];
    console.log(this.articles);
  }
};
</script>
