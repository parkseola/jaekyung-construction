"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999] transition-all duration-500">

        <div className="flex flex-col items-center animate-pulse">

          <img
            src="/jk-logo.png"
            alt="JK Logo"
            className="w-28 md:w-36 object-contain"
          />

        </div>

      </div>
    );
  }

  return (
    <main
      id="top"
      className="min-h-screen bg-[#f5f5f3] text-gray-800 scroll-smooth"
    >
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/40 backdrop-blur-md py-3"
            : "bg-gradient-to-b from-black/80 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#top"
            className="flex items-center gap-3 cursor-pointer z-50"
          >
            <img
              src="/jk-logo.png"
              alt="JK Logo"
              className="w-10 h-10 object-contain"
            />

            <div>
              <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide hover:text-[#c8a46b] transition">
                재경건설
              </h1>

              <p className="text-[10px] md:text-xs text-gray-300 mt-1 tracking-[2px] md:tracking-[3px]">
                JAEGYEONG CONSTRUCTION
              </p>
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 text-sm text-gray-200 font-medium">
            <a
              href="#about"
              className="hover:text-[#c8a46b] transition"
            >
              회사소개
            </a>

            <a
              href="#business"
              className="hover:text-[#c8a46b] transition"
            >
              사업분야
            </a>

            <a
              href="#contact"
              className="hover:text-[#c8a46b] transition"
            >
              시공문의
            </a>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex flex-col gap-1 z-50"
          >
            <span className="w-7 h-[2px] bg-white"></span>
            <span className="w-7 h-[2px] bg-white"></span>
            <span className="w-7 h-[2px] bg-white"></span>
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#111] z-50 transition-transform duration-500 ${
          menuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-white text-xl font-bold">
            MENU
          </h2>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-3xl"
          >
            ×
          </button>
        </div>

        <div className="flex flex-col p-8 gap-8 text-white text-lg font-medium">
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#c8a46b] transition"
          >
            회사소개
          </a>

          <a
            href="#business"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#c8a46b] transition"
          >
            사업분야
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#c8a46b] transition"
          >
            시공문의
          </a>

          <a
            href="tel:01022738020"
            className="mt-8 bg-[#c8a46b] text-black text-center py-4 rounded-2xl font-bold"
          >
            전화문의
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
            alt="construction"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/65" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 h-full flex flex-col justify-center">
          <p className="text-[#c8a46b] tracking-[4px] md:tracking-[6px] text-xs md:text-sm mb-5 md:mb-6 font-semibold">
            TRUST · SAFETY · RESPONSIBILITY
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
            도시가스 · 상하수도
            <br />
            전문 책임 시공
          </h2>

          <p className="text-gray-200 text-base md:text-xl mt-8 md:mt-10 leading-8 md:leading-10 max-w-3xl">
            재경건설은 도시가스, 상·하수도,
            부대토목, 아스콘 포장 분야의
            풍부한 현장 경험을 기반으로
            안전하고 신뢰할 수 있는 시공을 제공합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-10 md:mt-14">
            <a
              href="#about"
              className="bg-[#c8a46b] hover:opacity-90 text-center text-black font-bold px-6 md:px-8 py-4 rounded-full transition"
            >
              회사소개 보기
            </a>

            <a
              href="#contact"
              className="border border-white text-center text-white hover:bg-white hover:text-black px-6 md:px-8 py-4 rounded-full transition"
            >
              시공 문의하기
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-24 md:py-40 bg-white"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-24 items-center">
          <div>
            <p className="text-[#c8a46b] font-semibold tracking-[4px] mb-5 text-sm">
              ABOUT COMPANY
            </p>

            <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-8 md:mb-10 text-[#111]">
              신뢰를 만드는
              <br />
              책임 시공
            </h3>

            <p className="text-gray-700 leading-8 md:leading-9 text-base md:text-lg">
              재경건설은 도시가스, 상·하수도,
              부대토목 및 아스콘 포장 공사를
              전문적으로 수행하고 있습니다.
              <br /><br />
              현장 중심의 정확한 시공과
              철저한 안전 관리를 바탕으로
              믿고 맡길 수 있는 결과를 제공합니다.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
              alt="construction"
              className="rounded-[30px] md:rounded-[40px] shadow-2xl h-[400px] md:h-[650px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Business */}
      <section
        id="business"
        className="py-24 md:py-40 bg-[#111] text-white"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-16 md:mb-24">
            <p className="text-[#c8a46b] tracking-[4px] font-semibold mb-5 text-sm">
              BUSINESS AREA
            </p>

            <h3 className="text-3xl md:text-5xl font-bold leading-tight">
              주요 시공 분야
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">

            <div className="bg-white/5 border border-white/10 p-8 rounded-[30px]">
              <div className="text-[#c8a46b] text-5xl font-bold mb-6">
                01
              </div>

              <h4 className="text-3xl font-bold mb-5">
                도시가스 공사
              </h4>

              <p className="text-gray-300 leading-8">
                도시가스 배관 시공 및
                유지보수 작업을 안전하게 수행합니다.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-[30px]">
              <div className="text-[#c8a46b] text-5xl font-bold mb-6">
                02
              </div>

              <h4 className="text-3xl font-bold mb-5">
                상·하수도 공사
              </h4>

              <p className="text-gray-300 leading-8">
                상수도 및 하수도 배관 공사를
                정확하고 안전하게 시공합니다.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-[30px]">
              <div className="text-[#c8a46b] text-5xl font-bold mb-6">
                03
              </div>

              <h4 className="text-3xl font-bold mb-5">
                부대토목 공사
              </h4>

              <p className="text-gray-300 leading-8">
                기반 시설 및 현장 토목 공사를
                책임감 있게 진행합니다.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-[30px]">
              <div className="text-[#c8a46b] text-5xl font-bold mb-6">
                04
              </div>

              <h4 className="text-3xl font-bold mb-5">
                아스콘 포장
              </h4>

              <p className="text-gray-300 leading-8">
                도로 및 현장 아스콘 포장을
                깔끔하고 견고하게 시공합니다.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}