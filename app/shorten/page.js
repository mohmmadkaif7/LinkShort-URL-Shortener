"use client"
import Link from "next/link"
import React, { useState } from "react";

const Shorten = () => {
    const [url, setulr] = useState("")
    const [shorturl, setshortulr] = useState("")
    const [generated, setgenerated] = useState("")

    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(generated);
            setCopied(true);

           
        } catch (err) {
            console.error(err);
        }
    };

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then(async (response) => {
                const result = await response.json()
                const host = process.env.NEXT_PUBLIC_HOST || window.location.origin
                setgenerated(`${host}/${shorturl}`)
                if (!response.ok || !result.success) {
                    throw new Error(result.message || 'Unable to generate the short URL.')
                }
                setulr("")
                setshortulr("")
                return result
            })
            .then((result) => {
                console.log(result)
                alert(result.message)
            })
            .catch((error) => {
                console.error("Generate request failed", error)
                alert(error.message || "Unable to generate the short URL. Please try again.")
            })
    }

    return (
        <div className="flex flex-col shadow-lg bg-yellow-100  border border-yellow-200 my-16 p-8 rounded-lg gap-4 mx-auto max-w-lg ">
            <h1 className="font-bold text-2xl text-black py-2 ">Generate your short URLs</h1>
            <div className="flex flex-col gap-6 ">
                <input type="text"
                    placeholder="Enter your url"
                    value={url}
                    className="border rounded-md px-4 py-2  border-yellow-300 text-black focus:outline-yellow-500 bg-yellow-50"
                    onChange={e => { setulr(e.target.value) }}
                ></input>
                <input type="text"
                    placeholder="Enter preferred short url"
                    value={shorturl}
                    className="border rounded-md px-4 py-2  border-yellow-300 text-black focus:outline-yellow-500 bg-yellow-50"
                    onChange={e => { setshortulr(e.target.value) }}
                ></input>
                <div className="flex items-center justify-center">
                    <button onClick={generate} className='bg-yellow-500 w-2/5 rounded-lg shadow-md px-3 py-1 font-bold text-white'>Generate</button>
                </div>
                <div>
                    {generated && (
                        <>
                            <span className="font-bold text-lg">Your Link</span>

                            <div className="mt-2 flex items-center gap-3 justify-center-safe">
                                <code className="bg-yellow-50 px-7 mx-2 py-1  rounded break-all">
                                    <Link
                                        href={generated}
                                        target="_blank"
                                        className="text-blue-600 hover:underline"
                                    >
                                        {generated}
                                    </Link>
                                </code>

                                <button
                                    onClick={copyToClipboard}
                                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md text-m font-semibold"
                                >
                                    {copied ? "Copied!" : "Copy"}
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Shorten