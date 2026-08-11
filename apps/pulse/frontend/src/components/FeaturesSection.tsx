"use client";

import {
  Users,
  TrendingUp,
  ShoppingCart,
  BarChart3,
  Building2,
  Target,
  Headphones,
  Shield,
  RefreshCw,
  Zap,
  Layers,
  ArrowRight,
} from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem } from "./AnimatedSection";

const features = [
  {
    icon: Users,
    title: "CRM Management",
    description: "Comprehensive customer relationship management with contact tracking, deal pipelines, and communication history.",
    gradient: "from-pulse-500 to-pulse-600",
    bgGlow: "bg-pulse-500/5",
  },
  {
    icon: TrendingUp,
    title: "Sales Analytics",
    description: "Real-time sales dashboards with pipeline tracking, conversion metrics, and revenue forecasting powered by AI.",
    gradient: "from-accent-500 to-accent-600",
    bgGlow: "bg-accent-500/5",
  },
  {
    icon: ShoppingCart,
    title: "Order Management",
    description: "End-to-end order lifecycle management from quote to fulfillment with automated invoicing and tracking.",
    gradient: "from-emerald-500 to-emerald-600",
    bgGlow: "bg-emerald-500/5",
  },
  {
    icon: Building2,
    title: "Inventory Control",
    description: "Real-time inventory tracking with low-stock alerts, warehouse management, and automated reordering.",
    gradient: "from-violet-500 to-violet-600",
    bgGlow: "bg-violet-500/5",
  },
  {
    icon: BarChart3,
    title: "Reports & Insights",
    description: "Customizable reports and dashboards with drill-down analytics, export capabilities, and scheduled reports.",
    gradient: "from-rose-500 to-rose-600",
    bgGlow: "bg-rose-500/5",
  },
  {
    icon: Target,
    title: "Goal Tracking",
    description: "Set and track business goals with milestone tracking, team performance metrics, and automated progress alerts.",
    gradient: "from-amber-500 to-amber-600",
    bgGlow: "bg-amber-500/5",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated customer success team available around the clock with priority support for enterprise plans.",
    gradient: "from-cyan-500 to-cyan-600",
    bgGlow: "bg-cyan-500/5",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption, SOC 2 compliance, role-based access control, and detailed audit logging.",
    gradient: "from-indigo-500 to-indigo-600",
    bgGlow: "bg-indigo-500/5",
  },
];

const integrations = [
  {
    title: "Payment Gateways",
    description: "Seamlessly integrate with Stripe, PayPal, Square, and more for automated payment processing.",
    icon: RefreshCw,
  },
  {
    title: "Accounting Tools",
    description: "Sync with QuickBooks, Xero, and FreshBooks for streamlined financial management.",
    icon: BarChart3,
  },
  {
    title: "Communication & Workflow",
    description: "Connect with Slack, Teams, and Zapier to automate workflows and team notifications.",
    icon: Zap,
  },
  {
    title: "Data & Analytics",
    description: "Export data to Google Analytics, Tableau, and custom BI tools for deeper insights.",
    icon: Layers,
  },
];

export default function FeaturesSection() {
  return (
    <>
      {/* Features Section */}
      <section id="features" className="section-spacing bg-surface-secondary relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pulse-200 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-pulse-100)_0%,_transparent_70%)] opacity-40" />
        </div>

        <div className="section-container section-padding relative">
          <FadeInView>
            <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pulse-50 border border-pulse-200 text-pulse-700 text-sm font-medium mb-6">
                Platform Features
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">
                Everything to{" "}
                <span className="gradient-text">scale your business</span>
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
                From first customer contact to final invoice, Pulse provides every
                tool you need to manage and grow your business operations seamlessly.
              </p>
            </div>
          </FadeInView>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <StaggerItem key={feature.title}>
                  <div className="group relative bg-white rounded-2xl border border-pulse-100 p-6 hover-lift hover:border-transparent shadow-sm h-full">
                    <div
                      className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${feature.bgGlow} mb-4 transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon size={22} className={`bg-gradient-to-br ${feature.gradient} bg-clip-text text-transparent`} />
                    </div>
                    <h3 className="text-base font-semibold text-text-primary mb-2">{feature.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`}
                    />
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="section-spacing bg-surface relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pulse-200 to-transparent" />

        <div className="section-container section-padding">
          <FadeInView>
            <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pulse-50 border border-pulse-200 text-pulse-700 text-sm font-medium mb-6">
                Integrations
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">
                Works with your{" "}
                <span className="gradient-text">favorite tools</span>
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
                Pulse connects with the tools you already use, so you can work
                without disruption and keep your workflows flowing.
              </p>
            </div>
          </FadeInView>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {integrations.map((integration) => {
              const Icon = integration.icon;
              return (
                <StaggerItem key={integration.title}>
                  <div className="group relative bg-white rounded-2xl border border-pulse-100 p-8 hover-lift shadow-sm flex items-start gap-5">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-pulse-50 text-pulse-600 transition-transform duration-300 group-hover:scale-110">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary mb-2">{integration.title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{integration.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <FadeInView delay={0.2} className="mt-10 text-center">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 text-sm font-semibold text-pulse-600 hover:text-pulse-700 transition-colors"
            >
              View all integrations <ArrowRight size={14} />
            </a>
          </FadeInView>
        </div>
      </section>
    </>
  );
}
