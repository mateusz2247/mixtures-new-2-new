<template>
	<div id="app">
		<div class="container">
			<!-- header -->
			<app-header />

			<TabMenu :model="items" />
			<transition
				mode="out-in"
				name="custom-transition"
				enter-active-class="animate__animated animate__fadeInLeft">
				<!-- <SlideFadeAnimation class="animate__fast"> -->
				<router-view />
				<!-- </SlideFadeAnimation> -->
			</transition>
			<!-- color mixin -->
			<!-- <color-mixin /> -->
		</div>
	</div>
</template>

<script>
import "./styles/global.scss";
import AppHeader from "./components/AppHeader";
/* import ColorMixin from "./components/ColorMixin"; */

import TabMenu from "primevue/tabmenu";
/* import SlideFadeAnimation from "@/components/shared/SlideFadeAnimation.vue"; */

export default {
	name: "App",
	components: {
		AppHeader,
		/* ColorMixin */
		TabMenu,
		/* SlideFadeAnimation, */
	},
	data() {
		return {
			items: [
				{
					label: "Home",
					icon: "pi pi-fw pi-home",
					to: "/",
				},
				{
					label: "Mixin",
					icon: "pi pi-fw pi-filter",
					to: "/mixin",
				},
				{
					label: "About",
					icon: "pi pi-fw pi-info",
					to: "/about",
				},
			],
		};
	},
};
</script>

<style lang="scss">
.container {
	max-width: 800px;
	margin: 0 auto;
	text-align: center;
	padding: 2rem;
}
</style>
