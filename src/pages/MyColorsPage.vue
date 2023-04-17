<template>
	<div class="page">
		<PageTitle>My Colors</PageTitle>
		<!-- <ul class="mixtures">
			<li :key="index" v-for="(color, index) in colors">
				{{ color }}
			</li>
		</ul> -->
		<ul class="mixtures">
			<li :key="index" v-for="(color, index) in colors">
				<FlaskItem
					style="margin: 3rem auto"
					:amount="100"
					:buttonsVisible="false"
					:buttonsVisible2="true"
					:size="15"
					:color="funcName(color)"
					@removeColor="removeColor(index)" />
			</li>
		</ul>
	</div>
</template>
<script>
import PageTitle from "@/components/shared/PageTitle.vue";
import FlaskItem from "@/components/FlaskItem.vue";
import { mapState } from "vuex";
export default {
	name: "MyColorsPage",
	components: { PageTitle, FlaskItem },
	methods: {
		funcName(color) {
			return `rgb(${color.red}, ${color.green}, ${color.blue})`;
		},
		removeColor(index) {
			this.$store.commit("REMOVE_COLOR", index);
		},
	},
	computed: mapState(["colors"]),
};
</script>
