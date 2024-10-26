import React from "react";
import SectionWrapper from "../../hoc/SectionWrapper";

const AdminLogin = () => {
    const text = "Hi, I'm Satyam";

    return (
        <div>{text}</div>
    );
};

export default SectionWrapper(AdminLogin, "AdminLogin");
