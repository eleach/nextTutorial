import { useRouter } from 'next/router'


export default function ProductDetail() {

	const router = useRouter()

	const id = router.query.productId


	return (
		<div>

			<h1> Details about Product ID { id } </h1>
			
		</div>
	)
}
