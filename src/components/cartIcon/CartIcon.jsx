import './cartIcon.styles.scss'
import cartIcon from '../../assets/shopping-bag.svg'

function CartIcon() {
  return (
    <div className='cart-icon-container'>
      <img src={cartIcon} className='shopping-icon'/>
      <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon
