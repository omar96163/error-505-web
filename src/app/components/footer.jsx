import React from "react";

function Footer() {
  return (
    <div className="relative w-full min-h-[251px] flex items-center justify-evenly flex-wrap lg:gap-0 gap-25 ">
      <div
        className="absolute inset-0 -z-10 blur-2xl opacity-60
        bg-linear-to-r from-[#B8D8FF] from-25% via-[#CC4699] via-50% via-[#1BC6BD] via-75% to-[#673E7D] to-100%"
      />
      <img
        src="/footerbg.png"
        alt="Footer Logo"
        className="w-[120px] h-[160px]"
      />
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-bold tracking-wide">Download App</h3>
        <div className="flex flex-col gap-2">
          <a href="#" className="hover:opacity-80 transition-opacity">
            <img
              src="/22.png"
              alt="Get it on Google Play"
              className="w-[180px] h-[120px]"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold tracking-wide uppercase text-gray-300">
          Menu Pages
        </h3>
        <ul className="flex flex-col gap-1 text-sm text-gray-400">
          <li>
            <a href="#" className="hover:text-white transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition-colors">
              FAQ
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition-colors">
              Blog
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold tracking-wide uppercase text-gray-300">
          Menu Pages
        </h3>
        <ul className="flex flex-col gap-1 text-sm text-gray-400">
          <li>
            <a href="#" className="hover:text-white transition-colors">
              Subscription
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition-colors">
              Refund Policy
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-bold tracking-wide uppercase text-gray-300">
          Contact Us
        </h3>
        <div className="flex flex-col gap-2 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span>📞</span> <span>+974 50570808</span>
          </div>
          <div className="flex items-center gap-2">
            <span>@</span>
            <span>info@505error.com</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-2 mt-2 text-white">
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
              className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded bg-zinc-900/50 hover:bg-zinc-800 transition-colors text-xs"
            >
              <span className="uppercase text-[10px]">{platform[0]}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
