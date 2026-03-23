=import React from 'react';

const SunIcon = ({ className = 'w-12 h-12 text-yellow-400' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="4" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M4.93 4.93l1.41 1.41" />
      <path d="M17.66 17.66l1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M4.93 19.07l1.41-1.41" />
      <path d="M17.66 6.34l1.41-1.41" />
    </g>
  </svg>
);

const CloudIcon = ({ className = 'w-12 h-12 text-gray-400' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M7 18h10a4 4 0 0 0 0-8 5 5 0 0 0-9.9-1.4A4 4 0 0 0 7 18z"
      fill="currentColor"
    />
  </svg>
);

const RainIcon = ({ className = 'w-12 h-12 text-blue-400' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M7 18h10a4 4 0 0 0 0-8 5 5 0 0 0-9.9-1.4A4 4 0 0 0 7 18z"
      fill="currentColor"
    />
    <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M8.5 20.5l-.8 1.5" />
      <path d="M12 20.5l-.8 1.5" />
      <path d="M15.5 20.5l-.8 1.5" />
    </g>
  </svg>
);

function WeatherCard({
  city = 'San Francisco',
  temp = 21,
  condition = 'Sunny',
  humidity = 62,
  wind = 13,
  unit = 'C',
}) {
  const cond = condition.toLowerCase();
  const isSunny = cond.includes('sun') || cond.includes('clear');
  const isRain = cond.includes('rain') || cond.includes('shower') || cond.includes('storm');
  const isCloudy = !isSunny && !isRain;

  const bgGradient = isSunny
    ? 'from-yellow-50 via-yellow-100 to-white'
    : isRain
    ? 'from-blue-50 via-blue-100 to-white'
    : 'from-gray-50 via-gray-100 to-white';

  return (
    <div className={`max-w-sm w-full mx-auto p-6 rounded-2xl shadow-xl bg-gradient-to-b ${bgGradient} backdrop-blur-sm`}>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-gray-700 text-sm font-medium">城市</h3>
          <h2 className="mt-1 text-2xl font-semibold text-gray-900">{city}</h2>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex flex-col items-end">
            <span className="text-4xl font-extrabold text-gray-900 leading-none">
              {Math.round(temp)}°
              <span className="text-lg font-medium text-gray-500">{unit}</span>
            </span>
            <span className="text-sm text-gray-500">Feels like {Math.round(temp)}°{unit}</span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="p-3 rounded-lg bg-white/60 backdrop-blur-sm">
            {isSunny ? (
              <SunIcon />
            ) : isRain ? (
              <RainIcon />
            ) : (
              <CloudIcon />
            )}
          </div>
          <div>
            <p className="text-sm text-gray-500">天气</p>
            <p className="mt-1 text-lg font-semibold text-gray-800 capitalize">{condition}</p>
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm text-center">
            <p className="text-xs text-gray-500">湿度</p>
            <p className="mt-1 text-sm font-medium text-gray-800">{humidity}%</p>
          </div>
          <div className="px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm text-center">
            <p className="text-xs text-gray-500">风速</p>
            <p className="mt-1 text-sm font-medium text-gray-800">{wind} km/h</p>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t pt-4 flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center space-x-2">
          <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M6 6l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span>Updated just now</span>
        </div>
        <div className="text-right">
          <span className="font-medium text-gray-700">{city}</span>
          <div className="text-xs text-gray-400">Local time</div>
        </div>
      </div>
    </div>
  );
}

export default function WeatherCardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex items-center justify-center p-6">
      <div className="space-y-6">
        <WeatherCard
          city="Beijing"
          temp={28}
          condition="Sunny"
          humidity={45}
          wind={10}
          unit="C"
        />

        <WeatherCard
          city="London"
          temp={16}
          condition="Cloudy"
          humidity={82}
          wind={7}
          unit="C"
        />

        <WeatherCard
          city="Tokyo"
          temp={22}
          condition="Rain"
          humidity={90}
          wind={12}
          unit="C"
        />
      </div>
    </div>
  );
}