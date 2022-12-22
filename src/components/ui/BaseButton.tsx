import { buttonClick } from '../../mechanics/sounds/sound'

interface IButtonProps {
  onClick: (e?: any) => void
  name: string
  className?: string
  type?: "submit"
}

const BaseButton = ({ onClick, name, className, type }: IButtonProps) => {

  const createCharBtnClass = name === 'Create' ? 'create-character__button' : null

  const handleClick = (e?: any) => {
    e.preventDefault()
    onClick()
    buttonClick()
  }

  return (
    <button type={type} className={`${className} item__list-button btn ${createCharBtnClass}`} onClick={(e) => handleClick(e)}>{name}</button>
  )
}

export default BaseButton
