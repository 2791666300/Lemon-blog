import styled from "styled-components";
export const FriendShipLinksContainer = styled.div`
	height: 25rem;
	width: 100%;
	margin-top: 2rem;
	color: white;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

export const FriendShipLinksItem = styled.a`
	width: 20%;
	height: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 3rem;
	font-size: 1.5rem;
	font-weight: 700;
	color: white;

	img {
		width: 100%;
		height: 100%;
		margin-bottom: 0.5rem;
		border-radius: 1.5rem;
		transition: all 0.1s;
		&:hover {
			transform: scale(1.03) translateY(-0.1rem);
		}
	}
`;
