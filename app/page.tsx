"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main
      id="top"
      className="min-h-screen bg-[#f5f5f3] text-gray-800 scroll-smooth"
    >
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/50 backdrop-blur-md py-3"
            : "bg-gradient-to-b from-black/80 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
          <a href="#top" className="cursor-pointer z-50">
            <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide hover:text-[#c8a46b] transition">
              재경건설
            </h1>

            <p className="text-[10px] md:text-xs text-gray-300 mt-1 tracking-[2px] md:tracking-[3px]">
              JAEGYEONG CONSTRUCTION
            </p>
          </a>

          <nav className="hidden md:flex gap-8 text-sm text-gray-200 font-medium">
            <a href="#about" className="hover:text-[#c8a46b] transition">
              회사소개
            </a>

            <a href="#business" className="hover:text-[#c8a46b] transition">
              사업분야
            </a>

            <a href="#contact" className="hover:text-[#c8a46b] transition">
              시공문의
            </a>
          </nav>

          <button
            type="button"
            aria-label="메뉴 열기"
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex flex-col gap-1 z-50"
          >
            <span className="w-7 h-[2px] bg-white" />
            <span className="w-7 h-[2px] bg-white" />
            <span className="w-7 h-[2px] bg-white" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#111] z-50 transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-white text-xl font-bold">MENU</h2>

          <button
            type="button"
            aria-label="메뉴 닫기"
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
            href="tel:01027738020"
            className="mt-8 bg-[#c8a46b] text-black text-center py-4 rounded-2xl font-bold"
          >
            전화문의
          </a>
        </div>
      </div>

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
            재경건설은 상수도 공사 및 토목 · 일반건설 분야에서 다년간의 현장
            경험과 철저한 시공 관리로 안전하고 신뢰할 수 있는 공사를
            수행합니다.
            <br />
            <br />
            작은 공사부터 현장 관리까지 끝까지 책임지는 시공을 약속드립니다.
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

      <section
        id="about"
        className="py-24 md:py-40 bg-white border-t border-gray-100"
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
              재경건설은 상수도 배관 공사 및 유지보수, 토목 공사, 일반 건설
              작업 등 다양한 현장을 직접 수행하고 있습니다.
              <br />
              <br />
              보여주기식 공사가 아닌 기본과 안전을 우선으로 생각하며, 꼼꼼한
              시공과 책임감 있는 관리로 고객의 신뢰를 쌓아가고 있습니다.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
              alt="construction"
              className="rounded-[30px] md:rounded-[40px] shadow-2xl h-[400px] md:h-[650px] w-full object-cover"
            />

            <div className="absolute -bottom-6 md:-bottom-10 left-5 md:-left-10 bg-[#111] text-white p-6 md:p-10 rounded-[20px] md:rounded-[30px] shadow-2xl">
              <h4 className="text-3xl md:text-5xl font-bold text-[#c8a46b]">
                SAFE
              </h4>

              <p className="mt-2 md:mt-3 text-sm md:text-base text-gray-300 leading-6 md:leading-7">
                안전을 우선으로
                <br />
                책임 있게 시공합니다
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="business" className="py-24 md:py-40 bg-[#111] text-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-16 md:mb-24">
            <p className="text-[#c8a46b] tracking-[4px] font-semibold mb-5 text-sm">
              BUSINESS AREA
            </p>

            <h3 className="text-3xl md:text-5xl font-bold leading-tight">
              전문 시공 분야
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                num: "01",
                title: "상수도 공사",
                desc: "상수도 배관 설치 및 유지보수 작업을 안전하게 수행합니다.",
              },
              {
                num: "02",
                title: "토목 공사",
                desc: "다양한 현장 경험을 바탕으로 책임감 있는 시공을 진행합니다.",
              },
              {
                num: "03",
                title: "일반 건설",
                desc: "꼼꼼한 현장 관리와 품질 중심 시공을 제공합니다.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-[25px] md:rounded-[30px]"
              >
                <div className="text-[#c8a46b] text-4xl md:text-5xl font-bold mb-6">
                  {item.num}
                </div>

                <h4 className="text-2xl md:text-3xl font-bold mb-4">
                  {item.title}
                </h4>

                <p className="text-gray-300 leading-7">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 md:py-40 bg-[#f8f8f6]">
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
              <input type="hidden" name="_cc" value="ekstjrgus123@naver.com" />
              <input type="hidden" name="_subject" value="재경건설 시공문의" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

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
                  이메일
                </label>

                <input
                  type="email"
                  name="이메일"
                  placeholder="example@email.com"
                  className="w-full border border-gray-300 rounded-2xl px-4 md:px-5 py-4 outline-none focus:border-[#c8a46b]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-[#111]">
                  지역
                </label>

                <input
                  type="text"
                  name="지역"
                  placeholder="예: 서울, 경기"
                  className="w-full border border-gray-300 rounded-2xl px-4 md:px-5 py-4 outline-none focus:border-[#c8a46b]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-[#111]">
                  예상 견적
                </label>

                <input
                  type="text"
                  name="예상견적"
                  placeholder="예상 견적 입력"
                  className="w-full border border-gray-300 rounded-2xl px-4 md:px-5 py-4 outline-none focus:border-[#c8a46b]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-5 text-[#111]">
                  원하는 시공
                </label>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 md:gap-6 text-gray-700">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="시공종류" value="상수도공사" />
                    상수도공사
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="radio" name="시공종류" value="토목" />
                    토목
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="radio" name="시공종류" value="일반건설" />
                    일반건설
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="radio" name="시공종류" value="기타" />
                    기타
                  </label>
                </div>
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
                  href="tel:01027738020"
                  className="w-full border-2 border-[#111] text-[#111] hover:bg-[#111] hover:text-white py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg transition duration-300 flex items-center justify-center"
                >
                  전화문의
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-black text-gray-400 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
            재경건설
          </h4>

          <p className="leading-7 md:leading-8 text-sm md:text-base">
            상수도 · 토목 · 일반건설 전문기업
            <br />
            안전 · 품질 · 책임 시공을 약속드립니다.
          </p>

          <p className="mt-6 text-sm md:text-base">
            문의전화:{" "}
            <a href="tel:01027738020" className="text-white hover:text-[#c8a46b]">
              010-2773-8020
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
