import React from 'react';
import { ButtonContainer, ButtonTextContainer } from './styles';

interface BorderButtonProps {
	children: React.ReactNode;
	icon?: React.ReactElement;
}

export const BorderButton = ({ children, icon }: BorderButtonProps) => {
	return (
		<>
			<ButtonContainer>
				<ButtonTextContainer>{children}</ButtonTextContainer>
				{/* {icon} */}
				{/* <Icon /> */}
			</ButtonContainer>
		</>
	);
};
