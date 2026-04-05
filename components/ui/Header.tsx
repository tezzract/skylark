import { shadow } from "@/styles/utils"
import Image from "next/image"
import Link from "next/link"



function Header() {
  return (
    <header className="bg-popover relative flex h-24 w-full item-center justify-between px-3 sm:px-8 "
    
     style={{
        boxShadow:shadow, 
    }}>
   
        <Link href="/" className="flex items-end gap-2">
            <Image src="/images.png" 
            height={60} 
            width={60} 
            alt="logo"  
            className="rounded-full" 
            priority
            />

            <h1 className="flex flex-col pb-1 text-2xl font semibold loading-6">Sky<span>Lark</span></h1>

    </Link>

    </header>
  )
}

export default Header