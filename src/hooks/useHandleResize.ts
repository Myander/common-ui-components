import { useEffect, useRef, useState } from 'react';

export default function useHandleResize() {
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuOffset, setMenuOffset] = useState({ x: 0, y: 0 });

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
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return [containerRef, menuRef, menuOffset, handleResize];
}
