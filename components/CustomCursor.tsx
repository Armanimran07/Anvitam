import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Expand cursor on interactive elements
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div 
      id="mp-cursor-container" 
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        mixBlendMode: 'difference',
        zIndex: 99999998,
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.15s cubic-bezier(0.23, 1, 0.32, 1)', // Smooth follow
      }}
    >
      <div 
        id="mp-cursor" 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#A0C878', // Updated to new Green color
          borderRadius: '50%',
          width: isHovering ? '60px' : '30px', // Expand on hover
          height: isHovering ? '60px' : '30px',
          transition: 'width 0.3s ease, height 0.3s ease',
        }}
      />
    </div>
  );
};

export default CustomCursor;