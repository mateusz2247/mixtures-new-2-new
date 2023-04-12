<template>
	<div ref="flk" class="flask animate__animated" :style="flaskStyle">
		<!-- decrement btn -->
		<ButtonItem
			v-if="buttonsVisible"
			class="flask__btn flask__btn--left"
			icon="arrow-down"
			@click="
				flkMethod();
				$emit('decrement');
			" />
		<div :class="fillClasses" :style="fillStyle" />
		<!-- increment btn -->
		<ButtonItem
			v-if="buttonsVisible"
			class="flask__btn flask__btn--right"
			icon="arrow-up"
			:movement="-0.5"
			@click="
				flkMethod();
				$emit('increment');
			" />
	</div>
</template>

<script>
import ButtonItem from "./shared/ButtonItem.vue";
export default {
	name: "FlaskItem",
	props: {
		size: {
			type: Number,
			default: 10,
		},
		amount: {
			type: Number,
			default: 50,
		},
		color: {
			type: String,
		},
		variant: {
			type: String,
		},
		buttonsVisible: {
			type: Boolean,
			default: true,
		},
	},
	components: {
		ButtonItem,
	},

	methods: {
		flkMethod() {
			this.$refs.flk.classList.add("animate__shakeY");
      setTimeout (setTimeout(() => { this.$refs.flk.classList.remove("animate__shakeY") }, 300))
      console.log("wykonalem funkcje")

		},
	},

	computed: {
		flaskStyle() {
			return {
				height: `${this.size}rem`,
				width: `${this.size}rem`,
			};
		},

		fillClasses() {
			return ["flask__fill", this.variant && `flask__fill--${this.variant}`];
		},

		fillStyle() {
			const style = { height: this.amount + "%" };

			if (!this.variant) {
				style.backgroundColor = this.color || "#fff";
			}

			return style;
		},
	},
};
</script>

<style lang="scss">

.flask {
	display: block;
	border: 10px solid #ddd;
	border-radius: 50%;
	margin: 2rem 1rem;
	position: relative;
	display: flex;
	align-items: flex-end;
	overflow: hidden;
	box-shadow: 0 20px 40px 0 rgba(107, 154, 212, 0.3);

	&__fill {
		width: 100%;
		height: 100%;
		transition: 0.2s;

		&--red {
			background-color: #ff7d3b;
			background-image: linear-gradient(189deg, #ff7d3b 0%, #ff2525 74%);
		}

		&--green {
			background-color: #2e561c;
			background-image: linear-gradient(0deg, #2e561c 0%, #2af598 100%);
		}

		&--blue {
			background-color: #25b6bf;
			background-image: linear-gradient(183deg, #25b6bf 0%, #0070a2 100%);
		}
	}

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #9a9a9a;
		background-image: linear-gradient(0deg, #9a9a9a 0%, #e8fdff 100%);
		opacity: 0.2;
	}

	&__btn {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);

		&--right {
			right: 1rem;
		}

		&--left {
			left: 1rem;
		}
	}
}
/* .fadeIn {
	animation-name: "fadeIn";
	animation-iteration-count: 1;
	animation-duration: 0.3s;
}

@keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

.zoomIn {
	animation-name: "zoomIn";
	animation-iteration-count: 1;
	animation-duration: 0.3s;
}

@keyframes zoomIn {
	0% {
		opacity: 0.8;
		transform: scale3d(1.1, 1.1, 1.1);
	}
	20% {
		transform: scale3d(1, 1, 1);
	}
	70% {
		transform: scale3d(1.1, 1.1, 1.1);
	}
	100% {
		opacity: 1;
	}
} */
</style>
