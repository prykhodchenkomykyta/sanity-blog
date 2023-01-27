import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
	return (
		<header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
			<div className='flex items-center space-x-2'>
				<Link href='/'>
					<Image
						className='rounded-full'
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr1W0cwPG5CmwnW4ewyVks6rZiuiQePjFF-Q&usqp=CAU'
						width={50}
						height={50}
						alt='logo'
					/>
				</Link>
				<h1>Prykhodchenko</h1>
			</div>

			<div>
				<Link 
					href='https://prykhodchenkomykyta.github.io/portfolio/' 
					className='flex items-center rounded-full text-[#F7AB0A] px-5 py-3 text-sm md:text-base bg-gray-900'
				>
					Check out my other projects
				</Link>
			</div>
		</header>
	);
};

export default Header;