import React from 'react';
import { connect } from 'react-redux';

import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = (props) => (
	<div className='cart-dropdown'>
		<div className='cart-items'>
			{props.cartItems.map((cartItem) => (
				<CartItem key={cartItem.id} item={cartItem} />
			))}
		</div>
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</div>
);

const mapStateToProps = (state) => ({
	cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps, null)(CartDropdown);
