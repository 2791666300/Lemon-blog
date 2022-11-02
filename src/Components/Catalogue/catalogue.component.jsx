// import { useState } from "react";
import {
	CatalogueContainer,
	CatalogueList,
	CatelogueItem,
	PrimaryCatalogue,
	// PrimaryCatalogueCurrent,
	SecondaryCatalogue,
	// SecondaryCatalogueCurrent,
} from "./catalogue.style";
const Catalogue = (props) => {
	// const [primaryCl, setPrimaryCl] = useState("体验React");
	// const [secondaryCl, setSecondaryCl] = useState("");
	return (
		<CatalogueContainer>
			<CatalogueList>
				<div>
					<CatelogueItem>
						<PrimaryCatalogue href='#1' className='active'>
							体验React
						</PrimaryCatalogue>
						<SecondaryCatalogue>
							<li>
								<a href='#1-1'> 在线体验</a>
							</li>
							<li>
								<a href='#1-2'> 在网站中添加React</a>
							</li>
							<li>
								<a href='#1-3'> 创建新的React应用</a>
							</li>
						</SecondaryCatalogue>
					</CatelogueItem>
					<CatelogueItem>
						<PrimaryCatalogue href='#2'>学习React</PrimaryCatalogue>
						<SecondaryCatalogue>
							<li>
								<a href='#2-1'> 第一个示例</a>
							</li>
							<li>
								<a href='#2-2'> 初学者的React</a>
							</li>
							<li>
								<a href='#2-3'> 设计师的React</a>
							</li>
						</SecondaryCatalogue>
					</CatelogueItem>
					<CatelogueItem>
						<PrimaryCatalogue href='#3'>获取最新新消息</PrimaryCatalogue>
					</CatelogueItem>
					<CatelogueItem>
						<PrimaryCatalogue href='#4'>版本化文档</PrimaryCatalogue>
					</CatelogueItem>
					<CatelogueItem>
						<PrimaryCatalogue href='#5'>找不到想要的？</PrimaryCatalogue>
					</CatelogueItem>
					<CatelogueItem>
						<PrimaryCatalogue href='#6'>代码实例</PrimaryCatalogue>
						<SecondaryCatalogue>
							<li>
								<a href='#6-1'> 举个栗子🥔</a>
							</li>
							<li>
								<a href='#6-2'> 按钮组件演示</a>
							</li>
						</SecondaryCatalogue>
					</CatelogueItem>
				</div>
			</CatalogueList>
		</CatalogueContainer>
	);
};

export default Catalogue;
