import { useRef } from "react";

export default function MusicList({ list, onDelete, onFavorite }) {
  return (
    <div className="space-y-4">
      {list.map((music) => (
        <MusicCard
          key={music.id}
          music={music}
          onDelete={onDelete}
          onFavorite={onFavorite}
        />
      ))}
    </div>
  );
}

function MusicCard({ music, onDelete, onFavorite }) {
  const audioRef = useRef();

  const togglePlay = () => {
    if (audioRef.current.paused) audioRef.current.play();
    else audioRef.current.pause();
  };

  return (
    <div className="bg-gray-800 p-4 rounded shadow">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">{music.title}</h2>
        <button
          onClick={() => onFavorite(music.id)}
          className={`text-sm ${music.favorite ? "text-yellow-400" : "text-gray-400"}`}
        >
          ⭐
        </button>
      </div>
      <p className="text-sm text-gray-300 whitespace-pre-line mb-2">{music.lyrics}</p>
      <audio ref={audioRef} src={music.audioURL} className="w-full mb-2" />
      <div className="flex space-x-4">
        <button
          onClick={togglePlay}
          className="bg-green-600 px-3 py-1 rounded hover:bg-green-700 text-sm"
        >
          ▶️ Play / Pause
        </button>
        <button
          onClick={() => onDelete(music.id)}
          className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 text-sm"
        >
          ❌ Delete!
        </button>
      </div>
    </div>
  );
}
