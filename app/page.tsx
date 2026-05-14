"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999] transition-all duration-500">

        <img
          src="/jk-logo.png"
          alt="JK Logo"
          className="w-36 md:w-44 object-contain animate-pulse"
        />

      </div>
    );
  }

  return (
    <main className="bg-[#0b0b0b] text-white overflow-hidden">

      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md py-4 border-b border-white/10"
            : "bg-gradient-to-b from-black/90 to-transparent py-6"
        }`}
      >

        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">

          {/* LOGO */}
          <a
            href="#top"
            className="flex items-center gap-3"
          >

            <img
              src="/jk-logo.png"
              alt="JK Logo"
              className="w-12 h-12 object-contain"
            />

            <div>

              <h1 className="text-2xl font-bold tracking-wide">
                재경건설
              </h1>

              <p className="text-[11px] tracking-[3px] text-gray-400 mt-1">
                JAEGYEONG CONSTRUCTION
              </p>

            </div>

          </a>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-10 text-sm font-medium text-gray-200">

            <a href="#about" className="hover:text-[#d1a15a] transition">
              회사소개
            </a>

            <a href="#business" className="hover:text-[#d1a15a] transition">
              주요사업
            </a>

            <a href="#contact" className="hover:text-[#d1a15a] transition">
              문의하기
            </a>

          </nav>

          {/* MOBILE BTN */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden flex flex-col gap-1"
          >

            <span className="w-7 h-[2px] bg-white"></span>
            <span className="w-7 h-[2px] bg-white"></span>
            <span className="w-7 h-[2px] bg-white"></span>

          </button>

        </div>

      </header>

      {/* MOBILE OVERLAY */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/60 z-40 transition-all duration-300 ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#111] z-50 transition-all duration-500 ${
          menuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        <div className="flex items-center justify-between p-6 border-b border-white/10">

          <h2 className="text-xl font-bold">
            MENU
          </h2>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-3xl"
          >
            ×
          </button>

        </div>

        <div className="flex flex-col p-8 gap-8 text-lg">

          <a href="#about" onClick={() => setMenuOpen(false)}>
            회사소개
          </a>

          <a href="#business" onClick={() => setMenuOpen(false)}>
            주요사업
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            문의하기
          </a>

          <a
            href="tel:01027738020"
            className="mt-8 bg-[#d1a15a] text-black text-center py-4 rounded-2xl font-bold"
          >
            전화문의
          </a>

        </div>

      </div>

      {/* HERO */}
      <section
        id="top"
        className="relative min-h-screen flex items-center"
      >

        {/* BG */}
        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop"
            alt="construction"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/70" />

        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full">

          <div className="max-w-3xl">

            <p className="text-[#d1a15a] tracking-[5px] mb-6 text-sm font-semibold">
              GAS · WATER · CIVIL · ASPHALT
            </p>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight">

              기술과 신뢰로
              <br />

              <span className="text-[#d1a15a]">
                가치를 짓는 기업
              </span>

            </h2>

            <p className="mt-10 text-gray-300 text-lg md:text-xl leading-9">
              도시가스, 상·하수도,
              부대토목, 아스콘 포장까지
              안전한 시공과 최고의 품질로
              책임 있게 수행합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-12">

              <a
                href="#business"
                className="bg-[#d1a15a] hover:opacity-90 text-black px-8 py-5 rounded-xl font-bold text-center transition"
              >
                사업분야 보기
              </a>

              <a
                href="#contact"
                className="border border-white hover:bg-white hover:text-black px-8 py-5 rounded-xl font-bold text-center transition"
              >
                문의하기
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* BUSINESS */}
      <section
        id="business"
        className="py-28 md:py-40 bg-[#0f0f0f]"
      >

        <div className="max-w-7xl mx-auto px-5 md:px-8">

          <div className="text-center mb-20">

            <p className="text-[#d1a15a] tracking-[4px] text-sm font-semibold mb-5">
              BUSINESS AREA
            </p>

            <h3 className="text-4xl md:text-5xl font-bold">
              주요 시공 분야
            </h3>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">

            {[
              {
                num: "01",
                title: "도시가스 공사",
                desc: "도시가스 배관 시공 및 유지보수 작업을 안전 기준에 맞춰 수행합니다.",
              },
              {
                num: "02",
                title: "상·하수도 공사",
                desc: "상수도 및 하수도 배관 공사를 정확하고 안전하게 시공합니다.",
              },
              {
                num: "03",
                title: "부대토목 공사",
                desc: "기반 시설 조성 및 현장 여건에 맞춘 토목 공사를 진행합니다.",
              },
              {
                num: "04",
                title: "아스콘 포장",
                desc: "도로 및 현장 아스콘 포장 공사를 견고하고 깔끔하게 시공합니다.",
              },
            ].map((item) => (

              <div
                key={item.num}
                className="bg-white/5 border border-white/10 rounded-[28px] p-8 hover:-translate-y-2 transition duration-300"
              >

                <div className="text-[#d1a15a] text-5xl font-bold mb-8">
                  {item.num}
                </div>

                <h4 className="text-3xl font-bold mb-5">
                  {item.title}
                </h4>

                <p className="text-gray-300 leading-8">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-28 md:py-40 bg-black"
      >

        <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>

            <img
              src="https://images.unsplash.com/photo-1599707254554-027aeb4deacd?q=80&w=1974&auto=format&fit=crop"
              alt="construction"
              className="rounded-[35px] w-full h-[500px] object-cover"
            />

          </div>

          <div>

            <p className="text-[#d1a15a] tracking-[4px] text-sm font-semibold mb-5">
              ABOUT US
            </p>

            <h3 className="text-5xl font-bold leading-tight mb-10">
              (주)재경건설
            </h3>

            <p className="text-gray-300 text-lg leading-10">
              오랜 경험과 노하우를 바탕으로
              안전과 품질을 최우선으로 하는
              시공을 약속드립니다.
              <br /><br />
              고객 만족을 최우선으로 생각하며
              믿고 맡길 수 있는
              건설 파트너가 되겠습니다.
            </p>

            <a
              href="#contact"
              className="inline-block mt-12 bg-[#d1a15a] text-black px-8 py-5 rounded-xl font-bold"
            >
              문의하기
            </a>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-28 md:py-40 bg-[#0f0f0f]"
      >

        <div className="max-w-5xl mx-auto px-5 md:px-8">

          <div className="text-center mb-20">

            <p className="text-[#d1a15a] tracking-[4px] text-sm font-semibold mb-5">
              CONTACT
            </p>

            <h3 className="text-4xl md:text-5xl font-bold">
              시공 문의
            </h3>

          </div>

          <div className="bg-white rounded-[35px] p-8 md:p-14 text-black shadow-2xl">

            <form
              action="https://formsubmit.co/joliecute@naver.com"
              method="POST"
              className="space-y-6"
            >

              <input
                type="hidden"
                name="_subject"
                value="재경건설 시공문의"
              />

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="text"
                  name="업체명"
                  required
                  placeholder="업체명"
                  className="border border-gray-300 rounded-2xl px-5 py-4 outline-none"
                />

                <input
                  type="tel"
                  name="연락처"
                  required
                  placeholder="휴대폰번호"
                  className="border border-gray-300 rounded-2xl px-5 py-4 outline-none"
                />

              </div>

              <input
                type="email"
                name="이메일"
                placeholder="이메일"
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none"
              />

              <textarea
                rows={6}
                name="문의내용"
                placeholder="문의내용을 입력해주세요"
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none resize-none"
              />

              <div className="flex flex-col md:flex-row gap-4">

                <button
                  type="submit"
                  className="w-full bg-black hover:bg-[#d1a15a] hover:text-black text-white py-5 rounded-2xl font-bold transition"
                >
                  문의하기
                </button>

                <a
                  href="tel:01027738020"
                  className="w-full border-2 border-black hover:bg-black hover:text-white py-5 rounded-2xl font-bold text-center transition"
                >
                  전화문의
                </a>

              </div>

            </form>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 py-12">

        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="flex items-center gap-4">

            <img
              src="/jk-logo.png"
              alt="JK Logo"
              className="w-12 h-12 object-contain"
            />

            <div>

              <h4 className="text-xl font-bold">
                재경건설
              </h4>

              <p className="text-sm text-gray-400 mt-1">
                도시가스 · 상하수도 · 부대토목 · 아스콘포장
              </p>

            </div>

          </div>

          <div className="text-sm text-gray-500 text-center md:text-right leading-7">

            TEL. 010-2773-8020
            <br />

            © 2026 JAEGYEONG CONSTRUCTION.

          </div>

        </div>

      </footer>

    </main>
  );
}