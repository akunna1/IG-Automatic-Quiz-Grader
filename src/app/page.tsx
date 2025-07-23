"use client";
import React, { useState } from "react";

type Player = {
  id: number;
  name: string;
  red: number;
  blue: number;
};

const initialPlayers: Player[] = [
  { id: 1, name: "user1", red: 0, blue: 0 },
  { id: 2, name: "user2", red: 0, blue: 0 },
  { id: 3, name: "user3", red: 0, blue: 0 },
  { id: 4, name: "user4", red: 0, blue: 0 },
  { id: 5, name: "user5", red: 0, blue: 0 },
  { id: 6, name: "user6", red: 0, blue: 0 },
  { id: 7, name: "user7", red: 0, blue: 0 },
  { id: 8, name: "user8", red: 0, blue: 0 },
  { id: 9, name: "user9", red: 0, blue: 0 },
  { id: 10, name: "user10", red: 0, blue: 0 },
  { id: 11, name: "user11", red: 0, blue: 0 },
  { id: 12, name: "user12", red: 0, blue: 0 },
  { id: 13, name: "user13", red: 0, blue: 0 },
  { id: 14, name: "user14", red: 0, blue: 0 },
  { id: 15, name: "user15", red: 0, blue: 0 },
];

export default function ScoreTable() {
  const [players, setPlayers] = useState<Player[]>(initialPlayers);

  const updateName = (id: number, newName: string) => {
    setPlayers((prev) =>
      prev.map((p) => (p.id === id ? { ...p, name: newName } : p))
    );
  };

  const updateScore = (id: number, color: "red" | "blue", delta: number) => {
    setPlayers((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, [color]: p[color] + delta } : p
      )
    );
  };

  const resetScores = (id: number) => {
    const original = initialPlayers.find((p) => p.id === id);
    if (!original) return;
    setPlayers((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, red: original.red, blue: original.blue } : p
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-yellow-100 to-green-100 p-6 flex flex-col items-center font-sans">
      <h1 className="mb-8 text-5xl font-extrabold text-center text-pink-700 drop-shadow-lg select-none">
        🎉 Instagram Quiz Grader 🎉
      </h1>

      <div className="w-full max-w-6xl overflow-x-auto rounded-xl shadow-xl bg-white border-4 border-pink-300">
        <table className="w-full min-w-[650px] table-auto border-collapse rounded-xl overflow-hidden">
          <thead className="bg-yellow-300 text-pink-700 uppercase text-base md:text-lg font-bold">
            <tr>
              <th className="py-4 px-6 border-r-2 border-pink-300 text-left">Name</th>
              <th className="py-4 px-6 border-r-2 border-pink-300 text-center">Red</th>
              <th className="py-4 px-6 border-r-2 border-pink-300 text-center">Blue</th>
              <th className="py-4 px-6 border-r-2 border-pink-300 text-center">Difference</th>
              <th className="py-4 px-6 text-center">Reset</th>
            </tr>
          </thead>
          <tbody>
            {players.map(({ id, name, red, blue }) => (
              <tr
                key={id}
                className="even:bg-green-50 odd:bg-pink-50 hover:bg-yellow-200 transition-colors duration-300 cursor-pointer"
              >
                <td className="border-r-2 border-pink-300 p-3">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => updateName(id, e.target.value)}
                    className="w-full bg-pink-50 rounded-md px-3 py-2 text-lg text-pink-800 font-semibold focus:outline-none focus:ring-2 focus:ring-pink-400"
                    spellCheck={false}
                  />
                </td>
                <td className="border-r-2 border-pink-300 p-3 text-center space-x-2">
                  <button
                    onClick={() => updateScore(id, "red", -1)}
                    className="bg-red-500 hover:bg-red-700 text-white rounded-full px-4 py-1 text-xl font-bold select-none shadow-md transition"
                    aria-label={`Decrease red score for ${name}`}
                  >
                    −
                  </button>
                  <span className="inline-block w-12 font-mono text-2xl text-red-600 font-extrabold">
                    {red}
                  </span>
                  <button
                    onClick={() => updateScore(id, "red", 1)}
                    className="bg-red-500 hover:bg-red-700 text-white rounded-full px-4 py-1 text-xl font-bold select-none shadow-md transition"
                    aria-label={`Increase red score for ${name}`}
                  >
                    +
                  </button>
                </td>
                <td className="border-r-2 border-pink-300 p-3 text-center space-x-2">
                  <button
                    onClick={() => updateScore(id, "blue", -1)}
                    className="bg-blue-500 hover:bg-blue-700 text-white rounded-full px-4 py-1 text-xl font-bold select-none shadow-md transition"
                    aria-label={`Decrease blue score for ${name}`}
                  >
                    −
                  </button>
                  <span className="inline-block w-12 font-mono text-2xl text-blue-600 font-extrabold">
                    {blue}
                  </span>
                  <button
                    onClick={() => updateScore(id, "blue", 1)}
                    className="bg-blue-500 hover:bg-blue-700 text-white rounded-full px-4 py-1 text-xl font-bold select-none shadow-md transition"
                    aria-label={`Increase blue score for ${name}`}
                  >
                    +
                  </button>
                </td>
                <td className="border-r-2 border-pink-300 p-3 text-center font-mono font-extrabold text-xl text-pink-700">
                  {blue - red}
                </td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => resetScores(id)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-pink-900 font-bold rounded-md px-5 py-2 select-none shadow-md transition"
                    aria-label={`Reset scores for ${name}`}
                  >
                    Reset
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
