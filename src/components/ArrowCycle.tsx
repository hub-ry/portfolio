import { useEffect, useState } from "react";

export function ArrowCycle() {
  const length = 12; // define dash
  const [pos, setPos] = useState(0);
  const [dir, setDir] = useState(1); // 1 = right, -1 = left

  useEffect(() => {
    const id = setInterval(() => {
      setPos((p) => {
        // once it reaches the end, reverse direction
        if (p === length) {
          setDir(-1);
          return p - 1;
        }
        // if we hit the left edge, reverse direction
        if (p === 0) {
          setDir(1);
          return p + 1;
        }
        // otherwise keep moving
        return p + dir;
      });
    }, 120);

    return () => clearInterval(id);
  }, [dir]);

  const left = "-".repeat(pos);
  const right = "-".repeat(length - pos);

  return (
    <span className="font-mono text-zinc-400 ml-3">
      {"<"}
      {left}0{right}
      {">"}
    </span>
  );
}
