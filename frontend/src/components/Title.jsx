import React from "react";

const Title = ({ title}) => {
    return (
        <h1 className="text-white bg-clip-text bg-gradient-to-b from-red-600 from-100% to-white text-2xl md:text-4xl font-extrabold uppercase title">
            {title}
        </h1>

          
    );
    
};

export default Title;
