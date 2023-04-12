<template>
	<div class="page">
		<h1>Home</h1>

		<!-- <Message severity="warn">Warning Message Content</Message>-->
		<InlineMessage
			class="animate__animated"
			:class="{ animate__shakeY: isAnimated }"
			severity="warn"
			>Warning! This app is still in development</InlineMessage
		>
	</div>
</template>

<script>
/* import Message from 'primevue/message' */
import InlineMessage from "primevue/inlinemessage";
export default {
	name: "HomePage",
	components: { InlineMessage },
	data() {
		return {
			isAnimated: false,
		};
	},

	/* methods: {
		flkMethod() {
			this.isAnimated = true;
			console.log("wykonalem funkcje");
		},
	}, */
	mounted() {
		setTimeout((this.isAnimated = true), 2000);
	},
};
</script>
