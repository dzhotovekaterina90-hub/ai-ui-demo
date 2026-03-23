=import React from "react";

function WeatherIcon({ condition, className = "w-20 h-20" }) {
  const common = { className, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" };

  switch ((condition || "").toLowerCase()) {
    case "clear":
    case "sunny":
    case "sun":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="4" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.2" y1="4.2" x2="5.6" y2="5.6" />
            <line x1="18.4" y1="18.4" x2="19.8" y2="19.8" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.2" y1="19.8" x2="5.6" y2="18.4" />
            <line x1="18.4" y1="5.6" x2="19.8" y2="4.2" />
          </g>
        </svg>
      );

    case "partly cloudy":
    case "partly_cloudy":
    case "partly":
    case "cloudy":
      return (
        <svg {...common}>
          <g fill="currentColor">
            <path d="M20 17.58A4.42 4.42 0 0015.58 13H15a6 6 0 10-11.9 1.6A3.5 3.5 0 006.5 20h9a4.58 4.58 0 004.5-2.42z" />
          </g>
        </svg>
      );

    case "rain":
    case "drizzle":
      return (
        <svg {...common}>
          <g fill="currentColor">
            <path d="M20 16.58A4.42 4.42 0 0015.58 12H15a6 6 0 10-11.9 1.6A3.5 3.5 0 006.5 19h9a4.58 4.58 0 004.5-2.42z" />
          </g>
          <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="8.5" y1="21" x2="8.5" y2="23" />
            <line x1="11.5" y1="21" x2="11.5" y2="23" />
            <line x1="14.5" y1="21" x2="14.5" y2="23" />
          </g>
        </svg>
      );

    case "snow":
      return (
        <svg {...common}>
          <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 17.58A4.42 4.42 0 0015.58 13H15a6 6 0 10-11.9 1.6A3.5 3.5 0 006.5 20h9a4.58 4.58 0 004.5-2.42z" fill="currentColor" />
            <g transform="translate(6 17)">
              <line x1="0" y1="0" x2="0" y2="2" />
              <line x1="-1" y1="1" x2="1" y2="1" />
              <line x1="-1.5" y1="-0.5" x2="1.5" y2="2.5" />
            </g>
          </g>
        </svg>
      );

    case "thunder":
    case "storm":
      return (
        <svg {...common}>
          <g fill="currentColor">
            <path d="M20 17.58A4.42 4.42 0 0015.58 13H15a6 6 0 10-11.9 1.6A3.5 3.5 0 006.5 20h9a4.58 4.58 0 004.5-2.42z" />
          </g>
          <path d="M13 11l-3 5h4l-1 5 5-8h-4l1-2h-2z" fill="currentColor" />
        </svg>
      );

    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="4" fill="currentColor" />
        </svg>
      );
  }
}

export function WeatherCard({
  city = "San Francisco",
  temperature = 22,
  unit = "°C",
  condition = "Partly Cloudy",
  humidity = 58,
  wind = { speed: 12, unit: "km/h", dir: "NW" },
}) {
  const bgGradient =
    (condition || "").toLowerCase().includes("rain")
      ? "from-blue-600 to-indigo-700"
      : (condition || "").toLowerCase().includes("clear") || (condition || "").toLowerCase().includes("sun")
      ? "from-yellow-400 to-orange-400"
      : (condition || "").toLowerCase().includes("snow")
      ? "from-sky-400 to-indigo-500"
      : "from-blue-500 to-indigo-600";

  return (
    <div className="max-w-sm w-full">
      <div className="rounded-2xl overflow-hidden shadow-xl">
        <div className={`p-6 ${bgGradient} bg-gradient-to-br text-white`}>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm opacity-90">Weather</p>
              <h2 className="text-2xl font-semibold tracking-tight">{city}</h2>
            </div>
            <div className="text-right">
              <p className="text-5xl font-bold leading-none">
                {Math.round(temperature)}
                <span className="text-xl font-medium ml-1">{unit}</span>
              </p>
              <p className="mt-1 text-sm opacity-90">{condition}</p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 rounded-xl p-3">
                <WeatherIcon condition={condition} className="w-14 h-14 text-white" />
              </div>
              <div>
                <p className="text-sm opacity-90">Feels like</p>
                <p className="font-medium text-lg">{Math.round(temperature)}{unit}</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-3 text-center min-w-[96px]">
              <p className="text-xs opacity-90">Now</p>
              <p className="font-semibold text-lg mt-1">{condition}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M20 15a4 4 0 01-4 4H8a4 4 0 010-8 4 4 0 014-4h1" />
                </svg>
                <div>
                  <p className="text-xs text-gray-400">Humidity</p>
                  <p className="font-medium">{humidity}%</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 12h5l4 8 4-16 3 8" />
                </svg>
                <div>
                  <p className="text-xs text-gray-400">Wind</p>
                  <p className="font-medium">{wind.speed} {wind.unit} {wind.dir ? `· ${wind.dir}` : ""}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 text-xs text-gray-500">
            <p>Updated just now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WeatherPage() {
  const sample = {
    city: "Seattle",
    temperature: 16,
    unit: "°C",
    condition: "Rain",
    humidity: 82,
    wind: { speed: 18, unit: "km/h", dir: "SW" },
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <div className="flex items-center justify-center">
          <WeatherCard {...sample} />
        </div>
      </div>
    </div>
  );
}