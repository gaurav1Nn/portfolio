import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    gsap.fromTo('.contact-content', 
      { y: 80, opacity: 0 },
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
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    
    // Animate button on submit
    gsap.to('.submit-btn', {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="contact-content text-5xl md:text-6xl font-bold mb-6">
            Let's Connect
          </h2>
          <p className="contact-content text-xl text-gray-600 max-w-3xl mx-auto">
            I'm actively seeking internship and full-time opportunities. 
            Let's discuss how we can work together to build something amazing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="contact-content">
              <h3 className="text-3xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                I'm currently in my final year of Computer Science Engineering at 
                Ramdeobaba University and actively looking for opportunities to apply 
                my skills in real-world projects. Whether it's an internship, 
                full-time role, or freelance project, I'd love to hear from you.
              </p>
            </div>
            
            <div className="contact-content space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-black text-white rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:nilawargaurav@gmail.com" className="text-gray-600 hover:text-black transition-colors">
                    nilawargaurav@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-black text-white rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+919922874715" className="text-gray-600 hover:text-black transition-colors">
                    +91-9922874715
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-black text-white rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600">Nagpur, Maharashtra, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-content">
              <h4 className="text-xl font-semibold mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/gaurav1Nn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-200 rounded-lg hover:bg-black hover:text-white transition-all duration-300 group"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/gaurav-nilawar-99185b259/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-200 rounded-lg hover:bg-black hover:text-white transition-all duration-300 group"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://leetcode.com/u/gauravnilawar26/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-200 rounded-lg hover:bg-black hover:text-white transition-all duration-300 group"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            
            <div className="contact-content">
              <h4 className="text-xl font-semibold mb-4">What I Bring</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                  <span>Strong foundation in Computer Science with 8.23 CGPA</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                  <span>Proven problem-solving skills with 300+ LeetCode problems</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                  <span>Hackathon winner with practical project experience</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                  <span>Full-stack development and machine learning expertise</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="contact-content">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                  placeholder="Internship Opportunity / Job Discussion"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                  placeholder="Tell me about the opportunity or project you'd like to discuss..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="submit-btn w-full bg-black text-white px-6 py-4 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
        
        {/* Footer */}
        <div className="contact-content text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">
            © 2025 Gaurav Nilawar. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Built with React, TypeScript, GSAP & Tailwind CSS • 
            <a href="https://github.com/gaurav1Nn" className="hover:text-black transition-colors ml-1">
              View Source Code
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;