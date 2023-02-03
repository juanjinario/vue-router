<template lang="">
  <div>
    <h2>Detalle del pokemón: {{ pokemonName }}</h2>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { PokemonService } from "/src/core/services";

const route = useRoute();
const pokemonName = route.params.name;
const pokemon = ref({});

onMounted(() => {
  loadData();
});

// methods
const loadData = async () => {
  try {
    const { results } = await PokemonService.getByName({ name: pokemonName });
    pokemon.value = results;
  } catch (error) {
    console.error(error);
  }
};
</script>
<style lang=""></style>
