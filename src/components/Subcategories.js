import { useEffect } from "react"

const SubCategories = ({subcategories}) => {
	useEffect(() => {
		console.log({subcategories})
	}, [subcategories])
	return(<>
		{subcategories.map(category => (
			<>
			<p className="mb-3 font-normal text-gray-700 dark:text-gray-400 capitalize">{category.text} <span className="font-bold"> {category?.price && (<> 
				C${category.price}
				</>)}</span></p>
			</>
		))}
		</>)
}

export default SubCategories
