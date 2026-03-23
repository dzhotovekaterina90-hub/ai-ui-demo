import React from "react";

export default function LandingPage() {
  const features = [
    {
      title: "Realtime Analytics",
      description: "Monitor usage, performance, and growth with live dashboards and alerts.",
      icon: (
        <svg className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 11V3m0 8a8 8 0 100 8v-8z" />
        </svg>
      ),
    },
    {
      title: "Collaboration",
      description: "Invite teams, assign roles, and work together with built in permissions.",
      icon: (
        <svg className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m6-6a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: "Integrations",
      description: "Connect with your favorite tools via ready made integrations and APIs.",
      icon: (
        <svg className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V7a2 2 0 00-2-2h-6M4 11v6a2 2 0 002 2h6m4-9l-5 5" />
        </svg>
      ),
    },
    {
      title: "Security",
      description: "Enterprise grade security, SSO, and audit logs to keep data safe.",
      icon: (
        <svg className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.657 0 3-1.567 3-3.5S13.657 4 12 4s-3 1.567-3 3.5S10.343 11 12 11z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 21a7 7 0 0114 0" />
        </svg>
      ),
    },
    {
      title: "Custom Workflows",
      description: "Automate processes with flexible workflows and triggers.",
      icon: (
        <svg className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-6a2 2 0 00-2-2H5l7-7 7 7h-2a2 2 0 00-2 2v6" />
        </svg>
      ),
    },
    {
      title: "Scalable Infrastructure",
      description: "Grow without limits with our resilient, multi region infrastructure.",
      icon: (
        <svg className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6" />
        </svg>
      ),
    },
  ];

  const testimonials = [
    {
      name: "Ava Thompson",
      role: "Head of Product, NovaApps",
      quote: "This solution transformed how our teams operate. Setup was fast and the results were immediate.",
    },
    {
      name: "Liam Chen",
      role: "CTO, Orion Systems",
      quote: "Reliable, secure, and simple to integrate. The visibility we gained is priceless.",
    },
    {
      name: "Maya Singh",
      role: "Operations Lead, Pulse Labs",
      quote: "Customer support is excellent. Workflows helped us reduce manual tasks by 60 percent.",
    },
  ];

  const plans = [
    {
      name: "Starter",
      price: "$19",
      period: "mo",
      features: ["Core features", "Up to 5 users", "Email support"],
      highlight: false,
    },
    {
      name: "Pro",
      price: "$49",
      period: "mo",
      features: ["All Starter features", "Unlimited projects", "Priority support", "SSO"],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: ["Custom integrations", "Dedicated support", "SLA & onboarding"],
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-md bg-gradient-to-br from-indigo-600 to-indigo-400 flex items-center justify-center">
              <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
              </svg>
            </div>
            <span className="font-semibold tracking-wide">Aurora</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-gray-300">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#testimonials" className="hover:text-white">Testimonials</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <button className="ml-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-md text-white">Get Started</button>
          </nav>
          <div className="md:hidden">
            <button className="px-3 py-2 bg-indigo-600 rounded-md text-white">Get Started</button>
          </div>
        </div>
      </header>

      <main>
        <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-white">
                Build better products faster with modern tooling
              </h1>
              <p className="mt-6 text-lg text-gray-300 max-w-xl">
                Unified platform for analytics, automation, and collaboration. Ship features with confidence and scale effortlessly.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
                <a href="#pricing" className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-md text-white font-medium">
                  Start free trial
                </a>
                <a href="#features" className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 rounded-md text-gray-200 hover:text-white">
                  Explore features
                </a>
              </div>
              <div className="mt-6 text-sm text-gray-400">
                No credit card required. Cancel anytime.
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-800/70 border border-gray-800 rounded-xl p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-900 rounded-lg border border-gray-800">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-400">Active users</div>
                        <div className="mt-2 text-2xl font-semibold text-white">8,421</div>
                      </div>
                      <div className="text-green-400 text-sm font-medium">+12%</div>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-900 rounded-lg border border-gray-800">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-400">Uptime</div>
                        <div className="mt-2 text-2xl font-semibold text-white">99.99%</div>
                      </div>
                      <div className="text-indigo-400 text-sm font-medium">Stable</div>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-900 rounded-lg border border-gray-800">
                    <div>
                      <div className="text-sm text-gray-400">New signups</div>
                      <div className="mt-2 text-2xl font-semibold text-white">1,204</div>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-900 rounded-lg border border-gray-800">
                    <div>
                      <div className="text-sm text-gray-400">Avg response time</div>
                      <div className="mt-2 text-2xl font-semibold text-white">220ms</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-xs text-gray-400">Sample dashboard preview</div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold">Everything your team needs</h2>
              <p className="mt-3 text-gray-400 max-w-2xl mx-auto">A single platform to manage product, analytics, and operations with ease.</p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-lg bg-gray-900 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                      <p className="mt-2 text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-gray-900">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold">Trusted by teams worldwide</h2>
              <p className="mt-3 text-gray-400 max-w-2xl mx-auto">Real stories from product and engineering leaders using the platform daily.</p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-600 to-indigo-400 flex items-center justify-center text-white font-semibold">
                      {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </div>
                    <div className="ml-4">
                      <div className="text-white font-medium">{t.name}</div>
                      <div className="text-sm text-gray-400">{t.role}</div>
                    </div>
                  </div>
                  <blockquote className="mt-4 text-gray-300">"{t.quote}"</blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold">Pricing built for teams</h2>
              <p className="mt-3 text-gray-400 max-w-2xl mx-auto">Simple, predictable pricing that scales with your business.</p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan, idx) => (
                <div key={idx} className={`rounded-xl border ${plan.highlight ? "border-indigo-500 bg-gray-900" : "border-gray-800 bg-gray-800"} p-6 flex flex-col`}>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{plan.name}</h3>
                      {plan.highlight && <span className="text-xs bg-indigo-600 text-white px-2 py-1 rounded-full">Popular</span>}
                    </div>
                    <div className="mt-6 flex items-baseline">
                      <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                      <span className="ml-2 text-gray-400">/{plan.period}</span>
                    </div>
                    <ul className="mt-6 space-y-3">
                      {plan.features.map((f, i) => (
                        <li key={i} className="flex items-start text-gray-300">
                          <svg className="h-5 w-5 text-indigo-400 flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                          </svg>
                          <span className="ml-3 text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <button className={`w-full px-4 py-3 rounded-md font-medium ${plan.highlight ? "bg-indigo-600 hover:bg-indigo-500 text-white" : "bg-gray-700 hover:bg-gray-600 text-gray-100"}`}>
                      {plan.price === "Custom" ? "Contact sales" : "Start free trial"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-md bg-gradient-to-br from-indigo-600 to-indigo-400 flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
                  </svg>
                </div>
                <span className="font-semibold tracking-wide">Aurora</span>
              </div>
              <p className="mt-4 text-gray-400 max-w-sm">Modern platform to build, analyze, and scale products with confidence.</p>
            </div>

            <div className="grid grid-cols-2 gap-8 md:col-span-2">
              <div>
                <h4 className="text-sm font-semibold text-gray-200">Product</h4>
                <ul className="mt-4 space-y-3 text-gray-400 text-sm">
                  <li><a href="#features" className="hover:text-white">Features</a></li>
                  <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
                  <li><a href="#testimonials" className="hover:text-white">Customers</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-200">Company</h4>
                <ul className="mt-4 space-y-3 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white">About</a></li>
                  <li><a href="#" className="hover:text-white">Careers</a></li>
                  <li><a href="#" className="hover:text-white">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Aurora. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms</a>
              <div className="flex items-center space-x-3">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5 3.66 9.15 8.44 9.93v-7.03H7.9v-2.9h2.54V9.2c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.62.77-1.62 1.56v1.87h2.75l-.44 2.9h-2.31v7.03C18.34 21.22 22 17.07 22 12.07z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 3a4.48 4.48 0 00-4.47 4.47c0 .35.04.69.12 1.02A12.85 12.85 0 013 4.1a4.48 4.48 0 001.39 5.97 4.41 4.41 0 01-2.03-.56v.06A4.47 4.47 0 004.47 14a4.52 4.52 0 01-2.02.08 4.47 4.47 0 004.18 3.11A8.95 8.95 0 012 19.54 12.66 12.66 0 008.62 21c7.55 0 11.67-6.25 11.67-11.67 0-.18-.01-.35-.02-.53A8.2 8.2 0 0023 3z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 2.86 8.15 6.84 9.48.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.46-1.17-1.11-1.48-1.11-1.48-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.85c.85.004 1.71.115 2.51.337 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86 0 1.34-.01 2.43-.01 2.76 0 .27.18.58.69.48 3.98-1.33 6.84-5.07 6.84-9.48C21.96 6.5 17.5 2.04 12 2.04z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
