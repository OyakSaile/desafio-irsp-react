import { InputHTMLAttributes } from 'react'

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}
export const InputText: React.FC<InputTextProps> = ({ label, ...rest }) => {
  return (
    <div className="flex flex-col ">
      {label && <label htmlFor={rest.id}>{label}</label>}
      <input
        id={rest.id}
        className="border rounded-md py-2 px-3 mt-2"
        {...rest}
        type="text"
      />
    </div>
  )
}
