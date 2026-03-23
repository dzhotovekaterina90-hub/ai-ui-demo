=import React from "react";

export default function PricingPage() {
  const plans = [
    {
      id: "free",
      name: "免费版",
      price: 0,
      frequency: "月",
      description: "适合个人与入门用户",
      features: [
        "最多 3 个项目",
        "基础报表与统计",
        "社区支持",
        "基础 API 访问",
      ],
      cta: "立即开始",
      ctaStyle: "bg-white border border-gray-200 text-gray-800 hover:shadow-md",
      featured: false,
    },
    {
      id: "pro",
      name: "专业版",
      price: 29,
      frequency: "月",
      description: "为成长中的团队打造",
      features: [
        "无限项目与团队成员",
        "高级报表与仪表盘",
        "优先邮箱支持",
        "所有 API 功能",
      ],
      cta: "购买专业版",
      ctaStyle: "bg-indigo-600 text-white hover:bg-indigo-700",
      featured: true,
    },
    {
      id: "enterprise",
      name: "企业版",
      price: 0,
      frequency: "定制",
      description: "面向大型企业的定制方案",
      features: [
        "专属客户经理",
        "SLA 与驻场支持",
        "定制集成与迁移",
        "企业级安全与合规",
      ],
      cta: "联系销售",
      ctaStyle: "bg-white border border-gray-200 text-gray-800 hover:shadow-md",
      featured: false,
    },
  ];

  const handleCTA = (planId) => {
    // 示例：在真实场景中这里会跳转到购买流程或打开联系表单
    if (planId === "free") {
      window.location.href = "/signup?plan=free";
    } else if (planId === "pro") {
      window.location.href = "/checkout?plan=pro";
    } else {
      window.location.href = "/contact-sales";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            简洁、可扩展的定价方案
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            为不同规模的团队提供灵活的订阅选项。按月计费，随时升级或取消。
          </p>
        </header>

        <main className="mx-auto mt-12 max-w-5xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <section
                key={plan.id}
                aria-labelledby={`plan-${plan.id}`}
                className={`relative flex flex-col rounded-2xl border ${
                  plan.featured
                    ? "border-indigo-100 bg-white shadow-lg"
                    : "border-gray-200 bg-white"
                } p-6`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-700 ring-1 ring-indigo-100">
                      推荐
                    </span>
                  </div>
                )}

                <div className="mt-4 flex flex-1 flex-col">
                  <div className="mb-4 flex items-baseline justify-between">
                    <div>
                      <h2
                        id={`plan-${plan.id}`}
                        className="text-2xl font-semibold text-gray-900"
                      >
                        {plan.name}
                      </h2>
                      <p className="mt-1 text-sm text-gray-500">
                        {plan.description}
                      </p>
                    </div>
                    <div className="text-right">
                      {plan.price > 0 ? (
                        <div className="flex items-end gap-1">
                          <span className="text-3xl font-extrabold text-gray-900">
                            ¥{plan.price}
                          </span>
                          <span className="text-sm text-gray-500">
                            /{plan.frequency}
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-end gap-1">
                          <span className="text-3xl font-extrabold text-gray-900">
                            {plan.id === "enterprise" ? "面议" : "免费"}
                          </span>
                          {plan.id !== "enterprise" && (
                            <span className="text-sm text-gray-500"> /{plan.frequency}</span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  <ul role="list" className="mb-6 space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg
                          className={`h-6 w-6 flex-none ${
                            plan.featured ? "text-indigo-600" : "text-green-500"
                          }`}
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M5 13l4 4L19 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <button
                      onClick={() => handleCTA(plan.id)}
                      className={`w-full rounded-md px-4 py-3 text-sm font-semibold shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        plan.ctaStyle
                      }`}
                      aria-label={`${plan.cta} - ${plan.name}`}
                    >
                      {plan.cta}
                    </button>

                    {plan.id === "free" && (
                      <p className="mt-3 text-center text-xs text-gray-500">
                        无需信用卡 · 随时升级
                      </p>
                    )}
                    {plan.id === "enterprise" && (
                      <p className="mt-3 text-center text-xs text-gray-500">
                        我们会在 1 个工作日内与您联系，讨论需求与报价
                      </p>
                    )}
                  </div>
                </div>
              </section>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-dashed border-gray-200 bg-white p-5 text-center">
            <p className="text-sm text-gray-600">
              需要对接企业合同、发票或更复杂的集成？请联系销售，我们提供定制化服务和优惠。
            </p>
            <div className="mt-4">
              <a
                href="/contact-sales"
                className="inline-flex items-center rounded-md bg-gray-800 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-gray-900"
              >
                联系销售
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}