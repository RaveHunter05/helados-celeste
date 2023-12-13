import utils from "@/utils"
import { useEffect, useState } from "react"
import SubCategories from "./Subcategories"

const IndividualProduct = ({category}) => {
	const [categoryData, setCategoryData] = useState(null)
	useEffect(() => {
		let pageCategory = utils.listOfCategories.filter(x => x.value == category)
		pageCategory = pageCategory[0]

		setCategoryData(pageCategory)

	}, [])
	return(
		<>

		<div className="flex justify-center items-center space-x-6 h-4/6 flex-wrap">

		<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
		{categoryData && (
			<div>
			<img className="rounded-t-lg p-6" src={categoryData.photo} alt="" />
			<div className="p-5 capitalize">
			<h5 className="mb-2 text-2xl font-bold dark:text-white">{categoryData.value}</h5>
			{categoryData.subcategories && (
				<> 
				<SubCategories subcategories={categoryData.subcategories}/>
				</>
			)}
			</div>

			</div>
		)}
		</div>

		</div>

		</>
	)
}

export default IndividualProduct
