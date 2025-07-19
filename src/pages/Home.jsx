import { motion } from 'framer-motion'
import { ArrowRight, Code, Palette, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  const features = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building modern, responsive web applications with cutting-edge technologies.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Creating native and cross-platform mobile applications for iOS and Android.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designing beautiful and intuitive user interfaces with great user experience.',
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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm{' '}
              <span className="text-primary-600">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              A passionate full-stack developer creating amazing digital experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/projects"
                className="btn-primary inline-flex items-center gap-2"
              >
                View My Work
                <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What I Do
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I specialize in creating modern, scalable applications that solve real-world problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to work together?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and bring your ideas to life.
            </p>
            <Link
              to="/contact"
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              Start a Project
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home 