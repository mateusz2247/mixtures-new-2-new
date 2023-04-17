import { createStore } from "vuex";

export default createStore({
	state: {
		colors: [
			{ red: 10, green: 20, blue: 30 },
			{ red: 20, green: 120, blue: 90 },
		],
		mixtures2: [
			{
				variant: "red",
				amount: 20,
			},
			{
				variant: "green",
				amount: 70,
			},
			{
				variant: "blue",
				amount: 40,
			},
		],
	},
	mutations: {
		ADD_COLOR(state, color) {
			state.colors.push(color);
		},
		REMOVE_COLOR(state, color) {
			state.colors.splice(color, 1);
		},
    RESET_COLORS(state) {
			state.mixtures2 = state.mixtures2.map(item => ({ ...item, amount: 50 }))
		},
    ICREMENT_COLOR(state,index){
      /* const mixture = state.mixtures2[index] */
      /* if (mixture.amount === 100) return false */
      console.log(index);
      state.mixture2[index].amount++
    },
    DECREMENT_COLOR(state,index){
      /* const mixture = state.mixtures2[index] */
      /* if (mixture.amount === 100) return false */
      console.log(index);
      state.mixture2[index].amount--
    }

	},
	getters: {
		RGBColors(state) {
			return state.colors.map(
				(color) => `rgb(${color.red}, ${color.green}, ${color.blue})`
			);
		},
		MixturesList2(state) {
			return state.mixtures2;
		},
		CountColors(state) {
			return state.colors.length;
		},
	},
	actions: {
		addColor({ commit }, colors) {
			if (colors.length === 3) {
				const [red, green, blue] = colors.map((item) =>
					Math.floor(item.amount * 2.5)
				);
				commit("ADD_COLOR", { red, green, blue });
			}
		},
	},
});
