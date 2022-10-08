import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';

const re = document.getElementById('r');
if (!re) throw new Error('Root element not found');
const r = ReactDOM.createRoot(re);
r.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
