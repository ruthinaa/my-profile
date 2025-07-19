import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays current weather conditions and forecasts using data from multiple weather APIs.',
      image: '/api/placeholder/600/400',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Weather API'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with modern web technologies and featuring smooth animations.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      title: 'Blog Platform',
      description: 'A content management system for blogs with markdown support, user authentication, and admin dashboard.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with features like message history, user profiles, and file sharing.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">My Projects</h1>
            <p className="text-xl text-gray-600 mb-8">
              A collection of my work showcasing various technologies and solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here are some of my most recent and impactful projects
            </p>
          </motion.div>

          <div className="space-y-16">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="bg-gray-200 rounded-xl overflow-hidden h-64 flex items-center justify-center">
                    <span className="text-gray-500">Project Image</span>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="btn-primary inline-flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Eye size={20} />
                      View Live
                    </a>
                    <a
                      href={project.githubUrl}
                      className="btn-secondary inline-flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">All Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse through my complete portfolio of work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <span className="text-gray-500">Project Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.liveUrl}
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-gray-600 hover:text-gray-700 font-medium text-sm inline-flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects 