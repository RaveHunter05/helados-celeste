const IndividualProduct = () => {
	return(
		<>

		<div className="flex justify-center items-center space-x-6 h-4/6 flex-wrap">

		<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
		<a href="#">
		<img className="rounded-t-lg p-6" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
		</a>
		<div className="p-5">
		<h5 className="mb-2 text-2xl font-bold dark:text-white">Noteworthy technology acquisitions 2021</h5>
		<h3 className="mb-2 text-xl font-bold text-slate-500">C$ 23</h3>
		<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
		</div>
		</div>

		</div>

		</>
	)
}

export default IndividualProduct
