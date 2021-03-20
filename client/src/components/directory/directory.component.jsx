import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import './directory.style.scss';

const Directory = ({ sections }) => (
	<div className='directory-menu'>
		{sections.map(({ id, ...sectionProps }) => (
			<MenuItem key={id} {...sectionProps} />
		))}
	</div>
);

const mapStateToProps = (state) => ({
	sections: selectDirectorySections(state),
});

export default connect(mapStateToProps)(Directory);
