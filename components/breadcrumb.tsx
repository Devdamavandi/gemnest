

'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";


const BreadCrumb = () => {

    const pathname = usePathname()  // To obtain current address from the url
    const segments = pathname.split("/").filter(Boolean)  // to split each route and add them to an array except (null, "", " ", undefined)

    // Build links for each part
    const crumbs = segments.slice(0, -1).map((seg, i) => {
        const href = "/" + segments.slice(0, i + 1).join("/")
        return { label: seg, href }
    })

    
    return ( 
        <nav className="text-sm">
            <Link href={'/'}>🏠</Link>
            {crumbs.map((crumb, i) => (
                <span key={i}>
                    {" / "}
                    <Link href={crumb.href} className="text-gray-700 hover:underline">
                        {crumb.label.replace(/-/, " ")}
                    </Link>
                </span>
            ))}
        </nav>
     )
}
 
export default BreadCrumb;