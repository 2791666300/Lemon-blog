import { Fragment, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ReactComponent as BlackPageIcon } from "../../Assets/black-pagelogo.svg";
import { ReactComponent as WhitePageIcon } from "../../Assets/white-pagelogo.svg";
import { ReactComponent as SearchIcon } from "../../Assets/search.svg";
import ContainerTow from "../../Container/ContainerTwo/containerTwo.component";
import NavBartoggle from "../../Components/NavBarToggle/navbartoggle.component";
import Catalogue from "../../Components/Catalogue/catalogue.component";
import Button, {
	BUTTON_TYPE_CLASSES,
} from "../../Components/Button/button-component";

import {
	NavigationContainer,
	LogoContainer,
	NavLinks,
	NavLink,
	NavLinkCurrent,
	NavLinkIcon,
	BrightnessPageButton,
	SearchButton,
	ToggleCatalogue,
	SearchContainer,
	SearchBox,
} from "./navigation.style";

const Navigation = () => {
	const [click, setClick] = useState(false);
	const [currentnavigate, setCurrentnavigate] = useState("");
	const [isInHome, setIsInHome] = useState(false);
	const [toggle, setToggle] = useState(false);
	const [serach, setSearch] = useState(false);

	// 获取当前屏幕尺寸
	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});
	useEffect(() => {
		const updateSize = () =>
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		window.addEventListener("resize", updateSize);
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	const clikcHandler = () => {
		setClick(!click);
	};
	const navis = [
		{ to: "/navi", child: "Home" },
		{ to: "/navi/articles", child: "文章" },
		{ to: "/navi/categories", child: "分类/标签" },
		{ to: "/navi/friendship", child: "链接" },
		{ to: "/navi/more", child: "更多" },
		{ to: "/navi/aboutblog", child: "Blog" },
		{ to: "/navi/aboutme", child: "Me" },
	];

	const localtion = useLocation();
	useEffect(() => {
		navis.forEach((navi) => {
			if (navi.to === localtion.pathname) {
				setCurrentnavigate(navi.child);
			}
		});

		if (localtion.pathname === "/navi") {
			setIsInHome(true);
		} else {
			setIsInHome(false);
		}
	}, [localtion.pathname]);

	const navigateHandler = (e) => {
		setCurrentnavigate(e.target.innerText);
	};

	const toggleHandler = () => {
		setToggle(!toggle);
	};
	const searchHandler = () => {
		setSearch(!serach);
	};

	return (
		<Fragment>
			<ContainerTow>
				<NavigationContainer>
					<LogoContainer to='/'>
						<img src='/favicon.png' alt='logo' />
					</LogoContainer>

					<NavLinks>
						{navis.map((navi) => {
							if (navi.child === currentnavigate) {
								return (
									<NavLinkCurrent
										to={navi.to}
										onClick={navigateHandler}
										key={navi.child}>
										{navi.child}
									</NavLinkCurrent>
								);
							}
							return (
								<NavLink
									to={navi.to}
									onClick={navigateHandler}
									key={navi.child}>
									{navi.child}
								</NavLink>
							);
						})}

						<BrightnessPageButton>
							<NavLinkIcon
								href='https://github.com/2791666300/Lemon-blog'
								target='blank'
							/>
						</BrightnessPageButton>

						<BrightnessPageButton onClick={clikcHandler} click={click}>
							{click ? <WhitePageIcon /> : <BlackPageIcon />}
						</BrightnessPageButton>

						{isInHome && windowSize.width < 1000 && (
							<BrightnessPageButton onClick={toggleHandler}>
								<NavBartoggle color='white' />
							</BrightnessPageButton>
						)}

						{toggle && windowSize.width < 1000 && isInHome && (
							<ToggleCatalogue onClick={toggleHandler}>
								<Catalogue />
							</ToggleCatalogue>
						)}

						<NavLink>
							<SearchButton onClick={searchHandler}>
								<SearchIcon />
								<span>搜索</span>
								<div>🤪</div>
								<p>😏</p>
							</SearchButton>
						</NavLink>
					</NavLinks>
				</NavigationContainer>
				<Outlet />
			</ContainerTow>
			{serach && (
				<SearchContainer>
					<SearchBox>
						<input type='search' placeholder='输入并搜索.....' />
						<span>这里什么都没有~</span>
						<div>
							<Button
								onClick={searchHandler}
								buttonType={BUTTON_TYPE_CLASSES.actionbase}>
								取消 &rarr;
							</Button>
							<Button buttonType={BUTTON_TYPE_CLASSES.actionbase}>
								搜索 &rarr;
							</Button>
						</div>
					</SearchBox>
				</SearchContainer>
			)}
		</Fragment>
	);
};

export default Navigation;
