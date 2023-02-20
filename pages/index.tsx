import type { NextPage } from "next";

import { Button } from "chefmaster-ui";
import { Layout } from "@/modules/Layout/Layout";

const Home: NextPage = () => {
	return (
		<Layout title="chefmaster" description="cooking, recipes, food">
			<Button>chefmaster</Button>
		</Layout>
	);
};

export default Home;
