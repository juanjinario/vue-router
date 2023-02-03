import axios from "axios";
const base = "https://pokeapi.co/api/v2/pokemon";

export class PokemonService {
    static async getAll() {
        const url = `${base}/`;
        const { data } = await axios.get(url);
        return data;
    }
    static async getByName({ name }) {
        const url = `${base}/${name}`;
        const { data } = await axios.get(url);
        return data;
    }
}