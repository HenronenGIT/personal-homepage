import React, { forwardRef } from 'react';
import { TagContainer } from './tag.styles';

interface TagProps {
	children: React.ReactNode;
	icon?: React.ReactNode;
}

const Tag = ({ children, icon }: TagProps) => {
	return (
		<>
			<TagContainer>{children}</TagContainer>
		</>
	);
};

export default Tag;
