import { useState } from "react";

export default function MusicForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [audio, setAudio] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !lyrics || !audio) return;

    const newMusic = {
      id: Date.now(),
      title,
      lyrics,
      favorite: false,
      done: false,
      audioURL: URL.createObjectURL(audio),
    };

    onAdd(newMusic);
    setTitle("");
    setLyrics("");
    setAudio(null);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        placeholder="Song Title"
        className="w-full p-2 mb-2 bg-gray-800 border border-gray-600 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Enter Lyrics"
        rows={3}
        className="w-full p-2 mb-2 bg-gray-800 border border-gray-600 rounded"
        value={lyrics}
        onChange={(e) => setLyrics(e.target.value)}
      ></textarea>
      <input
        type="file"
        accept="audio/*"
        onChange={(e) => setAudio(e.target.files[0])}
        className="mb-2 text-sm text-gray-400"
      />
      <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
        ➕ Add Song
      </button>
    </form>
  );
}
