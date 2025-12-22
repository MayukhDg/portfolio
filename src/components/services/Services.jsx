import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>AI-powered SASS</h2>
          <p>
           I ceeate AI-powered Software as a Service (SaaS) solutions that leverage
           the latest advancements in artificial intelligence to deliver
           exceptional value to users. My focus is on developing intuitive,
           user-friendly applications that streamline processes and enhance
           productivity.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Solving real business problems</h2>
          <p>
            I specialize in identifying and solving real business problems through
            innovative solutions. My approach is centered around understanding the
            unique challenges faced by businesses and developing strategies that
            drive growth and success.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Scalable AI and RAG solutions</h2>
          <p>
            I design and implement scalable AI and RAG (Robotics and Automation
            Governance) solutions that help businesses optimize their operations and
            improve efficiency. My expertise lies in creating systems that can grow
            with the needs of the business while ensuring compliance with industry
            standards.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>ROI-oriented custom solutions</h2>
          <p>
            I develop ROI-oriented custom solutions tailored to meet the specific
            needs of each business. My focus is on delivering measurable results
            that drive profitability and long-term success through innovative
            strategies and technologies.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;