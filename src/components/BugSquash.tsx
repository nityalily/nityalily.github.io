"use client";

import { useEffect, useRef, useState } from "react";
import { Bug, PartyPopper, RotateCcw, Trophy } from "lucide-react";

type BugItem = { id: number; x: number; y: number; speed: number; points: number };

const ROUND_SECONDS = 20;
const AREA_HEIGHT = 260;
const TICK_MS = 50;
const HIGH_SCORE_KEY = "bugSquashHighScore";

const SPEED_TIERS = [
  { speed: 1, points: 1 },
  { speed: 1.6, points: 2 },
  { speed: 2.3, points: 3 },
];

export default function BugSquash() {
  const [status, setStatus] = useState<"idle" | "playing" | "over">("idle");
  const [bugs, setBugs] = useState<BugItem[]>([]);
  const [score, setScore] = useState(0);
  const [squashCount, setSquashCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(ROUND_SECONDS);
  const [highScore, setHighScore] = useState(0);

  const nextId = useRef(0);

  useEffect(() => {
    const stored = localStorage.getItem(HIGH_SCORE_KEY);
    if (stored) setHighScore(Number(stored));
  }, []);

  useEffect(() => {
    if (status !== "playing") return;

    let spawnAcc = 0;
    let secondAcc = 0;

    const interval = setInterval(() => {
      spawnAcc += TICK_MS;
      secondAcc += TICK_MS;

      const shouldSpawn = spawnAcc >= 700;
      if (shouldSpawn) spawnAcc = 0;
      const tier =
        SPEED_TIERS[Math.floor(Math.random() * SPEED_TIERS.length)];
      const newBug = shouldSpawn
        ? {
            id: nextId.current++,
            x: 5 + Math.random() * 85,
            y: -20,
            speed: tier.speed,
            points: tier.points,
          }
        : null;

      setBugs((prev) => {
        const moved = prev
          .map((b) => ({ ...b, y: b.y + b.speed * (TICK_MS / 16.67) }))
          .filter((b) => b.y < AREA_HEIGHT);
        return newBug ? [...moved, newBug] : moved;
      });

      if (secondAcc >= 1000) {
        secondAcc -= 1000;
        setTimeLeft((s) => Math.max(0, s - 1));
      }
    }, TICK_MS);

    return () => clearInterval(interval);
  }, [status]);

  useEffect(() => {
    if (status === "playing" && timeLeft === 0) {
      setStatus("over");
    }
  }, [status, timeLeft]);

  useEffect(() => {
    if (status !== "over") return;
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem(HIGH_SCORE_KEY, String(score));
    }
  }, [status, score, highScore]);

  const start = () => {
    setScore(0);
    setSquashCount(0);
    setBugs([]);
    setTimeLeft(ROUND_SECONDS);
    setStatus("playing");
  };

  const squash = (id: number, points: number) => {
    setBugs((prev) => prev.filter((b) => b.id !== id));
    setScore((s) => s + points);
    setSquashCount((c) => c + 1);
  };

  const isFinalCountdown = status === "playing" && timeLeft <= 3;

  return (
    <div className="card-border rounded-2xl px-6 py-6 sm:px-8">
      <p className="text-sm text-foreground/85">
        <span className="font-bold text-accent">&gt;</span> squash the bugs in
        the code before they escape
        <span className="ml-1 text-muted">
          &mdash; faster bugs are worth more points
        </span>
      </p>

      <div
        className="relative mt-4 overflow-hidden rounded-lg border border-border bg-surface-bar"
        style={{ height: AREA_HEIGHT }}
      >
        {status !== "playing" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            {status === "over" && (
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft">
                  {score > 0 && score === highScore ? (
                    <Trophy size={22} className="text-accent" />
                  ) : score > 0 ? (
                    <PartyPopper size={22} className="text-accent" />
                  ) : (
                    <Bug size={22} className="rotate-180 text-muted" />
                  )}
                </div>
                <p className="text-sm font-semibold text-foreground/85">
                  Score: {score}
                </p>
                <p className="text-sm text-muted">
                  {squashCount} bug{squashCount === 1 ? "" : "s"} squashed
                </p>
                <p className="text-xs text-muted">
                  {score > 0 && score === highScore ? (
                    "New best!"
                  ) : (
                    `Best: ${highScore}`
                  )}
                </p>
              </div>
            )}
            {status === "idle" && highScore > 0 && (
              <p className="text-xs text-muted">Best: {highScore}</p>
            )}
            <button
              type="button"
              onClick={start}
              className="flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-on-accent transition-opacity hover:opacity-90"
            >
              {status === "over" ? (
                <RotateCcw size={14} />
              ) : (
                <Bug size={14} />
              )}
              {status === "over" ? "Run again" : "Run tests"}
            </button>
          </div>
        )}

        {status === "playing" &&
          bugs.map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => squash(b.id, b.points)}
              aria-label="Squash bug"
              style={{ left: `${b.x}%`, top: b.y }}
              className="absolute -translate-x-1/2 rounded-full p-1 text-foreground/70 transition-transform hover:scale-125 active:scale-90"
            >
              <Bug size={20} />
            </button>
          ))}

        {isFinalCountdown && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="animate-pulse text-6xl font-bold text-accent/70">
              {timeLeft}
            </span>
          </div>
        )}
      </div>

      {status === "playing" && (
        <div className="mt-3 flex items-center justify-between text-sm text-muted">
          <span>Score: {score}</span>
          <span>Best: {highScore}</span>
          <span className={isFinalCountdown ? "font-semibold text-accent" : ""}>
            {timeLeft}s
          </span>
        </div>
      )}
    </div>
  );
}
