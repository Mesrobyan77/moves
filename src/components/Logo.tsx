'use client';
import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.svg"
      alt="Hotflix Logo"
      width={160} 
      height={40}   
      priority    
      style={{ width: 'auto', height: 'auto' }}  
      className="h-8 md:h-10 w-auto"  
      loading="eager"
    />
  );
}