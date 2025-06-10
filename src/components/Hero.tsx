// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

// const Hero: React.FC = () => {
//   const heroRef = useRef<HTMLDivElement>(null);
//   const nameRef = useRef<HTMLDivElement>(null);
//   const descriptionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const tl = gsap.timeline({ delay: 3.5 });
    
//     // Animate hero name with staggered letters
//     tl.fromTo('.hero-letter', 
//       { y: 100, opacity: 0 },
//       { 
//         y: 0, 
//         opacity: 1, 
//         duration: 0.8, 
//         stagger: 0.05,
//         ease: 'power2.out' 
//       }
//     )
//     .fromTo('.hero-description', 
//       { y: 50, opacity: 0 },
//       { y: 0, opacity: 1, duration: 1, ease: 'power2.out' },
//       '-=0.3'
//     )
//     .fromTo('.hero-cta', 
//       { y: 30, opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
//       '-=0.5'
//     )
//     .fromTo('.hero-image', 
//       { scale: 0.8, opacity: 0 },
//       { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' },
//       '-=1'
//     )
//     .fromTo('.availability', 
//       { x: 50, opacity: 0 },
//       { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
//       '-=0.8'
//     );

//     // Parallax effect for background
//     gsap.to('.hero-bg', {
//       yPercent: -50,
//       ease: 'none',
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: 'top bottom',
//         end: 'bottom top',
//         scrub: true
//       }
//     });
//   }, []);

//   const scrollToNext = () => {
//     const aboutSection = document.getElementById('about');
//     if (aboutSection) {
//       aboutSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section ref={heroRef} className="hero-section min-h-screen flex items-center relative overflow-hidden bg-gray-50">
//       <div className="hero-bg absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 opacity-50"></div>
      
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
//         {/* Left Content */}
//         <div className="space-y-8">
//           <div className="space-y-2">
//             <div ref={nameRef} className="text-xl md:text-8xl lg:text-9xl font-black leading-none">
//               {'GAURAV NILAWAR'.split('').map((letter, index) => (
//                 <span key={index} className="hero-letter inline-block">
//                   {letter === ' ' ? '\u00A0' : letter}
//                 </span>
//               ))}
//             </div>
//           </div>
          
//           <div ref={descriptionRef} className="hero-description max-w-lg">
//             <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
//               Computer Science Engineering student specializing in Data Science. 
//               Passionate about building innovative full-stack applications and solving complex problems.
//             </p>
//             <p className="text-base text-gray-500">
//               Currently pursuing B.Tech at Ramdeobaba University, Nagpur • CGPA: 8.23
//             </p>
//           </div>
          
//           <div className="hero-cta flex flex-col sm:flex-row gap-4">
//             <button 
//               onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
//               className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
//             >
//               GET IN TOUCH ↗
//             </button>
            
//             <div className="flex space-x-4">
//               <a 
//                 href="https://github.com/gaurav1Nn" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="p-3 border border-gray-300 rounded-full hover:bg-black hover:text-white transition-all duration-300"
//               >
//                 <Github size={20} />
//               </a>
//               <a 
//                 href="https://www.linkedin.com/in/gaurav-nilawar-99185b259/" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="p-3 border border-gray-300 rounded-full hover:bg-black hover:text-white transition-all duration-300"
//               >
//                 <Linkedin size={20} />
//               </a>
//               <a 
//                 href="mailto:nilawargaurav@gmail.com"
//                 className="p-3 border border-gray-300 rounded-full hover:bg-black hover:text-white transition-all duration-300"
//               >
//                 <Mail size={20} />
//               </a>
//             </div>
//           </div>
          
//           <button 
//             onClick={scrollToNext}
//             className="flex items-center space-x-2 text-gray-500 hover:text-black transition-colors duration-300 mt-12"
//           >
//             <ArrowDown size={20} className="animate-bounce-slow" />
//             <span>Scroll to explore</span>
//           </button>
//         </div>
        
//         {/* Right Content */}
//         <div className="relative">
//           <div className="hero-image">
//             <img 
//               src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800" 
//               alt="Developer workspace" 
//               className="w-full h-96 md:h-[500px] object-cover rounded-lg shadow-2xl"
//             />
//           </div>
          
//           <div className="availability absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
//             <p className="text-sm text-gray-500 mb-1">AVAILABLE FOR</p>
//             <p className="text-2xl font-bold">INTERNSHIPS</p>
//             <p className="text-sm text-gray-500">& FULL-TIME</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    // Animate hero name with staggered letters
    tl.fromTo('.hero-letter', 
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.05,
        ease: 'power2.out' 
      }
    )
    .fromTo('.hero-description', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out' },
      '-=0.3'
    )
    .fromTo('.hero-cta', 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.5'
    )
    .fromTo('.hero-image', 
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' },
      '-=1'
    )
    .fromTo('.availability', 
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.8'
    );

    // Parallax effect for background
    gsap.to('.hero-bg', {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className="hero-section min-h-screen flex items-center relative overflow-hidden bg-stone-400">
      <div className="hero-bg absolute inset-0 bg-gradient-to-br from-stone-50 to-stone-200 opacity-100"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-2">
            <div ref={nameRef} className="text-3xl md:text-6xl lg:text-8xl font-black leading-tight">
              {/* First Name */}
              <div>
                {'GAURAV'.split('').map((letter, index) => (
                  <span key={`gaurav-${index}`} className="hero-letter inline-block">
                    {letter}
                  </span>
                ))}
              </div>
              
              {/* Last Name */}
              <div>
                {'NILAWAR'.split('').map((letter, index) => (
                  <span key={`nilawar-${index}`} className="hero-letter inline-block">
                    {letter}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div ref={descriptionRef} className="hero-description max-w-lg">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
              Computer Science Engineering student specializing in Data Science. 
              Passionate about building innovative full-stack applications and solving complex problems.
            </p>
            <p className="text-base text-gray-500">
              Currently pursuing B.Tech at Ramdeobaba University, Nagpur • CGPA: 8.23
            </p>
          </div>
          
          <div className="hero-cta flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              GET IN TOUCH ↗
            </button>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com/gaurav1Nn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 border border-gray-300 rounded-full hover:bg-black hover:text-white transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/gaurav-nilawar-99185b259/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 border border-gray-300 rounded-full hover:bg-black hover:text-white transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:nilawargaurav@gmail.com"
                className="p-3 border border-gray-300 rounded-full hover:bg-black hover:text-white transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <button 
            onClick={scrollToNext}
            className="flex items-center space-x-2 text-gray-500 hover:text-black transition-colors duration-300 mt-12"
          >
            <ArrowDown size={20} className="animate-bounce" />
            <span>Scroll to explore</span>
          </button>
        </div>
        
        {/* Right Content */}
        <div className="relative">
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Modern developer workspace with multiple monitors and coding setup" 
              className="w-full h-96 md:h-[500px] object-cover rounded-lg shadow-2xl"
            />
          </div>
          
          <div className="availability absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
            <p className="text-sm text-gray-500 mb-1">AVAILABLE FOR</p>
            <p className="text-2xl font-bold">INTERNSHIPS</p>
            <p className="text-sm text-gray-500">& FULL-TIME</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;