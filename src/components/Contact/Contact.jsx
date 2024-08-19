import "./contact.css";
import { motion } from "framer-motion";

const variants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      staggerChildren: 0.2, 
    },
  },
};

const formVariants = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const Contact = ({ contactRef }) => {
  return (
    <motion.div
      className="contact"
      ref={contactRef}
      initial="initial"
      animate="animate"
      variants={variants}
    >
      {/* Text container with animations */}
      <motion.div className="textContainer" variants={variants}>
        <h1>Let's work together</h1>
        <motion.div className="items" variants={variants}>
          <h2>Mail</h2>
          <span>hello@codecc@gmail.com</span>
        </motion.div>
        <motion.div className="items" variants={variants}>
          <h2>Address</h2>
          <span>code cc street</span>
        </motion.div>
        <motion.div className="items" variants={variants}>
          <h2>Phone</h2>
          <span>+91 963653658375</span>
        </motion.div>
      </motion.div>

      {/* Form container with staggered animations for form fields */}
      <motion.div className="formContainer" variants={variants}>
        <motion.form
          initial="initial"
          animate="animate"
          transition={{ delayChildren: 0.5, staggerChildren: 0.2 }}
        >
          <motion.input
            type="text"
            required
            placeholder="Name"
            variants={formVariants}
          />
          <motion.input
            type="email"
            required
            placeholder="Email"
            variants={formVariants}
          />
          <motion.textarea
            rows={8}
            placeholder="Message"
            variants={formVariants}
          />
          <motion.button variants={formVariants}>Submit</motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
