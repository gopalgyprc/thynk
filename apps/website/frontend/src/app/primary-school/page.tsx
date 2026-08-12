"use client";

import {
  ArrowRight,
  Award,
  BookOpen,
  Check,
  FlaskConical,
  Globe2,
  GraduationCap,
  Heart,
  Lightbulb,
  Medal,
  Microscope,
  Palette,
  Play,
  Rocket,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "Language & Literacy",
    description:
      "Build strong reading, writing, vocabulary, and communication skills through engaging lessons.",
  },
  {
    icon: FlaskConical,
    title: "Science & Discovery",
    description:
      "Encourage curiosity through experiments, observation, problem solving, and hands-on learning.",
  },
  {
    icon: Globe2,
    title: "Social Studies",
    description:
      "Help students understand communities, cultures, history, geography, and the world around them.",
  },
  {
    icon: Palette,
    title: "Arts & Creativity",
    description:
      "Give students opportunities to express ideas through art, design, music, and creative projects.",
  },
];

const learningFeatures = [
  {
    icon: Lightbulb,
    title: "Curiosity First",
    description:
      "We encourage students to ask questions, explore ideas, and discover answers.",
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description:
      "Students learn to communicate, share ideas, solve problems, and work together.",
  },
  {
    icon: Rocket,
    title: "Future Ready",
    description:
      "We develop confidence, critical thinking, creativity, and skills for the future.",
  },
];

const achievements = [
  ["98%", "Parent Satisfaction"],
  ["15+", "Years of Excellence"],
  ["25+", "Clubs & Activities"],
  ["1:15", "Teacher Ratio"],
];

const testimonials = [
  {
    name: "Anita Sharma",
    role: "Parent of Riya",
    text: "The school has helped our daughter become much more confident. She enjoys learning and always comes home excited to share what she learned.",
  },
  {
    name: "Amit Verma",
    role: "Parent of Arjun",
    text: "The teachers genuinely care about every student. The balance between academics, activities, and personal development is excellent.",
  },
  {
    name: "Neha Kapoor",
    role: "Parent of Aanya",
    text: "We love the learning environment. The school encourages children to think independently instead of simply memorizing lessons.",
  },
];

export default function page() {
  return (
    <main className="overflow-hidden bg-cream text-ink-900">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-lavender-100 blur-3xl" />

        <div className="section-container relative max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Content */}
            <div>
              <span className="eyebrow">Learning today. Leading tomorrow.</span>

              <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-[1.06] tracking-tight text-ink-900 sm:text-6xl lg:text-7xl">
                Building bright
                <span className="block text-purple-600">
                  minds for a
                </span>
                brighter future.
              </h1>

              <p className="mt-7 max-w-xl font-inter text-base leading-8 text-slate-600 sm:text-lg">
                A nurturing primary school where students discover their
                strengths, build confidence, and develop a lifelong love for
                learning.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="btn-primary">
                  Explore Our School
                  <ArrowRight size={17} />
                </a>

                <a href="#about" className="btn-ghost">
                  <Play size={16} fill="currentColor" />
                  Take a Tour
                </a>
              </div>

              {/* Trust */}
              <div className="mt-10 flex flex-wrap gap-8">
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <Star
                        key={item}
                        size={14}
                        className="fill-purple-500 text-purple-500"
                      />
                    ))}
                  </div>

                  <p className="mt-1 font-inter text-xs text-slate-600">
                    Trusted by families
                  </p>
                </div>

                <div className="h-10 w-px bg-border" />

                <div>
                  <p className="font-head text-lg font-bold text-purple-600">
                    500+
                  </p>

                  <p className="font-inter text-xs text-slate-600">
                    Happy Students
                  </p>
                </div>

                <div className="h-10 w-px bg-border" />

                <div>
                  <p className="font-head text-lg font-bold text-purple-600">
                    15+
                  </p>

                  <p className="font-inter text-xs text-slate-600">
                    Years of Excellence
                  </p>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative mx-auto w-full max-w-[560px]">
              <div className="absolute inset-8 rounded-full bg-lavender-100" />

              <div className="relative rounded-[36px] border border-purple-200/50 bg-white p-5 shadow-[0_30px_80px_-35px_rgba(79,31,209,0.3)] sm:p-7">
                <div className="relative min-h-[450px] overflow-hidden rounded-[28px] bg-lavender-100">
                  {/* Background shapes */}
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple-200/50" />

                  <div className="absolute bottom-0 left-0 h-36 w-36 rounded-full bg-purple-200/40" />

                  {/* Sun */}
                  <div className="absolute right-8 top-8 flex h-16 w-16 items-center justify-center rounded-full bg-purple-200">
                    <Sparkles size={24} className="text-purple-600" />
                  </div>

                  {/* School board */}
                  <div className="absolute left-1/2 top-16 w-[76%] -translate-x-1/2 rounded-2xl bg-purple-700 p-5 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div className="h-2 w-16 rounded-full bg-purple-300" />
                      <div className="h-2 w-8 rounded-full bg-purple-300" />
                    </div>

                    <div className="mt-6 text-center">
                      <p className="font-head text-2xl font-bold text-white">
                        LEARN
                      </p>

                      <p className="mt-1 font-inter text-xs text-purple-200">
                        Explore • Discover • Grow
                      </p>
                    </div>

                    <div className="mt-5 grid grid-cols-3 gap-2">
                      <div className="h-12 rounded-lg bg-purple-600" />
                      <div className="h-12 rounded-lg bg-purple-500" />
                      <div className="h-12 rounded-lg bg-purple-300" />
                    </div>
                  </div>

                  {/* Desk */}
                  <div className="absolute bottom-16 left-1/2 h-28 w-[72%] -translate-x-1/2 rounded-2xl bg-white shadow-xl">
                    <div className="absolute left-5 right-5 top-5 h-3 rounded-full bg-lavender-200" />

                    <div className="absolute bottom-0 left-8 h-20 w-3 bg-purple-300" />
                    <div className="absolute bottom-0 right-8 h-20 w-3 bg-purple-300" />

                    {/* Books */}
                    <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-end gap-1">
                      <div className="h-8 w-14 rounded-md bg-purple-300" />
                      <div className="h-11 w-14 rounded-md bg-purple-600" />
                      <div className="h-6 w-14 rounded-md bg-purple-500" />
                    </div>
                  </div>

                  {/* Student */}
                  <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-end">
                    <div className="relative h-28 w-24 rounded-t-[40px] bg-purple-500">
                      <div className="absolute -top-10 left-1/2 h-14 w-14 -translate-x-1/2 rounded-full bg-[#d89c72]" />

                      <div className="absolute left-1/2 top-5 h-3 w-12 -translate-x-1/2 rounded-full bg-white/30" />
                    </div>
                  </div>

                  {/* Floating icons */}
                  <div className="absolute left-5 top-28 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-purple-600 shadow-lg">
                    <BookOpen size={22} />
                  </div>

                  <div className="absolute bottom-24 right-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-purple-600 shadow-lg">
                    <Lightbulb size={22} />
                  </div>
                </div>

                {/* Floating card */}
                <div className="absolute -left-5 top-28 flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 shadow-xl">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lavender-100 text-purple-600">
                    <Award size={19} />
                  </div>

                  <div>
                    <p className="font-inter text-xs font-bold text-ink-900">
                      Excellence
                    </p>

                    <p className="font-inter text-[11px] text-slate-600">
                      In every learner
                    </p>
                  </div>
                </div>

                {/* Floating card */}
                <div className="absolute -bottom-4 -right-4 flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 shadow-xl">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lavender-100 text-purple-600">
                    <Rocket size={19} />
                  </div>

                  <div>
                    <p className="font-inter text-xs font-bold text-ink-900">
                      Future Ready
                    </p>

                    <p className="font-inter text-[11px] text-slate-600">
                      Skills for tomorrow
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}
      <section className="border-y border-border bg-white">
        <div className="section-container max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {achievements.map(([number, label]) => (
              <div
                key={label}
                className="border-border px-5 py-8 text-center md:border-r md:last:border-r-0"
              >
                <p className="font-head text-3xl font-bold text-purple-600">
                  {number}
                </p>

                <p className="mt-1 font-inter text-xs text-slate-600 sm:text-sm">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ====================================================== */}
      <section id="about" className="py-24">
        <div className="section-container max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Visual */}
            <div className="relative">
              <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-purple-200/60" />

              <div className="relative rounded-[32px] bg-lavender-100 p-6">
                <div className="relative min-h-[430px] overflow-hidden rounded-[24px] bg-white shadow-sm">
                  {/* Decorative */}
                  <div className="absolute left-8 top-8 h-14 w-14 rounded-2xl bg-lavender-100" />

                  <div className="absolute right-8 top-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-lavender-100 text-purple-600">
                    <Sparkles size={23} />
                  </div>

                  {/* Bookshelf */}
                  <div className="absolute bottom-12 left-1/2 w-[75%] -translate-x-1/2">
                    <div className="h-5 rounded-full bg-purple-600" />

                    <div className="mt-2 flex h-40 items-end justify-center gap-2 rounded-b-xl bg-lavender-100 px-8">
                      <div className="h-28 w-10 rounded-t-lg bg-purple-300" />
                      <div className="h-36 w-10 rounded-t-lg bg-purple-600" />
                      <div className="h-24 w-10 rounded-t-lg bg-purple-500" />
                      <div className="h-32 w-10 rounded-t-lg bg-purple-200" />
                      <div className="h-20 w-10 rounded-t-lg bg-purple-300" />
                    </div>
                  </div>

                  {/* Graduation icon */}
                  <div className="absolute left-1/2 top-28 flex h-28 w-28 -translate-x-1/2 items-center justify-center rounded-full bg-purple-700 text-white shadow-xl">
                    <GraduationCap size={58} />
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-3 rounded-2xl border border-border bg-white px-5 py-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lavender-100 text-purple-600">
                    <Medal size={19} />
                  </div>

                  <div>
                    <p className="font-inter text-xs font-bold text-ink-900">
                      Quality Education
                    </p>

                    <p className="font-inter text-[11px] text-slate-600">
                      Every student matters
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="eyebrow">Our Approach</span>

              <h2 className="mt-5 text-4xl font-bold leading-tight text-ink-900 sm:text-5xl">
                Education that goes
                <span className="text-purple-600"> beyond textbooks.</span>
              </h2>

              <p className="mt-6 font-inter leading-8 text-slate-600">
                Our primary years are designed to give students a strong
                academic foundation while helping them become confident,
                thoughtful, creative, and independent learners.
              </p>

              <div className="mt-8 space-y-5">
                {learningFeatures.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div key={feature.title} className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lavender-100 text-purple-600">
                        <Icon size={19} />
                      </div>

                      <div>
                        <h3 className="font-head font-semibold text-ink-900">
                          {feature.title}
                        </h3>

                        <p className="mt-1 font-inter text-sm leading-6 text-slate-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <a href="#programs" className="btn-primary mt-9">
                Explore Learning
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ACADEMIC PROGRAMS
      ====================================================== */}
      <section id="programs" className="bg-lavender-100 py-24">
        <div className="section-container max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Academic Programs</span>

            <h2 className="mt-5 text-4xl font-bold text-ink-900 sm:text-5xl">
              Strong foundations.
              <span className="text-purple-600"> Endless possibilities.</span>
            </h2>

            <p className="mt-5 font-inter text-base leading-7 text-slate-600">
              A balanced curriculum that develops academic knowledge,
              creativity, communication, and critical thinking.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program) => {
              const Icon = program.icon;

              return (
                <article
                  key={program.title}
                  className="group rounded-[24px] border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-[0_20px_50px_-25px_rgba(79,31,209,0.4)]"
                >
                  <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-lavender-100 text-purple-600 transition group-hover:bg-purple-600 group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-6 font-head text-xl font-bold text-ink-900">
                    {program.title}
                  </h3>

                  <p className="mt-3 font-inter text-sm leading-7 text-slate-600">
                    {program.description}
                  </p>

                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 font-head text-sm font-semibold text-purple-600 transition group-hover:gap-3"
                  >
                    Learn More
                    <ArrowRight size={15} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          STUDENT DEVELOPMENT
      ====================================================== */}
      <section className="bg-white py-24">
        <div className="section-container max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Content */}
            <div>
              <span className="eyebrow">Beyond Academics</span>

              <h2 className="mt-5 text-4xl font-bold leading-tight text-ink-900 sm:text-5xl">
                Helping students
                <span className="text-purple-600"> discover their strengths.</span>
              </h2>

              <p className="mt-6 font-inter leading-8 text-slate-600">
                Education is not only about grades. We provide opportunities
                for students to explore their interests, develop leadership
                skills, and discover what they enjoy.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Sports & physical activities",
                  "Art, music & creative clubs",
                  "Science & technology projects",
                  "Leadership & communication",
                  "Community & teamwork activities",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 font-inter text-sm text-ink-700"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lavender-100 text-purple-600">
                      <Check size={13} />
                    </span>

                    {item}
                  </div>
                ))}
              </div>

              <a href="#contact" className="btn-primary mt-9">
                Discover Student Life
                <ArrowRight size={17} />
              </a>
            </div>

            {/* Cards */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[26px] bg-purple-700 p-7 text-white sm:translate-y-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <Microscope size={24} />
                </div>

                <h3 className="mt-7 font-head text-2xl font-bold">
                  Think Like a Scientist
                </h3>

                <p className="mt-3 font-inter text-sm leading-7 text-purple-100">
                  Explore questions, conduct experiments, and understand how
                  the world works.
                </p>
              </div>

              <div className="rounded-[26px] border border-border bg-lavender-100 p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-purple-600">
                  <Palette size={24} />
                </div>

                <h3 className="mt-7 font-head text-2xl font-bold text-ink-900">
                  Create Without Limits
                </h3>

                <p className="mt-3 font-inter text-sm leading-7 text-slate-600">
                  Give students the freedom to express ideas through art,
                  design, music, and creativity.
                </p>
              </div>

              <div className="rounded-[26px] border border-border bg-white p-7 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lavender-100 text-purple-600">
                  <Users size={24} />
                </div>

                <h3 className="mt-7 font-head text-2xl font-bold text-ink-900">
                  Learn Together
                </h3>

                <p className="mt-3 font-inter text-sm leading-7 text-slate-600">
                  Build teamwork, communication, empathy, and friendships
                  through collaborative experiences.
                </p>
              </div>

              <div className="rounded-[26px] border border-border bg-lavender-100 p-7 sm:translate-y-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-purple-600">
                  <Award size={24} />
                </div>

                <h3 className="mt-7 font-head text-2xl font-bold text-ink-900">
                  Celebrate Progress
                </h3>

                <p className="mt-3 font-inter text-sm leading-7 text-slate-600">
                  We celebrate effort, progress, creativity, and growth—not
                  just test scores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIALS
      ====================================================== */}
      <section className="bg-lavender-100 py-24">
        <div className="section-container max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Parent Stories</span>

            <h2 className="mt-5 text-4xl font-bold text-ink-900 sm:text-5xl">
              Families who
              <span className="text-purple-600"> trust us.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-[24px] border border-border bg-white p-7"
              >
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={14}
                      className="fill-purple-500 text-purple-500"
                    />
                  ))}
                </div>

                <p className="mt-5 font-inter text-sm leading-7 text-slate-600">
                  “{testimonial.text}”
                </p>

                <div className="mt-7 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-600 font-head font-bold text-white">
                    {testimonial.name.charAt(0)}
                  </div>

                  <div>
                    <p className="font-head text-sm font-semibold text-ink-900">
                      {testimonial.name}
                    </p>

                    <p className="font-inter text-xs text-slate-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section id="contact" className="py-16 sm:py-24">
        <div className="section-container max-w-7xl">
          <div className="relative overflow-hidden rounded-[32px] bg-purple-700 px-7 py-16 text-center sm:px-12">
            <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-purple-600" />

            <div className="absolute -bottom-24 -right-10 h-64 w-64 rounded-full bg-purple-600" />

            <div className="relative mx-auto max-w-2xl">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
                <GraduationCap size={28} />
              </div>

              <h2 className="mt-7 text-4xl font-bold leading-tight text-white sm:text-5xl">
                Give your child a
                <span className="text-purple-200"> strong start.</span>
              </h2>

              <p className="mt-5 font-inter text-sm leading-7 text-purple-100">
                Visit our school, meet our teachers, explore our learning
                spaces, and discover how we help every student grow.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="tel:+911234567890"
                  className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-white px-6 py-3.5 font-head text-sm font-semibold text-purple-700 transition hover:-translate-y-0.5 hover:bg-purple-100"
                >
                  Book a School Visit
                  <ArrowRight size={17} />
                </a>

                <a
                  href="mailto:admissions@school.com"
                  className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-white/30 px-6 py-3.5 font-head text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Admissions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}