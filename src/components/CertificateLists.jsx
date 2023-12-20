import React from "react"
import { CourseCertificate, WorkCertificate, ProfessionalCertificate } from "../constants";
import CertifiacteCard from "./CertifiacteCard";
import { styles } from "../styles";



export default function CertificateLists() {
    return (
        <div className="my-10">


            {/* Certificates related to Professional certification exams such as google,etc */}
            <div >
                <h2 className={
                    `${styles.sectionHeadText
                    } text-center`
                }>Certificates.</h2>
                <p className={
                    `${styles.sectionSubText
                    } text-center`
                }>Professional Certificates</p>
            </div>
            <div className='my-20 flex flex-wrap justify-center mx-auto space-x-5 gap-5 w-full'>
                {
                    ProfessionalCertificate.map((project, index) => (

                        <CertifiacteCard key={
                            `project-${index}`
                        }
                            index={index}
                            {...project} />
                    ))
                } </div>
            {/* Certificates related to works in club and internship or job */}
            <p className={
                `${styles.sectionSubText
                } text-center`
            }>Work Certificates</p>
            <div className='my-20 flex flex-wrap justify-center mx-auto space-x-5 gap-5 w-full'>
                {
                    WorkCertificate.map((project, index) => (

                        <CertifiacteCard key={
                            `project-${index}`
                        }
                            index={index}
                            {...project} />
                    ))
                } </div>
            {/* Certificates related to courses i have completed */}
            <p className={
                `${styles.sectionSubText
                } text-center`
            }>Course Certificates</p>
            <div className='my-20 flex flex-wrap justify-center mx-auto space-x-5 gap-5 w-full'>
                {
                    CourseCertificate.map((project, index) => (

                        <CertifiacteCard key={
                            `project-${index}`
                        }
                            index={index}
                            {...project} />
                    ))
                } </div>

        </div>
    )
}

