import React from "react";

export default function Resume() {
  return (
    <section id="resume" className="py-16 px-4 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Resume</h2>
        <p className="mb-4">Click below to view or download my resume.</p>
        <a href="/resume.pdf" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700" target="_blank" rel="noopener noreferrer">View Resume</a>
      </div>
    </section>
  );
}
