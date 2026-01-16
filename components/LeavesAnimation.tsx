import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const LeavesAnimation: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Generate random properties for leaves
  const leaves = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 10}s`, // Reduced delay for faster visibility
    animationDuration: `${10 + Math.random() * 10}s`,
    scale: 0.8 + Math.random() * 0.5,
  }));

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      <style>{`
        @keyframes falling {
          0% {
            transform: translate(0, -10vh) rotate(0deg) rotateX(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translate(100px, 110vh) rotate(720deg) rotateX(180deg);
            opacity: 0;
          }
        }
        @keyframes sway {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(25px); }
        }
        .leaf-item {
            position: absolute;
            top: -10%;
            width: 50px;
            height: 50px;
            background-size: contain;
            background-repeat: no-repeat;
            opacity: 0;
            animation: falling linear infinite;
        }
        /* Realistic Leaf */
        .leaf-item {
            background-image: url("/green_leaf.png");
            filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.1));
        }
      `}</style>

      {leaves.map((leaf, i) => (
        <div
          key={leaf.id}
          className="leaf-item"
          style={{
            left: leaf.left,
            animationDelay: leaf.animationDelay,
            animationDuration: leaf.animationDuration,
            transform: `scale(${leaf.scale})`,
          }}
        />
      ))}
    </div>,
    document.body
  );
};

export default LeavesAnimation;