import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home/HomeView.vue";

const router = createRouter({
  // Esto es para evitar el #, que era de versiones anteriores
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/about/AboutView.vue"),
    },
    {
      path: "/pokemon",
      name: "pokemonList",
      component: () => import("../views/pokemon/PokemonListView.vue"),
    },
    {
      path: "/pokemon/:name",
      name: "pokemonDetail",
      component: () => import("../views/pokemon/PokemonDetailView.vue"),
    },
  ]
});

export default router;
