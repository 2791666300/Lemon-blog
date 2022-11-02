import {
	FriendShipLinksContainer,
	FriendShipLinksItem,
} from "./friendsShipLinks.style";
const FriendsShipLinks = (props) => {
	return (
		<FriendShipLinksContainer>
			<FriendShipLinksItem
				href='https://zh-hans.reactjs.org/docs/getting-started.html'
				target='link'>
				<img src='/imgLink/react.png' alt='link-1' />
				<span>React</span>
			</FriendShipLinksItem>
			<FriendShipLinksItem href='https://www.reactnative.cn/' target='link'>
				<img src='/imgLink/reactnative.png' alt='link-2' />
				<span>ReactNative</span>
			</FriendShipLinksItem>
			<FriendShipLinksItem href='https://reactnavigation.org/' target='link'>
				<img src='/imgLink/reactnavigation.jpg' alt='link-3' />
				<span>reactNativegation</span>
			</FriendShipLinksItem>
			<FriendShipLinksItem href='https://cn.vuejs.org/' target='link'>
				<img src='/imgLink/vue.jpeg' alt='link-4' />
				<span>Vue</span>
			</FriendShipLinksItem>
			<FriendShipLinksItem href='https://nodejs.org/zh-cn/docs/' target='link'>
				<img src='/imgLink/node.png' alt='link-5' />
				<span>Node</span>
			</FriendShipLinksItem>
			<FriendShipLinksItem href='https://jwt.io/' target='link'>
				<img src='/imgLink/jwt.png' alt='link-6' />
				<span>Jwt</span>
			</FriendShipLinksItem>
			<FriendShipLinksItem href='https://expo.dev/' target='link'>
				<img src='/imgLink/expo.jpg' alt='link-7' />
				<span>Expo</span>
			</FriendShipLinksItem>
			<FriendShipLinksItem href='https://www.iviewui.com/' target='link'>
				<img src='/imgLink/iview.jpeg' alt='link-8' />
				<span>Iview</span>
			</FriendShipLinksItem>
			<FriendShipLinksItem
				href='https://element.eleme.cn/#/zh-CN/component/installation'
				target='link'>
				<img src='/imgLink/element.png' alt='link-9' />
				<span>Element</span>
			</FriendShipLinksItem>
			<FriendShipLinksItem href='https://app.netlify.com/' target='link'>
				<img src='/imgLink/netlify.png' alt='link-10' />
				<span>Netlify</span>
			</FriendShipLinksItem>
		</FriendShipLinksContainer>
	);
};

export default FriendsShipLinks;
