import Image from "next/image";

const Support = () => {
  return (
       <section className="bg-[var(--accent)] min-h-[100vh] mx-auto flex flex-col md:flex-row items-center relative">


<div className="relative w-full md:w-1/2 h-[60vh] sm:h-[70vh] md:h-screen overflow-hidden">
              <Image
                src="/lilac-support.jpg"
                alt="About"
                fill
                className="fade-up object-cover transition-all duration-500"
              />
            </div>

      <div className="fade-up relative flex flex-col text-left w-full md:w-1/2 h-[100vh]">

        <div className="flex flex-col py-10 px-5 md:px-5 md:py-12 lg:px-10 lg:py-32">

          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            You don’t have to do this all <i>alone</i>.
          </h2>

          <h3 className="text-xl mb-4">
            If you are facing any of these, there’s hope:
          </h3>

          <ul className="list-disc pl-8 space-y-3 text-lg marker:text-xs">
            <li>Persistent feelings of sadness or hopelessness</li>
            <li>Trouble focusing or making decisions</li>
            <li>Difficulty maintaining relationships</li>
            <li>Feeling constantly exhausted or unmotivated</li>
            <li>A pervasive sense of being overwhelmed</li>
          </ul>

          <p className="text-lg mt-6">
            With empathy and guidance, we'll work together to navigate the challenges life throws your way.
          </p>

        </div>

<button className="absolute bottom-0 w-full px-8 py-5 border-t border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white cursor-pointer transition-all duration-300 ease-in-out">
          WORK WITH ME →
        </button>

      </div>

    </section>
  );
};

export default Support;
