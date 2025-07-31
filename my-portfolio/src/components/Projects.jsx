import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="border rounded shadow p-4">
            <h3 className="font-bold text-xl">Thrive – Habit Tracker</h3>
            <p className="text-sm mt-2">Mobile app helping users build consistent habits without burnout.</p>
          </div>
          <div className="border rounded shadow p-4">
            <h3 className="font-bold text-xl">Wellbeing Scheduler</h3>
            <p className="text-sm mt-2">Scheduling app syncing with Google Calendar and prioritizing self-care.</p>
          </div>
          <div className="border rounded shadow p-4">
            <h3 className="font-bold text-xl">Portfolio Site</h3>
            <p className="text-sm mt-2">This site, built with React + Tailwind.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
