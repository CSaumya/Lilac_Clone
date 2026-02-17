import Image from "next/image";

const About = () => {
  return (
    <section className="bg-[var(--accent)] min-h-[90vh] mx-auto flex flex-col-reverse md:flex-row items-center relative">

      <div className="fade-up relative flex flex-col md:flex-col text-left h-[90vh] w-[100vw] md:w-1/2">
        <div className="flex flex-col py-10 px-5 md:px-5 md:py-12 lg:px-10 lg:py-32">

        <h2 className="text-3xl md:text-5xl font-semibold mb-6">
          Live a fulfilling life.
        </h2>

        <p className="text-lg md:text-lg leading-relaxed">
          Life can be challenging—especially when you're trying to balance your personal and professional life.
          <br /><br />
          It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.
        </p>
        </div>
<button className="absolute bottom-0 w-full px-8 py-5 border-t border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white cursor-pointer transition-all duration-300 ease-in-out">

          GET IN TOUCH →
        </button>

      </div>

      <div className="relative w-full md:w-1/2 h-[50vh] md:h-[90vh] overflow-hidden">
        <Image
          src="/lilac-about-Img.jpg"
          alt="About"
          fill
          className="fade-up object-cover transition-all duration-500"
        />
      </div>

    </section>
  );
};

export default About;
