import React from "react";

import {SectionWrapper} from "../hoc";
// import { technologies } from "../constants";
import BallCanvas from './canvas/Ball'
import texture from '../assets/texture.webp'

const Tech = () => {
    return (
        <div className='flex flex-row flex-wrap justify-center gap-10'>
            <div className='xs:w-28 xs:h-28 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-96 lg:h-96' key='skillsIcons'>
                <BallCanvas icon={texture}/>
            </div>
        </div>
    );
};

export default SectionWrapper(Tech, "");
