

    'use client'

    import { playfairDisplay, prata } from "@/lib/fonts";
    import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
    import { HiOutlineMailOpen } from "react-icons/hi";
    import { IoLocationOutline } from "react-icons/io5";
    import { MdPhone } from "react-icons/md";
    import { PiCopyright } from "react-icons/pi";
    import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";


    const FooterComponent = () => {

       
        
        return ( 
            <footer className="bg-night text-white py-8 md:py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-20">
                            {/* Brand & Description */}
                            <div className="md:col-span-1 text-center md:text-left">
                                <h3 className={`${playfairDisplay.className} text-2xl mb-4`}>Gemnest</h3>
                                <p className="text-gray-300 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                                    Crafting timeless jewelry pieces with passion and precision for over three decades.
                                </p>
                                {/* Social Icons */}
                                <div className="flex gap-4 mt-6">
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

                            {/* Mobile View Footer Menus */}
                            <Accordion
                                    type="single"
                                    collapsible
                                    className="block md:hidden w-full"
                                    defaultValue="item-1"
                                >
                                    {/* Quick Links */}
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className={`mb-4 ${prata.className}`}>Quick Link</AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="space-y-2 text-sm text-gray-300">
                                                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                                                <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
                                                <li><a href="#" className="hover:text-white transition-colors">Custom Jewelry</a></li>
                                                <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>


                                    {/* Customer Service */}
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger className={`mb-4 ${prata.className}`}>Customer Care</AccordionTrigger>
                                        <AccordionContent>
                                            <ul className="space-y-2 text-sm text-gray-300">
                                                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                                                <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                                                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                                                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>


                                    {/* Contact Info */}
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger className={`mb-4 ${prata.className}`}>Contact</AccordionTrigger>
                                        <AccordionContent>
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
                                        </AccordionContent>
                                    </AccordionItem>

                            </Accordion>

                            {/* Larger views Footer menus */}
                            {/* Quick Links */}
                            <div className="hidden md:block">
                                <h1 className={`mb-4 ${prata.className}`}>Quick Link</h1>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Custom Jewelry</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
                                </ul>
                            </div>
                            {/* Customer Service */}
                            <div className="hidden md:block">
                                <h1 className={`mb-4 ${prata.className}`}>Customer Care</h1>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
                                </ul>
                            </div>
                            {/* Contact Info */}
                            <div className="hidden md:block">
                                <h1 className={`mb-4 ${prata.className}`}>Contact</h1>
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
        )
    }
    
    export default FooterComponent;