import { FromGroup, Input, Label } from "./form-input.style";

const FormInput = (props) => {
	return (
		<FromGroup>
			<Input {...otherProps} />
			{props?.label && (
				<Label shrink={otherProps.value.length} htmlFor={`${otherProps.id}`}>
					{props.label}
				</Label>
			)}
		</FromGroup>
	);
};

export default FormInput;
