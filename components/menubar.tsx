import { antic_didone, cinzel, montserrat } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import {
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels
} from '@headlessui/react'




const MenubarComponent = () => {

    return ( 
        <div className="h-28 bg-white shadow w-screen flex items-center sticky z-10">
            {/* Left Nav */}
            <nav className="flex-1">
                <h1 className={`${cinzel.className} text-3xl pl-4`}>Gemnest</h1>
            </nav>
            
            {/* Middle Nav */}
            <nav className="flex-9 text-center text-xs">
                <ul className={`${montserrat.className} flex justify-center space-x-4 font-medium`}>
                    <TabGroup>
                        <TabList className={'flex justify-center gap-4'}>
                            {['JEWELRY', 'LOVE & ENGAGEMENT', 'FINE WATCHES', 'ACCESSORIES', 'GIFTS'].map((tab, idx) => (
                                <Tab key={idx} className="cursor-pointer px-1 py-1">
                                    {tab}
                                </Tab>

                            ))}
                        </TabList>
                        <TabPanels className={'absolute left-0 w-full top-full bg-white shadow-lg'}>
                            <TabPanel className={`p-8`}>
                                <div className="flex gap-16 max-w-5xl mx-auto">
                                    {/* Categories */}
                                    <div className="text-left">
                                        <span className={`text-lg text-gray-400 ${antic_didone.className}`}>Categories</span>
                                        <div className="text-gray-600 flex flex-col gap-6 pt-8">
                                            <Link href={'#'}>Necklaces & Pendants</Link>
                                            <Link href={'#'}>Bracelets</Link>
                                            <Link href={'#'}>Earrings</Link>
                                            <Link href={'#'}>Rings</Link>
                                            <Link href={'#'}>Brooches</Link>
                                            <Link href={'#'}>Silver Jewelry</Link>
                                            <Link href={'#'}>{`Men's`} Jewelry</Link>
                                            <Link href={'#'}>All Jewelry</Link>
                                        </div>
                                    </div>
                                    {/* Collections */}
                                    <div className="text-left">
                                        <span className={`text-lg text-gray-400 ${antic_didone.className}`}>Collections</span>
                                        <div className="text-gray-600 flex flex-col gap-6 pt-8">
                                            <Link href={'#'}>Timeless Treasures</Link>
                                            <Link href={'#'}>Sapphire Sparkle</Link>
                                            <Link href={'#'}>Ethereal Elegance</Link>
                                            <Link href={'#'}>Jewelia</Link>
                                            <Link href={'#'}>Diamond Dreams</Link>
                                            <Link href={'#'}>Daily Dazzle</Link>
                                            <Link href={'#'}>Aura</Link>
                                            <Link href={'#'}>All Collections</Link>
                                        </div>
                                    </div>
                                    {/* Featured */}
                                    <div className="text-left">
                                        <span className={`text-lg text-gray-400 ${antic_didone.className}`}>Featured</span>
                                        <div className="text-gray-600 flex flex-col gap-6 pt-8">
                                            <Link href={'#'}>New Jewelry</Link>
                                            <Link href={'#'}>Most Popular Jewelry</Link>
                                            <Link href={'#'}>Online Exclusives</Link>
                                        </div>
                                    </div>
                                    {/* Menu Picture */}
                                    <div>
                                        <Image
                                            src={'/images/gemnest-jewelry-menu-image.jpg'}
                                            alt="Menu Image"
                                            priority
                                            width={450}
                                            height={100}
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>Content 2</TabPanel>
                            <TabPanel>Content 3</TabPanel>
                        </TabPanels>
                    </TabGroup>
                </ul>
            </nav>
            {/* Right Nav */}
            <nav className="flex-1">
                <ul className="flex items-center space-x-4">
                    <li>
                        <Link href={'/profile'}>
                            <Image
                                src={'/images/user-profile-avatar.svg'}
                                alt="User profile Icon"
                                width={28}
                                height={28}
                                className="cursor-pointer"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href={'/wishlist'}>
                            <Image
                                src={'/images/heart-icon.svg'}
                                alt="Wishlist Heart Icon"
                                width={28}
                                height={28}
                                className="cursor-pointer"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href={'/cart'}>
                            <Image
                                src={'/images/shoppingCart.svg'}
                                alt="shopping Cart Icon"
                                width={28}
                                height={28}
                                className="cursor-pointer"
                            />
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
     )
}
 
export default MenubarComponent;