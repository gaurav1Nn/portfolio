import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Award } from 'lucide-react';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo('.project-item', 
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.projects-title', 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const projects = [
    {
      title: 'Campus Connect',
      category: 'Full-Stack Development',
      description: 'A peer-to-peer collaboration platform where students share coding achievements, host technical discussions, and access AI-generated learning roadmaps to foster coding excellence.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
      link: 'https://campus-connect-eight-gray.vercel.app/',
      github: 'https://github.com/gaurav1Nn/campus-connect',
      featured: true
    },
    {
      title: 'SuiSplit',
      category: 'Blockchain Development',
      description: 'Decentralized bill-splitting dApp with smart contracts on Sui blockchain, enabling secure crypto settlements with immutable transaction records.',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Sui Blockchain', 'Move'],
      link: 'https://sui-split.vercel.app/',
      github: 'https://github.com/gaurav1Nn/suisplit',
      featured: true,
      award: 'ETHSF Hackathon Winner'
    },
    {
      title: 'Medisen',
      category: 'Machine Learning',
      description: 'Medical assistant web application predicting top 5 diseases from user symptoms using Random Forest Classifier with 80%+ accuracy.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Flask', 'Python', 'Random Forest', 'scikit-learn'],
      link: '#',
      github: 'https://github.com/gaurav1Nn/Medisen',
      featured: false
    }
  ];

  const achievements = [
    {
      title: 'ETHSF Hackathon 2025 Winner',
      description: 'Won $2,000 prize for innovative decentralized solution',
      icon: <Award className="text-yellow-400\" size={24} />
    },
    {
      title: 'LeetCode Problem Solver',
      description: '300+ problems solved with consistent practice',
      icon: <Award className="text-green-400" size={24} />
    },
    {
      title: 'Competitive Programming',
      description: 'Max rating: 1640 (CodeChef), 1231 (Codeforces)',
      icon: <Award className="text-blue-400\" size={24} />
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="projects-title text-5xl md:text-6xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="projects-title text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work spanning full-stack development, blockchain technology, 
            and machine learning applications.
          </p>
        </div>
        
        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.filter(project => project.featured).map((project, index) => (
            <div 
              key={index} 
              className="project-item group relative overflow-hidden rounded-lg bg-gray-900 hover:bg-gray-800 transition-all duration-300"
            >
              {project.award && (
                <div className="absolute top-4 left-4 z-10 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium">
                  🏆 {project.award}
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300"></div>
                
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors duration-300"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <span className="text-sm text-gray-400 uppercase tracking-wide">
                  {project.category}
                </span>
                <h3 className="text-2xl font-semibold mt-2 mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded group-hover:bg-gray-700 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.filter(project => !project.featured).map((project, index) => (
            <div 
              key={index} 
              className="project-item group relative overflow-hidden rounded-lg bg-gray-900 hover:bg-gray-800 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300"></div>
                
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors duration-300"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <span className="text-sm text-gray-400 uppercase tracking-wide">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded group-hover:bg-gray-700 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-gray-900 rounded-lg p-8">
          <h3 className="text-3xl font-bold mb-8 text-center">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 bg-gray-800 rounded-lg">
                <div className="flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{achievement.title}</h4>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="https://github.com/gaurav1Nn" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;