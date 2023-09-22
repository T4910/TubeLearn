import PlaylistItem from "../PlaylistItem/PlaylistItem";
import "./Playlist.css";
import { Loader } from "../../../Components/Loader";
import { useSelector } from "react-redux";
import {
  selectVideos,
  selectStatus,
} from "../../../features/videos/videoSlice";
import { loadStatus } from "../../../utils/baseUrl";

export default function Playlist() {
  const videos = useSelector(selectVideos);
  const status = useSelector(selectStatus);
  const renderedVideos = videos.map((video, index) => (
    <PlaylistItem key={index} index={index} length={video.length} thumbnail={video.thumbnail} title={video.title} />
  ));
  if (status === loadStatus.LOADING || status === loadStatus.IDLE) {
    return <Loader />;
  }
  return (
    <div className="tubelearn__playlist ml-2  overflow-auto w-96">
      {renderedVideos}
    </div>
  );
}
