import React from 'react';
import Navbar from "../components/Navbar";

const MainLayouts: React.FC = ({children}) => {
    return (
        <>
            <Navbar/>
            {children}
        </>
    );
};

export default MainLayouts;
