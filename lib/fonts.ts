



import { 
    Poppins, 
    Bebas_Neue, 
    Roboto, 
    Inter, 
    Playfair_Display, 
    Cormorant,
    Cinzel,
    Prata,
    Montserrat,
    Libre_Baskerville,
    DM_Serif_Display,
    Quattrocento,
    Raleway,
    Antic_Didone,
    Open_Sans
 }
 from 'next/font/google'




// Serif
export const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900']
})

// Serif
export const cormorant = Cormorant({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700']
})

// Serif
export const cinzel = Cinzel({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900']
})

// Serif
export const prata = Prata({
    subsets: ['latin'],
    weight: ['400']
})


// Serif
export const liber_baskerville = Libre_Baskerville({
    subsets: ['latin'],
    weight: ['400', '700']
})

// Serif
export const dm_serif_display = DM_Serif_Display({
    subsets: ['latin'],
    weight: ['400']
})

// Serif
export const quattrocento = Quattrocento({
    subsets: ['latin'],
    weight: ['400', '700']
})









/** Sans Serif */

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100','200','300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins'
})

// sans-serif
export const bebas = Bebas_Neue({
    subsets: ['latin'],
    weight: '400'
})

// sans-serif
export const roboto = Roboto({
    subsets: ['latin'],
    weight: ['100','200','300', '400', '500', '600', '700', '800', '900']
})

// sans-serif
export const inter = Inter({
    subsets: ['latin'],
    weight: '400'
})

// sans-serif
export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['100', '200','300','400','500','600','700','800','900']
})

export const raleway = Raleway({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const antic_didone = Antic_Didone({
    subsets: ['latin'],
    weight: ['400']
})

export const open_sans = Open_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800']
})