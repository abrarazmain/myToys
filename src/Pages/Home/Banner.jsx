import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="relative h-[500px] bg-[url(https://i.ibb.co/Yp3VnWb/baby-kids-toys-banner.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0  sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" />
      <div className="relative mx-auto  px-4 py-32  lg:items-center lg:px-8 flex items-center justify-center">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Let us find your
            <strong className="block font-extrabold text-[#b18aff]">
              Kids Toys.
            </strong>
          </h1>
          <p className="mt-4 max-w-lg sm:text-xl/relaxed sm:text-white text-black">
            We are the biggest kid toy online company of bangladesh.It is our
            please to find you the best toys for your cute sunshine
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-center lg:px-[90px]">
            <a
              href="#"
              className="block  w-full rounded bg-[#b18aff] px-12 py-3 text-sm font-medium text-white shadow  focus:outline-none focus:ring  sm:w-auto"
            >
              Get Started
            </a>
            <Link
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-black shadow  focus:outline-none focus:ring  sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
