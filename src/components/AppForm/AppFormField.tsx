import { FormControl, TextField } from '@mui/material';
import { useFormikContext } from 'formik';


import ErrorMessage from './ErrorMessage';


interface FormFieldProps {
    name?: any;
    [key: string]: any;
}


const AppFormField = ({ name, ...otherProps }: FormFieldProps) => {

  const {setFieldTouched, handleChange, errors, touched, values} = useFormikContext<any>();

  return (
    <>
      <FormControl>
        <TextField
            onChange={handleChange}
            onBlur={() => setFieldTouched(name)}
            value={values.name}
            {...otherProps}
            sx={{ paddingY: 1 }}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]} /> 
      </FormControl>
    </>
  )
}

export default AppFormField;