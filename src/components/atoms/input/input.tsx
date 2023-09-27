import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: number
  fullWidth?: boolean
  label?: string
  variant?: 'standard' | 'primary'
  type?: 'text' | 'number' | 'email'
  disabled?: boolean
  required?: boolean
  placeholder?: string
}

export const Input = (props: InputProps) => {
  const { label } = props
  return (
    <div className="max-w-l mx-auto">
      <span className="mb-2 block text-2xl font-bold text-white">{label}</span>
      <input {...props} className=" rounded-md border-2 border-gray-500" />
    </div>
  )
}
