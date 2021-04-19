import React, {useState} from 'react';
import MainLayouts from "../../layouts/MainLayouts";
import StepWrapper from "../../components/StepWrapper";
import {Button, Grid, TextField} from "@material-ui/core";
import FileUpload from "../../components/FileUpload";

const Create: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [picture, setPicture] = useState(null)
    const [audio, setAudio] = useState(null)
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
                    <FileUpload accept='image/*' file={''} setFile={setPicture}>
                        <Button>Upload Image</Button>
                    </FileUpload>
                }
                { activeStep === 2 &&
                <FileUpload accept='audio/*' file={''} setFile={setAudio}>
                    <Button>Upload audio</Button>
                </FileUpload>
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
