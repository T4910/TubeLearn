import { FaSearch } from 'react-icons/fa';

/**
 * When I search from the front page, if not logged in, send to login page while keeping the characters
 * used in the search form.
 * Once user is authenticated, send him to the courses page with the search characters(if any).
 * If no search parameters are in place or the search failed, but a 'no result' div there (use the 404 page)
 * 
 */

const Search = ({nav}) => {
    const apiURL = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&q=${query}&type=video`;


    return(
        <div className={`rounded-lg space-x-2 w-max p-2 flex items-center ${nav ? 'bg-lighterGrey' : 'bg-white'}`}>
            <input placeholder='Search Courses' className="outline-none font-sans font-normal bg-inherit text-lightGrey" type="text"/>
            <button className="cursor-pointer bg-pinkDark text-white p-3 py-1 rounded-lg" type="submit">{nav ? <FaSearch /> : "Search"}</button>
        </div>
    )
}

export default Search