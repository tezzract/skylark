"use client"



import React, { useState } from 'react'
import { Button } from './button'
import { Loader2 } from 'lucide-react'

function logoutbtn() {
const [loading , setLoading] = useState(false)


const handlelogout = async()=>{
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