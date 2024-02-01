"use client"
import API from "@/utils/api";
import { GoogleLogin } from "@react-oauth/google";
import { useEffect } from "react";
  
export default function Header(){
    useEffect(()=>{
        console.log(API())
    },[])
    return(
        <div className="flex font-medium items-center justify-around sm:justify-start lg:max-w-[640px] w-full lg:w-[640px] fixed top-0 bg-white py-4  sm:px-6 border-b h-14 z-40 border-primaryBorder">
            Scroll
            <div>
        <GoogleLogin onSuccess={(cred)=> console.log(cred)}/>
        </div>
        </div>
    )
}

//Patua One
//Prata
//Roboto Serif