<template lang="">
  <div>Aqui esta tu cualquier pokemon</div>
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
