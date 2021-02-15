import Vue from "vue";
import VueRouter from "vue-router";
import Article from "../components/Article.vue";
import Panier from "../components/Panier.vue";
import Commande from "../components/Commande.vue";
import Compte from "../views/Compte.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
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
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
