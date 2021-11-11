import React from 'react'
import { ErrorMessage, useField } from 'formik';
import { forwardRef } from 'react';

const Signupcomponent = forwardRef((props,ref) => {
    const [field] = useField(props);
    return (
       <React.Fragment>
            <input ref={ref} onChange={props.onChange} {...props} {...field} ></input>
            <ErrorMessage component ='div' name ={field.name} style={{color:'red'}} />
       </React.Fragment>
    )
})

export default Signupcomponent
