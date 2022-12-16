import React from 'react'
import { buttonClick } from '../../mechanics/sounds/sound'

interface IButtonProps {
  onClick: (e?: any) => void
  name: string
  className?: string
}

const BaseButton = ( { onClick, name, className }: IButtonProps) => {

  const handleClick = () => {
    onClick()
    buttonClick()
  }

  return (
    <button className={`${className} item__list-button btn`} onClick={handleClick}>{name}</button>
  )
}

export default BaseButton
