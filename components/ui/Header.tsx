import { shadow } from "@/styles/utils"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./button"
import ModeToggle from "./themeprovider"
import Logoutbtn from "./logoutbtn"


function Header() {
  const user =  null
  return (
    <header className="bg-popover relative flex h-24 w-full item-center justify-between px-3 sm:px-8 "
    
     style={{
        boxShadow:shadow, 
    }}>
    
        <Link href="/" >                        {/*this is the logo image , line 14 se 21*/}    
            <Image src="/images.png" 
            height={60} 
            width={60} 
            alt="logo"  
            className="rounded-full" 
            priority
            />

            <h1 className=" font-semibold">Sky<span>Lark</span></h1>

    </Link>
    <div className="flex items-center gap-4">
      {user ? (
        <Logoutbtn /> 
      ) :
        <>
         <Button asChild  className="hidden sm:block" ><Link href="/signup">SignUp</Link></Button>
         <Button asChild variant="outline" ><Link href="/login">Login</Link></Button>
        </>}

<ModeToggle />
    </div>

    </header>
  )
}

export default Header







