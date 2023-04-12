<template>
	<div class="page">
		<PageTitle>About</PageTitle>
		<img
      @click="jacking"
			class="animate__animated"
			:class="{ animate__jackInTheBox: isAnimated }"
			src="@/assets/logo.png"
      @animationend="isAnimated = false" />
	</div>
</template>

<script>
import PageTitle from "@/components/shared/PageTitle.vue";
export default {
	data() {
		return {
			isAnimated: false,
		};
	},
	name: "AboutPage",
	components: { PageTitle },
  methods: {
		jacking() {
			this.isAnimated = true;
			console.log("wykonalem funkcje");
		},
	},
};
</script>
