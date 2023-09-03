import React from "react";

import PlaylistItem from "../PlaylistItem/PlaylistItem";
import "./Playlist.css"

export default function Playlist () { 
    return (
        <div className="tubelearn__playlist ml-2  overflow-auto w-96">
            <PlaylistItem 
                img="https://randomwordgenerator.com/img/picture-generator/54e6d1444850ad14f1dc8460962e33791c3ad6e04e507441722978d6934bc5_640.jpg"
                title="Slow Down"
                time="1:57"
                video="https://www.youtube.com/embed/o34Lgq98H3k"
            />
            <PlaylistItem 
                img="https://randomwordgenerator.com/img/picture-generator/54e4d4454c57b10ff3d8992cc12c30771037dbf8525478497d2873d7934f_640.jpg"
                title="Watermelon Vs Mortar in Slow Motion"
                time="5:43"
                video="https://www.youtube.com/embed/wNxBDzz8v9I"
            />
            <PlaylistItem 
                img="https://randomwordgenerator.com/img/picture-generator/57e8d1434f50aa14f1dc8460962e33791c3ad6e04e50744077277dd19449c3_640.jpg"
                title="My Daughter has chosen the Dark Side"
                time="8:11"
                video="https://www.youtube.com/embed/XF7b_MNEIAg"
            />
            <PlaylistItem 
                img="https://randomwordgenerator.com/img/picture-generator/55e2d7444a52a814f1dc8460962e33791c3ad6e04e5074417c2d78dc944ec7_640.jpg"
                title="Short Film: Find my Phone - Subtitled"
                time="8:10"
                video="https://www.youtube.com/embed/NpN9NzO4Mo8"
            />
            <PlaylistItem 
                img="https://randomwordgenerator.com/img/picture-generator/57e2d2464e5aac14f1dc8460962e33791c3ad6e04e50744172297bd69548c0_640.jpg"
                title="Try Not To Laugh or Grin While Watching Funny Fail Vines - Best Viners 2019"
                time="10:00"
                video="https://www.youtube.com/embed/sHptYVmt3S8"
            />
            <PlaylistItem 
                img="https://randomwordgenerator.com/img/picture-generator/bruce-warrington-PUyJaeKU990-unsplash.jpg"
                title="Guitar and Drums on the Sidecar of a Bike"
                time="7:53"
                video="https://www.youtube.com/embed/3VqmWGzK7UM"
            />
        </div>
    )
}