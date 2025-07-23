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
    <div className="min-h-screen bg-gradient-to-b from-cyan-200 via-green-200 to-yellow-200 p-4 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-red-600 mb-6 select-none drop-shadow-lg">
        Instagram Quiz Scoreboard
      </h1>

      <div className="w-full max-w-5xl overflow-x-auto rounded-lg shadow-lg bg-white">
        <table className="w-full min-w-[600px] md:min-w-full table-auto border-collapse">
          <thead className="bg-green-300 text-gray-800 uppercase text-sm font-bold select-none">
            <tr>
              <th className="py-3 px-4 border border-green-400 text-left">Name</th>
              <th className="py-3 px-4 border border-green-400 text-center">Red</th>
              <th className="py-3 px-4 border border-green-400 text-center">Blue</th>
              <th className="py-3 px-4 border border-green-400 text-center">Difference (Blue - Red)</th>
              <th className="py-3 px-4 border border-green-400 text-center">Reset</th>
            </tr>
          </thead>
          <tbody>
            {players.map(({ id, name, red, blue }) => (
              <tr
                key={id}
                className="even:bg-cyan-100 odd:bg-yellow-100 hover:bg-yellow-300 transition-colors duration-200"
              >
                <td className="border border-green-400 p-3">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => updateName(id, e.target.value)}
                    className="w-full border-2 border-green-400 rounded-md px-2 py-1 text-lg font-semibold text-green-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    spellCheck={false}
                  />
                </td>
                <td className="border border-green-400 p-3 text-center space-x-1">
                  <button
                    onClick={() => updateScore(id, "red", -1)}
                    className="bg-red-600 hover:bg-red-700 text-white rounded-md px-3 py-1 font-bold select-none"
                    aria-label={`Decrease red score for ${name}`}
                  >
                    −
                  </button>
                  <span className="inline-block w-10 font-mono text-xl text-red-700 font-extrabold">
                    {red}
                  </span>
                  <button
                    onClick={() => updateScore(id, "red", 1)}
                    className="bg-red-600 hover:bg-red-700 text-white rounded-md px-3 py-1 font-bold select-none"
                    aria-label={`Increase red score for ${name}`}
                  >
                    +
                  </button>
                </td>
                <td className="border border-green-400 p-3 text-center space-x-1">
                  <button
                    onClick={() => updateScore(id, "blue", -1)}
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-3 py-1 font-bold select-none"
                    aria-label={`Decrease blue score for ${name}`}
                  >
                    −
                  </button>
                  <span className="inline-block w-10 font-mono text-xl text-blue-700 font-extrabold">
                    {blue}
                  </span>
                  <button
                    onClick={() => updateScore(id, "blue", 1)}
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-3 py-1 font-bold select-none"
                    aria-label={`Increase blue score for ${name}`}
                  >
                    +
                  </button>
                </td>
                <td className="border border-green-400 p-3 text-center font-mono font-extrabold text-green-900 text-xl">
                  {blue - red}
                </td>
                <td className="border border-green-400 p-3 text-center">
                  <button
                    onClick={() => resetScores(id)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-bold rounded-md px-4 py-1 select-none transition-colors duration-200"
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
