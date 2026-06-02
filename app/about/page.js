"use client"

import Link from "next/link";

const About = () => {
return ( <main className="bg-yellow-50 min-h-screen p-5"> <section className="max-w-6xl mx-auto">


  
    <div className="bg-white rounded-2xl p-8 shadow-md border border-yellow-200">
      <h1 className="text-4xl font-bold text-yellow-500 text-center">
        About LinkShot
      </h1>

      <p className="text-center text-gray-700 mt-4 max-w-3xl mx-auto">
        LinkShot is a simple, privacy-focused URL shortener built for
        everyone. We believe shortening links should be quick, easy,
        and accessible without forcing users to create an account.
      </p>
    </div>

  
    <div className="grid md:grid-cols-2 gap-6 mt-8">
      <div className="bg-white p-6 rounded-2xl shadow-md border border-yellow-200">
        <h2 className="text-2xl font-bold text-yellow-500 mb-4">
          Why We Built It
        </h2>

        <p className="text-gray-700">
          Most URL shorteners require signups, collect user data,
          or add unnecessary complexity. LinkShot focuses on
          simplicity, privacy, and speed.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md border border-yellow-200">
        <h2 className="text-2xl font-bold text-yellow-500 mb-4">
          Our Mission
        </h2>

        <p className="text-gray-700">
          To provide a clean and reliable link-shortening service
          that anyone can use instantly without compromising privacy.
        </p>
      </div>
    </div>

    <div className="bg-white rounded-2xl p-8 mt-8 shadow-md border border-yellow-200">
      <h2 className="text-3xl font-bold text-yellow-500 text-center mb-8">
        Features
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-yellow-100 p-4 rounded-xl">
          <h3 className="font-bold text-lg">No Login</h3>
          <p>Create short links instantly.</p>
        </div>

        <div className="bg-yellow-100 p-4 rounded-xl">
          <h3 className="font-bold text-lg">Privacy First</h3>
          <p>Your data stays yours.</p>
        </div>

        <div className="bg-yellow-100 p-4 rounded-xl">
          <h3 className="font-bold text-lg">Open Source</h3>
          <p>Transparent and community-driven.</p>
        </div>

        <div className="bg-yellow-100 p-4 rounded-xl">
          <h3 className="font-bold text-lg">Custom Links</h3>
          <p>Create memorable URLs.</p>
        </div>
      </div>
    </div>


    


    <div className="bg-white rounded-2xl p-8 mt-8 shadow-md border border-yellow-200">
      <h2 className="text-3xl font-bold text-yellow-500 mb-4">
        Developer
      </h2>

      <p className="text-gray-700">
        LinkShot is developed and maintained by
        <span className="font-bold"> Momamad Kaif</span>.
        The goal is to build a fast, reliable, and privacy-friendly
        URL shortening platform for everyone.
      </p>
    </div>


    <div className="text-center mt-8">
      <Link href="/shorten">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg">
          Start Shortening URLs
        </button>
      </Link>
    </div>

  </section>
</main>


);
};

export default About;
