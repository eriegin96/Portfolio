import React from 'react';
import { FaNodeJs, FaReact, FaFigma } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
	<Section id='tech'>
		<SectionDivider />
		<br />
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>
			I've worked with a range a technologies in the web development world. From Back-end To Design
		</SectionText>
		<List>
			<ListItem>
				<FaReact size='3rem' />
				<ListContainer>
					<ListTitle>Front-End</ListTitle>
					<ListParagraph>
						Experience with <br />
						Reactjs
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<FaNodeJs size='3rem' />
				<ListContainer>
					<ListTitle>Back-End</ListTitle>
					<ListParagraph>
						Experience with <br />
						Nodejs and Databases
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<FaFigma size='3rem' />
				<ListContainer>
					<ListTitle>UI/UX</ListTitle>
					<ListParagraph>
						Experience with <br />
						tools like Figma
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
