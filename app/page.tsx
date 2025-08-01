"use client";
import Head from "next/head";
import Nav from "@/components/Nav";
import Publications from "@/components/Publications";
import Bio from "@/components/Bio";
import { useEffect, useRef } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const auraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateAuraPosition = (e: MouseEvent) => {
      if (auraRef.current) {
        auraRef.current.style.setProperty("--mouse-x", `${e.clientX}px`);
        auraRef.current.style.setProperty("--mouse-y", `${e.clientY}px`);
      }
    };
    window.addEventListener("pointermove", updateAuraPosition);

    return () => {
      window.removeEventListener("pointermove", updateAuraPosition);
    };
  }, []);

  return (
    <>
      <Head>
        <style jsx global>{`
          body {
            font-family: "${inter.style.fontFamily}";
          }
        `}</style>
      </Head>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div ref={auraRef} className="mouse-aura" />
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Nav />
          <main className="flex flex-col pt-6 lg:pt-24 lg:w-1/2 lg:py-24 gap-8">
	    <Bio />
            <Publications />
          </main>
        </div>
	<footer className="text-center text-sm mt-10 mb-4">
	  &copy; {new Date().getFullYear()} Muhammed Shuaibi. <a
	  className="underline" 
	  href="https://github.com/mshuaibii/my-website/blob/main/README.md#design-credits"
	  > Design credits</a>. Deployed by <a
	  className="underline" 
	  href="https://vercel.com"
	  > Vercel</a>.
        </footer>
      </div>
    </>
  );
}
