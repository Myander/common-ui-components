import styled from 'styled-components';
import Button from '../Button/Button.styled';
import { motion } from 'framer-motion';

export interface DropdownProps {
  open: boolean;
  xPos: number;
  yPos: number;
  // dHeight: number | null;
}

export const Dropdown = styled(motion.div)<DropdownProps>`
  position: absolute;
  left: ${props => props.xPos + 'px'};
  top: ${props => props.yPos + 'px'};
  /* visibility: ${props => (props.open ? 'visible' : 'hidden')}; */
  /* opacity: ${props => (props.open ? 1 : 0)}; */
  box-shadow: ${props => props.theme.colors.menuShadow};
  background: ${props => props.theme.colors.backgroundSecondary};
  z-index: 1100;
  overflow: hidden;
  /* transition: opacity 0.3s ease-in-out; */
`;

interface BtnProps {
  open: boolean;
}

export const MenuButton = styled(Button)<BtnProps>`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.open ? props.theme.colors.btn_background : 'transparent'};
`;
