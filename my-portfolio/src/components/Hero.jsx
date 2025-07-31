import React from "react";

export default function Hero() {
  return (
    <section className="h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/hero.jpg')" }}>
      <div className="text-center text-white backdrop-blur-sm bg-black/50 p-6 rounded">
        <h2 className="text-4xl font-bold mb-4">Hi, I’m Meredith</h2>
        <p className="text-lg mb-6">UX Designer & Developer passionate about meaningful digital experiences</p>
        <a href="#projects" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">View My Work</a>
      </div>
    </section>
  );
}
