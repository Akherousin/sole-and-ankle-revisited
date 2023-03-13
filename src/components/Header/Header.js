import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <DesktopNav>
          <NavLink href="/sale">
            <NormalLink>Sale</NormalLink>
            <BoldLink aria-hidden="true">Sale</BoldLink>
          </NavLink>
          <NavLink href="/new">
            <NormalLink>New&nbsp;Releases</NormalLink>
            <BoldLink aria-hidden="true">New&nbsp;Releases</BoldLink>
          </NavLink>
          <NavLink href="/men">
            <NormalLink>Men</NormalLink>
            <BoldLink aria-hidden="true">Men</BoldLink>
          </NavLink>
          <NavLink href="/women">
            <NormalLink>Women</NormalLink>
            <BoldLink aria-hidden="true">Women</BoldLink>
          </NavLink>
          <NavLink href="/kids">
            <NormalLink>Kids</NormalLink>
            <BoldLink aria-hidden="true">Kids</BoldLink>
          </NavLink>
          <NavLink href="/collections">
            <NormalLink>Collections</NormalLink>
            <BoldLink aria-hidden="true">Collections</BoldLink>
          </NavLink>
        </DesktopNav>
        <Side />{' '}
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <Icon id="menu" />
            <VisuallyHidden>Menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow-x: scroll;

  @media ${QUERIES.tabletAndSmaller} {
    align-items: center;
    justify-content: space-between;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-inline: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 8.1vw - 4rem, 3rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
    gap: 32px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const Side = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  position: relative;
  overflow: hidden;

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const NormalLink = styled.span`
  display: inline-block;
  transition: transform 300ms;

  ${NavLink}:hover & {
    transform: translateY(-100%);
  }
`;

const BoldLink = styled.span`
  font-weight: ${WEIGHTS.bold};
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(100%);
  transition: transform 300ms;

  ${NavLink}:hover & {
    transform: translateY(0);
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

export default Header;
