import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import PageCardedHeader from 'app/fuse-layouts/shared-components/page-carded-header/PageCardedHeader';

function Header() {
	const messageRedux = useSelector(({ note }) => note);
	const [message, setMessage] = useState({});

	useEffect(() => {
		if (messageRedux) {
			setMessage(messageRedux);
		}
	}, [messageRedux]);

	return <PageCardedHeader link="/messages" title={message?.title || 'New note'} textBack="Messages" />;
}

export default Header;
