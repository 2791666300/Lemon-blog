import styled from "styled-components";
import { Link } from "react-router-dom";

import Colors from "../../constants/Colors";
import Breakpoint from "../../constants/Breakpoint";
export const NavigationContainer = styled.div`
	grid-row: 1 / 2;
	grid-column: 1 / -1;
	background-color: ${Colors.color_black_1};
	display: flex;
	justify-content: space-between;
	height: 10vh;
	width: 100%;
	position: fixed;
`;

export const LogoContainer = styled(Link)`
	width: 6rem;
	height: 100%;
	margin-left: 5rem;
	display: flex;

	@media screen and (max-width: ${Breakpoint.bp_medium}) {
		margin-left: 2rem;
	}
	@media screen and (max-width: ${Breakpoint.bp_small}) {
		width: 3rem;
		height: 70%;
		margin-left: 1rem;
		margin-top: 1rem;
	}
	img {
		width: 100%;
		height: 100%;
		transition: all 0.3s;
		&:hover {
			filter: drop-shadow(0 0 0 black) invert(100%);
		}
	}
`;

export const NavLinks = styled.div`
	width: 60%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin-right: 1rem;

	@media screen and (max-width: ${Breakpoint.bp_large}) {
		width: 80%;
		margin-right: 0.4rem;
	}

	@media screen and (max-width: ${Breakpoint.bp_phone}) {
		width: 90%;
		margin-right: 0;
	}
`;

export const NavLink = styled(Link)`
	transition: all 0.3s;
	padding: 1.5rem;
	color: white;
	font-size: 1.5rem;
	font-weight: 600;
	text-transform: uppercase;
	cursor: pointer;
	&:hover {
		color: ${Colors.color_green_1};
	}
	@media only screen and (max-width: ${Breakpoint.bp_largest}) {
		font-size: 1.4rem;
		padding: 0.5rem;
	}
	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		font-size: 1rem;
		padding: 0.15rem;
	}
`;

export const NavLinkCurrent = styled(NavLink)`
	color: ${Colors.color_green_1};
`;

export const NavLinkIcon = styled.a`
	width: 4rem;
	height: 4rem;
	display: inline-block;
	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		width: 3rem;
		height: 3rem;
	}
	display: flex;
	justify-content: center;
	align-items: center;
	&::after {
		content: "";
		/* background: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/%3E%3C/svg%3E")
			no-repeat; */
		background: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23fff' d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/%3E%3C/svg%3E")
			no-repeat;

		display: flex;
		height: 3rem;
		width: 3rem;
		@media only screen and (max-width: ${Breakpoint.bp_medium}) {
			width: 1.5rem;
			height: 1.5rem;
		}
	}
`;

export const BrightnessPageButton = styled.button`
	width: 4rem;
	height: 4rem;
	cursor: pointer;
	border: none;
	border-radius: 50%;

	background-color: inherit;
	margin: 0 0.5rem;
	&:hover {
		background-color: #444950;
	}
	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		width: 2.5rem;
		height: 2.5rem;
		margin: 0 0.1rem;
	}
	display: flex;
	justify-content: center;
	align-items: center;
	svg {
		width: 80%;
		height: 80%;
		path {
			fill: ${({ click }) => `${click ? "black" : "white"}`};
		}
	}
`;

export const SearchButton = styled.button`
	width: 14rem;
	height: 3.5rem;
	padding: 0 1rem;
	cursor: pointer;
	@media only screen and (max-width: ${Breakpoint.bp_small}) {
		width: 4rem;
		p,
		div {
			display: none;
		}
		span {
			display: none;
		}
	}

	display: flex;
	justify-content: flex-start;
	align-items: center;
	border: none;
	border-radius: 2rem;
	background-color: ${Colors.color_black_2};
	div {
		display: none;
	}
	&:hover {
		outline: 2px solid ${Colors.color_green_1};
		p {
			display: none;
		}
		div {
			display: block;
			@media only screen and (max-width: ${Breakpoint.bp_medium}) {
				display: none;
			}
		}
	}
	svg {
		path {
			stroke: white;
		}
	}
	span {
		color: ${Colors.color_white_text_2};
		font-size: 1.3rem;
		font-weight: 600;
		padding-left: 0.5rem;
	}
	p,
	div {
		flex: 1;
		font-size: 2.5rem;
		text-align: right;
	}
`;

export const ToggleCatalogue = styled.div`
	background-color: ${Colors.color_black_2};
	height: 90vh;
	width: 200px;
	position: absolute;
	right: 0;
	top: 10vh;
`;

export const SearchContainer = styled.div`
	height: 100vh;
	width: 100vw;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(16, 29, 43, 0.5);
	z-index: 300;
	display: flex;
	justify-content: center;
	padding-top: 10vh;
`;

export const SearchBox = styled.div`
	height: 20rem;
	width: 55rem;
	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		width: 40rem;
	}
	background-color: ${Colors.color_black_2};
	box-shadow: 0rem 0rem 2rem black;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	input {
		height: 5rem;
		width: 90%;
		margin: 1rem;
		padding: 0rem;
		border-radius: 0.5rem;
		outline: 2px solid ${Colors.color_green_1};
		border: none;
		background-color: black;
		color: white;
		font-size: 2rem;
	}

	span {
		height: 10rem;
		color: white;
		line-height: 10rem;
	}

	div {
		height: 5rem;
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		box-shadow: 0rem 0rem 2rem black;
		border-radius: 0.5rem;
	}
`;
