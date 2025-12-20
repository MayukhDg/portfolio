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
      ref={ref}
      animate="animate"
    >
      {/* Intro Text */}
      <motion.div className="textContainer" variants={variants}>
        <p>
          I build production-ready SaaS products
          <br />
          powered by modern web and AI systems
        </p>
        <hr />
      </motion.div>

      {/* Title Section */}
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            Production-Ready <motion.b whileHover={{ color: "orange" }}>AI SaaS</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            Built <motion.b whileHover={{ color: "orange" }}>End-to-End</motion.b>
          </h1>
          <button>WHAT I BUILD</button>
        </div>
      </motion.div>

      {/* Services List */}
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>SaaS Frontend Engineering</h2>
          <p>
            I design and build scalable SaaS frontends using Next.js, React,
            and Tailwind CSS optimized for performance, SEO, and real users.
          </p>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>AI-Powered Product Development</h2>
          <p>
            I build real-world AI features using LangChain, LangGraph,
            OpenAI, and Gemini from RAG systems to autonomous workflows.
          </p>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>SaaS Backends and Data Systems</h2>
          <p>
            I architect secure, scalable backends using MongoDB, vector
            databases, auth systems, and server actions to support production AI apps.
          </p>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>End-to-End Product Development</h2>
          <p>
            From idea to deployment I build complete SaaS products including
            web apps, APIs, AI pipelines, payments, and cloud hosting.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
