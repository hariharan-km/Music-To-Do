import { useEffect, useState } from "react";
import MusicForm from "./components/MusicForm";
import MusicList from "./components/MusicList";

export default function App() {
  const [musicList, setMusicList] = useState(() => {
    const saved = localStorage.getItem("musicList");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("musicList", JSON.stringify(musicList));
  }, [musicList]);

  const addMusic = (music) => {
    setMusicList([...musicList, music]);
  };

  const deleteMusic = (id) => {
    setMusicList(musicList.filter((item) => item.id !== id));
  };

  const toggleFavorite = (id) => {
    setMusicList(musicList.map(m => m.id === id ? { ...m, favorite: !m.favorite } : m));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">🎵 Music To-Do App</h1>
      <MusicForm onAdd={addMusic} />
      <MusicList list={musicList} onDelete={deleteMusic} onFavorite={toggleFavorite} />
    </div>
  );
}