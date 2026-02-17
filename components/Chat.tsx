import Image from "next/image";

const Chat = () => {
  return (
<section className="bg-[var(--secondary)] min-h-screen flex flex-col-reverse md:flex-row items-center md:justify-between gap-10 px-6 md:px-20">

      <div className="fade-up flex flex-col gap-6 md:w-1/2">

        <h1 className="text-4xl md:text-7xl font-semibold leading-tight">
          Hi, I’m Lilac.
        </h1>

        <p className="max-w- md:text-lg opacity-70">
I'm committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors. With empathy and guidance, we'll work together to navigate the challenges life throws your way. 
       </p>

<button className="w-fit mx-auto md:ml-60 px-8 py-2 mt-6 md:mt-10 border border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300 cursor-pointer">
          LET'S CHAT→
        </button>

      </div>

<div className="fade-up relative w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">

  <Image
    src="/chat---1.jpg"
    alt="Hero"
    width={450}
    height={550}
    className="rounded-t-full w-60 md:w-[450px] object-cover"
  />

  <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4">

    <Image
      src="/chat---2.jpg"
      alt="Detail"
      width={200}
      height={200}
      className="rounded-full shadow-xl w-32 md:w-60 object-cover"
    />

  </div>

</div>

    </section>
  );
};

export default Chat;
