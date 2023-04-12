<template>
	<PageTitle>Color </PageTitle>
	<InlineMessage v-if="!showColor" severity="error"
		>Error Content</InlineMessage
	>
	<FlaskItem
		v-if="showColor"
		style="margin: 3rem auto"
		:amount="100"
		:buttonsVisible="false"
		:size="15"
		:color="color" />

	<i v-if="showColor" class="pi pi-share-alt"></i>
	<InputText v-if="showColor" type="text" v-model="value" />
</template>

<script>
import InlineMessage from "primevue/inlinemessage";
import InputText from "primevue/inputtext";
import FlaskItem from "@/components/FlaskItem.vue";
import PageTitle from "@/components/shared/PageTitle.vue";
export default {
	name: "AboutPage",
	components: { FlaskItem, PageTitle, InputText, InlineMessage },
	data() {
		return {
			value: "localhost:8080/#" + this.$route.fullPath,
			showColor: true,
		};
	},
	created() {
		if (
			this.$route.params.red > 0 &&
			this.$route.params.green > 0 &&
			this.$route.params.blue > 0 &&
			this.$route.params.red < 255 &&
			this.$route.params.green < 255 &&
			this.$route.params.blue < 255
		) {
			console.log("mozemy dzialac");
			this.showColor = true;
		} else if (
			this.$route.params.red &&
			this.$route.params.green &&
			this.$route.params.blue
		) {
			this.showColor = false;
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
