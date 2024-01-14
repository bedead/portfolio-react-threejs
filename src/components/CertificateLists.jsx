import React from "react";
import { CourseCertificate, WorkCertificate, ProfessionalCertificate } from "../constants";
import CertifiacteCard from "./CertifiacteCard";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const renderCertificateList = (certificateList) => {
  return certificateList.map(({ index, ...project }) => (
    <CertifiacteCard key={`project-${index}`} index={index} {...project} />
  ));
};

const CertificateLists = () => {
  return (
    <div className="-m-5 md:-m-10">
      <motion.div variants={textVariant(0)}>
        <h2 className={`${styles.sectionHeadText} text-center`}>Certificates.</h2>
        <p className={`${styles.sectionSubText} text-center`}>Professional Certificates</p>
      </motion.div>

      <div className="my-20 flex flex-wrap justify-center mx-auto space-x-5 gap-5 w-full">
        {renderCertificateList(ProfessionalCertificate)}
      </div>

      <motion.p variants={textVariant(0)} className={`${styles.sectionSubText} text-center`}>
        Work Certificates
      </motion.p>
      <div className="my-20 flex flex-wrap justify-center mx-auto space-x-5 gap-5 w-full">
        {renderCertificateList(WorkCertificate)}
      </div>

      <motion.p variants={textVariant(0)} className={`${styles.sectionSubText} text-center`}>
        Course Certificates
      </motion.p>
      <div className="my-20 flex flex-wrap justify-center mx-auto space-x-5 gap-5 w-full">
        {renderCertificateList(CourseCertificate)}
      </div>
    </div>
  );
};

export default SectionWrapper(CertificateLists, "CertificateLists");
