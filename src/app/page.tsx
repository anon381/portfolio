



"use client";

import { useState, useEffect } from "react";

const techStack = [
  "Next.js", "React", "TypeScript", "TailwindCSS", "Node.js", "Express.js", "GraphQL", "PostgreSQL", "MongoDB", "Supabase", "MySQL", "Vercel", "Netlify", "Auth.js", "Clerk", "Firebase", "Jest", "React Testing Library", "Figma"
];

const projects = [
  {
    name: "Portfolio Website",
    description: "Personal portfolio built with Next.js and TailwindCSS.",
    stack: ["Next.js", "TailwindCSS", "TypeScript"],
    link: "#"
  },
  {
    name: "E-commerce Platform",
    description: "Full-stack e-commerce app with authentication and payment integration.",
    stack: ["React", "Node.js", "MongoDB", "Express.js"],
    link: "#"
  },
  {
    name: "Blog API",
    description: "RESTful API for a blog platform.",
    stack: ["Node.js", "Express.js", "PostgreSQL"],
    link: "#"
  },
  {
    name: "Realtime Chat App",
    description: "A chat app with websockets and live messaging.",
    stack: ["React", "Node.js", "Socket.io"],
    link: "#"
  }
];

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Full-Stack Web Developer";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (

    <div className="min-h-screen w-full relative flex flex-col items-center justify-center px-2 sm:px-4 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-40 blur-2xl"></div>

      <main className="w-full max-w-4xl mx-auto py-8 sm:py-12 flex flex-col items-center z-10">
        {/* Hero Section with Glassmorphism Card */}
        <section className="mb-8 sm:mb-12 w-full flex justify-center">
          <div className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-8 flex flex-col items-center border border-blue-200 dark:border-blue-900 transition-all hover:scale-[1.02]">
            <div className="mb-4 flex flex-col sm:flex-row items-center gap-3 w-full">
              <span className="inline-block w-14 h-14 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg">JD</span>
              <div className="w-full text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-1 animate-fade-in">Yabets Maregn</h1>
                <span className="block text-base sm:text-lg font-mono text-gray-700 dark:text-gray-200 animate-typing border-r-2 border-blue-600 pr-2">{typedText}</span>
              </div>
            </div>
            <p className="mt-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 animate-fade-in delay-300 text-center">I build modern, scalable web applications from front to back.<br/>Let's create something amazing together!</p>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-8 sm:mb-10 w-full px-2 sm:px-0">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-700 dark:text-blue-300">About Me</h2>
          <div className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2 space-y-2">
            <p>Passionate Full-Stack Web Developer with a proven track record of creating interactive, scalable web applications that deliver seamless user experiences.</p>
            <p>Actively working with Next.js, TypeScript, TailwindCSS, React, Node.js, PostgreSQL, MongoDB, and REST/GraphQL APIs to build modern, full-stack applications.</p>
            <p>Proficient in handling authentication (Auth.js, Clerk, Firebase, Supabase), state management (Zustand, React Query), and optimizing performance for high-quality user experiences.</p>
            <p>Exploring the world of Machine Learning(ML), Artificial Intelligence(AI), and Data Analytics(DA) to add intelligent, data-driven features to my projects.</p>
            <p>Continuously learning, iterating, and shipping solutions to push the boundaries of what's possible.</p>
          </div>
        </section>

        {/* Tech Stack Section - User Content */}
        <section className="mb-8 sm:mb-10 w-full px-2 sm:px-0">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-700 dark:text-blue-300">🧰 Tech-Stack</h2>
          <div className="bg-white/80 dark:bg-gray-900/80 rounded-xl shadow p-4">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left">Category</th>
                  <th className="text-left">Technologies</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>🎨 Frontend</td><td>Next.js, React, TypeScript, TailwindCSS, shadcn/ui</td></tr>
                <tr><td>🛠️ Backend</td><td>Node.js, Express.js, REST, GraphQL</td></tr>
                <tr><td>🗄️ Database</td><td>PostgreSQL, MongoDB, Supabase, MySQL</td></tr>
                <tr><td>☁️ Cloud & Hosting</td><td>Vercel, Netlify</td></tr>
                <tr><td>🔌 Backend-as-a-Service (BaaS)</td><td>Auth.js, Clerk, Firebase, Supabase</td></tr>
                <tr><td>🧪 Testing & QA</td><td>Jest, React Testing Library</td></tr>
                <tr><td>🎨 Design & Prototyping</td><td>Figma</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Project Highlights Section - User Content */}
        <section className="mb-8 sm:mb-10 w-full px-2 sm:px-0">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-700 dark:text-blue-300">🌍 Project-Highlights</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-base mb-2">🏆 Main Projects</h3>
              <div className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl p-4 border border-purple-100 dark:border-purple-900 flex flex-col justify-between h-full mb-4">
                <span className="font-bold">JSL Church Website V1</span>
                <span className="text-xs">Next.js, TS, Tailwind, shadcn/ui</span>
                <a href="#" className="text-blue-600 hover:underline text-xs">Live Site</a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-2">📦 Mini Projects</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl p-4 border border-purple-100 dark:border-purple-900 flex flex-col justify-between h-full">
                  <span className="font-bold">Movie Reviewer</span>
                  <span className="text-xs">React, Vite, PostgreSQL, Supabase backend</span>
                  <a href="#" className="text-blue-600 hover:underline text-xs">Live Site</a>
                </div>
                <div className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl p-4 border border-purple-100 dark:border-purple-900 flex flex-col justify-between h-full">
                  <span className="font-bold">Github-Profile-Viewer</span>
                  <span className="text-xs">React, Vite, Tailwind</span>
                  <a href="#" className="text-blue-600 hover:underline text-xs">Live Site</a>
                </div>
                <div className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl p-4 border border-purple-100 dark:border-purple-900 flex flex-col justify-between h-full">
                  <span className="font-bold">New Bookstore</span>
                  <span className="text-xs">PHP, MySQL</span>
                  <a href="#" className="text-blue-600 hover:underline text-xs">GitHub Repo</a>
                </div>
                <div className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl p-4 border border-purple-100 dark:border-purple-900 flex flex-col justify-between h-full">
                  <span className="font-bold">To-Do List</span>
                  <span className="text-xs">React, Vite, Node.js, Express.js</span>
                  <a href="#" className="text-blue-600 hover:underline text-xs">GitHub Repo</a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-2">� Solo Projects</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl p-4 border border-purple-100 dark:border-purple-900 flex flex-col justify-between h-full">
                  <span className="font-bold">Movie Reviewer</span>
                  <span className="text-xs">React, Vite, PostgreSQL, Supabase backend</span>
                  <a href="#" className="text-blue-600 hover:underline text-xs">Live Site</a>
                </div>
                <div className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl p-4 border border-purple-100 dark:border-purple-900 flex flex-col justify-between h-full">
                  <span className="font-bold">Github-Profile-Viewer</span>
                  <span className="text-xs">React, Vite, Tailwind</span>
                  <a href="#" className="text-blue-600 hover:underline text-xs">Live Site</a>
                </div>
                <div className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl p-4 border border-purple-100 dark:border-purple-900 flex flex-col justify-between h-full">
                  <span className="font-bold">New Bookstore</span>
                  <span className="text-xs">PHP, MySQL</span>
                  <a href="#" className="text-blue-600 hover:underline text-xs">GitHub Repo</a>
                </div>
                <div className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl p-4 border border-purple-100 dark:border-purple-900 flex flex-col justify-between h-full">
                  <span className="font-bold">To-Do List</span>
                  <span className="text-xs">React, Vite, Node.js, Express.js</span>
                  <a href="#" className="text-blue-600 hover:underline text-xs">GitHub Repo</a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-2">🤝 Group Projects</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl p-4 border border-purple-100 dark:border-purple-900 flex flex-col justify-between h-full">
                  <span className="font-bold">Goodreads PHP Backend</span>
                  <span className="text-xs">PHP, MySQL</span>
                  <a href="#" className="text-blue-600 hover:underline text-xs">GitHub Repo</a>
                </div>
                <div className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl p-4 border border-purple-100 dark:border-purple-900 flex flex-col justify-between h-full">
                  <span className="font-bold">IP-1 Project</span>
                  <span className="text-xs">Full Stack Book Manager</span>
                  <a href="#" className="text-blue-600 hover:underline text-xs">GitHub Repo</a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-2">🚧 Ongoing Projects</h3>
              <div className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl p-4 border border-purple-100 dark:border-purple-900 flex flex-col justify-between h-full">
                <span className="font-bold">Kidus production</span>
                <span className="text-xs">Next.js, Typescript, Tailwind, shadcn/ui</span>
                <a href="#" className="text-blue-600 hover:underline text-xs">Live Site</a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-8 sm:mb-10 w-full px-2 sm:px-0">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-700 dark:text-blue-300">Contact</h2>
          <ul className="flex flex-col gap-2 text-sm sm:text-base">
            <li>Email: <a href="mailto:john.doe@email.com" className="text-blue-600 hover:underline">john.doe@email.com</a></li>
            <li>Telegram: <a href="#" className="text-blue-600 hover:underline">@johndoe</a></li>
            <li>LinkedIn: <a href="#" className="text-blue-600 hover:underline">linkedin.com/in/johndoe</a></li>
          </ul>
        </section>

        <footer className="mt-8 text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 animate-fade-in">
          Thanks for visiting! Let's build something great together. 🚀
        </footer>
      </main>

      <style jsx>{`
        .animate-typing {
          animation: typing 2s steps(30, end), blink-caret .75s step-end infinite;
        }
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #2563eb; }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-in;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-gradient {
          animation: gradientMove 8s ease-in-out infinite alternate;
        }
        @keyframes gradientMove {
          0% { transform: scale(1) translateY(0); }
          100% { transform: scale(1.2) translateY(-40px); }
        }
        .tech-badge {
          @apply px-3 py-1 sm:px-4 sm:py-2 bg-white/70 dark:bg-gray-800/70 border border-blue-100 dark:border-blue-900 text-blue-900 dark:text-blue-200 rounded-full text-xs sm:text-sm font-semibold shadow transition-all hover:scale-110 hover:bg-gradient-to-r hover:from-blue-100 hover:via-purple-100 hover:to-pink-100 animate-fade-in;
        }
      `}</style>
    </div>
  );
}
