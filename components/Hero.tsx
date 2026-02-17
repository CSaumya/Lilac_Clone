import Image from "next/image";


const Hero = () => {
  return (
    <div className="min-h-[80vh] px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-2 mt-16">
       <div className="flex justify-center">
        <Image
          src="/lilac-hero-Img.jpg"
          alt="Hero"
          width={500}
          height={450}
          className="fade-up rounded-t-full w-40 md:w-[450px]"
        />
      </div>
       <div className="fade-up flex flex-col justify-between items-center">
        <h1 className="text-4xl md:text-7xl font-semibold leading-tight">
          Live your life <br /> in full bloom
        </h1>

        <p className="mt-6 w-[200px] md:w-1/2 md:text-lg opacity-70">
          Therapy for Adults in Minneapolis, MN.
        </p>

        <button className="mt-5 px-8 py-2 border border-[var(--primary)] hover:opacity-90 hover:bg-[var(--primary)] hover:text-white cursor-pointer transition-all duration-300 ease-in-out">
          Connect with me  →
        </button>
      </div>
    </div>
  )
}

export default Hero
