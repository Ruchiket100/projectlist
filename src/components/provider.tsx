"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { storageAtom } from "@/storage";
import { useEffect } from "react";

export default function Provider({ children }: Readonly<{ children: React.ReactNode }>) {
    const queryClient = new QueryClient();
    const [storage, setStorage] = useAtom(storageAtom);


    useEffect(() => {
        const storedValue = localStorage.getItem("projectlist-store");
        if (storedValue) {
            setStorage(JSON.parse(storedValue) as any);
            console.log(JSON.parse(storedValue))
        }
    }, [])

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}