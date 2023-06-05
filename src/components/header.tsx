'use client'

import styled from 'styled-components'
import { Saira_Stencil_One } from "next/font/google";

const sairaStencilOne = Saira_Stencil_One({
	weight: [ "400"],
	subsets: ["latin"],
});
interface HeaderProps {}

const TagHeader = styled.header`
	display:flex;
	align-items: center;
	justify-content:space-between;
	padding:20px 160px;
`;
const Logo = styled.a`
	color: var(--logo-color);
	font-weigt: 400;
	font-size: 40px;
	line-height: 150%;
`;
export function Header(props: HeaderProps) {
	return (
		<TagHeader>
			<Logo className={ sairaStencilOne.className}>Capputeeno</Logo>
			<div>pesquisa e carrinho</div>
		</TagHeader>
	);
}
