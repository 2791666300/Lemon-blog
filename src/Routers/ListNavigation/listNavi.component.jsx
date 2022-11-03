import { useNavigate } from "react-router-dom";

import {
	ListNavigationContainer,
	ListNavigationList,
	ListNavigationItem,
	ListNavigationLink,
} from "./listNavi.style";

const ListNavigation = () => {
	const navigate = useNavigate();

	const goToIndexHandler = () => {
		navigate("/");
	};

	return (
		<ListNavigationContainer>
			<ListNavigationList>
				<ListNavigationItem>
					<ListNavigationLink href='/auth'>
						<span>01</span>sign-up/login
					</ListNavigationLink>
				</ListNavigationItem>
				<ListNavigationItem>
					<ListNavigationLink href='/navi/aboutme'>
						<span>02</span>关于我
					</ListNavigationLink>
				</ListNavigationItem>
				<ListNavigationItem>
					<ListNavigationLink href='/navi/aboutblog'>
						<span>03</span>关于博客
					</ListNavigationLink>
				</ListNavigationItem>
				<ListNavigationItem onClick={goToIndexHandler}>
					<ListNavigationLink href='/navi'>
						<span>04</span>开始阅读
					</ListNavigationLink>
				</ListNavigationItem>
				<ListNavigationItem onClick={goToIndexHandler}>
					<ListNavigationLink href='/'>
						<span>05</span>回到首页
					</ListNavigationLink>
				</ListNavigationItem>
			</ListNavigationList>
		</ListNavigationContainer>
	);
};

export default ListNavigation;
