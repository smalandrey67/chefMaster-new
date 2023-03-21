import { AiFillClockCircle, AiFillStar, AiFillFire } from "react-icons/ai";

import type { Marker } from "./About.interface";

export const markers: Marker[] = [
	{
		id: "a7b0ee93-c4ed-4745-ab2e-103b247d4766",
		Icon: AiFillClockCircle,
		label: "cookTime",
		iconColor: "var(--neon-10)",
		iconSize: 18
	},
	{
		id: "473e4f9b-c6bc-43f2-8508-a42311433058",
		Icon: AiFillStar,
		label: "rating",
		iconColor: "var(--neon-10)",
		iconSize: 18
	},
	{
		id: "c2d37d7b-0401-452d-8006-d082e26ac30a",
		Icon: AiFillFire,
		label: "cookLevel",
		iconColor: "var(--neon-10)",
		iconSize: 18
	}
];
