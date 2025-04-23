import Sidebar from '../Sidebar/Sidebar';
import './Navbar.scss'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Harishma R U
        </motion.span>
        <div className="social-links">
          <a href="mailto:harishmaramesh.u@gmail.com" target='_blank'>
              <img src="/email.png" className='mail' alt="" />
          </a>
          <a href="https://www.linkedin.com/in/harishma-r-u-86b933292" target='_blank'>
            <img src="/linkedin_white.png" alt="" />
          
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar