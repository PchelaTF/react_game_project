import React from 'react'
import { buttonClick } from '../../mechanics/sounds/sound'

export default function BaseButton() {
  return (
    <button className={`item__list-button btn`} onClick={buttonClick}>Shop</button>
  )
}
