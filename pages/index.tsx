import React from 'react';
import {Button, Container} from "@material-ui/core";
import Navbar from "../components/Navbar";
import MainLayouts from "../layouts/MainLayouts";

const Index = () => {
    return (
        <>
           <MainLayouts>
               <Container >
                   home page
                   <Navbar/>
                   <Button>start</Button>
               </Container>
           </MainLayouts>
        </>
    );
};

export default Index;
