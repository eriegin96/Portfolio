import React from 'react';
import { AiOutlinePhone, AiOutlineMail, AiOutlineProfile } from 'react-icons/ai';

import {
	DropDownContainer,
	DropDownIcon,
	DropDownItem,
	DropDownItemDesc,
	DropDownItemTitle,
	DropDownTextContainer,
} from './NavDropDownStyles';

const NavDropDown = (props) => (
	<DropDownContainer active={props.isOpen}>
		<DropDownItem href='#phone'>
			<DropDownIcon>
				<AiOutlinePhone />
			</DropDownIcon>
			<DropDownTextContainer>
				<DropDownItemTitle>Phone</DropDownItemTitle>
				<DropDownItemDesc>Let's get together and have a chat?'</DropDownItemDesc>
			</DropDownTextContainer>
		</DropDownItem>
		<DropDownItem href='#email'>
			<DropDownIcon>
				<AiOutlineMail />
			</DropDownIcon>
			<DropDownTextContainer>
				<DropDownItemTitle>Email</DropDownItemTitle>
				<DropDownItemDesc>
					If you want to talk, just send a message and I'll get back
				</DropDownItemDesc>
			</DropDownTextContainer>
		</DropDownItem>
		<DropDownItem href='#resume'>
			<DropDownIcon>
				<AiOutlineProfile />
			</DropDownIcon>
			<DropDownTextContainer>
				<DropDownItemTitle>Resume</DropDownItemTitle>
				<DropDownItemDesc>Keep my resume to contact by downloading it</DropDownItemDesc>
			</DropDownTextContainer>
		</DropDownItem>
	</DropDownContainer>
);

export default NavDropDown;
