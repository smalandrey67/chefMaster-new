export const biasFromLeftToRight = {
	visible: (i: number) => ({
		x: 0,
		opacity: 1,
		transition: { delay: i * 0.1 }
	}),
	hidden: {
		x: -100,
		opacity: 0
	}
};

export const growthHeight = {
	visible: {
		height: "auto",
		opacity: 1
	},
	hidden: {
		height: 0,
		opacity: 0
	},
	exit: {
		height: 0,
		opacity: 0
	}
};
