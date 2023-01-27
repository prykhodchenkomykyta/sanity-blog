import Image from 'next/image';

const Logo = (props: any) => {
	const { renderDefault, title } = props;
	return (
		<div className='flex items-center space-x-2'>
			<Image 
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr1W0cwPG5CmwnW4ewyVks6rZiuiQePjFF-Q&usqp=CAU" 
				alt="logo image" 
				height={50}
				width={50} 
				className='rounded-full object-cover' 
			/>
			<>{renderDefault(props)}</>
		</div>
	);
};

export default Logo;