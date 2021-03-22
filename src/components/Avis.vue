<template>
  <v-container>
    <v-list-item-subtitle>Avis de l'utilisateur : </v-list-item-subtitle>
    <v-row>
      <v-col md="3">
        <v-rating v-model="avisUser" @input="saveRatting()"></v-rating>
      </v-col>
      <v-col>
        <v-textarea v-model="commentaireUser" label="Commentaire" rows="3" @change="saveRatting()"></v-textarea>
      </v-col>
    </v-row>
  
    <v-list-item-subtitle>Avis des autres utilisateurs : </v-list-item-subtitle>
    <div v-for="(item, i) in allAvis.articles[this.idArticle]" :key="i">
      <v-container v-if="i != idUser">
        <v-row>
          <v-col md="3">
            <v-rating :value="item['nbEtoile']" readonly></v-rating>
          </v-col>
          <v-col>
            <v-textarea :value="item['commentaire']" label="Commentaire" rows="3" readonly></v-textarea>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-container>
</template>

<script>
import avisJson from "../assets/data/avis.json";

export default {
  name: "Avis",
  data: () => ({
    avisUser: null,
    commentaireUser: null,
    allAvis: null,
    allCommentaire: null,
    idArticle: null,
    idUser: null
  }),
  mounted() {
    this.idArticle = this.$route.params.id;
    this.idUser = this.$idUser;
    if (localStorage.avisArticles) {
      this.allAvis = JSON.parse(localStorage.avisArticles)
      this.avisUser = this.allAvis.articles[this.idArticle][this.idUser]["nbEtoile"];
      this.commentaireUser = this.allAvis.articles[this.idArticle][this.idUser]["commentaire"];
    } else {
      this.allAvis = avisJson;
      this.avisUser = this.allAvis.articles[this.idArticle][this.idUser]["nbEtoile"];
      this.commentaireUser = this.allAvis.articles[this.idArticle][this.idUser]["commentaire"];
      localStorage.avisArticles = JSON.stringify(this.allAvis);
    }
  },
  methods: {
    saveRatting() {
      this.allAvis.articles[this.idArticle][this.idUser]["nbEtoile"] = this.avisUser;
      this.allAvis.articles[this.idArticle][this.idUser]["commentaire"] = this.commentaireUser;
      localStorage.avisArticles = JSON.stringify(this.allAvis);
    }
  }
};
</script>
