'use client'
import { useRouter, usePathname } from 'next/navigation'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { FaSearch } from 'react-icons/fa';


const SearchBTN = ({nav}) => {
    const router = useRouter()
    const pathname = usePathname()
    const { pending } = useFormStatus()

    function youtubeSearch(form){      
        let query = form.get('query')
        
        if(pathname != '/courses'){
            return router.push(`/courses?q=${query}`)
        } 

        router.push(`?q=${query}`)
    }

    return (
        <button formAction={youtubeSearch} className="cursor-pointer bg-pinkDark text-white p-3 py-1 rounded-lg" >
            {pending ? 'loadingSpin' : (nav ? <FaSearch /> : "Search")}
        </button>
    )
}

export default SearchBTN