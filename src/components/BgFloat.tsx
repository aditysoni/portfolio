"use client";

import React, { useEffect, useState } from "react";

interface Block {
  id: number;
  x: number;
  y: number;
  size: number;
}

const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export default function FloatingBlocksBackground() {
  const [blocks, setBlocks] = useState<Block[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const block: Block = {
        id: Date.now(),
        x: getRandomInt(5, 95), // keep inside edges
        y: getRandomInt(5, 95),
        size: getRandomInt(40, 90),
      };

      setBlocks((prev) => [...prev, block]);

      setTimeout(() => {
        setBlocks((prev) => prev.filter((b) => b.id !== block.id));
      }, 1500);
    }, 350);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-0 overflow-hidden">
      {blocks.map((block) => (
        <div
          key={block.id}
          className="absolute animate-fade"
          style={{
            left: `${block.x}%`,
            top: `${block.y}%`,
            width: `${block.size}px`,
            height: `${block.size}px`,
            backgroundColor: "rgba(11, 171, 6, 0.05)", // golden-transparent
            border: "1px solid rgba(58, 5, 5, 0.2)",  // soft border
            borderRadius: "4px",
            boxShadow: "0 0 4px rgba(62, 164, 11, 0.1)",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
}
