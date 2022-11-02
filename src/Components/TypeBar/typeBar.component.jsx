import { useState } from "react";
import { ReactComponent as CollapseSidebar } from "../../Assets/collapseSidebar.svg";
import {
	Box,
	TypeBox,
	TypeBarContainer1,
	TypeBarContainer2,
	CollapseSidebarButton,
} from "./typeBar.style";
const TypeBar = (props) => {
	const [collapse, setCollapse] = useState(false);
	const [click, setClick] = useState(true);
	const collapseHandler = () => {
		setCollapse(!collapse);
	};
	const clikcHandler = () => {
		setClick(!click);
	};
	const TypeBarContainer = collapse ? TypeBarContainer2 : TypeBarContainer1;
	const typeBoxState = collapse ? "none" : "block";
	const height = collapse ? "90vh" : "4rem";
	const width = collapse ? "4rem" : "25rem";
	const transform = collapse ? "0deg" : "180deg";
	return (
		<TypeBarContainer>
			<Box width={width}></Box>
			<TypeBox typeBoxState={typeBoxState} click={click}>
				<div>
					<h2 onClick={clikcHandler} className='active'>
						开始 <span>{">"}</span>
					</h2>
					<ul>
						<li className='active'>愉快的开始吧！</li>
					</ul>
				</div>
				<div>
					<h2 onClick={clikcHandler}>
						前端 <span>{">"}</span>
					</h2>
					<ul>
						<li>HTML</li>
						<li>CSS</li>
						<li>JAVASCRIPT</li>
						<li>框架</li>
					</ul>
				</div>
				<div>
					<h2 onClick={clikcHandler}>
						后端<span>{">"}</span>
					</h2>
					<ul>
						<li>LINUX</li>
						<li>NODEJS</li>
						<li>PHP</li>
					</ul>
				</div>

				<div>
					<h2 onClick={clikcHandler}>
						Python<span>{">"}</span>
					</h2>
					<ul>
						<li>爬虫</li>
						<li>运维</li>
						<li>机器学习</li>
						<li>数据分析</li>
						<li>后端Django</li>
					</ul>
				</div>
			</TypeBox>
			<CollapseSidebarButton
				onClick={collapseHandler}
				width={width}
				height={height}
				transform={transform}>
				<CollapseSidebar />
			</CollapseSidebarButton>
		</TypeBarContainer>
	);
};

export default TypeBar;
