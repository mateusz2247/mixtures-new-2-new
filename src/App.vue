<template>
	<div id="app">
		<div class="container">
			<!-- header -->
			<app-header />

			<TabMenu :model="items" />
			<router-view />

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
					to:''
				},
				{
					label: "Mixin",
					icon: "pi pi-fw pi-filter",
					to:''
					
				},
				{
					label: "About",
					icon: "pi pi-fw pi-info",
					to:''
					
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
