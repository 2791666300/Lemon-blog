import { useNavigate } from "react-router-dom";
import ContainerOne from "../../Container/ContainerOne/containerOne.component";

import {
	ListNavigationContainer,
	ListNavigationList,
	ListNavigationItem,
	ListNavigationLink,
} from "./listNavi.style";

import Colors from "../../constants/Colors";
const ListNavigation = () => {
	const navigate = useNavigate();

	const goToIndexHandler = () => {
		navigate("/");
	};

	return (
		<ContainerOne bgcolor={Colors.color_primary}>
			<ListNavigationContainer>
				<ListNavigationList>
					<ListNavigationItem>
						<ListNavigationLink href='/auth'>
							<span>01</span>sign-up/login
						</ListNavigationLink>
					</ListNavigationItem>
					<ListNavigationItem>
						<ListNavigationLink href='/aboutme'>
							<span>02</span>关于我
						</ListNavigationLink>
					</ListNavigationItem>
					<ListNavigationItem>
						<ListNavigationLink href='/aboutbolg'>
							<span>03</span>关于博客
						</ListNavigationLink>
					</ListNavigationItem>
					<ListNavigationItem onClick={goToIndexHandler}>
						<ListNavigationLink href='/'>
							<span>04</span>回到首页
						</ListNavigationLink>
					</ListNavigationItem>
				</ListNavigationList>
			</ListNavigationContainer>
		</ContainerOne>
	);
};

export default ListNavigation;
