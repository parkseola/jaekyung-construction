"use client";

import { useEffect, useState } from "react";

export default function HomePage() {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert(
      "문의신청이 완료되었습니다.\n확인 후 연락드리겠습니다."
    );
  };

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
            className="cursor-pointer z-50"
          >

            <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide hover:text-[#c8a46b] transition">
              재경건설
            </h1>

            <p className="text-[10px] md:text-xs text-gray-300 mt-1 tracking-[2px] md:tracking-[3px]">
              JAEGYEONG CONSTRUCTION
            </p>

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

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Side Menu */}
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
            믿고 맡길 수 있는
            <br />
            책임 시공
          </h2>

          <p className="text-gray-200 text-base md:text-xl mt-8 md:mt-10 leading-8 md:leading-10 max-w-3xl">
            재경건설은 상수도 공사 및 토목 · 일반건설 분야에서
            다년간의 현장 경험과 철저한 시공 관리로
            안전하고 신뢰할 수 있는 공사를 수행합니다.
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
    </main>
  );
}