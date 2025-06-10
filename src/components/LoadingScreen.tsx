import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Animate loading text
    tl.fromTo('.loading-text', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );

    // Hide loading screen after 2.5 seconds
    setTimeout(() => {
      tl.to('.loading-screen', {
        y: '-100%',
        duration: 1.5,
        ease: 'power4.inOut',
        onComplete: () => setIsLoading(false)
      });
    }, 2500);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading-screen">
      <div className="loading-text">
        GAURAV NILAWAR
      </div>
    </div>
  );
};

export default LoadingScreen;