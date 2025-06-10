import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Code, Trophy, Users } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stats = [
      { number: 300, suffix: '+', label: 'LeetCode Problems' },
      { number: 8.23, suffix: '', label: 'CGPA' },
      { number: 3, suffix: '', label: 'Major Projects' },
      { number: 2000, suffix: '$', label: 'Hackathon Prize' }
    ];

    // Animate section content
    gsap.fromTo('.about-content', 
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animate stats counters
    stats.forEach((stat, index) => {
      gsap.fromTo(`.stat-${index}`, 
        { innerHTML: 0 },
        {
          innerHTML: stat.number,
          duration: 2,
          snap: { innerHTML: stat.number < 10 ? 0.01 : 1 },
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="about-content">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                About Me
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                I'm a passionate Computer Science Engineering student at Ramdeobaba University, 
                specializing in Data Science with a strong foundation in full-stack development 
                and machine learning.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                My journey includes winning the ETHSF Hackathon 2025 in San Francisco, 
                building innovative blockchain applications, and solving 300+ coding problems. 
                I love creating solutions that make a real impact.
              </p>
            </div>
            
            <div className="about-content">
              <h3 className="text-2xl font-semibold mb-4">Core Expertise</h3>
              <div className="space-y-4">
                {[
                  { skill: 'Full-Stack Development', level: 90 },
                  { skill: 'Data Structures & Algorithms', level: 85 },
                  { skill: 'Machine Learning', level: 80 },
                  { skill: 'Blockchain Development', level: 75 }
                ].map((item, index) => (
                  <div key={index} className="skill-item">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{item.skill}</span>
                      <span className="text-gray-300">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div 
                        className="bg-white h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Content - Stats */}
          <div ref={statsRef} className="about-content">
            <div className="grid grid-cols-2 gap-8">
              {[
                { number: 300, suffix: '+', label: 'LeetCode Problems', icon: <Code size={24} /> },
                { number: 8.23, suffix: '', label: 'CGPA', icon: <Award size={24} /> },
                { number: 3, suffix: '', label: 'Major Projects', icon: <Users size={24} /> },
                { number: 2000, suffix: '$', label: 'Hackathon Prize', icon: <Trophy size={24} /> }
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gray-900 rounded-lg">
                  <div className="flex justify-center mb-3 text-white">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    {stat.suffix === '$' && stat.suffix}
                    <span className={`stat-${index}`}>0</span>
                    {stat.suffix !== '$' && stat.suffix}
                  </div>
                  <p className="text-gray-400 text-sm uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-gray-900 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Recent Achievement</h3>
              <div className="flex items-center space-x-4 mb-4">
                <Trophy className="text-yellow-400" size={32} />
                <div>
                  <p className="text-lg font-semibold">ETHSF Hackathon 2025 Winner</p>
                  <p className="text-gray-300">San Francisco • $2,000 Prize</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Won for developing an innovative decentralized solution under ZetaChain's 
                problem statement, showcasing expertise in blockchain technology.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
              >
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;