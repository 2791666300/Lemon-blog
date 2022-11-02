import { useNavigate } from "react-router-dom";
import {
	SidebarContainer,
	SidebarBtnContainer,
	SidebarBtn,
} from "./sidebar.style";

const Sidebar = () => {
	const navigate = useNavigate();
	const goToNavi = () => {
		navigate("/listnavi");
	};
	return (
		<SidebarContainer>
			<SidebarBtnContainer onClick={goToNavi}>
				<SidebarBtn />
			</SidebarBtnContainer>
		</SidebarContainer>
	);
};

export default Sidebar;
