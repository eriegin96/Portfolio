import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkList>
				<LinkColumn id='phone'>
					<LinkTitle>Call</LinkTitle>
					<LinkItem href='tel:0907-607-638'>0907-607-638</LinkItem>
				</LinkColumn>
				<LinkColumn id='email'>
					<LinkTitle>Email</LinkTitle>
					<LinkItem href='mailto:tritintruong96@gmail.com'>tritintruong96@gmail.com</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>Innovating one project at a time</Slogan>
				</CompanyContainer>
				<SocialContainer>
					<SocialIcons href='https://github.com/eriegin96'>
						<AiFillGithub size='3rem' />
					</SocialIcons>
					<SocialIcons href='https://www.linkedin.com/in/tin-truong-tri-516702123'>
						<AiFillLinkedin size='3rem' />
					</SocialIcons>
					<SocialIcons href='https://instagram.com/eriegin'>
						<AiFillInstagram size='3rem' />
					</SocialIcons>
				</SocialContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	);
};

export default Footer;
