import React, { useState } from "react";

const Name = (props) => {
	const [name, setName] = useState("");
	const changeHandler = (value) => {
		setName(value);
	};
	return (
		<div>
			<input
				type='text'
				value={name}
				onChange={changeHandler}
				placeholder='请输入'
			/>
			<P>我的名字叫:</P>
			<P>{name}</P>
		</div>
	);
};

export default Name;
