import { Fragment } from "react";
import TypeBar from "../../Components/TypeBar/typeBar.component";
import Contents from "../../Components/Contents/contents.component";
import Catalogue from "../../Components/Catalogue/catalogue.component";

import { UpContainer } from "./home.style";
const Home = () => {
	return (
		<Fragment>
			<TypeBar />
			<Contents />
			<Catalogue />
			<UpContainer>
				<a href='#top'>^</a>
			</UpContainer>
		</Fragment>
	);
};

export default Home;
