import React, { useEffect, FC, useRef, useState } from 'react';
import { Dropdown, MenuButton } from './DropdownGeneric.styles';
import { ArrowDownIcon } from '../icons/Icons';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ThemedArrowIcon = styled(ArrowDownIcon)`
  color: ${props => props.theme.colors.main};
  margin: 0;
  padding: 0;
  width: 15px;
  height: 15px;
`;

const Test = styled(motion.svg)`
  color: ${props => props.theme.colors.main};
  margin: 0;
  padding: 0;
  width: 15px;
  height: 15px;
`;

export interface DropdownGenericProps {
  title: string;
}

const DropdownHover: FC<DropdownGenericProps> = props => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuOffset, setMenuOffset] = useState({ x: 0, y: 0 });

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleResize = () => {
    if (containerRef.current && menuRef.current) {
      const menuWidth = menuRef.current.offsetWidth;
      const diff = (menuWidth - containerRef.current.offsetWidth) / 2;
      const yPos =
        containerRef.current.offsetTop + containerRef.current.offsetHeight - 2;
      let xPos = containerRef.current.offsetLeft - diff;
      let offset = 0;
      if (xPos + menuWidth > window.innerWidth) {
        offset = xPos + menuWidth - window.innerWidth + 2;
        xPos = xPos - offset;
      }

      if (xPos < 0) xPos = 2;
      setMenuOffset({ x: xPos, y: yPos });
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onClick={e => e.stopPropagation()}
      style={{
        display: 'inline-block',
      }}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      <MenuButton open={open}>
        <div>{props.title}</div>
        <motion.div
          initial={false}
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ThemedArrowIcon />
        </motion.div>
        {/* <ThemedArrowIcon /> */}
      </MenuButton>
      <Dropdown
        ref={menuRef}
        open={open}
        xPos={menuOffset.x}
        yPos={menuOffset.y}
        initial={false}
        animate={{ opacity: open ? 1 : 0, height: open ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        {props.children}
      </Dropdown>
    </div>
  );
};

export default DropdownHover;
