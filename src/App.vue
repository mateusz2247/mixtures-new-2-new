<template>
	<div id="app">
		<div class="container">
			

			<!-- header -->
			<app-header />
			<div class="card">
				<TabMenu
					style="
						border-radius: 1rem;
						box-shadow: 0 20px 40px 0 rgba(107, 154, 212, 0.3);
						overflow: hidden;
					"
					:model="items" />
				<!-- <router-view /> -->
			</div>

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

export default {
	name: "App",
	components: {
		AppHeader,
		/* ColorMixin */
		TabMenu,
	},
	data() {
		return {
			items: [
				{
					label: "Home",
					icon: "pi pi-fw pi-home",
				},
				{
					label: "Mixin",
					icon: "pi pi-fw pi-filter",
				},
				{
					label: "About",
					icon: "pi pi-fw pi-info",
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
