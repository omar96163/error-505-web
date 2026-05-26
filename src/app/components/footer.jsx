import React from "react";

function Footer() {
  return (
    <footer className="relative py-10 px-6 sm:px-12 md:px-16 ">
      {/* الخلفية المضيئة الملونة خلف الفوتر */}
      <div
        className="absolute inset-0 -z-10 blur-2xl opacity-60
        bg-linear-to-r from-[#B8D8FF] from-25% via-[#CC4699] via-50% via-[#1BC6BD] via-75% to-[#673E7D] to-100%"
      />

      {/* حاوية العناصر: Grid في الموبايل و Flex في الشاشات الكبيرة */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:flex lg:items-start lg:justify-between gap-10">
        {/* قسم اللوجو */}
        <div className="flex items-center justify-center sm:justify-start lg:w-auto">
          <img
            src="/footerbg.png"
            alt="Footer Logo"
            className="w-[120px] h-auto object-contain"
          />
        </div>

        {/* قسم تحميل التطبيق */}
        <div className="flex flex-col gap-3 text-center sm:text-left">
          <h3 className="text-white text-base font-bold tracking-wide uppercase">
            Download App
          </h3>
          <div className="flex justify-center sm:justify-start">
            <a
              href="#"
              className="hover:scale-105 transition-transform duration-200 inline-block"
            >
              <img
                src="/22.png"
                alt="Get it on Google Play"
                className="w-[160px] h-auto object-contain" // 👈 حلينا مشكلة مطة الصورة بـ h-auto
              />
            </a>
          </div>
        </div>

        {/* القائمة الأولى */}
        <div className="flex flex-col gap-3 text-center sm:text-left">
          <h3 className="text-sm font-bold tracking-widest uppercase text-gray-400">
            Menu Pages
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-[#CC4699] transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#CC4699] transition-colors">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#CC4699] transition-colors">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* القائمة الثانية */}
        <div className="flex flex-col gap-3 text-center sm:text-left">
          <h3 className="text-sm font-bold tracking-widest uppercase text-gray-400">
            Links
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-[#CC4699] transition-colors">
                Subscription
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#CC4699] transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#CC4699] transition-colors">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#CC4699] transition-colors">
                Refund Policy
              </a>
            </li>
          </ul>
        </div>

        {/* قسم التواصل والسوشيال ميديا */}
        <div className="flex flex-col gap-4 text-center sm:text-left items-center sm:items-start">
          <h3 className="text-sm font-bold tracking-widest uppercase text-gray-400">
            Contact Us
          </h3>
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <a
              href="tel:+97450570808"
              className="flex items-center gap-2 hover:text-white transition-colors justify-center sm:justify-start"
            >
              <span>📞</span> <span className="dir-ltr">+974 50570808</span>
            </a>
            <a
              href="mailto:info@505error.com"
              className="flex items-center gap-2 hover:text-white transition-colors justify-center sm:justify-start"
            >
              <span>✉️</span> <span>info@505error.com</span>
            </a>
          </div>

          {/* أيقونات السوشيال ميديا */}
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start mt-1">
            {[
              "facebook",
              "instagram",
              "twitter",
              "tiktok",
              "linkedin",
              "youtube",
            ].map((platform) => (
              <a
                key={platform}
                href="#"
                className="w-8 h-8 flex items-center justify-center border border-white/10 rounded-lg bg-white/5 hover:bg-[#CC4699] hover:border-[#CC4699] hover:text-white text-gray-400 transition-all duration-300 text-xs uppercase font-bold text-[10px]"
                title={platform}
              >
                {platform[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
