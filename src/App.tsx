import { useState } from "react";
import { Menu, X } from "lucide-react";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4";

const navItems = ["Start", "Story", "Rates", "Benefits", "FAQ"];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-[Inter]">
      <section id="start" className="relative h-screen overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />

        <div className="absolute inset-0 bg-white/20" />

        <div className="relative h-full">
          <header className="relative z-50 mx-auto max-w-7xl px-8 py-6">
            <nav className="flex items-center justify-between">
              <a
                href="#start"
                className="text-2xl font-semibold tracking-tight text-gray-900 transition-colors hover:text-gray-700"
              >
                SkyElite
              </a>

              <div className="hidden items-center gap-8 md:flex">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-700"
                  >
                    {item}
                  </a>
                ))}
              </div>

              <button
                type="button"
                aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((open) => !open)}
                className="rounded-full p-2 text-gray-900 transition-colors hover:bg-white/50 md:hidden"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </nav>

            {isMenuOpen && (
              <div className="absolute left-8 right-8 top-20 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur-md md:hidden">
                <div className="flex flex-col">
                  {navItems.map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="rounded-xl px-4 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-100"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </header>

          <main className="flex h-[calc(100%-96px)] items-center justify-center px-6">
            <div className="-mt-80 w-full max-w-4xl text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-600">
                Private Jets
              </p>

              <h1 className="tracking-tighter">
                <span className="block text-6xl font-normal leading-none text-gray-500 md:text-7xl lg:text-8xl">
                  Premium.
                </span>
                <span className="-mt-3 block text-6xl font-normal leading-none text-[#202A36] md:text-7xl lg:text-8xl">
                  Accessible.
                </span>
              </h1>

              <p className="mx-auto mb-6 mt-6 max-w-2xl text-lg text-gray-600 md:text-xl">
                Your dedication deserves recognition.
              </p>

              <div className="flex items-center justify-center gap-4">
                <a
                  href="#discover"
                  className="rounded-full bg-gray-300 px-4 py-2 font-medium text-gray-800 transition-colors hover:bg-gray-400"
                >
                  Discover
                </a>
                <a
                  href="#book"
                  className="rounded-full bg-[#202A36] px-4 py-2 font-medium text-white transition-colors hover:bg-[#1a2229]"
                >
                  Book Now
                </a>
              </div>
            </div>
          </main>
        </div>
      </section>

      <section id="story" className="min-h-screen bg-white p-20">
        <h2 className="text-4xl font-semibold text-[#202A36]">Our Story</h2>
      </section>
      <section id="rates" className="min-h-screen bg-gray-50 p-20">
        <h2 className="text-4xl font-semibold text-[#202A36]">Rates</h2>
      </section>
      <section id="benefits" className="min-h-screen bg-white p-20">
        <h2 className="text-4xl font-semibold text-[#202A36]">Benefits</h2>
      </section>
      <section id="faq" className="min-h-screen bg-gray-50 p-20">
        <h2 className="text-4xl font-semibold text-[#202A36]">FAQ</h2>
      </section>
      <section id="discover" className="min-h-screen bg-white p-20">
        <h2 className="text-4xl font-semibold text-[#202A36]">Discover SkyElite</h2>
      </section>
      <section id="book" className="min-h-screen bg-[#202A36] p-20 text-white">
        <h2 className="text-4xl font-semibold">Book Your Flight</h2>
      </section>
    </div>
  );
}

export default App;
