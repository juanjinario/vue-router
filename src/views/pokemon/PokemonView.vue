<template lang="">
  <div class="list-group">
    <a
      href="#"
      v-for="pokemon of pokemonsList"
      :key="pokemon.name"
      class="list-group-item list-group-item-action"
    >
      {{ pokemon.name }}
    </a>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { PokemonService } from "/src/core/services";
const pokemonsList = ref([]);

// methods
const loadData = async () => {
  try {
    const { results } = await PokemonService.getAll();
    pokemonsList.value = results;
  } catch (error) {
    console.error(error);
  }
};

loadData();
</script>
<style lang=""></style>
