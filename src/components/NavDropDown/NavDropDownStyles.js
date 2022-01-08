import styled from 'styled-components';

export const DropDownContainer = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	right: -25%;
	top: 40px;
	width: 280px;
	border-radius: 8px;
	z-index: 100;
	cursor: default;
	overflow: hidden;
	transition: 0.3s ease;
	visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
	opacity: ${({ active }) => (active ? '1' : '0')};
	transform-origin: top;
	transform: ${({ active }) => (active ? 'scaleY(1)' : 'scaleY(.3)')};

	@media ${(props) => props.theme.breakpoints.md} {
		top: 32px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		top: 24px;
	}
`;
export const DropDownItem = styled.a`
	width: 100%;
	display: flex;
	align-items: flex-start;
	cursor: pointer;
	transition: 0.3s ease;
	padding: 12px 16px;
	color: rgba(255, 255, 255, 0.75);
	background-color: ${(props) => props.theme.colors.background2};

	&:hover {
		color: ${(props) => props.theme.colors.primary1};
	}
`;

export const DropDownIcon = styled.div`
	width: 32px;
	height: 32px;
	margin-right: 16px;
`;

export const DropDownTextContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const DropDownItemTitle = styled.h2`
	font-size: 18px;
	line-height: 26px;
	text-align: start;
	&:hover {
		color: ${(props) => props.theme.colors.primary1};
	}
`;

export const DropDownItemDesc = styled.p`
	opacity: 0.5;
	font-size: 14px;
	line-height: 22px;
	text-align: start;
	&:hover {
		color: ${(props) => props.theme.colors.primary1};
	}
`;
