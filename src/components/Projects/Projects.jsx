import { useRef } from 'react'
import './Projects.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { aboutVariants } from '../../helpers/motionTextVariants'

const projectItems = [
    {
        id:1,
        title:"HVAC Design of a residential building",
        img:"https://cdn3.f-cdn.com/files/download/100072754/49b8a3.jpg",
        desc:"This is a ground floor design of a 3-story building, developed using ASHRAE standards and softwares like HAP and McQuay for heat load calculations,duct sizing and pipe sizing, tailored for energy efficiency and comfort.",
       
    },
    {
        id:2,
        title:"Carrier HAP 4.2",
        img:"https://www.researchgate.net/publication/350238881/figure/fig5/AS:1019386747973641@1620052148528/The-user-interface-of-HAP-program.ppm",
        desc:"This is a software based on the ASHRAE standards which is used for heating and cooling load calculations ,analyzing energy consumption and optimizing building design and HVAC systems.",
        
        
    },
    {
        id:3,
        title:"McQuay",
        img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgONOBPyPIKIp6TiuhjGAz4yuz-wX0Xz6Ha8TOIZbsvBTdzLGxrNUc5oCxhXQ6rS6hO7l-FgpL2eH6pd3ynYX2ZfOTnBcdtGHK63I3nVJYck3zGdsZe04peQiTScM5LK4TIpAT3H65JgeE/s1600/Screenshot+%2528160%2529.png",
       desc:"This software is used to calculate pipe sizes, duct sizes and fluid flow rates in accordance with ASHRAE standards.",
        
    },
    

]

const SingleProject = ({item}) =>{
    const projectRef = useRef();
    const {scrollYProgress} = useScroll({target:projectRef});
    const y = useTransform(scrollYProgress,[0,1],[-300,300])
    return(
        <section ref={projectRef}>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer">
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer">
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <motion.div variants={aboutVariants} className="btnContainer">
                            

                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Projects = () => {

    const ref = useRef()
    const {scrollYProgress} = useScroll({target:ref,offset:["start start","end end"]})
    const  scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    })

  return (
    <div className='projects' ref={ref} id='Projects'>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {projectItems.map(item=>(
            <SingleProject item={item} key={item.id} />
        ))}
    </div>
  )
}

export default Projects