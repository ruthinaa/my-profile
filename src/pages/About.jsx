import { motion } from 'framer-motion'
import { Download, Calendar, MapPin, Mail } from 'lucide-react'

const About = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'AWS', level: 70 },
    { name: 'Docker', level: 65 },
  ]

  const experience = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Leading frontend development for web applications using React and TypeScript.',
    },
    {
      title: 'Full Stack Developer',
      company: 'Startup Inc',
      period: '2020 - 2022',
      description: 'Developed full-stack applications using modern technologies and best practices.',
    },
    {
      title: 'Junior Developer',
      company: 'Digital Agency',
      period: '2018 - 2020',
      description: 'Started my journey in web development, learning various technologies.',
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
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About Me</h1>
            <p className="text-xl text-gray-600 mb-8">
              I'm a passionate developer with a love for creating innovative solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Personal Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who I Am</h2>
              <p className="text-lg text-gray-600 mb-6">
                I'm a dedicated full-stack developer with over 5 years of experience in creating
                web applications. I love solving complex problems and turning ideas into reality
                through clean, efficient code.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                When I'm not coding, you can find me exploring new technologies, contributing to
                open-source projects, or sharing knowledge with the developer community.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-600">5+ years of experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-600">Based in Your City</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-600">your.email@example.com</span>
                </div>
              </div>

              <button className="btn-primary mt-8 inline-flex items-center gap-2">
                <Download size={20} />
                Download Resume
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              My professional journey in software development
            </p>
          </motion.div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                  <span className="text-primary-600 font-medium">{exp.period}</span>
                </div>
                <p className="text-lg text-gray-600 mb-4">{exp.company}</p>
                <p className="text-gray-600">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 