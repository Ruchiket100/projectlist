import { HomeI, ProjectsI, SearchI } from "@/utils/Icons"
import Link from "next/link"

export default function SideBar (){
    const tabs = [

        {
            title: "Scroll",
            icon: <HomeI/>,
            href:"/home"
        },
        {
            title: "Projects",
            icon: <ProjectsI/>,
            href:"/projects"
        },
        {
            title: "Search",
            icon: <SearchI/>,
            href:"/search"
        }
    ]
    return(
        <div className="w-full h-full pl-6">
            <img 
            className="py-3 flex h-14" 
            alt="projectlist-logo" 
            src="/assets/projectlist-logo.svg"/>

            <div className="pr-6 mt-6  flex flex-col gap-2">
                {tabs.map((tab: any, i: number)=>(
                    <Link 
                    className="flex lg:flex-row py-2 gap-2 hover:gap-3 transition-all"
                    href={tab.href}>
                        {tab.icon}
                        <p className="text-xxs font-semibold">{tab.title}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}