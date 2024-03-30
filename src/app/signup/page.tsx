"use client"
import { Input } from "@/components/interactive"
import Link from "next/link";
import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import API from "@/utils/API";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { storageAtom } from "@/storage";


export default function SignupPage() {
    const [inputs, setInputs] = useState<{ name: string, email: string, password: string }>({ name: "", email: "", password: "" });
    const router = useRouter();
    const [storage, setStorage] = useAtom(storageAtom);


    const singupMutation = useMutation(
        {
            mutationFn: (data: { name: string, email: string, password: string }) => API.signup(data),
            onSuccess: (data: any) => {
                console.log(data?.signup?.token)
                setStorage({ ...storage, auth_token: data?.signup?.token })
                console.log(storage)
                router.push("/")
            }
        }
    )

    const handleSubmit = (e: any) => {
        e.preventDefault();
        singupMutation.mutate(inputs);
    }

    return (
        <div className="h-screen w-screen flex flex-col gap-10 items-center justify-center px-4">
            <div className="text-center flex flex-col gap-3">
                <img src="./projectlist.png" alt="projectlist-logo" className="h-12" />
                <i className="text-xs text-gray-500">Showcase your projects</i>
            </div>
            <div className="flex flex-col w-full max-w-[360px] border-2  p-6 py-8 border-primaryBorder rounded-xl">
                <h3 className="text-4xl text-center font-serif font-thin pb-6">Sign up</h3>
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        label="Name"
                        placeholder="Jon Doe"
                        value={inputs.name}
                        onChange={(e) => setInputs({ ...inputs, name: e.target.value })} />
                    <Input
                        type="email"
                        label="Email"
                        placeholder="example@gmail.com"
                        value={inputs.email}
                        onChange={(e) => setInputs({ ...inputs, email: e.target.value })} />
                    <Input
                        type="password"
                        label="Password"
                        value={inputs.password}
                        onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
                    <button
                        type="submit"
                        className="py-2 px-4 text-sm font-bold bg-gray-900 text-primary rounded-full"
                    >Sign Up</button>
                </form>
                <p className="text-center text-xs py-2">Already have an account? <Link href="/login" className="text-accent-600 font-medium">login</Link></p>
            </div>
        </div>
    );
}