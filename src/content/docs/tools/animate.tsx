import { useMeasureParent } from '@/hooks/use-measure-parent';
import { AnimationControls, AnimationDefinition, motion, useAnimation } from 'framer-motion';
import { RefObject, useEffect, useState } from 'react';

const LineWithCircle: React.FC<{
  hovered?: boolean;
  x?: number;
  y?: number;
}> = ({ hovered = false, x = 10, y = 5 }) => {
  // Animation controls for the motion elements
  const controls = useAnimation();
  const [isPlaying, setIsPlaying] = useState(false);

  // Animation styles for hover
  const hoverAnimation = {
    x: [x, 20 - x + 6],
  } satisfies AnimationDefinition;

  useEffect(() => {
    if (isPlaying) return;
    if (!hovered) return;

    setIsPlaying(true);
    void controls
      .start(hoverAnimation, {
        duration: 0.5,
        ease: [0.68, -0.6, 0.32, 1.6],
        repeat: 1,
        repeatType: 'reverse',
      })
      .finally(() => {
        setIsPlaying(false);
      });
  }, [controls, hovered, hoverAnimation, isPlaying]);

  return (
    <>
      {/* Line */}
      <path
        fill="none"
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M-4 0L12 0"
        transform={`translate(10 ${y})`}
      />
      {/* Circle */}
      <motion.circle
        r="1.5"
        fill="#000"
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ x, y }}
        animate={controls}
        transition={{ duration: 1 }}
        transform={`translate(${x} ${y})`}
      />
    </>
  );
};

export const SettingsIcon: React.FC<{
  hoverRef?: RefObject<HTMLElement>;
}> = ({ hoverRef }) => {
  // State to track hover status
  const [isHovered, setIsHovered] = useState(false);

  // Handle hover start
  const handleHoverStart = async () => {
    setIsHovered(true);
  };

  // Handle hover end
  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const element = hoverRef?.current;
    element?.addEventListener('mouseenter', handleHoverStart);
    element?.addEventListener('mouseleave', handleHoverEnd);

    return () => {
      element?.removeEventListener('mouseenter', handleHoverStart);
      element?.removeEventListener('mouseleave', handleHoverEnd);
    };
  }, [hoverRef]);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <LineWithCircle hovered={isHovered} x={10} y={5} />
      <LineWithCircle hovered={isHovered} x={16} y={10} />
      <LineWithCircle hovered={isHovered} x={12} y={15} />
      <LineWithCircle hovered={isHovered} x={16} y={20} />
    </svg>
  );
};


<motion.path
        fill="none"
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M-3 4v-6a2 2 0 012-2h2a2 2 0 012 2v6"
        transform="translate(11.5 16)"
        initial={{
          transform: 'translate(11.5 15)',
        }}
        animate={{
          transform: 'translate(0 -24)',
          transition: {
            duration: 0.5,
            ease: [0.68, -0.6, 0.32, 1.6],
            repeat: 1,
            repeatType: 'reverse',
          },
        }}
      />