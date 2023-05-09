import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axios';
import { useHistory } from 'react-router-dom';

export default function SignUp() {
	const history = useHistory();

	useEffect(() => {
		const response = axiosInstance.post('/user_api/auth/logout/', {
			refresh_token: localStorage.getItem('refresh_token'),
		});
		localStorage.removeItem('token');
		// localStorage.removeItem('refresh_token');
		// axiosInstance.defaults.headers['Authorization'] = null;
		history.push('/signin');
	});
	return <div>Logout</div>;
}
