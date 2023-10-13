import '../public/styles/global.css'
import { inter, paytone_one, noto_sans } from './fonts'


export const metadata = {
  title: 'TubeLearn',
  description: 'Its atube for learning',
  manifest: '/metadata/site.webmanifest',
  themeColor: '#ffffff',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  other: {
    "msapplication-TileColor": '#da532c'
  }
};

{/* <head>
    <meta charset="UTF-8" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
    | <link rel="preconnect" href="https://fonts.googleapis.com">
    | <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    | <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Noto+Sans:wght@400;500;600&family=Paytone+One&display=swap" rel="stylesheet">
    | <meta name="msapplication-TileColor" content="#da532c">
    | <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    | <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    | <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    | <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    | <link rel="manifest" href="/site.webmanifest"> 
    | <title>TubeLearn</title>
    | <meta name="theme-color" content="#ffffff">
  </head> */}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${paytone_one.variable} ${noto_sans.variable}`}>
      <body className='h-screen'>
          {children}
      </body>
    </html>
  )
}
