import SearchBTN from './searchBTN'

/**
 * When I search from the front page, if not logged in, send to login page while keeping the characters
 * used in the search form.
 * Once user is authenticated, send him to the courses page with the search characters(if any).
 * If no search parameters are in place or the search failed, but a 'no result' div there (use the 404 page)
 * 
 */

const Search = async ({nav, set}) => {
    // async function youtubeSearch(form){   
    //     'use server'   
    //     let query = form.get('query')
        
    //     redirect(`/courses?q=${query}`)

    //     // redirect(`?q=${query}`)
    // }

    return(
        <form className={`rounded-lg space-x-2 w-max p-2 flex items-center ${nav ? 'bg-lighterGrey' : 'bg-white'}`}>
            <input name="query" placeholder='Search Courses' className="outline-none font-sans font-normal bg-inherit text-lightGrey" type="text"/>
            {/* <button formAction={youtubeSearch} className="cursor-pointer bg-pinkDark text-white p-3 py-1 rounded-lg" >{nav ? <FaSearch /> : "Search"}</button> */}
            <SearchBTN nav={nav}/>
        </form>
    )
}

export default Search