import { Noto_Serif } from 'next/font/google'
import localFont from 'next/font/local'
export const Graphik = localFont({
    src: [
        {
            path: '../fonts/Graphik-Regular.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../fonts/Graphik-Medium.woff2',
            weight: '500',
            style: 'normal'
        }
    ]
})

export const Means = localFont({
    src: [
        {
            path: '../fonts/MeansRegular.woff2',
            weight: '400',
            style: 'normal'
        }
    ]
})