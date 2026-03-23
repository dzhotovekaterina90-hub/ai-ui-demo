=import React from "react";

export default function WeatherCard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black flex items-center justify-center p-6">
      <div className="w-full max-w-sm bg-gradient-to-b from-white/5 via-white/3 to-white/2 backdrop-blur-md rounded-2xl shadow-2xl p-6 text-white">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-sm text-sky-300/80 uppercase tracking-wide">城市</div>
            <div className="mt-1 text-2xl font-semibold">上海</div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex flex-col items-end">
              <div className="text-5xl font-extrabold tracking-tight">28°C</div>
              <div className="text-sm text-slate-300 mt-1">晴天</div>
            </div>
            <div
              aria-hidden
              className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400/90 to-amber-500/80 flex items-center justify-center shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="3.5" fill="white" />
                <g stroke="white" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="3.5" />
                  <line x1="12" y1="20.5" x2="12" y2="23" />
                  <line x1="4.2" y1="4.2" x2="5.8" y2="5.8" />
                  <line x1="18.2" y1="18.2" x2="19.8" y2="19.8" />
                  <line x1="1" y1="12" x2="3.5" y2="12" />
                  <line x1="20.5" y1="12" x2="23" y2="12" />
                  <line x1="4.2" y1="19.8" x2="5.8" y2="18.2" />
                  <line x1="18.2" y1="5.8" x2="19.8" y2="4.2" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-white/6 pt-4">
          <div className="flex items-center justify-between text-sm text-slate-300">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-white/3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-sky-200"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M12 3v1M12 20v1M4.2 4.2l.7.7M18.1 18.1l.7.7M1 12h1M20 12h1M4.2 19.8l.7-.7M18.1 5.9l.7-.7"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xs text-slate-400">湿度</div>
                <div className="text-sm font-medium text-white">65%</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-white/3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-emerald-200"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M3 12s4-6 9-6 9 6 9 6-4 6-9 6-9-6-9-6z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 12h8"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xs text-slate-400">风速</div>
                <div className="text-sm font-medium text-white">12 km/h</div>
              </div>
            </div>
          </div>

          <div className="mt-4 text-xs text-slate-400">
            更新时间：刚刚
          </div>
        </div>
      </div>
    </div>
  );
}