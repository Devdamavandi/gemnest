
'use client'

import { antic_didone, cormorant, montserrat, playfairDisplay } from "@/lib/fonts";
import Image from "next/image";
import { motion } from 'framer-motion'
import { useState } from "react";
import HandshakeIcon from '@mui/icons-material/Handshake';
import FrontHandIcon from '@mui/icons-material/FrontHand';
import Link from "next/link";
import Script from "next/script";
import { useRouter } from "next/navigation";

const MainPage = () => {


    const [heroHovered, setHeroHovered] = useState(false)

    const router = useRouter()

    return ( 
        <div className="overflow-x-hidden">
           

            {/* Hero Section */}
            <section className={`${playfairDisplay.className} relative h-[70vh] sm-[85vh] md:h-screen overflow-hidden`}>
                
              
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
                
                {/* Hover Area - In-visible section to change the Hero Image */}
                <div className="absolute  left-0 right-0 top-1/3 bg-transparent h-56 z-30 md:block hidden" 
                    onMouseEnter={() => setHeroHovered(true)}
                    onMouseLeave={() => setHeroHovered(false)}
                />




                {/* Shop Now Button */}
                <motion.div
                    initial= {{ opacity: 0 }}
                    animate= {{ opacity: 1 }}
                    transition= {{ duration: 1.2, ease: 'linear' }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 z-10"
                >
                    <motion.button
                        className="relative px-8 py-3 md:px-14 md:py-4 border text-sm sm:text-base border-black cursor-pointer overflow-hidden"
                        whileHover="hover"
                        initial="initial"
                        variants={{
                            initial: { color: "#000" },
                            hover: { color: "#fff" }
                        }}
                        transition={{ duration: 0.6 }}
                        onClick={() => router.push('/collections')}
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
            {/* <section className="bg-night text-white py-4 text-center">
                <Link href={'#'} className="text-sm text-nowrap">🎁Free Engraving on Orders Over $500 | Limited Time Offer!</Link>
            </section> */}


            
            {/* Selective Categories Section */}
            <section className={`py-10 ${antic_didone.className}`}>
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className={`text-4xl text-center mt-16 mb-8`}>Charming Jewelries</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        {/* Rings */}
                        <motion.div
                            initial= {{ opacity: 0, y: 100 }}
                            whileInView= {{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                        >
                            <div className="w-full max-w-[400px] h-auto group cursor-pointer mx-auto">
                                <Link href={`/categories/rings`}>
                                    <Image src={'/images/diamond-ring-on-white-space.jpg'} alt="diamond ring"
                                        width={400} height={900}
                                        className="w-full h-[560px] object-cover group-hover:scale-105 group-hover:shadow-2xl transition-transform"
                                    />
                                </Link>
                                <h3 className="text-2xl text-center mb-2 mt-4">Rings</h3>
                            </div>
                        </motion.div>
                        {/* Necklaces */}
                        <motion.div
                            initial= {{ opacity: 0, y: -100 }}
                            whileInView= {{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                        >
                            <div className="w-full max-w-[400px] h-auto group cursor-pointer mx-auto">
                                <Link href={'/categories/necklaces'}>
                                    <Image src={'/images/woman-pink-wearing-necklace.jpg'} alt="diamond ring"
                                       width={400} height={900}
                                       className="w-full h-auto object-cover group-hover:scale-105 group-hover:shadow-2xl transition-transform"
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
                            <div className="w-full max-w-[400px] h-auto group cursor-pointer mx-auto">
                                <Image src={'/images/portrait-female-earrings-with-gems-isolated.jpg'} alt="diamond ring"
                                   width={400} height={900} 
                                   className="w-full h-auto object-cover group-hover:scale-105 group-hover:shadow-2xl transition-transform"
                                />
                                <h3 className="text-2xl text-center mt-4">Earrings</h3>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* Featured Products Section */}
            <section className="pt-26">
                <div className="max-w-7xl px-4 mx-auto">
                    <h2 className={`text-4xl text-center pb-8 ${antic_didone.className}`}>Featured Collections</h2>
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
                                <div className="absolute inset-0 bg-black/40 md:bg-black/0 group-hover:bg-black/35 transition-all flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 duration-300">
                                    <div className="text-center text-white">
                                        <h3 className="text-xl font-semibold mb-2">Diamond Ring</h3>
                                        <p className="text-lg mb-4">$2,499</p>
                                        <button className="border bg-white/20 md:bg-transparent border-white px-6 py-2 hover:bg-white_smoke hover:text-night transition-colors cursor-pointer">
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
                                <div className="absolute inset-0 bg-black/40 md:bg-black/0 group-hover:bg-black/35 transition-all flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 duration-300">
                                    <div className="text-center text-white">
                                        <h3 className="text-xl font-semibold mb-2">Silver Earring</h3>
                                        <p className="text-lg mb-4">$729</p>
                                        <button className="border bg-white/20 md:bg-transparent border-white px-6 py-2 hover:bg-white_smoke hover:text-night transition-colors cursor-pointer">
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
                                <div className="absolute inset-0 bg-black/40 md:bg-black/0 group-hover:bg-black/35 transition-all flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 duration-300">
                                    <div className="text-center text-white">
                                        <h3 className="text-xl font-semibold mb-2">Silver Necklace</h3>
                                        <p className="text-lg mb-4">$2,989</p>
                                        <button className="border bg-white/20 md:bg-transparent border-white px-6 py-2 hover:bg-white_smoke hover:text-night transition-colors cursor-pointer">
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
                                <div className="absolute inset-0 bg-black/40 md:bg-black/0 group-hover:bg-black/35 transition-all flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 duration-300">
                                    <div className="text-center text-white">
                                        <h3 className="text-xl font-semibold mb-2">Gold bracelet</h3>
                                        <p className="text-lg mb-4">$1,769</p>
                                        <button className="border bg-white/20 md:bg-transparent border-white px-6 py-2 hover:bg-white_smoke hover:text-night transition-colors cursor-pointer">
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
            <div className="w-full max-w-xs mx-auto text-center mt-10 mb-4">
                <Link href={'/collections'} className="w-full block border border-black px-16 cursor-pointer py-3 hover:bg-night hover:text-white transition-colors"
                    
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
                        <h2 className={`${playfairDisplay.className} tracking-wider text-night mb-8 text-4xl md:text-6xl`}>
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
            <section className="py-16 md:py-26 bg-white">
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
            <section className="py-0 pb-8 md:py-6">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h3 className="text-2xl text-night mb-8">Join our newsletter</h3>
                    <div className="flex flex-col gap-3 items-center">
                        <input placeholder="Your Email" className={`border border-whisper px-4 py-3 w-full ${montserrat.className} font-light`} />
                        <button className="border px-6 py-3 bg-night text-white hover:bg-white  hover:text-night cursor-pointer transition-colors w-full">Subscribe</button>
                    </div>
                </div>
            </section>
            
            
            
        </div>
     )
}
 
export default MainPage;