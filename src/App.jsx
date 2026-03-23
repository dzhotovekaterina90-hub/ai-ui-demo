=import React from "react";

const stats = [
  {
    id: 1,
    title: "用户数",
    value: 12842,
    change: 4.7,
    icon: (
      <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m0-6a4 4 0 100-8 4 4 0 000 8zm8 0a4 4 0 100-8 4 4 0 000 8z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "收入",
    value: 95240.5,
    change: 12.3,
    icon: (
      <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-3.866 0-7 1.79-7 4s3.134 4 7 4 7-1.79 7-4-3.134-4-7-4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v4m0 8v4" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "订单数",
    value: 3741,
    change: -2.1,
    icon: (
      <svg className="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 7h18M7 7v10a2 2 0 002 2h6a2 2 0 002-2V7M10 11h4" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "转化率",
    value: 3.8,
    change: 0.6,
    icon: (
      <svg className="w-6 h-6 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8V4m0 16v-4M4 12H8m8 0h4M6.2 6.2l2.8 2.8M15 15l2.8 2.8M6.2 17.8l2.8-2.8M15 9l2.8-2.8" />
      </svg>
    ),
  },
];

const lineData = [120, 160, 140, 180, 220, 200, 240, 260, 230, 300, 340, 320];

function formatNumber(value, isCurrency) {
  if (isCurrency) {
    return new Intl.NumberFormat("zh-CN", { style: "currency", currency: "CNY", maximumFractionDigits: 0 }).format(value);
  }
  return new Intl.NumberFormat("zh-CN").format(value);
}

function makePath(data, width, height, padding = 12) {
  const n = data.length;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const innerW = width - padding * 2;
  const innerH = height - padding * 2;
  const xStep = innerW / (n - 1);

  const points = data.map((d, i) => {
    const x = padding + i * xStep;
    const y = padding + innerH - ((d - min) / range) * innerH;
    return [x, y];
  });

  const pathD = points.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`).join(" ");
  const areaD = `${pathD} L ${padding + innerW} ${padding + innerH} L ${padding} ${padding + innerH} Z`;
  return { pathD, areaD, points };
}

export default function Dashboard() {
  const chartWidth = 900;
  const chartHeight = 320;
  const { pathD, areaD, points } = makePath(lineData, chartWidth, chartHeight);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-slate-800">数据仪表盘</h1>
            <p className="mt-1 text-sm text-slate-500">实时概览 — 用户、收入、订单与转化率</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 bg-white border border-slate-200 text-sm rounded-lg shadow-sm hover:bg-slate-50">导出报告</button>
            <button className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg shadow hover:bg-indigo-700">新增</button>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((s) => (
            <div key={s.id} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-slate-50 to-white rounded-lg shadow-sm">
                    {s.icon}
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">{s.title}</div>
                    <div className="mt-1 text-2xl font-semibold text-slate-800">
                      {s.title === "收入" ? formatNumber(s.value, true) : s.title === "转化率" ? `${s.value}%` : formatNumber(s.value, false)}
                    </div>
                  </div>
                </div>
                <div className={`text-sm font-medium px-3 py-1 rounded-full ${s.change >= 0 ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"}`}>
                  {s.change >= 0 ? "+" : ""}
                  {s.change}%
                </div>
              </div>
              <div className="mt-3 text-xs text-slate-400">较上周</div>
            </div>
          ))}
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-800">流量趋势</h2>
                <p className="text-sm text-slate-500">过去 12 周的用户会话折线</p>
              </div>
              <div className="flex items-center space-x-3">
                <button className="text-sm px-3 py-1 border border-slate-200 rounded-lg text-slate-600 bg-white hover:bg-slate-50">7 天</button>
                <button className="text-sm px-3 py-1 border border-slate-200 rounded-lg text-slate-600 bg-white hover:bg-slate-50">30 天</button>
                <button className="text-sm px-3 py-1 border border-slate-200 rounded-lg text-indigo-600 bg-indigo-50">全部</button>
              </div>
            </div>

            <div className="w-full overflow-hidden rounded-lg">
              <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-64 md:h-80">
                <defs>
                  <linearGradient id="areaGrad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#6366F1" stopOpacity="0.16" />
                    <stop offset="100%" stopColor="#6366F1" stopOpacity="0.02" />
                  </linearGradient>
                  <linearGradient id="lineGrad" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#6366F1" stopOpacity="1" />
                    <stop offset="100%" stopColor="#06B6D4" stopOpacity="1" />
                  </linearGradient>
                </defs>

                {/* grid lines */}
                {[0, 0.25, 0.5, 0.75, 1].map((t, i) => {
                  const y = 12 + (chartHeight - 24) * t;
                  return <line key={i} x1="12" x2={chartWidth - 12} y1={y} y2={y} stroke="#eef2ff" strokeWidth="1" />;
                })}

                {/* area under line */}
                <path d={areaD} fill="url(#areaGrad)" stroke="none" opacity="1" />

                {/* the line */}
                <path d={pathD} fill="none" stroke="url(#lineGrad)" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />

                {/* dots */}
                {points.map(([x, y], idx) => (
                  <g key={idx}>
                    <circle cx={x} cy={y} r="3.25" fill="#fff" stroke="#6366F1" strokeWidth="2" />
                  </g>
                ))}

                {/* x labels */}
                {lineData.map((_, i) => {
                  const x = 12 + (chartWidth - 24) * (i / (lineData.length - 1));
                  return (
                    <text key={i} x={x} y={chartHeight - 4} textAnchor="middle" fontSize="10" fill="#94a3b8">
                      {`W${i + 1}`}
                    </text>
                  );
                })}
              </svg>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 bg-slate-50 rounded-lg">
                <div className="text-xs text-slate-500">本周用户</div>
                <div className="mt-1 font-medium text-slate-800">8,420</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg">
                <div className="text-xs text-slate-500">新用户</div>
                <div className="mt-1 font-medium text-slate-800">2,180</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg">
                <div className="text-xs text-slate-500">平均会话时长</div>
                <div className="mt-1 font-medium text-slate-800">4m 12s</div>
              </div>
            </div>
          </div>

          <aside className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <h3 className="text-lg font-semibold text-slate-800">关键指标</h3>
            <p className="text-sm text-slate-500 mt-1">当前状态快览</p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-500">活跃用户</div>
                  <div className="mt-1 text-lg font-medium text-slate-800">5,412</div>
                </div>
                <div className="text-sm px-3 py-1 rounded-full bg-emerald-50 text-emerald-700">+6.2%</div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-500">平均订单价值</div>
                  <div className="mt-1 text-lg font-medium text-slate-800">{formatNumber(78, true)}</div>
                </div>
                <div className="text-sm px-3 py-1 rounded-full bg-slate-50 text-slate-700">-1.8%</div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-500">跳出率</div>
                  <div className="mt-1 text-lg font-medium text-slate-800">42.3%</div>
                </div>
                <div className="text-sm px-3 py-1 rounded-full bg-rose-50 text-rose-700">+0.9%</div>
              </div>
            </div>

            <div className="mt-6">
              <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700">深入分析</button>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}