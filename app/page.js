import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="bg-yellow-50 m-5">
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center ">
          <p className={"text-3xl font-bold ptop-4 px-2 text-black"}>
            The best URL shortener in the Market
          </p>
          <p className="px-16 text-center text-black">
            We are the most straightfoward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener
          </p>
          <div className='flex gap-3 justify-start mt-5'>
            <Link href="/shorten"><button className='bg-yellow-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Try Now</button></Link>
            <Link href="/github"><button className='bg-yellow-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>GitHub</button></Link>
          </div>
        </div>
        <img
          src="https://img.magnific.com/free-vector/hand-drawn-busy-office-illustration_23-2151084554.jpg?semt=ais_hybrid&w=740&q=80"
          alt="an Image of a vector"
          className="mix-blend-darken w-full h-full object-cover"
        />

      </section>
    </main>
  );
}