<template>
	<div>
		<!-- text between -->
		<p v-text="'And the result...'" />

		<!-- mixture effect -->
		<!-- <big-mixture-item
      :color="mixtureEffectFill" /> -->
		<!-- <flask-item
        :key="index"
        v-for="(mixture, index) in mixtures"
        :variant="mixture.variant"
        :amount="mixture.amount"
        @increment="$emit('increment', index)"
        @decrement="$emit('decrement', index)" /> -->
		<FlaskItem
			style="margin: 3rem auto"
			:amount="100"
			:buttonsVisible="false"
			:size="15"
			:color="mixtureEffectFill" />
		<p v-text="mixtureEffectFill"></p>
		<p>Ther are {{ howColors }} colors in your pocket</p>
		<button-item
			@click="refresh"
			:size="4"
			:movement="-0.5"
			:font-size="1.5"
			icon="sync" />
		<button-item
			@click="modalVisible = true"
			:size="4"
			:movement="-0.5"
			:font-size="1.5"
			icon="question" />

		<RouterLink :to="createLink">
			<button-item
				:size="4"
				:movement="-0.5"
				:font-size="1.5"
				icon="share-alt" />
		</RouterLink>
		<button-item
			@click="saveColor"
			:size="4"
			:movement="-0.5"
			:font-size="1.5"
			icon="pencil" />
		<FadeAnimation>
			<ModalItem v-if="modalVisible" @cancel="modalVisible = false">
				<template v-slot:header> About the app </template>

				<template v-slot:body>
					Mix three colors to create the perfect one!
				</template>

				<template v-slot:footer>
					<button-item icon="pi pi-fw pi-check" />
				</template>
			</ModalItem>
		</FadeAnimation>
	</div>
</template>

<script>
/* import BigMixtureItem from './BigMixtureItem' */
import FadeAnimation from "./shared/FadeAnimation.vue";
import ModalItem from "./ModalItem.vue";
import FlaskItem from "./FlaskItem.vue";
import ButtonItem from "./shared/ButtonItem.vue";
import { mapState } from "vuex";
import { /* mapMutations, */ mapGetters, mapActions } from "vuex";
export default {
	data: () => ({ modalVisible: false }),
	name: "ResultsBox",
	props: {
		mixtures: {
			type: Array,
			required: true,
		},
	},
	methods: {
		/* ...mapMutations({ addColor: "ADD_COLOR" }), */
		saveColor() {
			this.addColor(this.mixtures);
			/* const [red, green, blue] = this.mixtures.map((item) =>
				Math.floor(item.amount * 2.5)
			);
			this.$store.commit("ADD_COLOR", { red, green, blue }); */
			/* const [red, green, blue] = this.mixtures.map((item) =>
				Math.floor(item.amount * 2.5)
			);
			this.addColor({ red, green, blue }); */
		},
		...mapActions(["addColor"]),
		/* 	addColor(payload) {
			this.$store.commit("ADD_COLOR", payload);
		}, */
		refresh() {
			/* this.mixtures = this.mixtures.map(item => ({ ...item, amount: 50 })) */
			this.$store.commit("RESET_COLORS");
		},
	},
	computed: {
		...mapState(["colors"]),
		mixtureEffectFill() {
			const [redCol, greenCol, blueCol] = this.mixtures.map((item) =>
				Math.floor(item.amount * 2.5)
			);
			return `rgb(${redCol}, ${greenCol}, ${blueCol})`;
		},
		...mapGetters({ howColors: "CountColors" }),
		createLink() {
			const [redCol, greenCol, blueCol] = this.mixtures.map((item) =>
				Math.floor(item.amount * 2.5)
			);
			return `color/${redCol}/${greenCol}/${blueCol}`;
		},
	},
	components: {
		ButtonItem,
		FlaskItem,
		ModalItem,
		FadeAnimation,
	},
};
</script>

<style scoped lang="scss">
.refresh-btn {
	background-color: #9a9a9a;
	background-image: linear-gradient(0deg, #9a9a9a 0%, #e8fdff 100%);
	width: 4rem;
	height: 4rem;
	border: none;
	border-radius: 50%;
	cursor: pointer;
	-webkit-box-shadow: 0 20px 40px 0 rgba(107, 154, 212, 0.1);
	box-shadow: 0 20px 40px 0 rgba(107, 154, 212, 0.1);
	transition: 0.3s;
	outline: none;
	font-size: 1.5rem;
	color: #637892;

	&:hover {
		margin-top: -0.5rem;
	}
}
</style>
