/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { COLORS, WEIGHTS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Navigation>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Navigation>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: ${COLORS.transparentGray[700]};
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  height: 100%;
  width: 300px;
  background-color: ${COLORS.white};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
`;

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;

  &:hover {
    color: ${COLORS.primary};
  }
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const NavLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: ${COLORS.gray[900]};
  font-size: calc(18rem / 16);
  font-weight: ${WEIGHTS.medium};

  &:hover {
    color: ${COLORS.secondary};
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FooterLink = styled.a`
  text-decoration: none;
  font-size: calc(14rem / 16);
  font-weight: ${WEIGHTS.normal};
  color: ${COLORS.gray[700]};
`;

export default MobileMenu;
