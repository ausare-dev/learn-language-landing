import About from '@/components/About/About';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import React from 'react';

const Home = () => {
	return (
		<div>
			<Header />
			<Hero />

			<About />
		</div>
	); // все компоненты сливать сюда
};

export default Home;
