import React, { useEffect } from 'react';

const CustomCursor: React.FC = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    const cursorOutline = document.createElement('div');
    
    cursor.className = 'cursor-dot';
    cursorOutline.className = 'cursor-outline';
    
    document.body.appendChild(cursor);
    document.body.appendChild(cursorOutline);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      
      cursorOutline.style.left = e.clientX - 20 + 'px';
      cursorOutline.style.top = e.clientY - 20 + 'px';
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
      document.body.removeChild(cursorOutline);
    };
  }, []);

  return null;
};

export default CustomCursor;