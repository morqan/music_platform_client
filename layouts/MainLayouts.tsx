import React from 'react';
import Navbar from "../components/Navbar";
import Player from "../components/Player";

const MainLayouts: React.FC = ({children}) => {
    return (
        <>
            <Navbar/>
            {children}
            <Player/>
        </>
    );
};

export default MainLayouts;
