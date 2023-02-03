<template lang="">
  <div class="list-group">
    <router-link
      :to="`/pokemon/${pokemon.name}`"
      v-for="pokemon of pokemonsList"
      :key="pokemon.name"
      class="list-group-item list-group-item-action"
    >
      {{ pokemon.name }}
    </router-link>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import { PokemonService } from "/src/core/services";
const pokemonsList = ref([]);

onMounted(() => {
  loadData();
});

// methods
const loadData = async () => {
  try {
    const { results } = await PokemonService.getAll();
    pokemonsList.value = results;
  } catch (error) {
    console.error(error);
  }
};
</script>
<style lang=""></style>
