import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import NavDropDown from '../NavDropDown/NavDropDown';

import {
	DropDownBtn,
	Container,
	Div1,
	Div2,
	Div3,
	NavLink,
	NavProductsIcon,
	SocialIcons,
	Span,
	Logo,
} from './HeaderStyles';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const handleMenuClick = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<Container>
			<Div1>
				<Link href='/'>
					<Logo>
						<DiCssdeck size='3rem' />
						<Span>Portfolio</Span>
					</Logo>
				</Link>
			</Div1>
			<Div2>
				<li>
					<Link href='#projects'>
						<NavLink>Projects</NavLink>
					</Link>
				</li>
				<li>
					<Link href='#tech'>
						<NavLink>Technologies</NavLink>
					</Link>
				</li>
				<li>
					<Link href='#about'>
						<NavLink>About</NavLink>
					</Link>
				</li>
				<li>
					<DropDownBtn onClick={handleMenuClick} onBlur={() => setIsMenuOpen(false)}>
						Contact
						<NavProductsIcon isOpen={isMenuOpen} />
						<NavDropDown isOpen={isMenuOpen} />
					</DropDownBtn>
				</li>
			</Div2>
			<Div3>
				<SocialIcons href='https://github.com/eriegin96'>
					<AiFillGithub size='3rem' />
				</SocialIcons>
				<SocialIcons href='https://www.linkedin.com/in/tin-truong-tri-516702123/'>
					<AiFillLinkedin size='3rem' />
				</SocialIcons>
				<SocialIcons href='https://instagram.com/eriegin'>
					<AiFillInstagram size='3rem' />
				</SocialIcons>
			</Div3>
		</Container>
	);
};

export default Header;
