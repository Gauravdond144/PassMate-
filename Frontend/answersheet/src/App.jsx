import { useState } from "react";
import { FaHome, FaBars, FaSearch, FaUserCircle } from "react-icons/fa";
import { MdSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import './App.css';  // If styles are in App.css
import './index.css';



const videos = [
  { title: "Sigma Male | Stand-Up Comedy", views: "2.6M views", thumbnail: "https://via.placeholder.com/300" },
  { title: "Honest Opinion About Social Media", views: "203K views", thumbnail: "https://via.placeholder.com/300" },
  { title: "Be Skilled. Be Clutch. Be Great In VALORANT", views: "Sponsored", thumbnail: "https://via.placeholder.com/300" },
];

export default function YouTubeClone() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className={`p-4 w-64 bg-gray-800 ${sidebarOpen ? "block" : "hidden"}`}>
        <div className="flex items-center gap-3 text-lg font-semibold">
          <FaBars className="cursor-pointer" onClick={() => setSidebarOpen(!sidebarOpen)} />
          <span>YouTube</span>
        </div>
        <nav className="mt-4">
          <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-700 cursor-pointer"><FaHome /> Home</div>
          <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-700 cursor-pointer"><MdSubscriptions /> Subscriptions</div>
          <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-700 cursor-pointer"><MdOutlineVideoLibrary /> Library</div>
          <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-700 cursor-pointer"><FiClock /> Watch Later</div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="flex justify-between items-center p-4 bg-gray-800">
          <FaBars className="text-xl cursor-pointer" onClick={() => setSidebarOpen(!sidebarOpen)} />
          <div className="flex bg-gray-700 p-2 rounded-lg items-center w-1/2">
            <input type="text" placeholder="Search" className="bg-transparent w-full outline-none px-2 text-white" />
            <FaSearch className="cursor-pointer" />
          </div>
          <FaUserCircle className="text-2xl cursor-pointer" />
        </header>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {videos.map((video, index) => (
            <div key={index} className="bg-gray-800 p-2 rounded-lg cursor-pointer">
              <img src={video.thumbnail} alt={video.title} className="rounded-md" />
              <h3 className="mt-2 font-semibold">{video.title}</h3>
              <p className="text-gray-400 text-sm">{video.views}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
