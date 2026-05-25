"use client";

import React from "react";
import Footer from "./footer";

// ─── Data ───────────────────────────────────────────────
const exclusiveContent = [
  {
    id: 1,
    title: "مصاصات",
    creator: "CREATOR NAME",
    cover: "/2.png",
    ch: "Ch.07",
    type: "THE STYLE",
    genre: "ACTION",
  },
  {
    id: 2,
    title: "ROO",
    creator: "CREATOR NAME",
    cover: "/4.png",
    ch: "Ch.07",
    type: "THE STYLE",
    genre: "ACTION",
  },
  {
    id: 3,
    title: "Qatari Culture",
    creator: "CREATOR NAME",
    cover: "/3.png",
    ch: "Ch.07",
    type: "THE STYLE",
    genre: "ACTION",
  },
  {
    id: 4,
    title: "مصاصات",
    creator: "CREATOR NAME",
    cover: "/2.png",
    ch: "Ch.07",
    type: "THE STYLE",
    genre: "ACTION",
  },
];

const trending = [
  {
    id: 1,
    title: "الشتاء العظيم",
    cover: "/5.png",
    ch: "Ch.02",
    type: "THE STYLE",
    genre: "ACTION",
  },
  {
    id: 2,
    title: "شعلة نار",
    cover: "/6.png",
    ch: "Ch.02",
    type: "THE STYLE",
    genre: "ACTION",
  },
  {
    id: 3,
    title: "شقة مسكونه",
    cover: "/7.png",
    ch: "Ch.02",
    type: "THE STYLE",
    genre: "ACTION",
  },
  {
    id: 4,
    title: "نبض",
    cover: "/8.png",
    ch: "Ch.02",
    type: "THE STYLE",
    genre: "ACTION",
  },
  {
    id: 5,
    title: "قضية سمرقند",
    cover: "/9.png",
    ch: "Ch.02",
    type: "THE STYLE",
    genre: "ACTION",
  },
];

const justDropped = [
  {
    id: 1,
    title: "COVER",
    cover: "/20.png",
    ch: "Ch.02",
    read: "Read More >",
  },
  {
    id: 2,
    title: "FUTURE",
    cover: "/11.png",
    ch: "Ch.02",
    read: "Read More >",
  },
  {
    id: 3,
    title: "COVER",
    cover: "/19.png",
    ch: "Ch.02",
    read: "Read More >",
  },
  {
    id: 4,
    title: "COVER",
    cover: "/12.png",
    ch: "Ch.02",
    read: "Read More >",
  },
  {
    id: 5,
    title: "COVER",
    cover: "/8.png",
    ch: "Ch.02",
    read: "Read More >",
  },
];

const topPicks = [
  { id: 1, title: "COVER", cover: "/1.png", ch: "Ch.02" },
  { id: 2, title: "COVER", cover: "/10.png", ch: "Ch.02" },
  { id: 3, title: "COVER", cover: "/21.png", ch: "Ch.02" },
  { id: 4, title: "COVER", cover: "/15.png", ch: "Ch.02" },
  { id: 5, title: "COVER", cover: "/14.png", ch: "Ch.02" },
];

const blogs = [
  {
    id: 1,
    title: "BLOG NAME",
    cover: "/16.png",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 2,
    title: "اللغة العربية 18 ديسمبر",
    cover: "/13.png",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 3,
    title: "ملخص عام",
    cover: "/18.png",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
];

// ─── Sub-components ──────────────────────────────────────

// Section Header
const SectionHeader = ({ title, href = "#" }) => (
  <div className="flex items-center justify-between mb-4 px-2">
    <div className="flex-1 h-[1.5px] bg-linear-to-l from-white via-transparent to-transparent" />
    <div className="relative mx-4">
      <div className="border-2 border-white rounded px-6 py-1 bg-black/30 shadow-[0_0_10px_0_rgba(255,255,255,1)]">
        <span className="text-white font-black text-xs tracking-widest uppercase">
          {title}
        </span>
      </div>
    </div>
    <div className="flex-1 h-[1.5px] bg-linear-to-r from-white via-transparent to-transparent" />
    <a
      href={href}
      className="ml-4 text-white text-xs font-bold whitespace-nowrap hover:underline"
    >
      See More &gt;
    </a>
  </div>
);

// Small Manga Card (Trending / Just Dropped / Top Picks)
const MangaCard = ({ item, showRead = false }) => (
  <div className="w-[263px] h-[406px] hover:translate-y-1.5 transition-all duration-300">
    <div className="relative rounded-lg overflow-hidden border border-white/20 bg-gray-900 shadow-[0_0_20px_0_rgba(255,255,255,0.25)]">
      <img
        src={item.cover}
        alt={item.title}
        className="w-[263px] h-[406px] object-cover"
        onError={(e) => {
          e.target.style.background = "#1a1a2e";
          e.target.style.display = "none";
        }}
      />
      <div className="absolute bottom-2 left-2">
        <span className="bg-[#CB4699] text-white text-[15px] font-black px-1.5 py-0.5 rounded">
          {item.ch}
        </span>
      </div>
    </div>
    <div className="mt-2.5 flex items-center justify-around">
      <p className="text-white text-[13px] font-bold truncate">
        {item.type || "THE STYLE"}
      </p>
      <p className="text-[#CB4699] text-[12px] font-bold">
        {item.genre || "ACTION"}
      </p>
      {showRead && (
        <a
          href="#"
          className="text-[#CB4699] text-[9px] font-bold hover:underline"
        >
          {item.read}
        </a>
      )}
    </div>
  </div>
);

// Horizontal scrollable row
const CardRow = ({ items, showRead = false }) => (
  <div className="flex items-center justify-center flex-wrap gap-5 mb-16">
    {items.map((item) => (
      <div key={item.id}>
        <MangaCard item={item} showRead={showRead} />
      </div>
    ))}
  </div>
);

// Exclusive Content Card
const ExclusiveCard = ({ item }) => (
  <div
    className={`relative rounded-lg overflow-hidden border border-white/20 bg-gray-900 transition-all duration-300 hover:translate-y-1.5 hover:shadow-[0_0_20px_0_rgba(255,255,255,0.25)]`}
  >
    <div className="relative">
      <img
        src={item.cover}
        alt={item.title}
        className="w-[337px] h-[488px] object-cover"
        onError={(e) => {
          e.target.style.background = "#1a1a2e";
          e.target.style.display = "none";
        }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="text-white font-black text-sm tracking-widest text-[20px]">
          {item.title}
        </p>
        <p className="text-gray-400 text-[15px]">{item.creator}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="bg-[#CB4699] text-white text-[15px] font-black px-2 py-0.5 rounded">
            {item.ch}
          </span>
          <span className="text-gray-300 text-[10px]">{item.type}</span>
        </div>
      </div>
    </div>
  </div>
);

// Blog Card
const BlogCard = ({ item }) => (
  <div className="w-[451px] bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-[#CB4699]/50 transition-colors">
    <img
      src={item.cover}
      alt={item.title}
      className="w-full h-[270px] object-cover"
      onError={(e) => {
        e.target.style.display = "none";
      }}
    />
    <div className="p-3">
      <p className="text-[#CB4699] font-black text-xs tracking-widest uppercase mb-1">
        {item.title}
      </p>
      <p className="text-gray-400 text-[10px] line-clamp-3 leading-relaxed">
        {item.excerpt}
      </p>
      <a
        href="#"
        className="text-[#CB4699] text-[10px] font-bold mt-2 inline-block hover:underline"
      >
        Read More &gt;
      </a>
    </div>
  </div>
);

// ─── Main Component ──────────────────────────────────────
const HomePage = () => {
  return (
    <div className="relative w-full font-sans min-h-screen">
      {/* Background */}
      <img
        src="/mainbg.png"
        alt="main Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Content */}
      <div className="relative z-10 w-full py-6 space-y-10">
        {/* ── Exclusive Content ── */}
        <section className="px-4">
          <SectionHeader title="Exclusive Content" />
          <div className="flex items-center justify-center flex-wrap gap-5">
            {exclusiveContent.map((item) => (
              <ExclusiveCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* ── Trending ── */}
        <section className="px-4">
          <SectionHeader title="Trending" />
          <CardRow items={trending} />
        </section>

        {/* ── Just Dropped ── */}
        <section className="px-4">
          <SectionHeader title="Just Dropped" />
          <CardRow items={justDropped} showRead />
        </section>

        {/* ── Top Picks ── */}
        <section className="px-4">
          <SectionHeader title="Top Picks" />
          <CardRow items={topPicks} />
        </section>

        {/* ── Blogs ── */}
        <section className="px-4 mb-44">
          <SectionHeader title="Blogs" />
          <div className="flex items-center justify-center flex-wrap gap-5">
            {blogs.map((item) => (
              <BlogCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* ── Footer ── */}
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
