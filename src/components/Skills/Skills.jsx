import './Skills.scss';
import { motion, useInView } from 'framer-motion';
import { itemVariants, skillTextVariants, staggerVariants, textVariants } from '../../helpers/motionTextVariants';
import { useRef } from 'react';

const skills = [
    
    {skill:"AutoCad", logo:"https://lh3.googleusercontent.com/proxy/mIygwEcFEyUyFcWCt1nUGs9HmXc743iflHoBSbD0Kn_FOqa7EyG2aRl-R9LwBpJ1IA6avFSFcR-hbDHzUSJNQyAbs3ChN14H8RRmerHPjV0eicGXE0lkUZQKJl-0hN2fFrv1mw"},
    {skill:"HAP 4.2", logo:"https://www.ahi-toshibasa.co.za/wp-content/uploads/2024/08/hap-v6-banner-with-logo-1.jpg", style:{borderRadius:"30%"}},
    { skill: "Fusion360", logo: "https://www.designconsulting.com.au/wp-content/uploads/2023/06/autodesk-fusion-360-product-icon-social-400.png" },
    {skill:"McQuay", logo:"https://www.cdnlogo.com/logos/m/36/mcquay.svg"},
    { skill: "Beta", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM0Uj7D5isHMswnVpwl7i6OdKj81ZZhB9xm6mAIfHwBEEHecDy25Y1dLULCKZArNt4zis&usqp=CAU" },
    
    
    // {skill:"Next.js", logo:"/nextjs.png"},
]

const Skills = () => {
    const ref = useRef();
    const isInView = useInView(ref,{margin:"-200px"})
  return (
    <div className='skills' >
        <motion.div ref={ref} variants={skillTextVariants} className="textContainer" initial="initial" whileInView="animate">
            <motion.h1 variants={skillTextVariants}>Tools & Expertise</motion.h1>
            <motion.p variants={skillTextVariants}>Presenting my curated selection of essential design tools  for drafting  HVAC systems and selecting Machinary.</motion.p>
        </motion.div>
        <motion.div className='skillList' variants={staggerVariants} initial="closed" whileInView="open" >
            <motion.div className="skills" variants={staggerVariants}> 
                {skills.slice(0, 7).map((skill, index) => (
                <motion.div key={index} variants={itemVariants} className="skill">
                    <div className="skillIcon">
                        <img src={skill.logo} alt={skill.skill} style={skill.style} />
                    </div>
                    <span>{skill.skill}</span>
                </motion.div>
                ))}
            </motion.div>
            <motion.div className="skills" variants={staggerVariants}>
                {skills.slice(7).map((skill, index) => (
                <motion.div key={index+7} variants={itemVariants} className="skill">
                    <div className="skillIcon">
                        <img src={skill.logo} alt={skill.skill} style={skill.style} />
                    </div>
                    <span>{skill.skill}</span>
                </motion.div>
                ))}
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Skills