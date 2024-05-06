import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

function ServiceCard(props) {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * 
        [props.index], 0.75)}
        className="w-full green-pink-gradient p-[1px] 
        rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] 
          py-5 px-12 min-h-[280px] flex justify-evenly 
          items-center flex-col"
        >
          <img
            src={props.icon}
            alt={props.title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] 
          font-bold text-center">
            {props.title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]"
      >
       Hi there, I am Ataul Mohsin Khalid, a Software Developer with 2 years of diversified experience in software and web development. My journey into the realm of programming began with a deep-seated passion for creating innovative solutions. Throughout my career, I have honed my skills across various domains, showcasing proficiency in software development tools, web development, AI, backend development, and DevOps tools such as Jenkins, Ansible, Docker, Kubernetes, and beyond. My expertise in software development tools spans a wide spectrum, where I adeptly navigate through the intricacies of languages and frameworks to craft robust and scalable applications. Whether it's harnessing the power of Python for its versatility or leveraging the efficiency of Java for enterprise-grade solutions, I thrive on the challenge of utilizing the right tools for the task at hand. In the realm of web development, I have spearheaded projects that seamlessly blend creativity with functionality, delivering immersive user experiences across diverse platforms. My proficiency extends to both frontend and backend development, where I employ cutting-edge technologies like React, Angular, Node.js, and Django to bring dynamic web applications to life. Moreover, my foray into AI has been marked by a fervent exploration of Generative AI, where I delve into the realms of neural networks and machine learning algorithms to create intelligent systems that push the boundaries of innovation. Cloud computing stands as a cornerstone of my expertise, where I harness the scalability and flexibility of cloud platforms to architect robust and resilient solutions that meet the evolving needs of modern enterprises. Furthermore, my proficiency in DevOps tools underscores my commitment to streamlining the software development lifecycle, where I orchestrate seamless deployment pipelines and automate processes for enhanced efficiency and reliability. With a keen eye for detail and a penchant for problem-solving, I thrive in dynamic environments where innovation flourishes, driving forward-thinking initiatives that redefine the landscape of technology. My journey as a Software Developer is defined by a relentless pursuit of excellence, where each project serves as an opportunity to push the boundaries of what's possible and leave a lasting impact on the world of technology.
       
      </motion.p>
      <div className=" mt-20 mb-20 flex flex-wrap  gap-10">
        {services.map((service, index) => {
          return (
            <ServiceCard
              title={service.title}
              key={index}
              index={index}
              {...service}
            />
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
