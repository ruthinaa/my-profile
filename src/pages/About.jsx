import { motion } from 'framer-motion';
import { Download, Calendar, MapPin, Mail } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'React', level: 70 },
    { name: 'Firebase', level: 65 },
    { name: 'Figma (UI/UX)', level: 80 },
    { name: 'HTML/CSS/JS', level: 75 },
    { name: 'Git & GitHub', level: 60 },
    { name: 'Project Management', level: 70 },
  ];

  const experience = [
    {
      title: 'Intern – Software Developer',
      company: 'Ministry of Innovation & Technology',
      period: '2023',
      description: 'Worked on real-world full-stack web projects, collaborated in teams, and contributed to national tech initiatives.',
    },
    {
      title: 'Digital Contributor & Organizer',
      company: 'TechEt',
      period: '2023',
      description: 'Worked on website projects, hosted tech podcasts, and helped organize local events around innovation and coding.',
    },
    {
      title: 'University Projects',
      company: 'Addis Ababa University',
      period: '2019 – 2023',
      description: 'Completed several academic projects, including an Emergency Reporting and Safety Awareness System and a portfolio website using GitHub Pages.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About Me</h1>
            <p className="text-xl text-gray-700 mb-8">
              Recent graduate, aspiring full-stack developer, and passionate about building meaningful tech for communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Personal Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who I Am</h2>
              <p className="text-lg text-gray-600 mb-6">
                I’m a graduate in Information Systems with hands-on experience in UX/UI design, React, and Firebase. I enjoy creating applications that solve real-world problems — especially those that matter to my local community.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                I believe in learning by doing, and I'm currently building projects to grow my skills and confidence. Whether it's designing user-friendly interfaces or coding backend logic, I’m always ready to explore and improve.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-600">Graduate, 2023</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-600">Based in Addis Ababa, Ethiopia</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-600">ruth@example.com</span>
                </div>
              </div>

              <a href="/Ruth-Dehene-Resume.pdf" download>
                <button className="btn-primary mt-8 inline-flex items-center gap-2">
                  <Download size={20} />
                  Download Resume
                </button>
              </a>
            </motion.div>

            {/* Right Column - Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills</h3>
              <div className="space-y-5">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gray-800 h-2 rounded-full transition-all duration-300"
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
              The experiences that shaped me as a young developer
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
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                  <span className="text-primary-600 font-medium">{exp.period}</span>
                </div>
                <p className="text-lg text-gray-700 font-medium mb-1">{exp.company}</p>
                <p className="text-gray-600">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
