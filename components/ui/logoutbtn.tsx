"use client"



import React, { useState } from 'react'
import { Button } from './button'
import { Loader2 } from 'lucide-react'
import { toast } from "sonner"
import { useRouter } from 'next/navigation'

function logoutbtn() {
const [loading , setLoading] = useState(false)
const router = useRouter()

const handlelogout = async()=>{

   setLoading(true)
   await new  Promise((resolve)=> setTimeout(resolve,2000))
   const errormessage = null   

   if (!errormessage) {             //if there is no error message then show success toast and redirect to home page
  toast.success("logged out", {
    description: "you have been logged out successfully",
  })
  router.push("/")
} else {
  toast.error("logout failed", {
    description: "something went wrong",
  })
}
setLoading(false)               //this is for that the component that the loading animation dont play for infinity 
console.log("logout")
}
return (
<Button className="w-24" 
    onClick={handlelogout}
    disabled={loading}>
        {loading? <Loader2 className="animate-spin"/>: "logout"}
    </Button>
  )
}

export default logoutbtn



