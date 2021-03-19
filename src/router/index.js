import Vue from "vue";
import VueRouter from "vue-router";
import Article from "../components/Article.vue";
import Panier from "../components/Panier.vue";
import Commande from "../components/Commande.vue";
import Compte from "../components/Compte.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/article",
    name: "Article",
    component: Article
  },
  {
    path: "/Panier",
    name: "Panier",
    component: Panier
  },
  {
    path: "/Commande",
    name: "Commande",
    component: Commande
  },
  {
    path: "/",
    name: "Compte",
    component: Compte
  }
];

const router = new VueRouter({
  routes
});

export default router;
