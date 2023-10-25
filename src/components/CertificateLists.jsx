import React from "react"
import { CourseCertificate, WorkCertificate } from "../constants";
import CertifiacteCard from "./CertifiacteCard";
import { styles } from "../styles";



export default function CertificateLists() {
    return (
        <div className="my-10">

            <div >
                <h2 className={
                    `${styles.sectionHeadText
                    } text-center`
                }>Certificates.</h2>
                <p className={
                    `${styles.sectionSubText
                    } text-center`
                }>Work Certificates</p>
            </div>
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

