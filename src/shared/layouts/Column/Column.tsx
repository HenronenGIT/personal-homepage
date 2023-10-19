import React from 'react';
import styled from 'styled-components';
import { Wrapper } from './styles';

export interface ColumnProps {
	children: React.ReactNode;
	direction?: 'row' | 'column';
	marginLeft?: string;
	marginRight?: string;
	padding?: string;
	justifyContent?: 'space-evenly' | 'space-between' | 'center';
}

export const Column = ({ children, ...rest }: ColumnProps) => {
	return (
		<Wrapper
			marginLeft={rest.marginLeft}
			marginRight={rest.marginRight}
			padding={rest.padding}
			justifyContent={rest.justifyContent}
		>
			{children}
		</Wrapper>
	);
};
