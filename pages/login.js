// Test purpose, not used anywhere

import LoginForm from "../components/LoginForm"
import { getToken } from "../lib/shopify"


export default function Login() {


  return (
		<div>
			<LoginForm/>
		</div>
  )
}


// export async function getStaticProps() {
//   const products = await getToken()

//   return {
//     props: { products}, // will be passed to the page component as props
//   }
// }