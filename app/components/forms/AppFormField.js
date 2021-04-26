import { useFormikContext } from 'formik';
import React from 'react';
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField({ name ,  width, ...otherProps}) {


    const { setFieldTouched, handleChange, touched, errors }=  useFormikContext();



    return (
        <>
        
        <AppTextInput 
                                 
                                 onBlur={() => setFieldTouched(name)}
                                 onChangeText={handleChange(name)}
                                 width={width}
                                 {...otherProps}
                                 
                                 
                                 
 />
 <ErrorMessage error={errors[name]} visible={touched[name]} />
        
        
        
        </>
    );
}

export default AppFormField;