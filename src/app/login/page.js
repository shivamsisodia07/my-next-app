"use client"
import {useRouter} from "next/navigation"
const login = () => {
  const router=useRouter();
  return (
    <div>
    <div>login</div>
    <button onClick={()=>{router.push("/about")}}>submit</button>
    </div>
    
  )
}

export default login