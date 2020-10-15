import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledButton = styled(motion.button)`
  position: relative;
  border: none;
  color: ${props => props.theme.colors.main};
  background-color: transparent;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.8rem 1.8rem;
  margin: 0 0.75rem;
  font-weight: 600;
  border-radius: 3px;
  &:hover {
    background-color: ${props => props.theme.colors.btn_background};
    transition: all 0.3s;
  }
  &:disabled {
    color: #cccccc;
    cursor: not-allowed;
    background-color: rgb(230, 230, 230, 0.8);
  }
`;

export default StyledButton;
