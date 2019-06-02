import React from 'react';

import './style.scss';
import Helmet from './Helmet';
import Header from './Header';
import Midsection from './midsection';
import Footer from './Footer';

const Layout = ({ children }) => (
	<div>
		<Helmet />
		<Header />
		<Midsection />
		<Footer />
	</div>
);

export default Layout;
