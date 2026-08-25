"use client";

import { useState } from "react";

type Emoji = {
  id: number;
  x: number;
  y: number;
  emoji: string;
};

export default function ForYou() {
  const [emojis, setEmojis] = useState<Emoji[]>([]);

  const cute = ["💕", "💖", "💗", "🥰", "✨", "🌸", "🎀", "🐱", "🌈", "💘"];

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("button")) return;

    const newEmojis: Emoji[] = [];

    for (let i = 0; i < 5; i++) {
      const id = Date.now() + i;
      const emoji = cute[Math.floor(Math.random() * cute.length)];
      const offsetX = (Math.random() - 0.5) * 100;
      const offsetY = (Math.random() - 0.5) * 60;

      newEmojis.push({
        id,
        x: e.clientX + offsetX,
        y: e.clientY + offsetY,
        emoji,
      });
    }

    setEmojis((prev) => [...prev, ...newEmojis]);

    setTimeout(() => {
      setEmojis((prev) =>
        prev.filter((item) => !newEmojis.some((e) => e.id === item.id)),
      );
    }, 1100);
  };

  return (
    <div
      className="bg-[#fff0f6] min-h-screen flex items-center justify-center relative overflow-hidden"
      onClick={handleClick}
    >
      {emojis.map((item) => (
        <span
          key={item.id}
          className="fixed text-3xl pointer-events-none animate-[floatHeart_1.1s_ease-out_forwards] z-50 select-none"
          style={{
            left: item.x,
            top: item.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          {item.emoji}
        </span>
      ))}

      <div className="flex flex-col items-center">
        <h1 className="text-[#c0507a] text-5xl font-bold text-center">
          Это для тебя 💕
        </h1>

        <p className="text-[#d48aaa] text-center mt-4">
          наведи или нажми на код, чтобы открыть ✨
        </p>
        <a href="https://www.youtube.com/watch?v=8Ct378DidlU">
          <button
            className="relative mt-8 w-80 h-90 bg-white rounded-4xl 
                     cursor-pointer overflow-visible
                     transition-transform duration-300
                     hover:-rotate-6 group"
            onClick={() => console.log("I love you")}
          >
            <span className="absolute inset-0 rounded-4xl border-2 border-pink-400/50 opacity-0 pointer-events-none group-hover:animate-[wave_1.5s_ease-out_infinite]" />
            <span className="absolute inset-0 rounded-4xl border-2 border-pink-400/35 opacity-0 pointer-events-none group-hover:animate-[wave_1.5s_ease-out_infinite_0.25s]" />
            <span className="absolute inset-0 rounded-4xl border-2 border-pink-400/25 opacity-0 pointer-events-none group-hover:animate-[wave_1.5s_ease-out_infinite_0.5s]" />

            <div className="relative z-10 h-full flex flex-col items-center justify-center group-hover:animate-[heartbeat_1.2s_ease-in-out_infinite]">
              <div className="relative flex items-center justify-center">
                <span className="absolute -left-5 top-2 text-3xl">💗</span>
                <span className="absolute -right-5 top-2 text-3xl">💗</span>
                <span className="absolute -left-5 bottom-2 text-3xl">💗</span>
                <span className="absolute -right-5 bottom-2 text-3xl">💗</span>

                <img src="/qr-code-2.svg" alt="QR-код" className="w-50 h-50" />
              </div>
              <p className="text-center text-[#d48aaa] mt-5">Открой меня 🎀</p>
            </div>
          </button>
        </a>
        <p className="mt-8 text-[#e0a3bb] text-center">
          Нажми в любом месте 💖 чтобы было красиво
        </p>
        <div className="grid grid-cols-5 gap-3">
          <div className="mt-6 text-3xl animate-[wiggle_1.4s_ease-in-out_infinite]">
            🌹
          </div>
          <div className="mt-6 text-3xl animate-[wiggle_1.4s_ease-in-out_infinite]">
            ✨
          </div>
          <div className="mt-6 text-3xl animate-[wiggle_1.4s_ease-in-out_infinite]">
            🎀
          </div>
          <div className="mt-6 text-3xl animate-[wiggle_1.4s_ease-in-out_infinite]">
            ✨
          </div>
          <div className="mt-6 text-3xl animate-[wiggle_1.4s_ease-in-out_infinite]">
            🌹
          </div>
        </div>
      </div>
    </div>
  );
}
