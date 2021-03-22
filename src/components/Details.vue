<template>
  <v-container v-if="article !== null">
    <v-row>
      <v-card width="100%">
        <v-card-title>
          {{ article.name }}
        </v-card-title>
        <v-card-subtitle> Prix : {{ article.price }} </v-card-subtitle>
        <v-card-text>
          {{ article.description }}
        </v-card-text>
        <Avis></Avis>
      </v-card>
    </v-row>
    <v-row>
      <FAQ :id="article.id"></FAQ>
    </v-row>
  </v-container>
</template>

<script>
import FAQ from "./FAQ.vue";
import json from "../assets/data/articles.json";
import Avis from "../components/Avis.vue";

export default {
  name: "Details",
  components: {
    Avis,
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
