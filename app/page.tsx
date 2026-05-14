"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* 로딩 */
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  /* 스크롤 */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* 로딩화면 */
  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center z-[9999]">

        <div className="flex flex-col items-center">

          <img
            src="/jk-logo.png"
            alt="JK Logo"
            className="w-44 md:w-56 object-contain animate-pulse drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          />

          <p className="text-white tracking-[8px] text-xs md:text-sm mt-8">
            JAEGYEONG CONSTRUCTION
          </p>

        </div>

      </div>
    );
  }

  return (
    <main
      id="top"
      className="min-h-screen bg-[#f5f5f3] text-gray-800 scroll-smooth"
    >

      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/55 backdrop-blur-md py-3"
            : "bg-gradient-to-b from-black/85 to-transparent py-5"
        }`}
      >

        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">

          {/* 로고 */}
          <a
            href="#top"
            className="flex items-center gap-4 cursor-pointer z-50"
          >

            <img
              src="/jk-logo.png"
              alt="JK Logo"
              className="w-14 h-14 md:w-16 md:h-16 object-contain"
            />

            <div>

              <h1 className="text-2xl md:text-3xl font-bold text-white leading-none">
                재경건설
              </h1>

              <p className="text-[11px] md:text-xs text-gray-300 mt-2 tracking-[4px]">
                JAEGYEONG CONSTRUCTION
              </p>

            </div>

          </a>

          {/* PC 메뉴 */}
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

          {/* 햄버거 */}
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

      {/* 모바일 배경 */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* 모바일 메뉴 */}
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
            className="hover:text-[#c8a46b]"
          >
            회사소개
          </a>

          <a
            href="#business"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#c8a46b]"
          >
            사업분야
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#c8a46b]"
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

      {/* HERO */}
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

          <p className="text-[#c8a46b] tracking-[5px] text-sm mb-6 font-semibold">
            GAS · WATER · CIVIL · ASPHALT
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

          <div className="flex flex-col sm:flex-row gap-4 mt-12">

            <a
              href="#about"
              className="bg-[#c8a46b] hover:opacity-90 text-black px-8 py-5 rounded-full font-bold text-center transition"
            >
              회사소개 보기
            </a>

            <a
              href="#contact"
              className="border border-white text-white hover:bg-white hover:text-black px-8 py-5 rounded-full font-bold text-center transition"
            >
              시공 문의하기
            </a>

          </div>

        </div>

      </section>

      {/* ABOUT */}
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
              현장을 이해하는
              <br />
              건설회사
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

      {/* BUSINESS */}
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
                className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-[25px] md:rounded-[30px]"
              >

                <div className="text-[#c8a46b] text-4xl md:text-5xl font-bold mb-6">
                  {item.num}
                </div>

                <h4 className="text-2xl md:text-3xl font-bold mb-5">
                  {item.title}
                </h4>

                <p className="text-gray-300 leading-7 md:leading-8 text-sm md:text-base">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 md:py-40 bg-[#f8f8f6]"
      >

        <div className="max-w-5xl mx-auto px-5 md:px-8">

          <div className="text-center mb-16 md:mb-24">

            <p className="text-[#c8a46b] tracking-[4px] font-semibold mb-5 text-sm">
              CONTACT
            </p>

            <h3 className="text-3xl md:text-5xl font-bold leading-tight text-[#111]">
              시공 문의
            </h3>

          </div>

          <div className="bg-white rounded-[30px] md:rounded-[40px] shadow-2xl p-6 md:p-14">

            <form
              action="https://formsubmit.co/joliecute@naver.com"
              method="POST"
              className="space-y-6 md:space-y-8"
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

              <div>

                <label className="block text-sm font-semibold mb-3 text-[#111]">
                  이름(업체명) *
                </label>

                <input
                  type="text"
                  name="업체명"
                  required
                  placeholder="업체명 또는 성함"
                  className="w-full border border-gray-300 rounded-2xl px-4 md:px-5 py-4 outline-none focus:border-[#c8a46b]"
                />

              </div>

              <div>

                <label className="block text-sm font-semibold mb-3 text-[#111]">
                  휴대폰번호 *
                </label>

                <input
                  type="tel"
                  name="휴대폰번호"
                  required
                  placeholder="010-0000-0000"
                  className="w-full border border-gray-300 rounded-2xl px-4 md:px-5 py-4 outline-none focus:border-[#c8a46b]"
                />

              </div>

              <div>

                <label className="block text-sm font-semibold mb-3 text-[#111]">
                  문의내용
                </label>

                <textarea
                  rows={6}
                  name="문의내용"
                  placeholder="문의하실 내용을 입력해주세요"
                  className="w-full border border-gray-300 rounded-2xl px-4 md:px-5 py-4 outline-none focus:border-[#c8a46b] resize-none"
                />

              </div>

              <div className="pt-2 md:pt-4 flex flex-col sm:flex-row gap-4">

                <button
                  type="submit"
                  className="w-full bg-[#111] hover:bg-[#c8a46b] hover:text-black text-white py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg transition duration-300"
                >
                  문의하기
                </button>

                <a
                  href="tel:01022738020"
                  className="w-full border-2 border-[#111] text-[#111] hover:bg-[#111] hover:text-white py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg transition duration-300 flex items-center justify-center"
                >
                  전화문의
                </a>

              </div>

            </form>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-400 py-14 md:py-20">

        <div className="max-w-7xl mx-auto px-5 md:px-8">

          <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
            재경건설
          </h4>

          <p className="leading-7 md:leading-8 text-sm md:text-base">
            도시가스 · 상하수도 · 부대토목 · 아스콘포장
            <br />
            안전 · 품질 · 책임 시공을 약속드립니다.
          </p>

        </div>

      </footer>

    </main>
  );
}