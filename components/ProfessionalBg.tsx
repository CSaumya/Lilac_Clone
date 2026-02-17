"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Education",
    a: "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea."
  },
  {
    q: "Licensure",
    a: "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea."
  },
  {
    q: "Certifications",
    a: "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea."
  }
];

const ProfessionalBg = () => {
  const [open, setOpen] = useState(null);

  return (
   <section className="bg-[var(--accent)] text-[var(--primary)] py-24 px-6 mt-20 flex justify-center">

  <div className="w-full max-w-3xl">

    <h1 className="text-4xl md:text-5xl font-semibold mb-16 text-center">
      My Professional Background
    </h1>

    {faqs.map((item, i) => (
      <div key={i} className="border-t border-[var(--primary)] ">

        <button
          onClick={() => setOpen(open === i ? null : i)}
          className="w-full flex items-center justify-between py-5 text-xl md:text-2xl font-medium text-left cursor-pointer"
        >
          {item.q}

          <span className="text-3xl leading-none">
            {open === i ? "–" : "+"}
          </span>
        </button>

        {open === i && (
          <p className="pb-8 opacity-70 max-w-xl">
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

export default ProfessionalBg;
