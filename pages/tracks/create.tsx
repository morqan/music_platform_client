import React, {useState} from 'react';
import MainLayouts from "../../layouts/MainLayouts";
import StepWrapper from "../../components/StepWrapper";
import {Button, Grid, TextField} from "@material-ui/core";

const Create: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0)
    const next = () => {
        if (activeStep !== 2) {
            setActiveStep(prev => prev + 1)
        }
    }
    const back = () => {
        setActiveStep(prev => prev - 1)
    }
    return (
        <MainLayouts>
            <StepWrapper activeStep={activeStep}>
                { activeStep === 0 &&
                    <Grid container direction={'column'}>
                        <TextField style={{marginTop: '11px'}} label={'Track name'}/>
                        <TextField style={{marginTop: '11px'}} label={'Artist name'}/>
                        <TextField style={{marginTop: '11px'}} label={'Track text'} multiline rows={3}/>
                    </Grid>
                }
                { activeStep === 1 &&
                <h1>Step 2</h1>
                }
                { activeStep === 2 &&
                <h1>Step 3</h1>
                }
            </StepWrapper>
            <Grid container style={{justifyContent: 'space-between', padding: '0 35px', width: 600, margin: '0 auto'}}>
                <Button disabled={activeStep === 0} onClick={back}>Back</Button>
                <Button onClick={next}>Next</Button>
            </Grid>
        </MainLayouts>
    );
};

export default Create;
