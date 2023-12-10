import icecreamImage from '../../public/ice_cream_mania.jpg'

const Header = () => {
	return(
		<>
		<div style={{
				width: '100vw',
				height: '10rem',
				backgroundImage: `url(${icecreamImage.src})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				textShadowColor: '2px black'
		}}
		className="flex justify-center items-center mb-4"
		>
			<h2 className="text-white text-3xl font-bold"> Ice Cream Manía </h2>
		</div>
		</>
	)
}

export default Header;
