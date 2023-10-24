import React from "react"
import { certificate } from "../constants";
import CertifiacteCard from "./CertifiacteCard";



export default function CertificateLists() {
    return (
        <div>
            <div className=' mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    certificate.map((project, index) => (

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

