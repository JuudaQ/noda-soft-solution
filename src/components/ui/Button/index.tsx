// Лучше бы использоавть div, больше возможностей кастомизации,
// button больше подошел бы для форм,
// onClick определили бы как: () => void,
// но не нужно, просто расширим интерфейс стандартного элемента
// кнопки, добавив title, так кнопка будет переиспользуемой

import React, { ButtonHTMLAttributes } from 'react'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string,
}

function Button({ title, ...props }: IButtonProps): JSX.Element {
  return (
    <button {...props}>
      {title}
    </button>
  )
}

export default Button
