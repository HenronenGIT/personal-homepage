import { Container } from '@mui/material';
import styled from 'styled-components';
import { H2, P, Span } from '../../../../shared/styles/typography';
import { color } from '../../../../shared/color';

export const SkillsetContainer = styled(Container)`
	margin: 0 auto 0 auto;
	margin: 300px;
`;

export const SectionTitle = styled(H2)``;

export const SectionDescription = styled(Span)`
	color: ${color.gray300};
	text-justify: 'center';
`;
