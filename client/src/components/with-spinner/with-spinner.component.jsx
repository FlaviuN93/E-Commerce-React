import React from 'react';
import Spinner from '../spinner/spinner.component';

const WithSpinner = (WrappedComponent) => {
	const SpinnerContainer = ({ isLoading, ...otherProps }) => {
		return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
	};
	return SpinnerContainer;
};
export default WithSpinner;
