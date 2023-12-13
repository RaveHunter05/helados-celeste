import utils from '@/utils'
import {useRouter} from 'next/router'

const Gallery = () => {
	const router = useRouter()

	const listOfCategories = utils.listOfCategories;
	const goToItem = (path) => {
		router.push(`individual/${path}`)	
	}
	return(
		<>


		<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
		{listOfCategories.map((category, key) => (<div className="flex items-center justify-center" key={key}>
			<img onClick={() => goToItem(category.value)} className="h-auto max-w-full rounded-lg cursor-pointer" src={category.photo} />
			</div>))}

		</div>
		</>
	)
}

export default Gallery
