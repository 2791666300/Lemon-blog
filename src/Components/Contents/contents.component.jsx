import TextButton from "../Button-text/buttonText.component";
import {
	ContentsContainer,
	ContentBox,
	ContentHeader,
	ContentCatalogue,
	ContentContent,
	ContentContentList,
	ContentFooter,
	ThumbUpIcon,
	ThumbDownIcon,
} from "./contents.style";
const Contents = (props) => {
	return (
		<ContentsContainer>
			<ContentBox>
				<ContentHeader>
					<h1>让我们愉快的开始吧！</h1>
					<span>
						我接下来应该会考虑写一些关于JAVASCRIPT的博客，当然这是必然的，要不其他我也不怎么会，当然，
						我对PYTHON的爬虫有一定的了解，后续可能会带来一些如何用爬虫实现高效率数据处理的文章，
						暂时就从React官方文档上复制吧。介绍介绍REACT这个牛逼的框架。然后，在最后实现一个按钮组件。
					</span>

					<p>
						React是一个用于构建用户页面的JavaScript库。你可以在首页或教程中学习什么是React。
					</p>
				</ContentHeader>
				<ContentCatalogue>
					<ul>
						<li>
							<a href='#1'> 体验React</a>
						</li>
						<li>
							<a href='#2'>学习React</a>
						</li>
						<li>
							<a href='#3'>获取最新消息</a>
						</li>
						<li>
							<a href='#4'>版本化文档</a>
						</li>
						<li>
							<a href='#5'>找不到想要的？</a>
						</li>
						<li>
							<a href='#6'>代码实例</a>
						</li>
					</ul>
				</ContentCatalogue>
				<ContentContent>
					<h2 id='1'>体验React</h2>
					<p>
						React 从诞生之初就是可被逐步采用的，因而你可以按需引入或多或少的
						React 特性。不管你是想体验下 React，用它给简单的 HTML
						页面增加一点交互，还是要开始一个完全由 React
						驱动的复杂应用，该章节内容里的链接都能帮你快速开始。
					</p>
					<ContentContentList>
						<h3 id='1-1'>在线体验</h3>
						<p>
							如果你对体验 React 感兴趣，可以尝试在线代码编辑器。从
							CodePen，CodeSandbox，或者 Stackblitz 开始一个 React 版本的 Hello
							World 模板。 如果你喜欢使用自己的文本编辑器，也可以下载这个 HTML
							文件，然后编辑文件内容，最后再用浏览器从本地文件系统打开文件，预览页面效果。
							注意：这个文件中包含一个低效率的运行时代码转换脚本，所以我们推荐仅在简单的演示项目中使用。
						</p>
						<h3 id='1-2'>在网站中添加 React</h3>
						<p>
							你可以立即在 HTML 文件中添加
							React，然后选择逐渐拓展它的应用范围，或只在一些动态小部件中使用它。
						</p>
						<h3 id='1-3'>创建新的 React 应用</h3>
						<p>
							当你刚开始一个 React 应用时，通过 HTML 的 script 标签引入 React
							依然是最好的选项，因为这能让你的项目立即启动。
							但随着应用越来越大，你可能会需要更加集成化的安装方式。我们推荐了一些
							JavaScript
							工具链，它们适合大型应用。它们只需很少甚至零配置，就能让你充分利用丰富的
							React 生态。立即尝试。
						</p>
					</ContentContentList>
				</ContentContent>
				<ContentContent>
					<h2 id='2'>学习 React</h2>
					<p>
						学习 React
						的人有着不同的知识背景和学习方式，不管你是理论派还是实践派，我们希望该章节内容对你有帮助。
						如果你喜欢边做边学，请从实践教程开始。
						如果你喜欢一步步学习概念，请从 Hello World 开始。
						和所有新技术一样，React
						也有一条学习曲线。但只要多多实践和保有一点点耐心，你终将掌握它。
					</p>
					<ContentContentList>
						<h3 id='2-1'>第一个示例</h3>
						<p>
							React 首页包含了一些可在线编辑的小示例。即使你对 React
							尚一无所知，也可以尝试修改代码，看看结果会怎样。
						</p>
						<h3 id='2-2'>初学者的 React</h3>
						<p>
							如果你觉得 React 官方文档节奏太快，不太适应，可以先去看看这篇
							Tania Rascia 的 React 概览。它以新手友好的方式详细介绍了最重要的
							React 概念，看完这篇概览，再回来试试看官方文档吧！
						</p>
						<h3 id='2-3'>设计师的 React</h3>
						<p>如果你有设计背景，这些资源是很好的开始。</p>
					</ContentContentList>
				</ContentContent>
				<ContentContent>
					<h2 id='3'>获取最新消息</h2>
					<p>
						React 博客是 React
						团队发布更新的官方渠道。一切重要的信息，包括：更新日志，废弃通知等，都会首先在这里发布。
						你也可以在 Twitter 上关注 @reactjs
						账号获取更新，但即使不这样做，仅通过官方博客你也不会错过任何必要的信息。
						并非每一个 React 版本都值得我们在博客上发布文章，但你可以在 React
						代码仓库中的 CHANGELOG.md 文件或更新日志页面找到每个版本的更新日志。
					</p>
				</ContentContent>
				<ContentContent>
					<h2 id='4'>版本化文档</h2>
					<p>
						官方文档会和最新稳定版的 React 保持同步。从 React 16
						开始，你可以在历史版本页面找到老版本的 React
						文档。注意，老版本的文档是该版本发布时的快照，并不会持续地更新。
					</p>
				</ContentContent>
				<ContentContent>
					<h2 id='5'>找不到想要的？</h2>
					<p>
						如果你找不到想要的内容或觉得文档某些地方让人疑惑，请移步文档仓库提交
						issue 或在 Twitter 上提及 @reactjs 账号。我们期待你的反馈！
					</p>
				</ContentContent>

				<ContentContent>
					<h2 id='6'>代码实例！</h2>
					<p>是时候举个像样的例子了!!! Let's Go .</p>
					<ContentContentList>
						<h3 id='6-1'>举个栗子🥔</h3>
						<p>演示一下代码哈</p>
						<strong>
							<img src='/img/code.jpg' alt='code-demo' />
						</strong>
						<h3 id='6-2'>按钮组件演示</h3>
						<p>
							对于React来讲，写一个复用的组件很简单，我们可以在一个文件里面写出组件的样式分类
							(Textbutton.component.jsx)，再去选择自己喜欢的样式。
						</p>
						<strong>
							<img src='/img/buttoncomponent.jpg' alt='button component' />
						</strong>
						<h3 id='6-3'>对应组件的样式表文件</h3>
						<p>
							我们可以先写一个本组件的基本样式(BaseButton),
							其他样式的组件再去继承BaseButton的基本样式并派生出新的组件
						</p>
						<strong>
							<img src='/img/buttonstyle-1.jpg' alt='button component' />
						</strong>
						<strong>
							<img src='/img/buttonstyle-2.jpg' alt='button component' />
						</strong>
					</ContentContentList>
				</ContentContent>

				<ContentFooter>
					<span>页面是否对你有帮助？</span>
					<ThumbUpIcon />
					<ThumbDownIcon />
					<TextButton>编辑此页面 &rarr;</TextButton>
				</ContentFooter>
			</ContentBox>
		</ContentsContainer>
	);
};

export default Contents;
