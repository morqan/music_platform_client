import React from 'react';
import {Card, Container, Grid, Step, StepLabel, Stepper} from "@material-ui/core";

interface StepWrapperProps {
    activeStep: number;

}

const steps = ['Track info', 'Upload image', 'Upload track']

const StepWrapper: React.FC <StepWrapperProps> = ({activeStep, children}) => {
    return (
        <Container>
            <Stepper activeStep={activeStep}>
                {
                    steps.map((step,index) =>
                        <Step key={index} completed={activeStep > index}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    )
                }
            </Stepper>
            <Grid container style={{margin: '69px 0', height: 270, justifyContent: 'center'}}>
                <Card style={{width: 600, padding: '15px'}}>
                    {children}
                </Card>
            </Grid>
        </Container>
    );
};

export default StepWrapper;
