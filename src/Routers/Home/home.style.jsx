import styled from "styled-components";
import Colors from "../../constants/Colors";
export const UpContainer = styled.span`
	position: fixed;
	height: 50px;
	width: 50px;
	font-size: 5rem;
z-index: 10000;
	background-color: #444950;
	border-radius: 50%;
	border: none;

	box-shadow: 0 1rem 1rem ${Colors.color_black_2};
	right: 3rem;
	bottom: 3rem;
	display: flex;
	justify-content: center;
	transition: all 0.3s;
	&:hover {
		bottom: 3.2rem;
	}
	a {
		color: #7f8287;
	}
`;
