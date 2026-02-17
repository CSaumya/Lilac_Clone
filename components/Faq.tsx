"use client";

import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    q: "Do you take insurance?",
    a: "Answer goes here."
  },
  {
    q: "What are your rates?",
    a: "Answer goes here."
  },
  {
    q: "Do you have any openings?",
    a: "Answer goes here."
  }
];

const Faq = () => {
const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[var(--background)] min-h-screen px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

      <div className="flex justify-center">
        <Image
          src="/faqs.jpg"
          alt="FAQ"
          width={380}
          height={500}
          className="fade-up rounded-t-full w-52 md:w-[380px]"
        />
      </div>

      <div className="fade-up">

        <h2 className="text-4xl md:text-6xl font-semibold mb-12">
          FAQs
        </h2>

        {faqs.map((item, i) => (
          <div key={i} className="border-t border-[var(--primary)]">

            <button
              onClick={() => setOpen(open === i ? null : i)}
className="w-full flex items-center justify-between py-6 text-xl md:text-3xl lg:text-5xl font-medium cursor-pointer"
            >

              <span className="text-3xl">
                {open === i ? "–" : "+"}
              </span>
              
              {item.q}


            </button>

            {open === i && (
              <p className="pb-6 opacity-70 max-w-xl mx-auto text-center">
                {item.a}
              </p>
            )}

          </div>
        ))}

        <div className="border-t border-[var(--primary)]" />

      </div>

    </section>
  );
};

export default Faq;