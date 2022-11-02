import { useState } from "react";

import ContainerOne from "../../Container/ContainerOne/containerOne.component";
import { Input } from "../../Components/Form-input/form-input.style";

import Button, {
	BUTTON_TYPE_CLASSES,
} from "../../Components/Button/button-component";
import TextButton, {
	TEXT_BUTTON_TYPE_CLASSES,
} from "../../Components/Button-text/buttonText.component";
import Text from "../../Components/Text/text.component";
import Title, {
	TITLE_TYPE_CLASSES,
} from "../../Components/Title/title.component";

import { AuthContainer } from "./auth.style";
const Auth = () => {
	const [click, setClick] = useState(false);
	const clickHandler = () => {
		setClick(!click);
	};
	return (
		<ContainerOne>
			<AuthContainer>
				<div className={`container ${click ? "right-panel-active" : ""}`}>
					<div className='form-container sign-up-container'>
						<form action='#'>
							<Title titleType={TITLE_TYPE_CLASSES.tertiary}>
								Create Account
							</Title>
							<Input type='text' placeholder='Name' />
							<Input type='email' placeholder='Email' />
							<Input type='password' placeholder='Password' />
							<Input type='password' placeholder='Password Confirm' />
							<Button buttonType={BUTTON_TYPE_CLASSES.auth_1}>Sign Up</Button>
						</form>
					</div>
					<div className='form-container sign-in-container'>
						<form action='#'>
							<Title titleType={TITLE_TYPE_CLASSES.tertiary}>Sign in</Title>
							<Input type='email' placeholder='Email' />
							<Input type='password' placeholder='Password' />
							<TextButton buttonType={TEXT_BUTTON_TYPE_CLASSES.base_2}>
								Forgot password &rarr;
							</TextButton>
							<Button buttonType={BUTTON_TYPE_CLASSES.auth_1}>Sign In</Button>
						</form>
					</div>
					<div className='overlay-container'>
						<div className='overlay'>
							<div className='overlay-panel overlay-left'>
								<Title titleType={TITLE_TYPE_CLASSES.secondary}>
									welcome back!
								</Title>
								<Text>
									如果需要和其他人或与本人联系，请使用您正确的个人信息登录，谢谢！
								</Text>
								<Button
									buttonType={BUTTON_TYPE_CLASSES.auth_2}
									className='ghost'
									onClick={clickHandler}>
									Sign In
								</Button>
							</div>
							<div className='overlay-panel overlay-right'>
								<Title titleType={TITLE_TYPE_CLASSES.secondary}>
									Hello, Friend!
								</Title>
								<Text>输入您的个人信息并与我们一起开始旅程!</Text>
								<Button
									buttonType={BUTTON_TYPE_CLASSES.auth_2}
									className='ghost'
									onClick={clickHandler}>
									Sign Up
								</Button>
							</div>
						</div>
					</div>
				</div>
			</AuthContainer>
		</ContainerOne>
	);
};

export default Auth;
