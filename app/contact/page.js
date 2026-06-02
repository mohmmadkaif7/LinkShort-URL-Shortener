"use client";

import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    setLoading(false);

    if (data.success) {
      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      alert(data.error || "Something went wrong");
    }
  };

  return (
    <main className=" min-h-screen p-5  ">
      <section className="md:max-w-2xl mx-auto bg-yellow-100 p-8 rounded-2xl border border-yellow-200 shadow-md">

        <h1 className="text-3xl font-bold text-yellow-500 text-center">
          Contact Us
        </h1>

        <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border rounded-md px-4 py-2  border-yellow-300 text-black focus:outline-yellow-500 bg-yellow-50 w-full"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="border rounded-md px-4 py-2  border-yellow-300 text-black focus:outline-yellow-500 bg-yellow-50 w-full"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="border rounded-md px-4 py-2  border-yellow-300 text-black focus:outline-yellow-500 bg-yellow-50 w-full"
          />
          <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-yellow-500 text-white px-6 py-3 shadow-xl rounded-xl font-bold"
          >
            {loading ? "Sending..." : "Send Message"}
          </button></div>
        </form>

      </section>
    </main>
  );
};

export default Contact;