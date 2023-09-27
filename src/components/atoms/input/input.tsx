import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: number
  fullWidth?: boolean
  label?: string
  variant?: 'standard' | 'primary'
  type?: 'text' | 'number' | 'email'
  disabled?: boolean
  required?: boolean
}

export const Input = (props: InputProps) => {
  return <input {...props} className="border-2 border-gray-500 text-2xl" />
}
