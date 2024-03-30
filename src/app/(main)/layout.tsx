import SideBar from "@/components/sidebar";
import Header from "@/components/header";
import RightBar from "@/components/rightbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">

      <body >
        <div className="grid grid-cols-12 sm:w-full md:w-full lg:w-[1280px] min-h-screen lg:bg-white lg:mx-auto">
          <div className="lg:flex hidden col-span-2 border-r border-r-[0.5] border-primaryBorder"><SideBar /></div>
          <div className="col-span-12 lg:col-span-6 lg:min-w-[640px]"><Header />{children}</div>
          <div className="lg:flex hidden col-span-3 border-x border-r-[0.5] border-primaryBorder"><RightBar /></div>
        </div>
      </body>
    </html>
  );
}
