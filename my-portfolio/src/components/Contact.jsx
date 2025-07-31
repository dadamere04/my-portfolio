import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Let’s Connect</h2>
        <p className="mb-4">Reach out to me via email or connect on LinkedIn.</p>
        <div className="flex justify-center gap-6">
          <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">Email</a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
        </div>
      </div>
    </section>
  );
}
