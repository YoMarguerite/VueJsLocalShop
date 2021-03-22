<template>
  <v-container>
    <v-row>
      <v-card :show="this.article" width="100%">
        <v-card-title>
          {{ article.name }}
        </v-card-title>
        <v-card-subtitle> Prix : {{ article.price }} </v-card-subtitle>
        <v-card-text>
          {{ article.description }}
        </v-card-text>
      </v-card>
    </v-row>
    <v-row>
      <FAQ></FAQ>
    </v-row>
  </v-container>
</template>

<script>
import FAQ from "./FAQ.vue";
import json from "../assets/data/articles.json";

export default {
  name: "Details",
  components: {
    FAQ
  },
  data: () => ({
    article: null
  }),
  mounted() {
    this.article = json.articles.find(article => {
      return article.id == this.$route.params.id;
    });
  }
};
</script>
