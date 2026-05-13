"use client";

export default function HomePage() {

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
      <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">

        <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 md:py-5 flex items-center justify-between">

          {/* Logo */}
          <a href="#top" className="cursor-pointer">

            <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide hover:text-[#c8a46b] transition">
              재경건설
            </h1>

            <p className="text-[10px] md:text-xs text-gray-300 mt-1 tracking-[2px] md:tracking-[3px]">
              JAEGYEONG CONSTRUCTION
            </p>

          </a>

          {/* Navigation */}
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

        </div>
      </header>

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
            <br /><br />
            작은 공사부터 현장 관리까지
            끝까지 책임지는 시공을 약속드립니다.
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
              재경건설은 상수도 배관 공사 및 유지보수,
              토목 공사, 일반 건설 작업 등
              다양한 현장을 직접 수행하고 있습니다.
              <br /><br />
              보여주기식 공사가 아닌
              기본과 안전을 우선으로 생각하며,
              꼼꼼한 시공과 책임감 있는 관리로
              고객의 신뢰를 쌓아가고 있습니다.
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

      {/* Services */}
      <section
        id="business"
        className="py-24 md:py-40 bg-[#111] text-white border-t border-white/10"
      >

        <div className="max-w-7xl mx-auto px-5 md:px-8">

          <div className="text-center mb-16 md:mb-24">

            <p className="text-[#c8a46b] tracking-[4px] font-semibold mb-5 text-sm">
              BUSINESS AREA
            </p>

            <h3 className="text-3xl md:text-5xl font-bold leading-tight">
              전문 시공 분야
            </h3>

            <p className="text-gray-400 mt-6 md:mt-8 text-base md:text-lg leading-8">
              현장 경험을 바탕으로
              정확하고 안전한 시공을 제공합니다.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

            <div className="bg-white/5 border border-white/10 backdrop-blur-md p-8 md:p-10 rounded-[25px] md:rounded-[30px] hover:-translate-y-2 transition duration-300">

              <div className="text-[#c8a46b] text-4xl md:text-5xl font-bold mb-6 md:mb-8">
                01
              </div>

              <h4 className="text-2xl md:text-3xl font-bold mb-4 md:mb-5">
                상수도 공사
              </h4>

              <p className="text-gray-300 leading-7 md:leading-8 text-sm md:text-base">
                상수도 배관 설치 및 유지보수 작업을
                체계적이고 안전하게 수행합니다.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-md p-8 md:p-10 rounded-[25px] md:rounded-[30px] hover:-translate-y-2 transition duration-300">

              <div className="text-[#c8a46b] text-4xl md:text-5xl font-bold mb-6 md:mb-8">
                02
              </div>

              <h4 className="text-2xl md:text-3xl font-bold mb-4 md:mb-5">
                토목 공사
              </h4>

              <p className="text-gray-300 leading-7 md:leading-8 text-sm md:text-base">
                다양한 현장 경험과 노하우를 바탕으로
                책임감 있는 시공을 진행합니다.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-md p-8 md:p-10 rounded-[25px] md:rounded-[30px] hover:-translate-y-2 transition duration-300">

              <div className="text-[#c8a46b] text-4xl md:text-5xl font-bold mb-6 md:mb-8">
                03
              </div>

              <h4 className="text-2xl md:text-3xl font-bold mb-4 md:mb-5">
                일반 건설
              </h4>

              <p className="text-gray-300 leading-7 md:leading-8 text-sm md:text-base">
                꼼꼼한 현장 관리와 품질 중심 시공으로
                신뢰할 수 있는 결과를 제공합니다.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-24 md:py-40 bg-[#f8f8f6] border-t border-gray-200"
      >

        <div className="max-w-5xl mx-auto px-5 md:px-8">

          <div className="text-center mb-16 md:mb-24">

            <p className="text-[#c8a46b] tracking-[4px] font-semibold mb-5 text-sm">
              CONTACT
            </p>

            <h3 className="text-3xl md:text-5xl font-bold leading-tight text-[#111]">
              시공 문의
            </h3>

            <p className="text-gray-600 mt-6 md:mt-8 text-base md:text-lg leading-8">
              공사 관련 문의 내용을 남겨주시면
              빠르게 확인 후 연락드리겠습니다.
            </p>

          </div>

          <div className="bg-white rounded-[30px] md:rounded-[40px] shadow-2xl p-6 md:p-14">

            <form
              onSubmit={handleSubmit}
              className="space-y-6 md:space-y-8"
            >

              <div>

                <label className="block text-sm font-semibold mb-3 text-[#111]">
                  이름(업체명) <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  required
                  placeholder="업체명 또는 성함을 입력해주세요"
                  className="w-full border border-gray-300 rounded-2xl px-4 md:px-5 py-4 outline-none focus:border-[#c8a46b] transition"
                />

              </div>

              <div>

                <label className="block text-sm font-semibold mb-3 text-[#111]">
                  휴대폰번호 <span className="text-red-500">*</span>
                </label>

                <input
                  type="tel"
                  required
                  placeholder="010-0000-0000"
                  className="w-full border border-gray-300 rounded-2xl px-4 md:px-5 py-4 outline-none focus:border-[#c8a46b] transition"
                />

              </div>

              <div>

                <label className="block text-sm font-semibold mb-3 text-[#111]">
                  이메일
                </label>

                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full border border-gray-300 rounded-2xl px-4 md:px-5 py-4 outline-none focus:border-[#c8a46b] transition"
                />

              </div>

              <div>

                <label className="block text-sm font-semibold mb-3 text-[#111]">
                  지역
                </label>

                <input
                  type="text"
                  placeholder="예: 서울, 경기, 인천"
                  className="w-full border border-gray-300 rounded-2xl px-4 md:px-5 py-4 outline-none focus:border-[#c8a46b] transition"
                />

              </div>

              <div>

                <label className="block text-sm font-semibold mb-3 text-[#111]">
                  예상 견적
                </label>

                <input
                  type="text"
                  placeholder="예상 견적 금액을 입력해주세요"
                  className="w-full border border-gray-300 rounded-2xl px-4 md:px-5 py-4 outline-none focus:border-[#c8a46b] transition"
                />

              </div>

              <div>

                <label className="block text-sm font-semibold mb-5 text-[#111]">
                  원하는 시공
                </label>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 md:gap-6 text-gray-700">

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="service" />
                    상수도공사
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="service" />
                    토목
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="service" />
                    일반건설
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="service" />
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
                  placeholder="문의하실 내용을 입력해주세요"
                  className="w-full border border-gray-300 rounded-2xl px-4 md:px-5 py-4 outline-none focus:border-[#c8a46b] transition resize-none"
                />

              </div>

              <div className="pt-2 md:pt-4 flex flex-col sm:flex-row gap-4">

                {/* 문의하기 버튼 */}
                <button
                  type="submit"
                  className="w-full bg-[#111] hover:bg-[#c8a46b] hover:text-black text-white py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg transition duration-300"
                >
                  문의하기
                </button>

                {/* 전화문의 버튼 */}
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

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-14 md:py-20 border-t border-white/10">

        <div className="max-w-7xl mx-auto px-5 md:px-8">

          <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
            재경건설
          </h4>

          <p className="leading-7 md:leading-8 text-sm md:text-base">
            상수도 · 토목 · 일반건설 전문기업
            <br />
            안전 · 품질 · 책임 시공을 약속드립니다.
          </p>

        </div>

      </footer>

    </main>
  );
}