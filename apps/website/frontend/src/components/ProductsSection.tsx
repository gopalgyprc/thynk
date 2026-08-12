"use client";

import {
  BarChart3,
  GraduationCap,
  ArrowRight,
  Building2,
  Users,
  TrendingUp,
  BookOpen,
  ClipboardCheck,
  CalendarCheck,
} from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem } from "./AnimatedSection";

const products = [
  {
    id: "pulse",
    name: "Thynk Pulse",
    tagline: "Business Management Platform",
    description:
      "A comprehensive CRM and business management solution that helps you manage customers, sales, orders, inventory, and reports — all in one place.",
    icon: BarChart3,
    color: "from-brand-500 to-brand-700",
    bgColor: "bg-brand-50",
    textColor: "text-brand-600",
    features: [
      { label: "CRM & Customer Management", icon: Users },
      { label: "Sales & Order Tracking", icon: TrendingUp },
      { label: "Inventory Management", icon: Building2 },
      { label: "Reports & Analytics", icon: BarChart3 },
    ],
    href: "#",
  },
  {
    id: "schooling",
    name: "Thynk Schooling",
    tagline: "Education Management Platform",
    description:
      "A powerful school management system designed to streamline student administration, teacher coordination, attendance tracking, and academic management.",
    icon: GraduationCap,
    color: "from-accent-500 to-accent-700",
    bgColor: "bg-accent-50",
    textColor: "text-accent-600",
    features: [
      { label: "Student Management", icon: BookOpen },
      { label: "Teacher Coordination", icon: Users },
      { label: "Attendance & Exams", icon: ClipboardCheck },
      { label: "Fee & Schedule Management", icon: CalendarCheck },
    ],
    href: "#",
  },
];

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="section-spacing bg-surface relative overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="section-container section-padding">
        <FadeInView>
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-sm font-medium mb-6">
              Our Products
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">
              Everything you need to{" "}
              <span className="gradient-text">succeed</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Two powerful platforms, one unified ecosystem. Choose the tool that
              fits your needs or use both for complete business and education
              management.
            </p>
          </div>
        </FadeInView>
        <StaggerContainer className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <StaggerItem key={product.id}>
                <div className="group relative bg-white rounded-3xl border border-border p-8 sm:p-10 hover-lift shadow-sm hover:shadow-2xl h-full">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${product.bgColor} ${product.textColor} mb-6 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-text-primary mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm font-medium text-text-tertiary uppercase tracking-wider mb-4">
                    {product.tagline}
                  </p>
                  <p className="text-text-secondary leading-relaxed mb-8">
                    {product.description}
                  </p>
                  <div className="space-y-3 mb-8">
                    {product.features.map((feature) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <div
                          key={feature.label}
                          className="flex items-center gap-3 text-sm text-text-secondary"
                        >
                          <div
                            className={`flex-shrink-0 w-6 h-6 rounded-lg ${product.bgColor} flex items-center justify-center`}
                          >
                            <FeatureIcon
                              size={14}
                              className={product.textColor}
                            />
                          </div>
                          <span>{feature.label}</span>
                        </div>
                      );
                    })}
                  </div>
                  <a
                    href={product.href}
                    className={`inline-flex items-center gap-2 text-sm font-semibold ${product.textColor} hover:gap-3 transition-all duration-300`}
                  >
                    Learn more
                    <ArrowRight size={16} />
                  </a>
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${product.color} opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity duration-500`}
                  />
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
