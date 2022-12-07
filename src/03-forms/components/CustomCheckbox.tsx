import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name: string;
    [x: string]: any;
}

export const CustomCheckbox = ({...props}: Props) => {

    const [field, meta] = useField({...props, type:'checkbox'})
  return (
    <>
        <label>
           
            <input  type={'checkbox'} {...field} {...props}/>

            {props.label}
        
        </label>

        <ErrorMessage name={props.name} component='span' className="error-massage"/>
        
        {/** 
            meta.touched && meta.error && (
                <span className="error">{meta.error}</span>
            )
        */}
    </>
  )
}
