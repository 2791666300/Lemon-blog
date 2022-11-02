import styled from "styled-components";
import Colors from "../../constants/Colors";
import Breakpoint from "../../constants/Breakpoint";

export const Box = styled.div`
	width: ${({ width }) => `${width}`};
`;
export const TypeBarContainer1 = styled.div`
	grid-row: 2/ -1;
	grid-column: typebar-start / typebar-end;
	border-right: 1px solid #aaa;
	background-color: ${Colors.color_black_2};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
export const TypeBarContainer2 = styled.div`
	grid-row: 2/ -1;
	grid-column: 1 / 2;
	border-right: 1px solid #aaa;
	background-color: ${Colors.color_black_2};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const TypeBox = styled.div`
	.active {
		color: #18df16;
	}
	padding: 2rem;
	color: white;
	font-size: 1.5rem;
	width: 25rem;
	position: fixed;
	position: none;
	display: ${({ typeBoxState }) => `${typeBoxState}`};
	@media only screen and (max-width: ${Breakpoint.bp_large}) {
		display: none;
	}

	div {
		h2 {
			color: #d3d6da;
			font-size: 1.8rem;
			padding: 0 1rem;
			cursor: pointer;
			border-radius: 0.5rem;
			margin: 0.2rem 0;
			&:hover {
				color: #18df16;
				background-color: #272729;
			}
			span {
				float: right;
				width: 2rem;
				transform: rotate(${({ click }) => `${click ? "90deg" : "0deg"}`})
					translateX(${({ click }) => `${click ? "1rem" : "0"}`});
			}
		}

		ul {
			display: ${({ click }) => `${click ? "block" : "none"}`};
			font-size: 1.6rem;
			padding: 0 1rem;
			list-style: none;
			li {
				margin: 0.2rem 0;
				border-radius: 0.5rem;
				padding: 0 2rem;
				cursor: pointer;
				color: #eee;
				&:hover {
					background-color: #272729;
					color: #18df16;
				}
			}
		}
	}
`;

export const CollapseSidebarButton = styled.button`
	background-color: ${Colors.color_black_3};
	border: 1px solid ${Colors.color_white_text_1};

	height: ${({ height }) => `${height}`};
	width: ${({ width }) => `${width}`};
	transform: rotate(${({ transform }) => `${transform}`});

	position: fixed;
	bottom: 0;

	&:hover {
		filter: invert(5%);
	}
	@media only screen and (max-width: ${Breakpoint.bp_large}) {
		display: none;
	}
`;
