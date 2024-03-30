"use client"
import Link from "next/link";
import { useAtom } from "jotai";
import { storageAtom } from "@/storage";

export default function RightBar() {
    const [storage] = useAtom(storageAtom);
    return (
        <div className="w-full h-full text-primary" >
            {!storage?.auth_token && <div className="flex gap-4 text-sm px-5 h-14 items-center justify-end  border-b border-primaryBorder">
                <Link href="/login" className="py-1 px-3 border-2 border-gray-900  rounded-full bg-gray-800  hover:bg-gray-900 transition-all">Login</Link>
                <Link href="/signup" className="py-1 px-4 border-2  border-accent-700 rounded-full  bg-accent-500 hover:bg-accent-600 transition-all">Join Projectlist</Link>
            </div>}
        </div>
    )
}