import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledNotification = styled(motion.div)`
  width: 250px;
  padding: 10px 14px 14px 14px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.main};
  margin: 10px;
  display: flex;
  justify-content: space-between;
  box-shadow: ${({ theme }) => theme.colors.menuShadow};
  align-items: center;
  /* flex: 0 0 100px; */
  position: relative;
  border-radius: 3px;
`;

export const StyledButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  padding: 0;
  margin: 0;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const StyledPath = styled(motion.path)`
  stroke: ${({ theme }) => theme.colors.main};
`;
