import Header from "@/components/Header";
import IndividualProduct from "@/components/IndividualProduct";
import { useRouter } from "next/router";
import { HiOutlineArrowLeft } from "react-icons/hi2";
 
export default function IndividualPage() {
	const router = useRouter()
	const goBack = () => {
		router.back()
		return
	}
	return (
		<>
		<div className="h-screen">
		<Header/>
		<HiOutlineArrowLeft className="text-4xl text-gray-600 ml-2 my-4 cursor-pointer" onClick={goBack}/>

		<IndividualProduct category={router.query.id}/>
		</div>
		</>
	)

}
