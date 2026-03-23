=import React from "react";

export default function SaaSLanding() {
  const features = [
    {
      title: "Unified Dashboard",
      desc: "Monitor metrics, usage, and performance in one clean, customizable view.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 9h10M7 13h6" />
        </svg>
      )
    },
    {
      title: "Realtime Collaboration",
      desc: "Work together with teammates with live updates and role controls.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4h-1" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 20H4v-2a4 4 0 014-4h1" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a4 4 0 100-8 4 4 0 000 8z" />
        </svg>
      )
    },
    {
      title: "Secure by Design",
      desc: "Enterprise-grade encryption, SSO, and audit logs to keep data safe.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.657 0 3-1.343 3-3V5a3 3 0 10-6 0v3c0 1.657 1.343 3 3 3z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 11h14v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8z" />
        </svg>
      )
    },
    {
      title: "Automated Workflows",
      desc: "Build automations to reduce manual tasks and scale operations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Integrations",
      desc: "Connect tools and services with native and webhook integrations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7l-4-4-4 4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 21l4-4 4 4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 11h-8" />
        </svg>
      )
    },
    {
      title: "Advanced Analytics",
      desc: "Deep insights and exportable reports to drive smarter decisions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 3v12" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-8" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 21v-4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21v-6" />
        </svg>
      )
    }
  ];

  const testimonials = [
    {
      name: "Aisha Khan",
      role: "Head of Product, Nova Labs",
      quote: "Adopting this platform reduced our time to delivery by 40 percent and made cross-team collaboration effortless.",
      avatar: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 rounded-full bg-indigo-500 p-2 text-white" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 12a5 5 0 100-10 5 5 0 000 10z" fill="currentColor" />
          <path d="M4 22a8 8 0 0116 0H4z" fill="currentColor" />
        </svg>
      )
    },
    {
      name: "Lucas Meyer",
      role: "CTO, Skyward",
      quote: "The security and audit features give us peace of mind when scaling to enterprise accounts.",
      avatar: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 rounded-full bg-indigo-500 p-2 text-white" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 12a5 5 0 100-10 5 5 0 000 10z" fill="currentColor" />
          <path d="M4 22a8 8 0 0116 0H4z" fill="currentColor" />
        </svg>
      )
    },
    {
      name: "Mina Patel",
      role: "Operations Lead, Solis",
      quote: "Automations saved our operations team dozens of hours each week. Support is fast and helpful.",
      avatar: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 rounded-full bg-indigo-500 p-2 text-white" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 12a5 5 0 100-10 5 5 0 000 10z" fill="currentColor" />
          <path d="M4 22a8 8 0 0116 0H4z" fill="currentColor" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-slate-100 antialiased">
      <header className="max-w-7xl mx-auto px-6 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18" />
              </svg>
            </div>
            <div>
              <span className="text-lg font-semibold tracking-tight">Nebula</span>
              <div className="text-xs text-slate-400 leading-none">Product Platform</div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-slate-200 hover:text-white transition">Features</a>
            <a href="#" className="text-slate-200 hover:text-white transition">Pricing</a>
            <a href="#" className="text-slate-200 hover:text-white transition">Integrations</a>
            <a href="#" className="text-slate-200 hover:text-white transition">Docs</a>
          </div>

          <div className="flex items-center space-x-3">
            <button className="hidden md:inline-block px-4 py-2 rounded-md border border-indigo-600 text-indigo-300 hover:bg-indigo-800 transition">Sign In</button>
            <button className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg hover:opacity-95 transition">Get Started</button>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6">
        <section className="pt-12 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">Build, Automate, and Scale with Confidence</h1>
              <p className="mt-4 text-slate-300 max-w-xl">Modern SaaS teams use Nebula to centralize operations, automate workflows, and unlock actionable insights — all with enterprise-grade security.</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#" className="inline-flex items-center px-5 py-3 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg font-medium">Start Free Trial</a>
                <a href="#" className="inline-flex items-center px-5 py-3 rounded-md border border-slate-700 text-slate-200 hover:bg-slate-800 transition">Request Demo</a>
              </div>

              <div className="mt-6 text-sm text-slate-400">
                <span className="inline-flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                  </svg>
                  <span>14-day free trial • No credit card required</span>
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-tr from-slate-800/60 via-purple-800/40 to-blue-900/40 p-1 shadow-xl">
                <div className="bg-slate-900 rounded-2xl p-6 text-slate-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400">Workspace</div>
                      <div className="mt-1 text-lg font-semibold">Acme Corp</div>
                    </div>
                    <div className="text-sm text-slate-400">Active</div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-slate-950/40">
                      <div className="text-xs text-slate-400">Users</div>
                      <div className="mt-1 text-lg font-bold">128</div>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-950/40">
                      <div className="text-xs text-slate-400">Projects</div>
                      <div className="mt-1 text-lg font-bold">24</div>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-950/40">
                      <div className="text-xs text-slate-400">Integrations</div>
                      <div className="mt-1 text-lg font-bold">12</div>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-950/40">
                      <div className="text-xs text-slate-400">Automations</div>
                      <div className="mt-1 text-lg font-bold">48</div>
                    </div>
                  </div>

                  <div className="mt-6 text-sm text-slate-400">Recent activity: Deployed new workflow pipeline for marketing, scheduled nightly backups.</div>
                </div>
              </div>

              <div className="absolute -right-6 -bottom-6 transform rotate-6 opacity-40">
                <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160" fill="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#7c3aed" />
                      <stop offset="1" stopColor="#2563eb" />
                    </linearGradient>
                  </defs>
                  <rect x="0" y="0" width="160" height="160" rx="24" fill="url(#g1)" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold">Features</h2>
            <p className="mt-2 text-slate-400">Everything you need to run and grow your product operations.</p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:shadow-xl transition">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-md bg-gradient-to-tr from-indigo-700 to-purple-600">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{f.title}</h3>
                    <p className="mt-1 text-slate-400 text-sm">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold">What customers say</h2>
            <p className="mt-2 text-slate-400">Real feedback from teams using Nebula every day.</p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <div className="flex items-center space-x-4">
                  <div>{t.avatar}</div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.role}</div>
                  </div>
                </div>
                <div className="mt-4 text-slate-300">“{t.quote}”</div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold">Pricing</h2>
            <p className="mt-2 text-slate-400">Simple plans for teams of all sizes. Scale when you are ready.</p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
              <div className="text-sm text-slate-400">Starter</div>
              <div className="mt-4 flex items-baseline space-x-2">
                <div className="text-3xl font-extrabold">$0</div>
                <div className="text-sm text-slate-400">per month</div>
              </div>
              <p className="mt-4 text-slate-300">Perfect for solo builders and small projects.</p>
              <ul className="mt-6 space-y-3 text-slate-400">
                <li>Up to 5 users</li>
                <li>Core integrations</li>
                <li>Community support</li>
              </ul>
              <div className="mt-6">
                <button className="w-full px-4 py-3 rounded-md bg-transparent border border-slate-700 text-slate-200">Get Started</button>
              </div>
            </div>

            <div className="bg-gradient-to-tr from-indigo-700 to-purple-600 rounded-2xl p-6 shadow-xl transform scale-100 md:scale-105">
              <div className="text-sm text-indigo-100">Pro</div>
              <div className="mt-4 flex items-baseline space-x-2">
                <div className="text-3xl font-extrabold text-white">$29</div>
                <div className="text-sm text-indigo-100">per user / month</div>
              </div>
              <p className="mt-4 text-indigo-100">Advanced features for growing teams with priority support.</p>
              <ul className="mt-6 space-y-3 text-indigo-100">
                <li>Unlimited projects</li>
                <li>Automations & workflows</li>
                <li>SSO and audit logs</li>
              </ul>
              <div className="mt-6">
                <button className="w-full px-4 py-3 rounded-md bg-white text-indigo-700 font-semibold">Start Pro Trial</button>
              </div>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
              <div className="text-sm text-slate-400">Enterprise</div>
              <div className="mt-4 flex items-baseline space-x-2">
                <div className="text-3xl font-extrabold">$Custom</div>
                <div className="text-sm text-slate-400">contact sales</div>
              </div>
              <p className="mt-4 text-slate-300">Custom solutions, SSO, advanced SLAs, and dedicated support.</p>
              <ul className="mt-6 space-y-3 text-slate-400">
                <li>Custom integrations</li>
                <li>Enterprise security</li>
                <li>Dedicated success manager</li>
              </ul>
              <div className="mt-6">
                <button className="w-full px-4 py-3 rounded-md bg-transparent border border-slate-700 text-slate-200">Contact Sales</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18" />
                </svg>
              </div>
              <div>
                <div className="text-lg font-semibold">Nebula</div>
                <div className="text-xs text-slate-400">Modern product operations</div>
              </div>
            </div>

            <p className="mt-4 text-slate-400 text-sm max-w-xs">Built for teams that want to ship faster and operate more reliably. Security and scale included.</p>
          </div>

          <div className="flex justify-between md:justify-center space-x-6">
            <div>
              <div className="text-sm font-semibold">Product</div>
              <ul className="mt-3 text-slate-400 space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Integrations</a></li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold">Company</div>
              <ul className="mt-3 text-slate-400 space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="md:text-right">
            <div className="text-sm font-semibold">Stay up to date</div>
            <p className="mt-2 text-slate-400 text-sm">Get product updates and insights sent to your inbox.</p>
            <form className="mt-4 flex items-center space-x-2">
              <input aria-label="Email address" type="email" placeholder="your@email.com" className="w-full md:w-auto px-3 py-2 rounded-md bg-slate-800 border border-slate-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <button className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white">Subscribe</button>
            </form>

            <div className="mt-4 flex items-center justify-start md:justify-end space-x-3">
              <a href="#" className="text-slate-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.99H7.898v-2.888h2.54V9.413c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.463h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.888h-2.33v6.99C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22.162 5.656a8.214 8.214 0 01-2.356.646 4.12 4.12 0 001.804-2.27 8.224 8.224 0 01-2.606.996 4.107 4.107 0 00-6.993 3.743A11.65 11.65 0 013.14 4.8a4.106 4.106 0 001.27 5.482 4.07 4.07 0 01-1.86-.513v.052a4.108 4.108 0 003.292 4.025 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 19.54 11.616 11.616 0 007.29 21c7.547 0 11.675-6.254 11.675-11.675 0-.178-.004-.355-.012-.53a8.354 8.354 0 002.109-2.139z" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.314.975.975 1.252 2.242 1.314 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.34 2.633-1.314 3.608-.975.975-2.242 1.252-3.608 1.314-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.34-3.608-1.314-.975-.975-1.252-2.242-1.314-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.34-2.633 1.314-3.608C4.522 2.563 5.789 2.286 7.155 2.224 8.421 2.166 8.801 2.163 12 2.163zm0 1.838c-3.159 0-3.525.012-4.774.069-1.154.054-1.778.24-2.196.403-.56.222-.96.487-1.38.908-.42.42-.686.82-.908 1.38-.163.418-.35 1.042-.403 2.196-.057 1.249-.069 1.615-.069 4.774s.012 3.525.069 4.774c.054 1.154.24 1.778.403 2.196.222.56.487.96.908 1.38.42.42.82.686 1.38.908.418.163 1.042.35 2.196.403 1.249.057 1.615.069 4.774.069s3.525-.012 4.774-.069c1.154-.054 1.778-.24 2.196-.403.56-.222.96-.487 1.38-.908.42-.42.686-.82.908-1.38.163-.418.35-1.042.403-2.196.057-1.249.069-1.615.069-4.774s-.012-3.525-.069-4.774c-.054-1.154-.24-1.778-.403-2.196-.222-.56-.487-.96-.908-1.38-.42-.42-.82-.686-1.38-.908-.418-.163-1.042-.35-2.196-.403-1.249-.057-1.615-.069-4.774-.069zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-8 3.999 3.999 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 py-6">
          <div className="max-w-7xl mx-auto px-6 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between">
            <div>© 2026 Nebula. All rights reserved.</div>
            <div className="mt-3 md:mt-0 space-x-4">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}