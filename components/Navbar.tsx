"use client";

import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="px-6 md:px-12 py-6 flex items-center justify-between">

      <button
        onClick={() => setOpen(true)}
        className="md:hidden text-3xl order-1"
      >
        ☰
      </button>

      <h2 className="text-3xl font-semibold order-2 md:order-1">
        Lilac Template
      </h2>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 order-2">
        <li className="cursor-pointer hover:text-[var(--primary)] text-xl">Blog</li>
        <li className="cursor-pointer hover:text-[var(--primary)] text-xl">Contact</li>
      </ul>

      {/* Mobile Fullscreen Menu */}
      {open && (
        <div className="fixed inset-0 bg-[var(--background)] flex flex-col items-center justify-center gap-8 z-50 transition-all">

          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 left-6 text-3xl"
          >
            ✕
          </button>

          <a onClick={() => setOpen(false)} className="text-3xl">Blog</a>
          <a onClick={() => setOpen(false)} className="text-3xl">Contact</a>

        </div>
      )}

    </nav>
  );
};

export default Navbar;
