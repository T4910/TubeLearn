// import React from "react";
// import { useDispatch } from "react-redux"
import Image from 'next/image'
import Link from 'next/link'

export default function PlaylistItem ({id, title, img}) {
    return (
        <Link href={`/courses/${id}`} className="hover:cursor-pointer flex gap-6 bg-white rounded-lg p-2 w-full">
            <div>
            <Image src={img} alt={title} height={65} width={110} className='w-[110px] h-[65px] rounded-lg'/>

            </div>
            <div>
                <h3 className="font-inter font-light text-purpleDark">{title}</h3>
                <span className="text-xs text-orangeDark">{2.34}</span>
            </div>
        </Link>
    )
}