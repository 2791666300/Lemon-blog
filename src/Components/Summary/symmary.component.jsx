import { SummaryContainer } from "./summary.style";

const Summary = () => {
	return (
		<SummaryContainer>
			<a href='/navi/articles'>
				<span>45</span>文章
			</a>

			<a href='/navi/categories'>
				<span>7</span>分类
			</a>

			<a href='/navi/categories'>
				<span>99</span>标签
			</a>
		</SummaryContainer>
	);
};

export default Summary;
