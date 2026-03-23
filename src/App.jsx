import React from "react";

const resumeData = {
  name: "李明",
  title: "前端工程师 · React / TypeScript",
  location: "上海, 中国",
  email: "liming@example.com",
  website: "liming.dev",
  bio:
    "热衷于构建高性能、易维护的前端应用，专注于 React、TypeScript 和现代前端工程化。拥有从设计到交付的产品级经验，追求简洁、可访问且可扩展的界面。",
  skills: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Next.js",
    "Vite",
    "Node.js",
    "GraphQL",
    "Jest",
    "Cypress",
    "Docker",
  ],
  experiences: [
    {
      company: "风驰科技 (Fengchi Tech)",
      role: "高级前端工程师",
      start: "2022.06",
      end: "至今",
      summary:
        "负责核心产品前端架构改造与性能优化，主导组件库建设与前端工程化方案，提升开发效率及可维护性。",
      highlights: [
        "将主应用首屏时间缩短 40%，bundle size 降低 35%",
        "设计实现基于 React + TypeScript 的企业级组件库",
        "引入 monorepo 与 CI/CD，缩短发布周期并稳定构建流程",
      ],
    },
    {
      company: "远航互动 (Yuanhang Interactive)",
      role: "前端开发工程师",
      start: "2019.03",
      end: "2022.05",
      summary:
        "参与多个电商与 SaaS 项目的前端开发，与设计和后端紧密协作，负责页面实现、性能优化与自动化测试。",
      highlights: [
        "实现组件化设计系统，复用率提升 60%",
        "构建一套端到端测试流程，减少回归缺陷",
      ],
    },
    {
      company: "星辰网络 (Xingchen Network)",
      role: "前端工程师 (实习 → 转正)",
      start: "2017.07",
      end: "2019.02",
      summary:
        "从事前端实现与跨浏览器兼容性处理，参与多个客户端功能模块开发，积累扎实的前端基础。",
      highlights: ["完成多终端适配方案", "参与前端性能分析与优化"],
    },
  ],
};

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Left Sidebar */}
            <aside className="md:w-1/3 p-8 bg-gradient-to-b from-gray-900/60 to-gray-900/40 border-r border-gray-800">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-cyan-400 to-teal-400 flex items-center justify-center text-gray-900 text-3xl font-semibold shadow-lg ring-1 ring-white/10">
                  LM
                </div>
                <h1 className="mt-6 text-2xl font-bold tracking-tight">
                  {resumeData.name}
                </h1>
                <p className="mt-1 text-cyan-300">{resumeData.title}</p>

                <div className="mt-4 text-sm text-gray-300 space-y-1">
                  <div className="flex items-center justify-center gap-2">
                    <svg
                      className="w-4 h-4 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 11c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2"
                      />
                    </svg>
                    <span>{resumeData.location}</span>
                  </div>

                  <div className="flex items-center justify-center gap-2">
                    <svg
                      className="w-4 h-4 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <a
                      href={`mailto:${resumeData.email}`}
                      className="text-gray-300 hover:text-cyan-300"
                    >
                      {resumeData.email}
                    </a>
                  </div>

                  <div className="flex items-center justify-center gap-2">
                    <svg
                      className="w-4 h-4 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v4m0 8v4m8-8h-4M4 12H0m15.07-6.93l-2.83 2.83M6.34 17.66l-2.83 2.83M6.34 6.34l2.83 2.83M17.66 17.66l2.83 2.83"
                      />
                    </svg>
                    <a
                      href={`https://${resumeData.website}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-300 hover:text-cyan-300"
                    >
                      {resumeData.website}
                    </a>
                  </div>
                </div>

                <div className="mt-6 w-full">
                  <button className="w-full inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-gray-900 text-sm font-medium py-2 px-4 rounded-md shadow">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 5v14m7-7H5"
                      />
                    </svg>
                    下载简历
                  </button>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-sm text-gray-400 uppercase tracking-wide font-semibold">
                  简介
                </h3>
                <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                  {resumeData.bio}
                </p>
              </div>
            </aside>

            {/* Main Content */}
            <main className="md:flex-1 p-8">
              <section>
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-100">
                    专业技能
                  </h2>
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  {resumeData.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-gray-800 text-gray-200 border border-gray-700 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              <section className="mt-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-100">
                    工作经历
                  </h2>
                </div>

                <div className="mt-6 relative">
                  {/* Vertical line */}
                  <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-700 hidden md:block" />

                  <ol className="space-y-8 md:pl-8">
                    {resumeData.experiences.map((exp, idx) => (
                      <li key={idx} className="md:flex md:items-start">
                        <div className="md:w-6 md:flex md:justify-center">
                          <div className="w-6 h-6 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-cyan-400 shadow-sm -ml-1 md:ml-0">
                            <svg
                              className="w-3 h-3"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M6 2a1 1 0 00-1 1v2H3a1 1 0 000 2h2v6a1 1 0 001 1h2v2a1 1 0 001 1h2a1 1 0 001-1v-2h2a1 1 0 000-2h-2V5h2a1 1 0 000-2h-2V3a1 1 0 00-1-1H6z" />
                            </svg>
                          </div>
                        </div>

                        <div className="mt-2 md:mt-0 md:pl-4">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-gray-100">
                              {exp.role}
                            </h3>
                            <span className="text-sm text-gray-400">
                              {exp.start} — {exp.end}
                            </span>
                          </div>

                          <p className="text-sm text-cyan-300 font-medium mt-1">
                            {exp.company}
                          </p>

                          <p className="mt-2 text-gray-300 text-sm leading-relaxed">
                            {exp.summary}
                          </p>

                          {exp.highlights && exp.highlights.length > 0 && (
                            <ul className="mt-3 list-disc list-inside text-gray-300 text-sm space-y-1">
                              {exp.highlights.map((h, i) => (
                                <li key={i}>{h}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </section>

              <section className="mt-8">
                <h2 className="text-xl font-semibold text-gray-100">
                  项目与荣誉
                </h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                    <h4 className="text-sm font-semibold text-gray-100">
                      企业组件库
                    </h4>
                    <p className="mt-2 text-sm text-gray-300">
                      统一风格、可扩展的组件系统，包含文档站点与自动化测试示例，覆盖多端适配与主题化能力。
                    </p>
                  </div>
                  <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                    <h4 className="text-sm font-semibold text-gray-100">
                      性能优化计划
                    </h4>
                    <p className="mt-2 text-sm text-gray-300">
                      通过代码分割、缓存策略与资源压缩，结合 Lighthouse 指标提升页面性能与用户体验。
                    </p>
                  </div>
                </div>
              </section>

              <footer className="mt-10 border-t border-gray-800 pt-6">
                <p className="text-sm text-gray-500">
                  © {new Date().getFullYear()} {resumeData.name} — 保持学习与分享
                </p>
              </footer>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
