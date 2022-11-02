import RealTime from "../../Components/RealTime/realtime.component";
import RealDate from "../../Components/RealDate/realdate.component";
import SearchBox from "../../Components/SearchBox/search-box-component";
import FriendsShipLinks from "../../Components/FriendsShipLinks/friendsShipLinks.component";

import { FriendShipContainer, FriendShipContent } from "./friendship.style";
import { useState } from "react";

const Friendship = (props) => {
	const [date, setDate] = useState(new Date());

	setInterval(() => {
		setDate(new Date());
	}, 1000);
	const searchOnchangeHandler = (e) => {};
	return (
		<FriendShipContainer>
			<FriendShipContent>
				<RealTime date={date} />
				<RealDate date={date} />
				<SearchBox
					placeholder='请输入并搜索......'
					arg={searchOnchangeHandler}
				/>
				<FriendsShipLinks />
			</FriendShipContent>
		</FriendShipContainer>
	);
};

export default Friendship;
