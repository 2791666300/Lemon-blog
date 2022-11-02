import styled from "styled-components";
import Colors from "../../constants/Colors";
import Breakpoint from "../../constants/Breakpoint";

import { ReactComponent as ThumbUp } from "../../Assets/thumbUp.svg";

export const ContentsContainer = styled.div`
	grid-row: 2/ -2;
	grid-column: content-start / content-end;
	background-color: ${Colors.color_black_2};
	background-color: ${Colors.color_black_2};
`;

export const ContentBox = styled.div`
	height: 100%;
	width: 100%;
	color: white;
	
	padding: 3rem;
	@media only screen and (max-width: ${Breakpoint.bp_large}) {
		padding: 1rem;
	}
	p {
		font-size: 1.6rem;
		padding: 2rem 0;
	}
	h1 {
		font-size: 5rem;
		margin-bottom: 3rem;
	}
	h2 {
		font-size: 3.5rem;
		margin-bottom: 1rem;
		margin-top: 3rem;
	}
	h3 {
		font-size: 2.5rem;
		margin-bottom: 0rem;
		margin-top: 2rem;
	}
	span {
		font-size: 2rem;
		color: #6b6b6b;
	}

	strong {
		background-color: ${Colors.color_black_1};
		border-radius: 1rem;
		padding: 2rem 2rem;
		display: block;
		font-size: 1.6rem;
		margin-top: 1rem;
		img {
			width: 100%;
			
		}
	}
`;

export const ContentHeader = styled.div`
	padding-top: 8rem;
	border-bottom: 1px solid #6b6b6b;
`;

export const ContentCatalogue = styled.div`
	border-bottom: 1px solid #6b6b6b;
	ul {
		margin: 3rem 0 5rem 2rem;
		li {
			transition: all 0.3s;
			margin: 1rem;
			width: 15rem;
			a {
				background: ${Colors.color_black_3};

				font-size: 2rem;
				color: #e3e3e3;
				box-shadow: 0.5rem 0.5rem 2rem black;
			}
			&:hover {
				transform: translateY(-2px);
			}
		}
	}
`;

export const ContentContent = styled.div`
	padding: 3rem 0;
	border-bottom: 1px solid #6b6b6b;
`;
export const ContentContentList = styled.div``;

export const ContentFooter = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 5rem;
`;

export const ThumbUpIcon = styled(ThumbUp)`
	height: 3rem;
	path {
		fill: #6b6b6b;
	}

	&:hover {
		path {
			fill: #c69963;
		}
	}
`;
export const ThumbDownIcon = styled(ThumbUpIcon)`
	transform: rotate(180deg);
`;
