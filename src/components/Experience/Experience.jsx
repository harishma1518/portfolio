import { useRef } from 'react';
import { expItemVariants, itemVariants, skillTextVariants, staggerVariants } from '../../helpers/motionTextVariants';
import './Experience.scss';
import { motion, useInView } from 'framer-motion';
const experiences = [
    
      
      
       
      
      
    
    {
      title: "Internship Trainee",
      company: "Aavin Milk Products",
      location: "Tirunelveli, Tamil Nadu, India",
      date: "May 2024",
      image: "/intern.png"
    },
    {
      title: "B.E -Mechanical Engineering",
      company: "Anna University Regional Campus",
      location: "Tirunelveli, Tamil Nadu, India",
      date: "July 2021- May 2025",
      image: "/graduate.png"
    }
  ];
  

const Experience = () => {
  return (
    <div className="expWrapper">
        <motion.div variants={skillTextVariants} className="expTitle" initial="initial" whileInView="animate">
            <motion.h1 variants={skillTextVariants}>Academic Journey</motion.h1>
            <motion.p variants={skillTextVariants}>Here's my journey blending Internship and Education, foucsing on HVAC systems.</motion.p>
        </motion.div>  
        <motion.div className='experience' variants={staggerVariants} initial="closed" animate="open">
            {experiences.map((experience, index) => (
                <ExperienceItem key={index} experience={experience} />
            ))}
        </motion.div>
    </div>
  )
};

const ExperienceItem = ({ experience }) => {
    const containerRef = useRef(null);
    const inView = useInView(containerRef,{ triggerOnce: false });
    
  
    return (
      <motion.div
        className="container"
        ref={containerRef}
        variants={expItemVariants}
        initial="closed"
        animate={inView ? "open" : "closed"}
      >
        <img src={experience.image} alt="" />
        <div className="textBox">
          <h2>{experience.title}</h2>
          <h4>{experience.company}</h4>
          <small>{experience.location}</small>
          <p>{experience.date}</p>
          <span className=""></span>
        </div>
      </motion.div>
    );
};  

export default Experience