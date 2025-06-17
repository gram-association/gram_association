import Link from "next/link";
import Image from "next/image";
import { whatsnew } from "../components/data/whatsNew";
// import { testimonials } from "../components/data/testimonial";
// import { div } from "framer-motion/client";

export default function WhatsNew() {
  return (
    <>
      <div className="text-center py-8 sm:py-12">
        <p className="container w-fit mx-auto bg-[#DEE6EB] rounded-lg px-2 py-1 text-xs sm:text-sm text-gray-700 flex items-center mb-4">
          Upcoming Rides
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 px-4">
          What's New
        </h1>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {whatsnew.map((whatsNew) => (
          <div
            key={whatsNew.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-48">
              <Image
                src={whatsNew.image}
                alt={whatsNew.title}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <span className="bg-white/80 text-gray-700 text-sm font-semibold rounded-full px-3 py-1 border-0">
                  {whatsNew.category}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {whatsNew.title}
              </h3>
              <p className={`text-gray-600 text-sm mt-2`}>
                {whatsNew.description}
              </p>

              <Link href={`//${whatsNew.slug}`}>
                <button className="mt-4 text-blue-600 font-semibold hover:underline">
                  LEARN MORE →
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <section className="py-16 bg-[#fdf5f1] mt-20">
        <div className="mx-auto px-4">
          <div className="text-center mb-12">
            <p className="container w-fit mx-auto bg-[#DEE6EB] rounded-lg px-2 py-1 text-xs sm:text-sm text-gray-700 flex items-center mb-4">
              Testimonials
            </p>
            <h2 className="text-4xl md:text-5xl  text-gray-800 mb-4">
              Hear It <span className="italic">From</span> Them
            </h2>
            <div className="flex justify-center items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#538C7B]"></span>
              <span className="w-3 h-3 rounded-full bg-[#538C7B]"></span>
              <span className="w-3 h-3 rounded-full bg-[#538C7B]"></span>
              <span className="w-3 h-3 rounded-full bg-[#538C7B]"></span>
            </div>
          </div>

          {/* Testimonial Cards */}
          {/* <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative bg-white p-6 w-full max-w-sm"
                style={{
                  clipPath:
                    index === 0
                      ? "polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)"
                      : index === 1
                      ? "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 15%)"
                      : "polygon(0% 0%, 100% 0%, 100% 100%, 15% 100%, 0% 85%)",
                }}
              > */}
          {/* Image */}
          {/* <div className="flex justify-center mb-4">
                  <div className="relative w-18 h-18 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                </div> */}

          {/* Name and Role */}
          {/* <h3 className="text-lg font-semibold text-gray-800 text-center">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500 text-center mb-4">
                  {testimonial.role}
                </p> */}

          {/* Quote */}
          {/* <p className="text-gray-600 text-center text-sm">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div> */}
          <div className="mt-20 flex justify-center gap-20 ">
            <div className="relative flex justify-center items-center ">
              <div className="bg-[#538C7B] w-xs h-[340px]  rounded-4xl mx-auto transform rotate-20 ">
                <div className="bg-white w-xs h-[350px] absolute -top-7 -right-5 rounded-4xl text-center transform -rotate-10 [clip-path:polygon(0%_0%,100%_10%,100%_100%,100%_100%,0%_95%)]">
                  <div className="transform -rotate-10 ">
                    <Image
                      src="/Ellipse 17.png"
                      alt="img"
                      width={80}
                      height={80}
                      className="  ml-28 mt-4 rounded-full"
                    ></Image>
                    <h3 className="mt-2 text-2xl">Nikhil Sharma</h3>
                    <p className="text-[#525252]">Jal NGO</p>
                    <Image
                      src="/clarity_block-quote-line.png"
                      alt=""
                      width={20}
                      height={20}
                      className="mx-auto my-2"
                    />
                    <p className="text-xs ml-8 pr-10 w-2xs text-[#525252]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cursus nibh mauris, nec turpis orci lectus maecenas.
                      Suspendisse sed magna eget nibh in turpis. Consequat duis
                      diam lacus arcu. Faucibus venenatis felis id augue sit
                      cursus pellentesque enim{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="bg-[#538C7B] w-sm h-[400px]  relative rounded-4xl mx-auto transform rotate-6 [clip path: polygon(0%_0%,100%_100%,100%_100%,100%_100%,10%_95%)] "></div>
              <div className="bg-white w-sm h-[400px] absolute rounded-4xl text-center ">
                <div className=" ">
                  <Image
                    src="/Ellipse 16.png"
                    alt="img"
                    width={80}
                    height={80}
                    className="  mx-auto -mt-6 rounded-full"
                  ></Image>
                  <h3 className="mt-6 text-xl">Ayush Kumar</h3>
                  <p className="text-[#525252]">Water Well Mission</p>
                  <Image
                    src="/clarity_block-quote-line.png"
                    alt=""
                    width={30}
                    height={30}
                    className="mx-auto my-2"
                  />
                  <p className="text-md mx-auto mt-4 w-2xs text-[#525252]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cursus nibh mauris, nec turpis orci lectus maecenas.
                    Suspendisse sed magna eget nibh in turpis. Consequat duis
                    diam lacus arcu. Faucibus venenatis felis id augue sit
                    cursus pellentesque enim{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center items-center ">
              <div className="bg-[#538C7B] w-xs h-[350px] transform -rotate-8 rounded-4xl mx-auto  "></div>
              <div className="bg-white w-xs h-[350px] absolute top-[2px] -left-4 rounded-4xl text-center transform -rotate-2 [clip-path:polygon(0%_10%,100%_0%,95%_100%,100%_100%,0%_100%)]">
                <div className=" ">
                  <Image
                    src="/Ellipse 18.png"
                    alt="img"
                    width={80}
                    height={80}
                    className="  ml-28 mt-6 rounded-full"
                  ></Image>
                  <h3 className="mt-2 text-2xl">Ishani</h3>
                  <p className="text-[#525252]">Royal Enfield</p>
                  <Image
                    src="/clarity_block-quote-line.png"
                    alt=""
                    width={20}
                    height={20}
                    className="mx-auto my-2"
                  />
                  <p className="text-xs ml-8 pr-10 w-2xs text-[#525252]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cursus nibh mauris, nec turpis orci lectus maecenas.
                    Suspendisse sed magna eget nibh in turpis. Consequat duis
                    diam lacus arcu. Faucibus venenatis felis id augue sit
                    cursus pellentesque enim{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#BAD1CA] w-screen mt-20 py-12">
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mx-auto text-center  bg-gray-100 w-fit rounded-lg px-1 text-xs sm:text-sm text-gray-700 container items-center mb-6">
            Get Involved
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-wider text-center mb-8">
            Support Our Programs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">Donate</h2>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Your generous contribution helps us expand our programs and
                reach more communities. Every donation, no matter the size,
                makes a difference.
              </p>
              <Link href="/contact-us">
                <button className="bg-[#538C7B] text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full hover:bg-teal-700 transition text-sm sm:text-base">
                  DONATE NOW
                </button>
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">
                Volunteer
              </h2>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Join our team of dedicated volunteers and contribute your
                skills, time, and passion to support our programs and make a
                direct impact.
              </p>
              <Link href="/contact-us">
                <button className="bg-[#538C7B] text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full hover:bg-teal-700 transition text-sm sm:text-base">
                  BECOME A VOLUNTEER
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
