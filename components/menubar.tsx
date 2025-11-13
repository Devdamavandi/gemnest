
'use client'

import { antic_didone, cinzel, raleway } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import {
    Tab,
    TabGroup,
    TabList,
} from '@headlessui/react'
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import BasketPopover from '@/components/basketPopover'
import { ProductSchema } from "@/types/zod";

const MenubarComponent = () => {

    const [selectedIndex, setSelectedIndex] = useState(-1)
    const [subIndex, setSubIndex] = useState(0)

    const [collections, setCollections] = useState<Record<string, ProductSchema[]>>({})
    const [diamondShapes, setDiamondShapes] = useState<Record<string, ProductSchema[]>>({})

    const COLLECTION_KEYS = [
        'engagementrings',
        'WOMEN',
        'MEN',
        'couples',
        'eternity',
        'solitaire',
        'halo',
        'three-stone'
    ]
    
    // Temporarily CHOOSE Collections
    useEffect(() => {
        const FetchAllCollections = async () => {
            const result: Record<string, ProductSchema[]> = {}

            for (const key of COLLECTION_KEYS) {
                const res = await fetch(`/api/collections/show?name=${key}`, { cache: 'no-store' })
                if (!res.ok) continue

                const data = await res.json()
                result[key] = Array.isArray(data) ? data : [data]
            }

            setCollections(result)
        }

        // Fetching Diamond Shapes
        const shapes = ["round-brilliant", "oval", "princess", "emerald", "cushion"]
        const fetchAllDiamondShapes = async () => {

            const result: Record<string, ProductSchema[]> = {}
            
            for (const shape of shapes) {
                const res = await fetch(`/api/collections/show?name=${shape}`, { cache: 'no-store' })
                if (!res.ok) throw new Error('Couldnt fetch The specified diamond shape')
                const data = await res.json()
                
                result[shape] = Array.isArray(data) ? data : [data]
            }

            setDiamondShapes(result)
        }
        FetchAllCollections()
        fetchAllDiamondShapes()
    },[])



    return ( 
        <div 
            className={`group h-28 shadow w-screen flex items-center z-50 relative`} 

            >

            {/* Left Nav */}
            <nav className="flex-1 z-50">
                <h1 className={`${cinzel.className} text-7xl pl-4 tracking-wide`}>G<span className="text-4xl">emnest</span></h1>
            </nav>
            
            
            {/* Middle Nav */}
            <div className="flex-8 text-center relative z-45" onMouseLeave={() => setSelectedIndex(-1)}>
                <TabGroup selectedIndex={selectedIndex ?? 0} onChange={setSelectedIndex}>
                    <TabList className={'flex justify-center gap-4 font-medium text-xxs tracking-wider'}>
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
                        className="fixed left-0 top-16 w-screen h-fit z-40 bg-white py-5 outline-none mx-auto"
                        onMouseEnter={() => setSelectedIndex(selectedIndex)}
                        >
                        <div className="p-6">
                            {/* First Menu item - JEWELRY */}
                            {selectedIndex === 0 && (
                                <div className="flex gap-16 max-w-6xl mx-auto justify-center">
                                    {/* Categories */}
                                    <div className="text-left">
                                        <span className={`text-xl text-gray-400 ${antic_didone.className}`}>Categories</span>
                                        <div className={`text-gray-600 flex flex-col gap-6 pt-6 text-xs-plus ${raleway.className} font-medium`}>
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
                                        <span className={`text-xl text-gray-400 ${antic_didone.className}`}>Collections</span>
                                        <div className={`text-gray-600 flex flex-col gap-6 pt-6 text-xs-plus ${raleway.className} font-medium`}>
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
                                        <span className={`text-xl text-gray-400 ${antic_didone.className}`}>Featured</span>
                                        <div className={`text-gray-600 flex flex-col gap-6 pt-6 text-xs-plus ${raleway.className} font-medium`}>
                                            <Link href={'#'} className="hover:font-semibold">New Jewelry</Link>
                                            <Link href={'#'} className="hover:font-semibold">Most Popular Jewelry</Link>
                                            <Link href={'#'} className="hover:font-semibold">Online Exclusives</Link>
                                        </div>
                                    </div>
                                    {/* Menu Picture */}
                                    <div>
                                        <Image
                                            src={'/images/fine-watches/1.jpg'}
                                            alt="Menu Image"
                                            priority
                                            width={480}
                                            height={100}
                                            className="object-cover h-[30rem]"
                                        />
                                    </div>
                                </div>
                            )}
                            {/* Second Menu Item - LOVE & ENGAGEMENT */}
                            {selectedIndex === 1 && (
                                <div className="text-black py-10 h-80 flex flex-col justify-start items-center mx-auto max-w-5xl" onMouseLeave={() => setSubIndex(-1)}>
                                    {/* SUBTABS */}
                                    <div className="flex justify-center gap-20 text-xl px-8">
                                        {["Engagement Rings", "Wedding Bands", "Diamond Shapes", "Ring Settings"].map((subtab, i) => (
                                            <h1 key={i} className={`${antic_didone.className} cursor-pointer`}
                                                onMouseEnter={() => setSubIndex(i)}
                                            >
                                                {subtab}
                                            </h1>
                                        ))}
                                    </div>
                                    {/* SUBTAB CONTENT */}
                                    <AnimatePresence mode="wait">
                                        {subIndex !== -1 && (
                                            <motion.div
                                                key={subIndex}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                                className={`w-full flex justify-center mt-8 text-xs-plus ${raleway.className} font-medium`}
                                                onMouseEnter={() => setSubIndex(subIndex)}
                                            >
                                                {/* SUBTAB #1 CONTENT - ENGAGEMENT RINGS */}
                                                {subIndex === 0 && (
                                                    <div className="flex items-center gap-4">
                                                        {collections["engagementrings"]?.map((ring, i) => (
                                                            <Link key={i} href={`/products/${ring.category?.name}/${ring.slug}`} className="flex flex-col items-center gap-2">
                                                                <Image src={ring?.images[0] ?? ""} alt={`${ring?.name} image`} width={200} height={200} className="object-cover "/>
                                                                <span className="text-xs-plus">{ring.name}</span>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                                {/* SUBTAB #2 - WEDDING BANDS */}
                                                {subIndex === 1 && (
                                                    <div className="flex items-center gap-4">
                                                        {/* WOMEN COLLECTION */}
                                                        {collections && collections["WOMEN"] && (
                                                            <Link href={`/collections/women`} className="flex flex-col gap-2">
                                                                <Image src={"/images/collections/women-wedding-bands.jpg"} alt={`women wedding bands image`} width={200} height={200} />
                                                                <span className="text-xs-plus">{`Women's Wedding Bands`}</span>
                                                            </Link>
                                                        )}
                                                        {/* MEN COLLECTION */}
                                                        {collections && collections["MEN"] && (
                                                            <Link href={`/collections/men`} className="flex flex-col gap-2">
                                                                <Image src={"/images/collections/men-wedding-bands.jpg"} alt={`men wedding bands image`} width={200} height={200} />
                                                                <span className="text-xs-plus">{`Men's Wedding Bands`}</span>
                                                            </Link>
                                                        )}
                                                        {/* COUPLES COLLECTION */}
                                                        {collections && collections["couples"] && (
                                                            <Link href={`/collections/couples`} className="flex flex-col gap-2">
                                                                <Image src={"/images/collections/couples-rings.jpg"} alt={`couples rings image`} width={200} height={200} />
                                                                <span className="text-xs-plus">{`Couples Rings`}</span>
                                                            </Link>
                                                        )}
                                                        {/* ETERNITY COLLECTION */}
                                                        {collections && collections["eternity"] && (
                                                            <Link href={`/collections/eternity`} className="flex flex-col gap-2">
                                                                <Image src={"/images/collections/eternity-rings.jpg"} alt={`Eternity rings image`} width={200} height={200} />
                                                                <span className="text-xs-plus">{`Eternity Rings`}</span>
                                                            </Link>
                                                        )}
                                                    </div>
                                                )}
                                                {/* SUBTAB #3 - DIAMOND SHAPES */}
                                                {subIndex === 2 && (
                                                    <div className="flex items-center gap-4">
                                                        {diamondShapes && 
                                                            Object.keys(diamondShapes)?.map((shape) => (
                                                                <Link key={shape} href={`/collections/${shape}`} className="flex flex-col gap-2">
                                                                    <Image src={`/images/collections/diamond-shapes/${shape}.jpg`} alt={`${shape} image`} width={200} height={200} />
                                                                    <span className="text-xs-plus">{shape}</span>
                                                                </Link>
                                                            ))
                                                        }                                                        
                                                    </div>
                                                )}
                                                {/* SUBTAB #4 - RING SETTINGS */}
                                                {subIndex === 3 && (
                                                    <div className="flex items-center gap-4">
                                                        {collections && collections["three-stone"] && (
                                                            <Link href={`/collections/three-stone`} className="flex flex-col gap-2">
                                                                <Image src={'/images/gemnest-three-stone/1.jpg'} alt="three stone rings"  width={200} height={200}/>
                                                                <span className="text-xs-plus">Three Stone</span>
                                                            </Link>
                                                        )}
                                                    </div>
                                                )}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                    
                                </div>
                            )}
                            {/* Third Menu Item - FINE WATCHES */}
                            {selectedIndex === 2 && (
                                <div className="flex gap-16 max-w-7xl mx-auto justify-center">
                                    {/* Shop By Category */}
                                    <div className="text-left">
                                        <h1 className={`text-xl text-gray-400 ${antic_didone.className}`}>Shop By Category</h1>
                                        <div className={`text-gray-600 flex flex-col gap-6 pt-6 text-xs-plus ${raleway.className} font-medium`}>
                                            <Link href={'/categories/womenwatches'} className="hover:font-semibold hover:text-sm">{`Women's Watches`}</Link>
                                            <Link href={'/categories/menwatches'} className="hover:font-semibold hover:text-sm">{`Men's Watches`}</Link>
                                            <Link href={'/categories/patekphilippe'} className="hover:font-semibold hover:text-sm">{`Patek Philippe`}</Link>
                                            <Link href={'/categories/allfinewatches'} className="hover:font-semibold hover:text-sm">{`All Fine Watches`}</Link>
                                        </div>
                                    </div>
                                    {/* Curated Shops */}
                                    <div className="text-left">
                                        <h1 className={`text-xl text-gray-400 ${antic_didone.className}`}>Curated Shops</h1>
                                        <div className={`text-gray-600 flex flex-col gap-6 pt-6 text-xs-plus ${raleway.className} font-medium`}>
                                            <Link href={'/categories/gemnest-blue-watches'} className="hover:font-semibold">{`Gemnest Blue Watches`}</Link>
                                            <Link href={'/categories/diamond-watches'} className="hover:font-semibold">{`Diamond Watches`}</Link>
                                            <Link href={'/categories/gold-watches'} className="hover:font-semibold">{`Gold Watches`}</Link>
                                            <Link href={'/categories/stainless-steel-watches'} className="hover:font-semibold">{`Stainless Steel Watches`}</Link>
                                            <Link href={'/categories/time-objects'} className="hover:font-semibold">{`Time Objects`}</Link>
                                        </div>
                                    </div>
                                    {/* Shop By Collection */}
                                    <div className="text-left">
                                        <h1 className={`text-xl text-gray-400 ${antic_didone.className}`}>Shop By Collection</h1>
                                        <div className={`text-gray-600 flex flex-col gap-6 pt-6 text-xs-plus ${raleway.className} font-medium`}>
                                            <Link href={'/categories/gemnest-blue-watches'} className="hover:font-semibold">{`Gemnest HardWear`}</Link>
                                            <Link href={'/categories/diamond-watches'} className="hover:font-semibold">{`Gemnest Eternity`}</Link>
                                            <Link href={'/categories/gold-watches'} className="hover:font-semibold">{`Union Square`}</Link>
                                            <Link href={'/categories/stainless-steel-watches'} className="hover:font-semibold">{`Gemnest Rope`}</Link>
                                            <Link href={'/categories/time-objects'} className="hover:font-semibold">{`High Jewelry Watches`}</Link>
                                        </div>
                                    </div>
                                    {/* Menu Picture */}
                                    <div>
                                        <Image
                                            src={'/images/gemnest-jewelry-menu-image.jpg'}
                                            alt="Menu Image"
                                            priority
                                            width={430}
                                            height={100}
                                            className="object-cover h-[26rem]"
                                        />
                                    </div>
                                </div>
                            )}
                            {/* 4th Menu Item - ACCESSORIES */}
                            {selectedIndex === 3 && (
                                <div className="max-w-7xl mx-auto flex justify-center gap-12">
                                    <div className="grid grid-cols-2 gap-16">
                                        {/* Leather Goods */}
                                        <div className="text-left">
                                            <h1 className={`text-xl text-gray-400 ${antic_didone.className}`}>Leather Goods</h1>
                                            <div className={`text-gray-600 flex flex-col gap-6 pt-6 text-xs-plus ${raleway.className} font-medium`}>
                                                <Link href={'/categories/Bags'} className="hover:font-semibold hover:text-sm">{`Bags`}</Link>
                                                <Link href={'/categories/small-leather-goods'} className="hover:font-semibold hover:text-sm">{`Small Leather Goods`}</Link>
                                            </div>
                                        </div>
                                        {/* Curated Shops */}
                                        <div className="text-left">
                                            <h1 className={`text-xl text-gray-400 ${antic_didone.className}`}>Curated Shops</h1>
                                            <div className={`text-gray-600 flex flex-col gap-6 pt-6 text-xs-plus ${raleway.className} font-medium`}>
                                                <Link href={'/categories/gemnest-blue-watches'} className="hover:font-semibold">{`Women's Accessories`}</Link>
                                                <Link href={'/categories/diamond-watches'} className="hover:font-semibold">{`Men's Accessories`}</Link>
                                                <Link href={'/categories/gold-watches'} className="hover:font-semibold">{`Pet Accessories`}</Link>
                                            </div>
                                        </div>
                                        {/* Shop By Collection */}
                                        <div className="text-left">
                                            <h1 className={`text-xl text-gray-400 ${antic_didone.className}`}>Accessories</h1>
                                            <div className={`text-gray-600 flex flex-col gap-6 pt-6 text-xs-plus ${raleway.className} font-medium`}>
                                                <Link href={'/categories/gemnest-blue-watches'} className="hover:font-semibold">{`Sunglassess`}</Link>
                                                <Link href={'/categories/diamond-watches'} className="hover:font-semibold">{`Key Rings`}</Link>
                                                <Link href={'/categories/gold-watches'} className="hover:font-semibold">{`Scarves & Stoles`}</Link>
                                                <Link href={'/categories/stainless-steel-watches'} className="hover:font-semibold">{`Belts`}</Link>
                                                <Link href={'/categories/time-objects'} className="hover:font-semibold">{`Fragrance`}</Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Menu Picture */}
                                    <div>
                                        <Image
                                            src={'/images/accessories/1.jpg'}
                                            alt="Menu Image"
                                            priority
                                            width={430}
                                            height={100}
                                            className="object-cover h-104"
                                        />
                                    </div>
                                </div>
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
                                className="cursor-pointer "
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
                                className="cursor-pointer "
                            />
                        </Link>
                    </li>

                    {/* Shopping Cart */}
                    <li className=" text-red-500">
                        <BasketPopover />
                    </li>
                </ul>
            </nav>

        </div>
     )
}
 
export default MenubarComponent;