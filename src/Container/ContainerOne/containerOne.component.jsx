import Sidebar from "../../Components/Sidebar/sidebar.component";
import Footer from "../../Components/Footer/footer.component";
import { IndexPageContainer, Bottom } from "../../Routers/Index/index.style";

import { ContentContainer_1 } from "./containerOne.style";

const ContainerOne = (props) => {
	return (
		<IndexPageContainer>
			<Sidebar />
			<ContentContainer_1 bgcolor={props.bgcolor}>
				{props.children}
			</ContentContainer_1>
			<Bottom />
			<Footer />
		</IndexPageContainer>
	);
};

export default ContainerOne;
