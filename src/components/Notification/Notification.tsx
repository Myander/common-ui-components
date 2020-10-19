import React, { useState, FC, useRef, useEffect } from 'react';
import { CloseButton } from './CloseButton';
import { StyledNotification } from './Notification.styles';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const pathVariants = {
  hidden: {
    pathLength: 1,
  },
  visible: {
    pathLength: 0,
    transition: {
      duration: 5,
    },
  },
};

const Path = styled(motion.path)`
  fill: none;
  stroke: rgba(52, 64, 235, 0.8);
  stroke-width: 1;
`;

const Notification: FC = () => {
  const [notification, setNotification] = useState(false);
  const timeout = useRef<number | null>(null);

  const handleNotification = () => {
    if (notification) return;
    setNotification(true);
    timeout.current = setTimeout(() => {
      setNotification(false);
    }, 5000);
  };

  const handleClose = () => {
    if (timeout.current !== null) {
      clearTimeout(timeout.current);
    }
    setNotification(false);
  };

  useEffect(() => {
    return () => {
      if (timeout.current !== null) {
        clearTimeout(timeout.current);
      }
    };
  }, []);

  return (
    <>
      <button onClick={handleNotification}>open notification</button>
      <AnimatePresence>
        {notification && (
          <StyledNotification
            layout
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.5,
              y: 50,
              transition: { duration: 0.2 },
            }}
          >
            <div>1 Todo completed</div>
            <div
              style={{
                display: 'flex',
              }}
            >
              <div
                style={{
                  marginRight: '10px',
                  color: '#cf4513',
                  cursor: 'pointer',
                }}
              >
                Undo
              </div>
              <CloseButton close={handleClose} />
            </div>

            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '6px',
                background: '#4c4c4d1',
                borderRadius: '0 0 3px 3px',
                overflow: 'hidden',
              }}
            >
              <svg viewBox="0 0 10 10" style={{ overflow: 'hidden' }}>
                <Path
                  d="m 0 0 l 10 0"
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                />
              </svg>
            </div>
          </StyledNotification>
        )}
      </AnimatePresence>
    </>
  );
};

export default Notification;
