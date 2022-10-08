import React from 'react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuButton } from './MenuToggle';
import { hoverColors } from '../colorList';

const links = [
	{ name: 'Math', to: '#', id: 1 },
	{ name: 'History', to: '#', id: 2 },
	{ name: 'Science', to: '#', id: 3 },
	{ name: 'Geography', to: '#', id: 4 },
	{ name: 'Art', to: '#', id: 5 },
	{ name: 'Religion', to: '#', id: 6 },
	{ name: 'Music', to: '#', id: 7 },
	{ name: 'Biology', to: '#', id: 8 },
	{ name: 'Technology', to: '#', id: 9 },
	{ name: 'Economics', to: '#', id: 10 },
];
const itemVariants = {
	closed: { opacity: 0, color: '#fffdfa' },
	open: { opacity: 1, color: '#fffdfa' },
};
const sideVariants = {
	closed: {
		transition: {
			delay: 0.2,
			x: { duration: 1 },
			default: { ease: 'linear' },
		},
	},
	open: {
		transition: {
			staggerChildren: 0.1,
			staggerDirection: 1,
		},
	},
};

const christmasStory = 'emotional damage from childhood'; // https://www.youtube.com/watch?v=Z1xYQ2BWw1o

export const Sidebar = () => {
	const [isOpen, setOpen] = useState(false);

	const menuButtonStyle = {
		margin: '2rem 0 0 1rem',
	};
	return (
		<main>
			<AnimatePresence>
				{isOpen && (
					<motion.aside
						initial={{ width: 0 }}
						animate={{ width: 300, transition: { duration: 0.5 } }}
						exit={{
							width: 0,
							transition: { delay: 0.1, duration: 0.5 },
							opacity: 0,
						}}
					>
						<motion.div
							className='container'
							initial='closed'
							animate='open'
							exit='closed'
							variants={sideVariants}
						>
							{links.map(({ name, to, id }) => (
								<motion.a
									key={id}
									href={to}
									whileHover={{
										scale: 1.1,
										transition: { duration: 0.1 },
										color:
											hoverColors[
												Math.floor(Math.random() * hoverColors.length)
											][id - 1],
										enableBackground: 'new 0 0 512 512',
									}}
									variants={itemVariants}
								>
									{name}
								</motion.a>
							))}
						</motion.div>
					</motion.aside>
				)}
			</AnimatePresence>
			<div className='btn-container'>
				<MenuButton
					className='menu-btn'
					isOpen={isOpen}
					onClick={() => setOpen(!isOpen) && isOpen(isOpen ? 'Close' : 'Open')}
					strokeWidth='2'
					color='#fffdfa'
					lineProps={{ strokeLinecap: 'square' }}
					transition={{ type: 'spring', stiffness: 260, damping: 20 }}
					width='32'
					height='16'
					style={menuButtonStyle}
				/>
			</div>
		</main>
	);
};
