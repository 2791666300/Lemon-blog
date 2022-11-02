import styled from "styled-components";

export const InputForm = styled.input`
	font-size: 1.8rem;
	font-weight: 400;
	width: 40rem;
	height: 4rem;
	padding-left: 3rem;
	border: none;
	color: rgba(255, 255, 255, 0.5);
	outline: none;
	background: rgba(255, 255, 255, 0.6);
	border-radius: 2rem;
	&::placeholder {
		color: rgba(255, 255, 255, 0.5);
	}
`;
