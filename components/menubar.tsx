import { antic_didone, cinzel } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import {
    Tab,
    TabGroup,
    TabList,
} from '@headlessui/react'
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import BasketPopover from '@/components/basketPopover'

const MenubarComponent = () => {

    const [selectedIndex, setSelectedIndex] = useState(-1)


    return ( 
        <div className="h-28 bg-white shadow w-screen flex items-center z-50 relative">

            {/* Left Nav */}
            <nav className="flex-1">
                <h1 className={`${cinzel.className} text-3xl pl-4`}>Gemnest</h1>
            </nav>
            
            
            {/* Middle Nav */}
            <div className="flex-9 text-center text-xs relative" onMouseLeave={() => setSelectedIndex(-1)}>
                <TabGroup selectedIndex={selectedIndex ?? 0} onChange={setSelectedIndex}>
                    <TabList className={'flex justify-center gap-4 font-medium'}>
                        {['JEWELRY', 'LOVE & ENGAGEMENT', 'FINE WATCHES', 'ACCESSORIES', 'GIFTS'].map((tab, idx) => (
                            <Tab 
                            key={idx} 
                            className="cursor-pointer px-1 py-1" 
                            onMouseEnter={() => setSelectedIndex(idx)}
                            >
                                {tab}
                            </Tab>

                        ))}
                    </TabList>
                </TabGroup>

                {/* Animated Dropdown Panel */}
                <AnimatePresence mode="wait">
                {selectedIndex !== -1 && (
                    <motion.div
                        key={selectedIndex}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="absolute left-0 top-6 w-full z-40 bg-white pt-10 outline-none"
                        onMouseEnter={() => setSelectedIndex(selectedIndex)}
                        >
                        <div className="p-6">
                            {selectedIndex === 0 && (
                                <div className="flex gap-16 max-w-6xl mx-auto justify-center">
                                    {/* Categories */}
                                    <div className="text-left">
                                        <span className={`text-lg text-gray-400 ${antic_didone.className}`}>Categories</span>
                                        <div className="text-gray-600 flex flex-col gap-6 pt-8 text-xs">
                                            <Link href={'/categories/necklaces'} className="hover:font-semibold">Necklaces & Pendants</Link>
                                            <Link href={'/categories/bracelets'} className="hover:font-semibold">Bracelets</Link>
                                            <Link href={'/categories/earrings'} className="hover:font-semibold">Earrings</Link>
                                            <Link href={'/categories/rings'} className="hover:font-semibold">Rings</Link>
                                            <Link href={'/categories/brooches'} className="hover:font-semibold">Brooches</Link>
                                            <Link href={'/categories/silver-jewelry'} className="hover:font-semibold">Silver Jewelry</Link>
                                            <Link href={'/categories/men-jewelry'} className="hover:font-semibold">{`Men's`} Jewelry</Link>
                                            <Link href={'/categories/all'} className="hover:font-semibold">All Jewelry</Link>
                                        </div>
                                    </div>
                                    {/* Collections */}
                                    <div className="text-left">
                                        <span className={`text-lg text-gray-400 ${antic_didone.className}`}>Collections</span>
                                        <div className="text-gray-600 flex flex-col gap-6 pt-8 text-xs">
                                            <Link href={'/collections/timeless-treasures'} className="hover:font-semibold">Timeless Treasures</Link>
                                            <Link href={'/collections/sapphire-sparkle'} className="hover:font-semibold">Sapphire Sparkle</Link>
                                            <Link href={'/collections/ethereal-elegance'} className="hover:font-semibold">Ethereal Elegance</Link>
                                            <Link href={'/collections/jewelia'} className="hover:font-semibold">Jewelia</Link>
                                            <Link href={'#'} className="hover:font-semibold">Diamond Dreams</Link>
                                            <Link href={'#'} className="hover:font-semibold">Daily Dazzle</Link>
                                            <Link href={'#'} className="hover:font-semibold">Aura</Link>
                                            <Link href={'/collections/all'} className="hover:font-semibold">All Collections</Link>
                                        </div>
                                    </div>
                                    {/* Featured */}
                                    <div className="text-left"> 
                                        <span className={`text-lg text-gray-400 ${antic_didone.className}`}>Featured</span>
                                        <div className="text-gray-600 flex flex-col gap-6 pt-8 text-xs">
                                            <Link href={'#'} className="hover:font-semibold">New Jewelry</Link>
                                            <Link href={'#'} className="hover:font-semibold">Most Popular Jewelry</Link>
                                            <Link href={'#'} className="hover:font-semibold">Online Exclusives</Link>
                                        </div>
                                    </div>
                                    {/* Menu Picture */}
                                    <div>
                                        <Image
                                            src={'/images/gemnest-jewelry-menu-image.jpg'}
                                            alt="Menu Image"
                                            priority
                                            width={530}
                                            height={100}
                                            className="object-cover h-[30rem]"
                                        />
                                    </div>
                                </div>
                            )}
                            {selectedIndex === 1 && (
                                <div className="text-center">Content 2</div>
                            )}
                            {selectedIndex === 2 && (
                                <div className="text-center">Content 3</div>
                            )}
                        </div>
                    </motion.div>
                )}
                </AnimatePresence>
            </div>


            {/* Right Nav */}
            <nav className="flex-1">
                <ul className="flex items-center space-x-2">
                    {/* Profile */}
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

                    {/* Wishlist Icon */}
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

                    {/* Shopping Cart */}
                    <li>
                        <BasketPopover />
                    </li>
                </ul>
            </nav>

        </div>
     )
}
 
export default MenubarComponent;