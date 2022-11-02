import styled, { css } from "styled-components";

const shrinkLabelStyles = css`
	top: 0;
	font-size: 0.6rem;
`;

export const FromGroup = styled.div`
	position: relative;
`;

export const Input = styled.input`
	background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
`;
export const Label = styled.label`
	color: #28b487;
	font-weight: 700;
	width: 12rem;
	margin: 0 auto;
	text-align: left;
	font-size: 0.5rem;
	top: -1.5rem;
	left: -1rem;
	position: relative;
	display: block;
	margin-bottom: 0.3rem;
	transition: all 0.2s;
	${({ shrink }) => shrink && shrinkLabelStyles};
`;
