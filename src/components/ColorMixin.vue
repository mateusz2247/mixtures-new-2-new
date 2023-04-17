<template>
	<div>
		<!-- mixtures list -->
		<mixtures-list
			:mixtures="mixtures"
			@increment="increment"
			@decrement="decrement" />

		<!-- result box -->
		<result-box :mixtures="mixtures" />
	</div>
</template>

<script>
import MixturesList from "./MixturesList";
import ResultBox from "./ResultBox";
import { mapGetters } from "vuex";

export default {
	name: "ColorMixin",
	data: () => ({
		/*  mixtures: [
      {
        variant: 'red',
        amount: 20
      },
      {
        variant: 'green',
        amount: 70
      },
      {
        variant: 'blue',
        amount: 40
      }] */
	}),
	methods: {
		increment(index) {
			this.$store.commit("ICREMENT_COLOR", index);
		},

		decrement(index) {
			this.$store.commit("DECREMENT_COLOR", index);
		},

		/* refresh() {
			this.$store.commit("RESET_COLORS");
		}, */
	},
	computed: mapGetters({ mixtures: "MixturesList2" }),
	components: {
		MixturesList,
		ResultBox,
	},
};
</script>
