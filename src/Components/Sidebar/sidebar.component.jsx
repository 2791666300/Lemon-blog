import { useNavigate } from "react-router-dom";
import { useState, Fragment } from "react";
import ListNavigation from "../../Routers/ListNavigation/listNavi.component";
import {
	SidebarContainer,
	SidebarBtnContainer,
	SidebarBtn,
	ListNaviContainer,
} from "./sidebar.style";

const Sidebar = () => {
	const navigate = useNavigate();
	const [toggle, setToggle] = useState(false);

	const toggleHandler = () => {
		setToggle(!toggle);
	};
	const goToNavi = () => {
		navigate("/listnavi");
	};

	return (
		<Fragment>
			<SidebarContainer>
				<SidebarBtnContainer onClick={toggleHandler}>
					<SidebarBtn />
				</SidebarBtnContainer>
			</SidebarContainer>

			{toggle && (
				<ListNaviContainer>
					<ListNavigation />
				</ListNaviContainer>
			)}
		</Fragment>
	);
};

export default Sidebar;
