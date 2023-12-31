import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import {SearchPage} from './pages/SearchPege'


export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<HomePage />} />
				<Route path='search' element={<SearchPage />} />
			</Route>

            <Route path='*' element={<Navigate to='/' />} />
		</Routes>
	);
};

