import Title, {
	TITLE_TYPE_CLASSES,
} from "../../Components/Title/title.component";

import {
	CategoriesContainer,
	ClassificationContainer,
	Classification,
	ClassificationItem,
	LabelContainer,
	Label,
	LabelItem,
} from "./categories.style";
const Categories = () => {
	const classifications = [
		{ name: "后端开发", num: "2篇" },
		{ name: "前端开发", num: "99篇" },
		{ name: "原生开发", num: "99篇" },
		{ name: "数据分析", num: "99篇" },
		{ name: "机器学习", num: "99篇" },
		{ name: "云计算", num: "99篇" },
		{ name: "数据库开发", num: "99篇" },
	];
	const labels = [
		"博客",
		"按钮",
		"pixi",
		"typescript",
		"脚手架",
		"快应用",
		"进度条",
		"View",
		"组件",
	];

	return (
		<CategoriesContainer>
			<ClassificationContainer>
				<Title titleType={TITLE_TYPE_CLASSES.secondary}>分类</Title>
				<Classification>
					{classifications.map((item) => {
						return (
							<ClassificationItem>
								<span>{item.name}</span>
								<p>{item.num}</p>
							</ClassificationItem>
						);
					})}
				</Classification>
			</ClassificationContainer>
			<LabelContainer>
				<Title titleType={TITLE_TYPE_CLASSES.secondary}>标签</Title>
				<Label>
					{labels.map((item) => {
						return <LabelItem>&larr; {item}</LabelItem>;
					})}
				</Label>
			</LabelContainer>
		</CategoriesContainer>
	);
};

export default Categories;
