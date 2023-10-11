import { Inter, Noto_Sans, Paytone_One } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
export const inter = Inter({
    weight: ['400', '500', '600'],
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap'
  })
  
export const noto_sans = Noto_Sans({
    weight: ['400', '500', '600'],
    subsets: ['latin'],
    variable: '--font-noto-sans',
    display: 'swap'
})
  
export const paytone_one = Paytone_One({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-paytone-one',
    display: 'swap',
})
  