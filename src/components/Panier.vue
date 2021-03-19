<template>
  <v-container>
    <v-row>
      <v-list>
        <v-subheader>PANIER : {{ articles.length }} articles</v-subheader>
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
        <v-card-text v-show="calculReduction() > 0">
          <v-switch
            v-model="reductionActive"
            :label="'Appliquer la réduction ' + calculReduction() + '%'"
          ></v-switch>
        </v-card-text>
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
    reductionActive: false
  }),
  mounted() {
    this.articles = localStorage.panier ? JSON.parse(localStorage.panier) : [];
    console.log(this.articles);
  },
  computed: {
    priceTotal: function() {
      let result = 0;
      if (this.articles.length > 0) {
        if (this.articles.length > 1) {
          result = this.articles.reduce((a, b) => {
            return a.price + b.price;
          });
        } else {
          result = this.articles[0].price;
        }
      }
      return this.reductionActive
        ? result - result * (this.calculReduction() / 100)
        : result;
    }
  },
  methods: {
    delArticle(index) {
      if (confirm("Are you sure you want to delete this article ?")) {
        this.articles.splice(index, 1);
        let data = JSON.stringify(this.articles);
        localStorage.panier = data;
      }
    },
    calculReduction() {
      if (!localStorage.reduction) return 0;
      let round = Math.floor(localStorage.reduction / 100) * 10;
      console.log(round);
      return round > 40 ? 40 : round;
    },
    valid() {
      let commandes = localStorage.commandes
        ? JSON.parse(localStorage.commandes)
        : [];
      commandes.push({
        articles: this.articles,
        priceTotal: this.priceTotal,
        reduction: this.calculReduction()
      });
      console.log(commandes);
      let data = JSON.stringify(commandes);
      localStorage.commandes = data;
      localStorage.panier = "[]";
      this.reductionActive
        ? (localStorage.reduction = 0)
        : (localStorage.reduction = +localStorage.reduction + +this.priceTotal);
      this.$router.push("/article");
    }
  }
};
</script>
