import {
  ButtonHTMLAttributes,
  ReactElement,
  ReactNode,
  cloneElement,
} from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  icon?: ReactElement
  variant?: 'default' | 'transparent' | 'submit' | 'proceed' | 'cancel'
  defaultStyle?: string
  size?: 'default' | 'small'
}

export const Button = (props: ButtonProps) => {
  const { variant } = props
  const style =
    'flex justify-center items-center gap-3 p-2 m-2 font-bold rounded-md'

  if (variant === undefined) {
    return (
      <DefaultButton
        defaultStyle={style}
        {...props}
        size={props?.size ?? 'default'}
      />
    )
  }

  const buttons = {
    transparent: (
      <TransparentButton
        defaultStyle={style}
        {...props}
        size={props?.size ?? 'default'}
      />
    ),
    submit: (
      <SubmitButton
        defaultStyle={style}
        {...props}
        size={props?.size ?? 'default'}
      />
    ),
    proceed: (
      <ProceedButton
        defaultStyle={style}
        {...props}
        size={props?.size ?? 'default'}
      />
    ),
    cancel: (
      <CancelButton
        defaultStyle={style}
        {...props}
        size={props?.size ?? 'default'}
      />
    ),
    default: (
      <DefaultButton
        defaultStyle={style}
        {...props}
        size={props?.size ?? 'default'}
      />
    ),
  }

  const button = buttons[variant]

  return button
}

export const DefaultButton = (props: ButtonProps) => {
  let { children, icon, defaultStyle, size } = props

  if (size === 'default') defaultStyle += ' w-52'

  return (
    <button
      {...props}
      className={`${defaultStyle} border-2 border-gray-500 text-2xl text-white`}
    >
      <span className="my-auto text-center">{children}</span>
      {icon && cloneElement(icon, { className: 'fill-white w-7 h-7' })}
    </button>
  )
}

export const TransparentButton = (props: ButtonProps) => {
  let { children, icon, defaultStyle, size } = props

  if (size === 'default') defaultStyle += ' w-52'

  return (
    <button {...props} className={`${defaultStyle} text-2xl text-white `}>
      <span className="my-auto text-center">{children}</span>
      {icon && cloneElement(icon, { className: 'fill-white w-7 h-7' })}
    </button>
  )
}

export const SubmitButton = (props: ButtonProps) => {
  let { children, icon, defaultStyle, size } = props

  if (size === 'default') defaultStyle += ' w-52'

  return (
    <button
      {...props}
      className={`${defaultStyle} bg-green-500 text-2xl text-black`}
    >
      <span className="my-auto text-center">{children}</span>
      {icon && cloneElement(icon, { className: 'fill-black w-7 h-7' })}
    </button>
  )
}

export const ProceedButton = (props: ButtonProps) => {
  let { children, icon, defaultStyle, size } = props

  if (size === 'default') defaultStyle += ' w-52'

  return (
    <button
      {...props}
      className={`${defaultStyle} border-2 border-green-500 text-2xl text-white`}
    >
      <span className="my-auto text-center">{children}</span>
      {icon && cloneElement(icon, { className: 'fill-white w-7 h-7' })}
    </button>
  )
}

export const CancelButton = (props: ButtonProps) => {
  let { children, icon, defaultStyle, size } = props

  if (size === 'default') defaultStyle += ' w-52'

  return (
    <button
      {...props}
      className={`${defaultStyle} bg-red-500 text-2xl text-white`}
    >
      <span className="my-auto text-center">{children}</span>
      {icon && cloneElement(icon, { className: 'fill-white w-7 h-7' })}
    </button>
  )
}
