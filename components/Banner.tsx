const Banner = () => {
	return (
		<div className='flex flex-col lg:flex-row lg:space-x-5 
		justify-between font-bold px-10 py-5 mb-10'>
			<div>
				<h1 className='text-7xl'>Prykhodchenko's Daily Blog</h1>
				<h2 className='mt-5'>
					Welcome to{" "}
					<span className='underline decoration-4 decoration-[#F7AB0A]'>
						The Most Wonderful
					</span>{' '}
					blog in the Universe
				</h2>
			</div>

			<p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>
				Front-End | Markup | React | NextJS
			</p>
		</div>
	);
};

export default Banner;