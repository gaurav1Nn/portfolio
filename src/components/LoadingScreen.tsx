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


// import React, { useEffect, useState, useRef } from 'react';
// import { gsap } from 'gsap';

// const LoadingScreen: React.FC = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const textRef = useRef<HTMLDivElement>(null);
//   const leftPanelRef = useRef<HTMLDivElement>(null);
//   const rightPanelRef = useRef<HTMLDivElement>(null);
  
//   const name = 'GAURAV NILAWAR'; // Move this outside useEffect

//   useEffect(() => {
//     const chars = '!<>-_\\/[]{}—=+*^?#________';
    
//     // Create particles
//     const particleCount = 30;
//     const particlesContainer = containerRef.current?.querySelector('.particles');
    
//     if (particlesContainer) {
//       for (let i = 0; i < particleCount; i++) {
//         const particle = document.createElement('div');
//         particle.className = 'particle';
//         particle.style.left = `${Math.random() * 100}%`;
//         particle.style.animationDelay = `${Math.random() * 5}s`;
//         particle.style.animationDuration = `${5 + Math.random() * 10}s`;
//         particlesContainer.appendChild(particle);
//       }
//     }

//     // Text scramble effect with delay
//     setTimeout(() => {
//       const letterElements = textRef.current?.querySelectorAll('.letter');
//       if (letterElements) {
//         letterElements.forEach((letter, index) => {
//           const originalChar = name[index];
//           let iteration = 0;
//           const maxIterations = 20;
          
//           const scrambleInterval = setInterval(() => {
//             if (iteration < maxIterations) {
//               (letter as HTMLElement).textContent = originalChar === ' ' ? '\u00A0' : 
//                 chars[Math.floor(Math.random() * chars.length)];
//               letter.classList.add('scrambling');
//             } else {
//               (letter as HTMLElement).textContent = originalChar === ' ' ? '\u00A0' : originalChar;
//               letter.classList.remove('scrambling');
//               letter.classList.add('revealed');
//               clearInterval(scrambleInterval);
//             }
//             iteration++;
//           }, 50);
//         });
//       }
//     }, 100); // Small delay to ensure DOM is ready

//     // Exit animation
//     const exitTimer = setTimeout(() => {
//       const tl = gsap.timeline();
      
//       tl.to('.particle', {
//         opacity: 0,
//         y: -50,
//         duration: 0.5,
//         stagger: 0.01,
//         ease: 'power2.in'
//       })
//       .to(leftPanelRef.current, {
//         x: '-100%',
//         duration: 1,
//         ease: 'power4.inOut'
//       }, '-=0.2')
//       .to(rightPanelRef.current, {
//         x: '100%',
//         duration: 1,
//         ease: 'power4.inOut',
//         onComplete: () => setIsLoading(false)
//       }, '<');
//     }, 3000);

//     return () => {
//       clearTimeout(exitTimer);
//     };
//   }, []);

//   if (!isLoading) return null;

//   return (
//     <div ref={containerRef} className="loading-screen fixed inset-0 z-50 overflow-hidden">
//       <div ref={leftPanelRef} className="absolute inset-y-0 left-0 w-1/2 bg-black"></div>
//       <div ref={rightPanelRef} className="absolute inset-y-0 right-0 w-1/2 bg-black"></div>
      
//       <div className="particles absolute inset-0"></div>
      
//       <div className="absolute inset-0 flex items-center justify-center z-10">
//         <div ref={textRef} className="loading-text text-white text-4xl md:text-6xl lg:text-5xl font-bold tracking-wider">
//           {name.split('').map((char, i) => (
//             <span key={i} className="letter inline-block">
//               {char === ' ' ? '\u00A0' : char}
//             </span>
//           ))}
//         </div>
//       </div>
      
//       <style>{`
//         .loading-screen {
//           font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
//         }
        
//         .particle {
//           position: absolute;
//           width: 2px;
//           height: 2px;
//           background: rgba(255, 255, 255, 0.6);
//           border-radius: 50%;
//           animation: float linear infinite;
//         }
        
//         @keyframes float {
//           from {
//             transform: translateY(100vh) translateX(0);
//             opacity: 0;
//           }
//           10% {
//             opacity: 1;
//           }
//           90% {
//             opacity: 1;
//           }
//           to {
//             transform: translateY(-100vh) translateX(100px);
//             opacity: 0;
//           }
//         }
        
//         .letter {
//           transition: color 0.3s, text-shadow 0.3s;
//         }
        
//         .letter.scrambling {
//           color: #999;
//           text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
//         }
        
//         .letter.revealed {
//           color: #fff;
//           animation: glow 0.5s ease-out;
//         }
        
//         @keyframes glow {
//           0% {
//             text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
//           }
//           100% {
//             text-shadow: 0 0 0px rgba(255, 255, 255, 0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default LoadingScreen;


