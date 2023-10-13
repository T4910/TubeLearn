import "./Playlist.css"
import Videos from "./Videos"
// import { Loader } from "../../../../../../app/Components/Loader";

export default function Playlist () { 


    return (
        <div className="h-fit max-h-[31rem] p-2 pr-4 overflow-auto w-96 flex flex-col gap-4">
            <Videos />
        </div>
    )
}