
/*
    I was forced to create this intermediary file between the main
    Layout.tsx file and the two menubar and footer components!
    Because otherwise I would get Hydration Mismatch error, Because
    I had used <TabGroup> and <TabList> component in the menubar.tsx file.
    other wise,
    All of this logic would directly go to the main Layout.tsx file!!
*/

'use client'

import { usePathname } from "next/navigation"
import React from "react"
import FooterComponent from "./footer"
import dynamic from "next/dynamic";

const MenubarComponent = dynamic(() => import("@/components/menubar"), { ssr: false })

const NoNavRoutes = ["/signin", "/signup", "/portfolio", "/dashboard"]

export default function LayoutClient({ children }: { children: React.ReactNode }) {

    const pathname = usePathname()

    const hidenav = NoNavRoutes.some((route) => pathname.startsWith(route))

    return (
        <>
            {!hidenav && <MenubarComponent />}
            <main>{children}</main>
            {!hidenav && <FooterComponent />}
        </>
    )
}