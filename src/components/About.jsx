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
        Hi , there
        i, am AFAR IQBAL (FCCA, M.COM) Chief Financial Officer(CFO) Mr. Zafar Iqbal is
        a Qualified Fellow Chartered Certified Accountant (UK) with 15 years of
        diversified experience in accounts, finance, and administration. A
        professional accountant with experience in wide variety of industries
        like Telecommunication, Education, Retail and Quick Service Restaurants.
        Goal-oriented individual, with strong leadership trait and with a
        demonstrated track record of Oracle based GL Accounting & Analysis of
        financial reports, process & system development. He is a competent CFO
        beyond the traditional responsibilities of financial management. He is a
        skilled communicator, able to effectively translate financial
        information into actionable insights for both executive teams and
        stakeholders. Zafar possess excellent interpersonal skills, fostering
        collaboration across departments and building strong relationships with
        investors, auditors, and banking institutions. Mr Zafar adept at
        attracting and retaining top financial talent, nurturing professional
        development, and fostering a cohesive and high-performing finance
        department. He is a reliable and proactive team member who takes
        ownership of his work and consistently exceeds expectations. With his
        commitment to excellence and a drive for continuous learning, He
        embodies the qualities of a competent professional who is instrumental
        in the success of our team and the satisfaction of our clients.
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
