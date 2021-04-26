import { useFormikContext } from 'formik';
import React from 'react';
import AppButton from '../AppButton';

function SubmitButton({ tittle }) {

const {handleSubmit}=  useFormikContext();

    return (
        <AppButton title={tittle} onPress={handleSubmit} />
    );
}

export default SubmitButton;