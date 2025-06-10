import { Button } from "@/components/ui/button"
import { InstagramIcon, MessageSquareIcon, BotIcon, ArrowRightIcon, CheckIcon, SparklesIcon } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
  <main>
    <div className="min-h-screen bg-gradient-to-br from-[#0a0d14] via-[#0f1116] to-[#1a1d29] text-white overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#4361ee]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-[#8a9af7]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/3 w-64 h-64 bg-[#4361ee]/8 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 container mx-auto py-8 px-4">
        <div className="flex justify-between items-center backdrop-blur-sm bg-white/5 rounded-2xl px-6 py-4 border border-white/10">
          <div className="flex items-center">
            <div className="relative">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#8a9af7] to-[#4361ee] bg-clip-text text-transparent">
                SLide
              </h1>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#4361ee] rounded-full animate-pulse"></div>
            </div>
            <span className="ml-3 text-xs font-medium text-[#8a9af7] bg-[#4361ee]/20 px-2 py-1 rounded-full">
              BOUTIQUE
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-sm font-medium hover:text-[#8a9af7] transition-all duration-300 relative group"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4361ee] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:text-[#8a9af7] transition-all duration-300 relative group"
            >
              Craft
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4361ee] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium hover:text-[#8a9af7] transition-all duration-300 relative group"
            >
              Investment
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4361ee] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-white hover:text-[#8a9af7] hover:bg-white/5 transition-all duration-300"
            >
              <Link href="/dashboard">Access</Link>             
            </Button>
            <Button className="bg-gradient-to-r from-[#4361ee] to-[#8a9af7] hover:from-[#3a56d4] hover:to-[#7b8bf5] text-white rounded-full px-6 py-2 shadow-lg shadow-[#4361ee]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#4361ee]/40">
              Begin Journey
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4361ee]/20 to-[#8a9af7]/20 backdrop-blur-sm border border-[#4361ee]/30 rounded-full px-4 py-2 mb-8">
              <SparklesIcon className="h-4 w-4 text-[#8a9af7]" />
              <span className="text-sm font-medium text-[#8a9af7]">Exclusive Instagram Automation</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-[#8a9af7] to-white bg-clip-text text-transparent">
                Artisanal AI for
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#4361ee] to-[#8a9af7] bg-clip-text text-transparent">
                Instagram Mastery
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              A meticulously crafted automation suite for discerning creators. Transform your Instagram engagement with
              bespoke AI responses and intelligent keyword orchestration.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="bg-gradient-to-r from-[#4361ee] to-[#8a9af7] hover:from-[#3a56d4] hover:to-[#7b8bf5] text-white rounded-full px-10 py-6 text-lg font-medium shadow-2xl shadow-[#4361ee]/30 transition-all duration-500 hover:shadow-3xl hover:shadow-[#4361ee]/50 hover:scale-105">
                <BotIcon className="mr-3 h-5 w-5" />
                Craft Your First Automation
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#4361ee]/50 text-[#8a9af7] hover:bg-[#4361ee]/10 hover:border-[#4361ee] rounded-full px-10 py-6 text-lg font-medium backdrop-blur-sm transition-all duration-300"
              >
                Experience the Demo
              </Button>
            </div>
          </div>

          {/* Premium Dashboard Preview */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4361ee]/20 to-[#8a9af7]/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-[#1a1d29]/80 to-[#0f1116]/80 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-sm text-gray-400">Live Automations</div>
                    <div className="w-2 h-2 bg-[#4361ee] rounded-full animate-pulse"></div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: "Premium Lead Capture", status: "Active", responses: "2.4k", engagement: "+340%" },
                    { title: "VIP Customer Support", status: "Active", responses: "1.8k", engagement: "+280%" },
                    { title: "Exclusive Content Gate", status: "Active", responses: "3.1k", engagement: "+420%" },
                  ].map((automation, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-[#0f1116]/60 to-[#1a1d29]/60 rounded-2xl p-6 border border-white/5 hover:border-[#4361ee]/30 transition-all duration-300 group"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="font-semibold text-white group-hover:text-[#8a9af7] transition-colors duration-300">
                            {automation.title}
                          </h4>
                          <p className="text-sm text-gray-400 mt-1">{automation.status}</p>
                        </div>
                        <div className="w-8 h-8 bg-[#4361ee]/20 rounded-full flex items-center justify-center">
                          <CheckIcon className="h-4 w-4 text-[#4361ee]" />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Responses</span>
                          <span className="text-white font-medium">{automation.responses}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Engagement</span>
                          <span className="text-[#4361ee] font-medium">{automation.engagement}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Features */}
      <section id="features" className="relative z-10 py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#8a9af7] to-[#4361ee] bg-clip-text text-transparent">
                Curated Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Every feature meticulously designed for the sophisticated Instagram professional
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: InstagramIcon,
                title: "Seamless Integration",
                description: "White-glove Instagram connection with enterprise-grade security and privacy protection.",
                gradient: "from-pink-500/20 to-purple-500/20",
              },
              {
                icon: MessageSquareIcon,
                title: "Intelligent Triggers",
                description: "Sophisticated keyword detection with contextual understanding and sentiment analysis.",
                gradient: "from-blue-500/20 to-cyan-500/20",
              },
              {
                icon: BotIcon,
                title: "Artisanal AI",
                description: "Hand-tuned AI models that understand your brand voice and maintain authentic engagement.",
                gradient: "from-purple-500/20 to-pink-500/20",
              },
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl"
                  style={{
                    background: `linear-gradient(135deg, ${feature.gradient.split(" ")[1]}, ${feature.gradient.split(" ")[3]})`,
                  }}
                ></div>
                <div className="relative bg-gradient-to-br from-[#1a1d29]/40 to-[#0f1116]/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 group-hover:transform group-hover:scale-105">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[#8a9af7] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Craft Process */}
      <section id="how-it-works" className="relative z-10 py-32 bg-gradient-to-r from-[#0f1116]/50 to-[#1a1d29]/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#4361ee] to-[#8a9af7] bg-clip-text text-transparent">
                The Artisan Process
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A refined three-step journey to Instagram automation mastery
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  number: "01",
                  title: "Exclusive Onboarding",
                  description:
                    "Begin with a personalized consultation to understand your brand essence and engagement goals.",
                },
                {
                  number: "02",
                  title: "Bespoke Configuration",
                  description:
                    "Our artisans craft custom automation workflows tailored to your unique audience and voice.",
                },
                {
                  number: "03",
                  title: "Effortless Mastery",
                  description: "Watch as your Instagram presence transforms with intelligent, authentic engagement.",
                },
              ].map((step, index) => (
                <div key={index} className="relative group">
                  <div className="text-center">
                    <div className="relative inline-block mb-8">
                      <div className="w-24 h-24 bg-gradient-to-br from-[#4361ee] to-[#8a9af7] rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-2xl shadow-[#4361ee]/30 group-hover:shadow-3xl group-hover:shadow-[#4361ee]/50 transition-all duration-500 group-hover:scale-110">
                        {step.number}
                      </div>
                      {index < 2 && (
                        <div className="hidden md:block absolute top-1/2 left-full w-12 h-0.5 bg-gradient-to-r from-[#4361ee] to-transparent transform -translate-y-1/2"></div>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-[#8a9af7] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium Investment Plans */}
      <section id="pricing" className="relative z-10 py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#8a9af7] to-[#4361ee] bg-clip-text text-transparent">
                Investment Tiers
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose your level of Instagram automation sophistication
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Artisan Plan */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4361ee]/20 to-[#8a9af7]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-[#1a1d29]/60 to-[#0f1116]/60 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden group-hover:border-white/20 transition-all duration-500">
                <div className="p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <h3 className="text-3xl font-bold">Artisan</h3>
                    <span className="bg-gradient-to-r from-[#4361ee]/20 to-[#8a9af7]/20 text-[#8a9af7] px-3 py-1 rounded-full text-sm font-medium">
                      FOUNDATION
                    </span>
                  </div>
                  <div className="mb-8">
                    <span className="text-5xl font-bold">Free</span>
                    <p className="text-gray-400 mt-2">Perfect for emerging creators</p>
                  </div>
                  <ul className="space-y-4 mb-10">
                    {[
                      "Curated engagement responses",
                      "Basic automation workflows",
                      "Community support access",
                      "Essential analytics dashboard",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckIcon className="h-5 w-5 text-[#4361ee] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-10 pt-0">
                  <Button className="w-full bg-gradient-to-r from-[#2a2d3a] to-[#1a1d29] hover:from-[#3a3d4a] hover:to-[#2a2d3a] text-white rounded-2xl py-6 text-lg font-medium transition-all duration-300">
                    Begin Your Journey
                  </Button>
                </div>
              </div>
            </div>

            {/* Virtuoso Plan */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#4361ee] to-[#8a9af7] rounded-3xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-[#1a1d29] to-[#0f1116] rounded-3xl overflow-hidden">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-[#4361ee] to-[#8a9af7] text-white text-sm font-bold px-6 py-2 rounded-bl-2xl">
                  VIRTUOSO
                </div>
                <div className="p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-[#8a9af7] to-[#4361ee] bg-clip-text text-transparent">
                      Master Suite
                    </h3>
                  </div>
                  <div className="mb-8">
                    <span className="text-5xl font-bold bg-gradient-to-r from-[#8a9af7] to-[#4361ee] bg-clip-text text-transparent">
                      $99
                    </span>
                    <span className="text-xl text-gray-400">/month</span>
                    <p className="text-gray-400 mt-2">For the discerning professional</p>
                  </div>
                  <ul className="space-y-4 mb-10">
                    {[
                      "Everything in Artisan tier",
                      "Bespoke AI response generation",
                      "Advanced sentiment analysis",
                      "Priority concierge support",
                      "Custom brand voice training",
                      "Exclusive analytics insights",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckIcon className="h-5 w-5 text-[#4361ee] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-10 pt-0">
                  <Button className="w-full bg-gradient-to-r from-[#4361ee] to-[#8a9af7] hover:from-[#3a56d4] hover:to-[#7b8bf5] text-white rounded-2xl py-6 text-lg font-medium shadow-2xl shadow-[#4361ee]/30 hover:shadow-3xl hover:shadow-[#4361ee]/50 transition-all duration-500 hover:scale-105">
                    Elevate Your Craft
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive CTA */}
      <section className="relative z-10 py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4361ee]/30 to-[#8a9af7]/30 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-[#1a1d29]/80 to-[#0f1116]/80 backdrop-blur-xl rounded-3xl p-16 border border-white/10 text-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4361ee]/20 to-[#8a9af7]/20 backdrop-blur-sm border border-[#4361ee]/30 rounded-full px-4 py-2 mb-8">
                  <SparklesIcon className="h-4 w-4 text-[#8a9af7]" />
                  <span className="text-sm font-medium text-[#8a9af7]">Limited Access</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-white to-[#8a9af7] bg-clip-text text-transparent">
                    Ready to Transform Your
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-[#4361ee] to-[#8a9af7] bg-clip-text text-transparent">
                    Instagram Presence?
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Join an exclusive community of creators who have elevated their Instagram engagement through artisanal
                  automation.
                </p>
                <Button className="bg-gradient-to-r from-[#4361ee] to-[#8a9af7] hover:from-[#3a56d4] hover:to-[#7b8bf5] text-white rounded-full px-12 py-6 text-xl font-medium shadow-2xl shadow-[#4361ee]/40 hover:shadow-3xl hover:shadow-[#4361ee]/60 transition-all duration-500 hover:scale-105">
                  <BotIcon className="mr-3 h-6 w-6" />
                  Begin Your Transformation
                  <ArrowRightIcon className="ml-3 h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Refined Footer */}
      <footer className="relative z-10 bg-gradient-to-t from-[#0a0d14] to-[#0f1116] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
              <div className="md:col-span-2">
                <div className="flex items-center mb-6">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-[#8a9af7] to-[#4361ee] bg-clip-text text-transparent">
                    SLide
                  </h2>
                  <span className="ml-3 text-xs font-medium text-[#8a9af7] bg-[#4361ee]/20 px-2 py-1 rounded-full">
                    BOUTIQUE
                  </span>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                  Artisanal Instagram automation for the sophisticated creator. Crafted with precision, delivered with
                  excellence.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-6 text-[#8a9af7]">Experience</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>
                    <Link href="#" className="hover:text-[#8a9af7] transition-colors duration-300">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#8a9af7] transition-colors duration-300">
                      Investment
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#8a9af7] transition-colors duration-300">
                      Integrations
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-6 text-[#8a9af7]">Support</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>
                    <Link href="#" className="hover:text-[#8a9af7] transition-colors duration-300">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#8a9af7] transition-colors duration-300">
                      Concierge
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-[#8a9af7] transition-colors duration-300">
                      Community
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 SLide. Crafted with precision.</p>
              <div className="flex space-x-8 text-sm">
                <Link href="#" className="text-gray-400 hover:text-[#8a9af7] transition-colors duration-300">
                  Terms
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#8a9af7] transition-colors duration-300">
                  Privacy
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#8a9af7] transition-colors duration-300">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </main>
  )
}










//  ------------------------------------ OLD VERSION
//  ------------------------------------------------





// import { Button } from '@/components/ui/button';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card';
// import { CheckCircle, MenuIcon } from 'lucide-react';
// import { redirect } from 'next/navigation'
// import Image from 'next/image';
// import Link from 'next/link';

// export default function Home() {
//   const plans = [
//     {
//       name: 'Free Plan',
//       description: 'Perfect for getting started',
//       price: '$0',
//       features: [
//         'Boost engagement with target responses',
//         'Automate comment replies to enhance audience interaction',
//         'Turn followers into customers with targeted messaging',
//       ],
//       cta: 'Get Started',
//     },
//     {
//       name: 'Smart AI Plan',
//       description: 'Advanced features for power users',
//       price: '$99',
//       features: [
//         'All features from Free Plan',
//         'AI-powered response generation',
//         'Advanced analytics and insights',
//         'Priority customer support',
//         'Custom branding options',
//       ],
//       cta: 'Upgrade Now',
//     },
//   ]
//   return (
//     <main>
//       <section className="relative bg-gradient-to-b from-slate-900 via-blue-900 to-bg">
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
//         <div className="relative">
//           <div className="container px-4 py-8">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center font-bold text-black">
                  
//                 </div>
//                 <span className="text-xl font-semibold text-primary">
//                   Slide
//                 </span>
//               </div>
//               <nav className="hidden space-x-6 text-sm text-blue-200 md:block">
//                 <Link href="#features">Features</Link>
//                 <Link href="#pricing">Pricing</Link>
//                 <Link href="#about">About</Link>
//               </nav>
//               <Button className="bg-blue-600 text-primary hover:bg-blue-700">
//                 <Link href="/dashboard">Login</Link>
//               </Button>
//             </div>

//             <div className="mx-auto mt-16 max-w-3xl text-center">
//               <h1 className="text-4xl font-bold leading-tight tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
//                 Transform Your Instagram Engagement with Slide
//               </h1>

//               <p className="mt-6 text-lg text-blue-200">
//                 Slide revolutionizes how you connect with your audience on
//                 Instagram. Automate responses and boost engagement effortlessly,
//                 turning interactions into valuable business opportunities.
//               </p>

//               <div className="mt-8 flex justify-center gap-4">
//                 <Button
//                   size="lg"
//                   className="bg-blue-600 text-white hover:bg-blue-700"
//                 >
//                   Get Started
//                 </Button>
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="border-blue-400  hover:bg-blue-900/50"
//                 >
//                   Learn More
//                 </Button>
//               </div>
//             </div>
//            {/* <div className="relative h-40 md:h-80 w-full  mt-10">
//                <Image
//                 src="/Ig-creators.png"
//                 alt="Community member"
//                 fill
//                 className="object-cover"
//               /> 
//             </div>*/}
//           </div>
//         </div>
//       </section>
//       <section className="container w-full py-12 md:py-24 lg:py-32 bg-background">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
//               Choose Your Plan
//             </h2>
//             <p className="max-w-[900px] text-muted-foreground">
//               Select the perfect plan to boost your Instagram engagement
//             </p>
//           </div>
//           <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 md:gap-8">
//             {plans.map((plan, index) => (
//               <Card
//                 key={index}
//                 className="flex flex-col justify-between"
//               >
//                 <CardHeader>
//                   <CardTitle>{plan.name}</CardTitle>
//                   <CardDescription>{plan.description}</CardDescription>
//                 </CardHeader>
//                 <CardContent className="grid gap-4">
//                   <div className="text-4xl font-bold">
//                     {plan.price}
//                     <span className="text-lg font-normal text-muted-foreground">
//                       /month
//                     </span>
//                   </div>
//                   <ul className="space-y-2">
//                     {plan.features.map((feature, i) => (
//                       <li
//                         key={i}
//                         className="flex items-center"
//                       >
//                         <CheckCircle className="mr-2 h-4 w-4 text-primary" />
//                         <span className="text-sm text-muted-foreground">
//                           {feature}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//                 <CardFooter>
//                   {/* WIP: fix the links for 'Get Started' and 'Upgrade' */}
//                   <Button 
//                     className="w-full">                     
//                       <Link href="/dashboard">{plan.cta}</Link>
//                   </Button>
//                 </CardFooter>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }
