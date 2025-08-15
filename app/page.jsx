"use client";

import { motion } from "framer-motion";
import {
  FaCamera,
  FaVideo,
  FaEye,
  FaPalette,
  FaGraduationCap,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaInstagram,
  FaSnapchatGhost,
  FaLinkedin,
  FaArrowRight,
  FaStar,
  FaPlay,
  FaImage,
  FaEdit,
  FaFilter,
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { useState } from "react";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = [
    {
      icon: FaCamera,
      name: "Photo Editing",
      description: "Color correction, skin retouching, custom filters",
    },
    {
      icon: FaVideo,
      name: "Video Editing",
      description: "Seamless cuts, color grading, smooth transitions",
    },
    {
      icon: FaEye,
      name: "Snapchat Lens Creation",
      description: "Non-animation-based lens specialization",
    },
    {
      icon: FaPalette,
      name: "Frame Design",
      description: "Creative overlays and visual enhancements",
    },
    {
      icon: FaEdit,
      name: "Design Aesthetics",
      description: "Composition and visual appeal expertise",
    },
    {
      icon: FaFilter,
      name: "Custom Filters",
      description: "Unique filter design and implementation",
    },
  ];

  const tools = [
    { category: "Photo Editing", tools: ["Lightroom", "Snapseed", "PicsArt"] },
    { category: "Video Editing", tools: ["CapCut", "VN", "Kinemaster"] },
    { category: "Lens Making", tools: ["Snapchat Lens Studio"] },
    { category: "Graphic Design", tools: ["Canva", "Pixellab"] },
  ];

  const works = [
    {
      id: 1,
      title: "Promotional Posters",
      category: "Graphic Design",
      image: "/pr1.jpg",
    },
    {
      id: 2,
      title: "Filmscape Filter",
      category: "Colour Grading",
      image: "/pr2.png",
    },
    {
      id: 3,
      title: "Promotional Poster",
      category: "Graphic Design",
      image: "/pr3.jpg",
    },
    {
      id: 4,
      title: "Digital Film",
      category: "Colour Grading",
      image: "/pr4.png",
    },
    {
      id: 5,
      title: "Colourful Vibe",
      category: "Colour Grading",
      image: "/pr5.png",
    },
    {
      id: 6,
      title: "Dazzel Cam",
      category: "Colour Grading",
      image: "/pr6.png",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen max-w-screen overflow-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold"
            >
              Shakil Khan
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-gray-300 transition-colors">
                Home
              </a>
              <a
                href="#about"
                className="hover:text-gray-300 transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="hover:text-gray-300 transition-colors"
              >
                Skills
              </a>
              <a
                href="#portfolio"
                className="hover:text-gray-300 transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="accent-bg hover:accent-bg px-4 py-2 rounded-lg transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 border-t border-gray-800"
            >
              <div className="flex flex-col space-y-4">
                <a
                  href="#home"
                  className="hover:text-gray-300 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="hover:text-gray-300 transition-colors"
                >
                  About
                </a>
                <a
                  href="#skills"
                  className="hover:text-gray-300 transition-colors"
                >
                  Skills
                </a>
                <a
                  href="#portfolio"
                  className="hover:text-gray-300 transition-colors"
                >
                  Portfolio
                </a>
                <a
                  href="#contact"
                  className="accent-text hover:text-gray-300 transition-colors"
                >
                  Contact
                </a>
              </div>
            </motion.nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-5xl lg:text-7xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Shakil Khan
              </motion.h1>
              <motion.p
                className="text-xl lg:text-2xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Creative Photo & Video Editor
              </motion.p>
              <motion.p
                className="text-lg text-gray-400 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Transforming moments into masterpieces through the art of
                digital editing. Specializing in photo retouching, video
                editing, and Snapchat lens creation.
              </motion.p>
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <a
                  href="#portfolio"
                  className="accent-bg hover:accent-bg text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
                >
                  View My Work <FaArrowRight />
                </a>
                <a
                  href="#contact"
                  className="border accent-border accent-text hover:accent-bg hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Contact Me
                </a>
              </motion.div>
          
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-white/0 to-black/0 rounded-sm z-10"></div>
                <img
                  src="/sk4.jpg"
                  alt="Shakil Khan"
                  className="w-full scale-110 h-full object-cover rounded-sm"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="accent-text">Me</span>
            </h2>
            <div className="w-20 h-1 accent-bg mx-auto mb-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 accent-text">
                Creative Vision Meets Technical Precision
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm Shakil Khan, a dynamic professional who blends
                administrative expertise with creative digital skills. My
                journey in photo and video editing is driven by passion for
                transforming ordinary moments into extraordinary visual stories.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                As a popular Snapchat filter creator, I specialize in
                non-animation-based lenses that captivate audiences. My
                technical proficiency extends beyond editing to include fast and
                accurate documentation, making me highly efficient in all
                aspects of digital creation.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Fluent in Hindi and English, I bring both analytical thinking
                and artistic vision to every project, ensuring each creation
                resonates with its intended audience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-black p-6 rounded-lg border border-gray-800">
                <FaStar className="text-3xl accent-text mb-4" />
                <h4 className="text-xl font-bold mb-2">50+</h4>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div className="bg-black p-6 rounded-lg border border-gray-800">
                <FaEye className="text-3xl accent-text mb-4" />
                <h4 className="text-xl font-bold mb-2">Popular</h4>
                <p className="text-gray-400">Snapchat Creator</p>
              </div>
              <div className="bg-black p-6 rounded-lg border border-gray-800">
                <FaImage className="text-3xl accent-text mb-4" />
                <h4 className="text-xl font-bold mb-2">Expert</h4>
                <p className="text-gray-400">Photo Retouching</p>
              </div>
              <div className="bg-black p-6 rounded-lg border border-gray-800">
                <FaVideo className="text-3xl accent-text mb-4" />
                <h4 className="text-xl font-bold mb-2">Pro</h4>
                <p className="text-gray-400">Video Editor</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              My <span className="accent-text">Skills</span>
            </h2>
            <div className="w-20 h-1 accent-bg mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-950 p-6 rounded-lg border border-gray-800 hover:accent-border transition-colors group"
              >
                <skill.icon className="text-4xl accent-text mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">{skill.name}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Tools Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center mb-12">
              Tools I <span className="accent-text">Master</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tools.map((toolCategory, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-950 p-6 rounded-lg border border-gray-800"
                >
                  <h4 className="text-lg font-bold accent-text mb-4">
                    {toolCategory.category}
                  </h4>
                  <ul className="space-y-2">
                    {toolCategory.tools.map((tool, toolIndex) => (
                      <li
                        key={toolIndex}
                        className="text-gray-300 flex items-center gap-2"
                      >
                        <div className="w-2 h-2 accent-bg rounded-full"></div>
                        {tool}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Education & <span className="accent-text">Background</span>
            </h2>
            <div className="w-20 h-1 accent-bg mx-auto mb-8"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-black p-8 rounded-lg border border-gray-800"
              >
                <FaGraduationCap className="text-4xl accent-text mb-4" />
                <h3 className="text-2xl font-bold mb-4">Current Education</h3>
                <h4 className="text-xl accent-text mb-2">
                  Bachelor of Arts (BA)
                </h4>
                <p className="text-gray-300 mb-2">
                  ISBA Institute, Dewas Naka, Indore
                </p>
                <p className="text-gray-400">Currently Pursuing</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-black p-8 rounded-lg border border-gray-800"
              >
                <FaGraduationCap className="text-4xl accent-text mb-4" />
                <h3 className="text-2xl font-bold mb-4">Secondary Education</h3>
                <h4 className="text-xl accent-text mb-2">12th Grade (71%)</h4>
                <p className="text-gray-300 mb-2">JNV Dewas</p>
                <p className="text-gray-400">Completed</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 bg-black p-8 rounded-lg border border-gray-800 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Additional Skills</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-lg font-semibold accent-text mb-2">
                    Languages
                  </h4>
                  <p className="text-gray-300">Hindi & English (Fluent)</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold accent-text mb-2">
                    Administrative
                  </h4>
                  <p className="text-gray-300">Tally, Office Management</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold accent-text mb-2">
                    Technical
                  </h4>
                  <p className="text-gray-300">Fast Typing, Documentation</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Works Gallery */}
      <section id="portfolio" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              My <span className="accent-text">Portfolio</span>
            </h2>
            <div className="w-20 h-1 accent-bg mx-auto mb-8"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore my creative journey through these carefully curated
              projects that showcase my expertise in photo editing, video
              production, and digital artistry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg bg-gray-950 border border-gray-800 hover:accent-border transition-colors"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={work.image || "/placeholder.svg"}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="accent-text text-sm font-semibold">
                      {work.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {work.title}
                    </h3>
                  </div>
                </div>
             
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* CTA Section */}
<section id="contact" className="py-20 bg-gray-950">
  <div className="container mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center max-w-4xl mx-auto"
    >
      <h2 className="text-4xl lg:text-5xl font-bold mb-6">
        Ready to Bring Your{" "}
        <span className="accent-text">Vision to Life?</span>
      </h2>
      <p className="text-xl text-gray-300 mb-8 leading-relaxed">
        Let's collaborate to create stunning visuals that tell your story.
        Whether it's photo retouching, video editing, or custom Snapchat
        lenses, I'm here to transform your ideas into reality.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="mailto:abbashkhan66408@gmail.com"
          className="accent-bg hover:accent-bg text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
        >
          <FaEnvelope />
          Email Me
        </a>
        <button className="border accent-border accent-text hover:accent-bg hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2">
           <a
                  href="https://www.snapchat.com/add/desichoraa07?share_id=dF9kJAPfZn4&locale=en-IN"
                  className=" flex items-center justify-center transition-colors gap-2"
                >
                 <FaSnapchatGhost />
          View My Lenses
                </a>
          
        </button>
      </div>
    </motion.div>
  </div>
</section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">
                Shakil <span className="accent-text">Khan</span>
              </h3>
              <p className="text-gray-400 mb-4">
                Creative Photo & Video Editor specializing in digital artistry
                and visual storytelling.
              </p>
              <div className="flex gap-4">
                
                <a
                  href="https://www.snapchat.com/add/desichoraa07?share_id=dF9kJAPfZn4&locale=en-IN"
                  className="w-10 h-10 bg-gray-800 hover:accent-bg rounded-full flex items-center justify-center transition-colors"
                >
                  <FaSnapchatGhost />
                </a>
                <a
                  href="https://www.linkedin.com/in/shakil-khan-1243762b3/"
                  className="w-10 h-10 bg-gray-800 hover:accent-bg rounded-full flex items-center justify-center transition-colors"
                >
                  <FaLinkedin />
                </a>
              
              {/*   <a
                  href="https://youtube.com/@yourchannel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:accent-bg rounded-full flex items-center justify-center transition-colors"
                >
                  <FaYoutube />
                </a> */}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 accent-text">
                Services
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>Photo Editing & Retouching</li>
                <li>Video Editing & Color Grading</li>
                <li>Snapchat Lens Creation</li>
                <li>Custom Filter Design</li>
                <li>Frame Design & Overlays</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 accent-text">
                Contact Info
              </h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="accent-text" />
                  <span className="text-sm">
                    abbashkhan66408@gmail.com 
                  </span>
                </div>
               
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="accent-text" />
                  <span>Kohinoor Colony, Teen Imli, Indore</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-8 text-center text-gray-400"
          >
            <p>
              &copy; 2025 Shakil Khan. All rights reserved. Crafted with passion
              for visual excellence.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
