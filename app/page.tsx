
'use client'

import MenubarComponent from "@/components/menubar";
import { antic_didone, cormorant, montserrat, playfairDisplay, prata } from "@/lib/fonts";
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from "react";
import HandshakeIcon from '@mui/icons-material/Handshake';
import FrontHandIcon from '@mui/icons-material/FrontHand';
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6"
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdPhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { PiCopyright } from "react-icons/pi";
import Link from "next/link";
import Script from "next/script";
import { useRouter } from "next/navigation";
import CategoryProductsPage from "@/components/categoryProducts";

const MainPage = () => {


    const [heroHovered, setHeroHovered] = useState(false)

    const router = useRouter()

    return ( 
        <div className="overflow-x-hidden">
            {/* Top Menu Bar */}
            <MenubarComponent />

            {/* Hero Section */}
            <section className={`${playfairDisplay.className} relative h-screen overflow-hidden`}>
                
              
                {/* Hero Image */}
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/images/hero.jpg"
                        alt="hero"
                        fill
                        priority
                        className={`object-cover transition-opacity duration-700 ${heroHovered ? 'opacity-0' : 'opacity-100'}`}
                    />
                    <Image
                        src="/images/daydream-wedding-ring-front-on.jpg"
                        alt="hover hero"
                        fill
                        priority
                        className={`transition-opacity duration-700 ${heroHovered ? 'opacity-100' : 'opacity-0'}`}
                    />
                </div>
                
                {/* In-visible section to change the Hero Image */}
                <div className="absolute w-full top-1/3 left-0 bg-transparent h-56 z-30" 
                    onMouseEnter={() => setHeroHovered(true)}
                    onMouseLeave={() => setHeroHovered(false)}
                />




                {/* Shop Now Button */}
                <motion.div
                    initial= {{ opacity: 0 }}
                    animate= {{ opacity: 1 }}
                    transition= {{ duration: 1.2, ease: 'linear' }}
                    className="absolute bottom-32 left-10 z-10"
                >
                    <motion.button
                        className="relative px-14 py-4 border border-black cursor-pointer overflow-hidden"
                        whileHover="hover"
                        initial="initial"
                        variants={{
                            initial: { color: "#000" },
                            hover: { color: "#fff" }
                        }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-night/85"
                            variants={{
                                initial: { y: "100%" },
                                hover: { y: "0%" }
                            }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        />
                        <span className={`relative z-10 ${antic_didone}`}>Shop collection</span>
                    </motion.button>
                </motion.div>
            </section>

       

            {/* Limited Offer Banner - After Hero */}
            <section className="bg-night text-white py-4 text-center">
                <Link href={'#'} className="text-sm">🎁 Free Engraving on Orders Over $500 | Limited Time Offer!</Link>
            </section>


            
            {/* Selective Categories Section */}
            <section className="py-10">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className={`text-5xl text-center my-20 ${montserrat.className}`}>Charming Jewelries</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        {/* Rings */}
                        <motion.div
                            initial= {{ opacity: 0, y: 100 }}
                            whileInView= {{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                        >
                            <div className="w-[400px] h-[550px] group cursor-pointer">
                                <Link href={`/categories/rings`}>
                                    <Image src={'/images/diamond-ring-on-white-space.jpg'} alt="diamond ring"
                                        width={400} height={900}
                                        className="w-full h-full object-cover group-hover:scale-105 group-hover:shadow-2xl transition-transform"
                                    />
                                </Link>
                                <h3 className="text-2xl text-center mt-4">Rings</h3>
                            </div>
                        </motion.div>
                        {/* Necklaces */}
                        <motion.div
                            initial= {{ opacity: 0, y: -100 }}
                            whileInView= {{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                        >
                            <div className="w-[400px] h-[550px] group cursor-pointer">
                                <Link href={'/categories/necklaces'}>
                                    <Image src={'/images/woman-pink-wearing-necklace.jpg'} alt="diamond ring"
                                       width={400} height={900}
                                       className="w-full h-full object-cover group-hover:scale-105 group-hover:shadow-2xl transition-transform"
                                    />
                                </Link>
                                <h3 className="text-2xl text-center mt-4">Necklaces</h3>
                            </div>
                        </motion.div>
                        
                        {/* Earrings */}
                        <motion.div
                            initial= {{ opacity: 0, y: 100 }}
                            whileInView= {{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                        >
                            <div className="w-[400px] h-[550px] group cursor-pointer">
                                <Image src={'/images/portrait-female-earrings-with-gems-isolated.jpg'} alt="diamond ring"
                                   width={400} height={900} 
                                   className="w-full h-full object-cover group-hover:scale-105 group-hover:shadow-2xl transition-transform"
                                />
                                <h3 className="text-2xl text-center mt-4">Earrings</h3>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* Featured Products Section */}
            <section className="py-26">
                <div className="max-w-7xl px-4 mx-auto">
                    <h2 className={`text-4xl text-center mb-16 ${montserrat.className}`}>Featured Collections</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Product 1 */}
                        <div className="group cursor-pointer">
                            <div className="relative overflow-hidden">
                                <Image
                                    src={'/images/Diamond-Ring-on-Persons-Hand.jpg'}
                                    alt="Diamond-Ring-on-Persons-Hand"
                                    width={300}
                                    height={300}
                                    className="w-full h-80 object-cover group-hover:scale-125 transition-transform duration-500"
                                />
                                <Script id="diamond-ring-schema" type="application/ld+json">
                                    {`
                                    {
                                        "@context": "https://schema.org",
                                        "@type": "Product",
                                        "name" : "Diamond Ring",
                                        "image": [
                                            "https://gemnest.vercel.app/images/Diamond-Ring-on-Persons-Hand.jpg"
                                        ],
                                        "description": "A stunning diamond ring crafted with premium materials.",
                                        "sku": "DR-001",
                                        "brand": {
                                            "@type": "Brand",
                                            "name": "Gemnest"
                                        },
                                        "offers": {
                                            "@type": "Offer",
                                            "url": "https://gemnest.vercel.app/products/diamond-ring",
                                            "priceCurrency": "USD",
                                            "price": "2499",
                                            "availability": "https://schema.org/InStock"
                                        }
                                    }
                                    `}
                                </Script>
                                {/* Hover Overly */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                                    <div className="text-center text-white">
                                        <h3 className="text-xl font-semibold mb-2">Diamond Ring</h3>
                                        <p className="text-lg mb-4">$2,499</p>
                                        <button className="border border-white px-6 py-2 hover:bg-white_smoke hover:text-night transition-colors cursor-pointer">
                                            View Item
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Product 2 */}
                        <div className="group cursor-pointer">
                            <div className="relative overflow-hidden">
                                <Image
                                    src={'/images/woman-in-white-shirt-wearing-gold-necklace.jpg'}
                                    alt="woman-in-white-shirt-wearing-gold-necklace"
                                    width={300}
                                    height={300}
                                    className="w-full h-80 object-cover group-hover:scale-125 transition-transform duration-500"
                                />
                                <Script id="woman-wearing-gold-necklace-schema" type="application/ld+json">
                                    {`
                                    {
                                        "@context": "https://schema.org",
                                        "@type": "Product",
                                        "name" : "Gold Necklace",
                                        "image": [
                                            "https://gemnest.vercel.app/images/woman-in-white-shirt-wearing-gold-necklace.jpg"
                                        ],
                                        "description": "Elegant silver necklace with blue gemstone.",
                                        "sku": "ZR-001",
                                        "brand": {
                                            "@type": "Brand",
                                            "name": "Gemnest"
                                        },
                                        "offers": {
                                            "@type": "Offer",
                                            "url": "https://gemnest.vercel.app/products/silver-necklace",
                                            "priceCurrency": "USD",
                                            "price": "2499",
                                            "availability": "https://schema.org/InStock"
                                        }
                                    }
                                    `}
                                </Script>
                                {/* Hover Overly */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                                    <div className="text-center text-white">
                                        <h3 className="text-xl font-semibold mb-2">Silver Earring</h3>
                                        <p className="text-lg mb-4">$729</p>
                                        <button className="border border-white px-6 py-2 hover:bg-white_smoke hover:text-night transition-colors cursor-pointer">
                                            View Item
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Product 3 */}
                        <div className="group cursor-pointer">
                            <div className="relative overflow-hidden">
                                <Image
                                    src={'/images/silver-chain-necklace-with-blue-gemstone-pendant.jpg'}
                                    alt="silver-chain-necklace-with-blue-gemstone-pendant"
                                    width={300}
                                    height={300}
                                    className="w-full h-80 object-cover group-hover:scale-125 transition-transform duration-500"
                                />
                                <Script id="silver-necklace-schema" type="application/ld+json">
                                    {`
                                    {
                                        "@context": "https://schema.org",
                                        "@type": "Product",
                                        "name" : "Silver Necklace",
                                        "image": [
                                            "https://gemnest.vercel.app/images/silver-chain-necklace-with-blue-gemstone-pendant.jpg"
                                        ],
                                        "description": "Elegant silver necklace with blue gemstone.",
                                        "sku": "SN-003",
                                        "brand": {
                                            "@type": "Brand",
                                            "name": "Gemnest"
                                        },
                                        "offers": {
                                            "@type": "Offer",
                                            "url": "https://gemnest.vercel.app/products/silver-necklace",
                                            "priceCurrency": "USD",
                                            "price": "2989",
                                            "availability": "https://schema.org/InStock"
                                        }
                                    }
                                    `}
                                </Script>
                                {/* Hover Overly */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                                    <div className="text-center text-white">
                                        <h3 className="text-xl font-semibold mb-2">Silver Necklace</h3>
                                        <p className="text-lg mb-4">$2,989</p>
                                        <button className="border border-white px-6 py-2 hover:bg-white_smoke hover:text-night transition-colors cursor-pointer">
                                            View Item
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Product 4 */}
                        <div className="group cursor-pointer">
                            <div className="relative overflow-hidden">
                                <Image
                                    src={'/images/A-person-wears-gold-bracelets-on-wrist.jpg'}
                                    alt="A-person-wears-gold-bracelets-on-wrist"
                                    width={300}
                                    height={300}
                                    className="w-full h-80 object-cover group-hover:scale-125 transition-transform duration-500"
                                />
                                <Script id="gold-bracelet-schema" type="application/ld+json">
                                    {`
                                    {
                                        "@context": "https://schema.org",
                                        "@type": "Product",
                                        "name" : "Diamond Ring",
                                        "image": [
                                            "https://gemnest.vercel.app/images/A-person-wears-gold-bracelets-on-wrist.jpg"
                                        ],
                                        "description": "Elegant gold bracelet for every occasion.",
                                        "sku": "GB-004",
                                        "brand": {
                                            "@type": "Brand",
                                            "name": "Gemnest"
                                        },
                                        "offers": {
                                            "@type": "Offer",
                                            "url": "https://gemnest.vercel.app/products/gold-bracelet",
                                            "priceCurrency": "USD",
                                            "price": "1769",
                                            "availability": "https://schema.org/InStock"
                                        }
                                    }
                                    `}
                                </Script>
                                {/* Hover Overly */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                                    <div className="text-center text-white">
                                        <h3 className="text-xl font-semibold mb-2">Gold bracelet</h3>
                                        <p className="text-lg mb-4">$1,769</p>
                                        <button className="border border-white px-6 py-2 hover:bg-white_smoke hover:text-night transition-colors cursor-pointer">
                                            View Item
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* All Collections */}
            <div className="text-center mb-10">
                <Link href={'#'} className="border border-black px-16 cursor-pointer py-3 hover:bg-night hover:text-white transition-colors"
                    
                >
                    Explore All Collections →
                </Link>
            </div>

            {/* Breaking Line */}
            <hr className="mt-20 max-w-4xl text-gray-200/80 text-center mx-auto" /> 

            
             {/* Behind the Scenes Video */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeIn' }}
            >
                <section className={`mt-8 pt-14 text-center ${antic_didone.className} `}>
                <h2 className="text-5xl tracking-wider pb-4">Shine Your Diamond</h2>
                <video autoPlay muted loop>
                    <source src="/images/ring-with-a-diamond-video.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </section>
            </motion.div>
            
            {/* Brand Story Section with Colored Background */}
            <section className="py-20 bg-whisper/40">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className={`${playfairDisplay.className} tracking-wider text-night mb-8 text-6xl`}>
                            Crafted with Passion
                        </h2>
                        <p className={`text-xl text-slate_gray max-w-2xl mx-auto leading-relaxed mb-12 ${cormorant.className}`}>
                            For over three decades, we have been creating timeless pieces that tell your unique story. 
                            Each jewelry piece is meticulously handcrafted by master artisans using only the finest materials 
                            and ethically sourced gemstones.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 bg-platinum rounded-full flex items-center justify-center">
                                    <span className="text-4xl">💎</span>
                                </div>
                                <h3 className={`${montserrat.className} text-xl text-night mb-2`}>Premium Quality</h3>
                                <p className="text-taupe_grey">Only the finest diamond and precious metals</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 overflow-visible bg-platinum rounded-full flex items-center justify-center">
                                    <HandshakeIcon sx={{ fontSize: 42 }} />
                                </div>
                                <h3 className={`${montserrat.className} text-xl text-night mb-2`}>Ethical Sourcing</h3>
                                <p className="text-taupe_grey">Responsibly sources materials and fair trade practices</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 bg-platinum rounded-full flex items-center justify-center">
                                    <FrontHandIcon sx={{ fontSize: 38 }} />
                                </div>
                                <h3 className={`${montserrat.className} text-xl text-night mb-2`}>Handcrafted</h3>
                                <p className="text-taupe_grey">Every piece is carefully crafted by skilled artisans</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* Trust Badges Section - After Featured Products */}
            <section className="py-8 bg-white border-y border-slate_gray/30">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="flex flex-col items-center">
                            <Image src={'/images/secure-payment.svg'} alt="secure-payment-icon" className="rounded-full object-cover mb-2 block" width={62} height={62} />
                            <p className="text-sm text-gray-600">Secure Payment</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src={'/images/free-shipping.svg'} alt="secure-payment-icon" className="rounded-full object-cover mb-2 block" width={62} height={62} />
                            <p className="text-sm text-gray-600">Free Shipping</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src={'/images/easy-return.svg'} alt="secure-payment-icon" className="rounded-full object-cover mb-2 block" width={62} height={62} />
                            <p className="text-sm text-gray-600">Easy Returns</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src={'/images/lifetime-warranty.svg'} alt="secure-payment-icon" className="rounded-full object-cover mb-2 block" width={62} height={62} />
                            <p className="text-sm text-gray-600">Lifetime Warranty</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Testimonial (social proof) */}
            <section className="py-26 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className={`${playfairDisplay.className} text-4xl text-night mb-12`}>What Clients Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="rounded-xl p-8 bg-white_smoke">
                            <Image 
                                src={'/images/jeffery-erhunse.jpg'}
                                alt="jeffery-erhunse commentor image"
                                width={128}
                                height={16}
                                priority
                                className="object-cover rounded-full w-16 h-16 place-self-center mb-2"
                            />
                            <p className="text-slate_gray italic">“Stunning craftsmanship and service.”</p>
                            <div className="mt-2 font-semibold text-night">Ava R.</div>
                        </div>
                        <div className="rounded-xl p-8 bg-white_smoke">
                            <Image 
                                src={'/images/batel-studio.jpg'}
                                alt="batel-studio commentor image"
                                width={128}
                                height={128}
                                priority
                                className="object-cover rounded-full w-16 h-16 place-self-center mb-2"
                            />
                            <p className="text-slate_gray italic">Exactly what I dreamed of.”</p>
                            <div className="mt-2 font-semibold text-night">Noah K.</div>
                        </div>
                        <div className="rounded-xl p-8 bg-white_smoke">
                            <Image 
                                src={'/images/aiony-haust.jpg'}
                                alt="aiony-haust commentor image"
                                width={128}
                                height={128}
                                priority
                                className="object-cover rounded-full w-16 h-16 place-self-center mb-2"
                            />
                            <p className="text-slate_gray italic">“Elegant and timeless pieces.”</p>
                            <div className="mt-2 font-semibold text-night">Liam S.</div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Join Our Newslettter */}
            <section className="py-6">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h3 className="text-2xl text-night mb-8">Join our newsletter</h3>
                    <div className="flex flex-col gap-3 items-center">
                        <input placeholder="Your Email" className={`border border-whisper px-4 py-3 w-full ${montserrat.className} font-light`} />
                        <button className="border px-6 py-3 bg-night text-white hover:bg-white  hover:text-night cursor-pointer transition-colors w-full">Subscribe</button>
                    </div>
                </div>
            </section>
            
            {/* Footer */}
            <footer className="bg-night text-white py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
                        {/* Brand & Description */}
                        <div className="md:col-span-1">
                            <h3 className={`${playfairDisplay.className} text-2xl mb-4`}>Gemnest</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Crafting timeless jewelry pieces with passion and precision for over three decades.
                            </p>
                            <div className="flex gap-4 mt-6">
                                {/* Social Icons */}
                                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 cursor-pointer">
                                    <a href={'#'} className="hover:text-white transition-colors"><FaFacebookF size={20} /></a>
                                </div>
                                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 cursor-pointer">
                                    <a href={'#'} className="hover:text-white transition-colors"><FaInstagram size={20} /></a>
                                </div>
                                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 cursor-pointer">
                                    <a href={'#'} className="hover:text-white transition-colors"><FaXTwitter size={20} /></a>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className={`mb-4 ${prata.className}`}>Quick Links</h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Custom Jewelry</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
                            </ul>
                        </div>

                        {/* Customer Service */}
                        <div>
                            <h4 className={`mb-4`}>Customer Care</h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="font-semibold mb-4">Contact</h4>
                            <div className="space-y-2 text-sm text-gray-300">
                                <span className="flex items-center gap-2"><HiOutlineMailOpen /> info@gemnest.com </span>
                                <span className="flex items-center gap-2"><MdPhone /> (555) 123-4567 </span>
                                <span className="flex items-center gap-2"><IoLocationOutline /> 123 Jewelry St, NY 10001 </span>
                                <div className="pt-2">
                                    <span className="font-medium">Hours:</span><br/>
                                    Mon-Fri: &nbsp;9 am - 7 pm<br/>
                                    Sat-Sun: &nbsp;10 am - 6 pm
                                </div>
                            </div>
                        </div>

                        
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col justify-center md:flex-row md:justify-between items-center text-sm text-gray-400">
                        <span className="flex items-center gap-1"><PiCopyright/> 2025 Gemnest. All rights reserved.</span>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-white transition-colors">Cookies</a>
                        </div>
                    </div>
                </div>
            </footer>
            
        </div>
     )
}
 
export default MainPage;