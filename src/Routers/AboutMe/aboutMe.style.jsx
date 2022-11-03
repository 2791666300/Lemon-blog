import styled from "styled-components";
import Breakpoint from "../../constants/Breakpoint";
export const AboutMeContainer = styled.div`
	grid-row: 2 / -2;
	grid-column: 1 / -1;
	color: white;
	font-size: 1.5rem;
	background: url("/img/bgimg-2.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	background-position: right;
	@media only screen and (max-width: ${Breakpoint.bp_medium}) {
		background-position: top;
	}
	display: flex;
	justify-content: center;
	align-items: center;
`;
