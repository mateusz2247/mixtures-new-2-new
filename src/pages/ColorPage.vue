<template>
	<PageTitle>Color </PageTitle>
	<FlaskItem
		style="margin: 3rem auto"
		:amount="100"
		:buttonsVisible="false"
		:size="15"
		:color="color" />

	<i class="pi pi-share-alt"></i>
	<InputText type="text" v-model="value" />
</template>

<script>
import InputText from "primevue/inputtext";
import FlaskItem from "@/components/FlaskItem.vue";
import PageTitle from "@/components/shared/PageTitle.vue";
export default {
	name: "AboutPage",
	components: { FlaskItem, PageTitle, InputText },
	data() {
		return {
			value: "localhost:8080/#" + this.$route.fullPath,
		};
	},
	created() {
		if (
			this.$route.params.red &&
			this.$route.params.green &&
			this.$route.params.blue
		) {
			console.log("mozemy dzialac");
		} else {
			this.$router.push({ path: "/", replace: true });
		}
	},
	computed: {
		color() {
			return `rgb(${this.$route.params.red}, ${this.$route.params.green}, ${this.$route.params.blue})`;
		},
	},
};
</script>
