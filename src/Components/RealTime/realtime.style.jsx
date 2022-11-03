import styled from "styled-components";
import Breakpoint from "../../constants/Breakpoint";

export const RealTimeContainer = styled.div`
	font-size: 14rem;
	font-weight: 800;
	color: white;
	@media only screen and (max-width: ${Breakpoint.bp_phone}) {
		font-size: 10rem;
	}
`;
