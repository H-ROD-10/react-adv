import { useField } from "formik"

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x: string]: any;
}

export const TextInput = (props: Props) => {

    const [field, meta] = useField(props)
  return (
    <>
        <label htmlFor={props.id || props.name}>{props.label}</label>
        <input className="text-input" {...field} {...props}/>
        {
            meta.touched && meta.error && (
                <span className="error">{meta.error}</span>
            )
        }
    </>
  )
}
