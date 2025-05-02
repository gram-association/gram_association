export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="relative">
        <div className="bg-emerald-900 h-[500px] min-w-screen">
          <div className="absolute inset-0">
            <img
              src="hero-image.png"
              alt="community"
              className="object-cover mt-60    "
            />
          </div>
          <div className="flex justify-between ">
            <div className="relative z-10 p-10 text-white">
              <h1 className="text-5xl font-bold mt-16">
                BUILDING A BETTER FUTURE TOGETHER
              </h1>
            </div>
            <div className="relative z-10 p-10 text-white">
              <p className="text-lg mt-16">
                GRAM Association is dedicated to empowering communities through
                sustainable future...
              </p>
              <button className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700">
                OUR PROGRAMS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16  text-cente mt-56">
        <p className="container mx-auto bg-gray-100 w-fit rounded-lg px-2  text-gray-700 flex items-center">
          Our Impact
        </p>
        <h2 className="text-3xl font-bold mb-6">WHO WE ARE?</h2>
        <p className="max-w-3xl mx-auto mb-8">
          Welcome to GRAM Association, where we invest in the sustainable
          future. Rooted in core values, we empower marginalized communities,
          promote sustainable practices, and foster traditional values.
        </p>
        <div className="flex justify-center bg-gray-100 space-x-8">
          <div>
            <p className="text-4xl font-bold text-teal-600">10K+</p>
            <p>Lives Transformed</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-teal-600">10+</p>
            <p>Villages Impacted</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-teal-600">50+</p>
            <p>Women Trained</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-teal-600">3</p>
            <p>Water Bodies</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-teal-600">8</p>
            <p>SDG Goals</p>
          </div>
        </div>
        <button className="mt-8 bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700">
          LEARN MORE
        </button>
      </section>

      {/* Our Vission and Mission */}
      <section className="py-16 bg-[#BAD1CA] min-w-screen  space-x-8">
        <div className="max-w-md ">
          <p className="container mx-auto bg-gray-100 w-fit rounded-lg px-2  text-gray-700 flex items-center">
            OUR VISION & MISSION
          </p>
          <div className="flex items-center justify-center">
            <h3 className="text-2xl  font-bold mb-4">What Drives Us</h3>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="max-w-md rounded-lg  bg-white p-2">
            <h3 className="text-2xl  font-bold mb-4">OUR VISSION</h3>
            <p>
              The GRAM Association envisions a sustainable future by empowering
              communities through education, health, clean water initiatives...
            </p>
          </div>
          <div className="max-w-md rounded-lg ml-5 p-2 bg-white">
            <h3 className="text-2xl font-bold mb-4">OUR MISSION</h3>
            <p>
              To provide holistic solutions by empowering communities with
              sustainable practices, education, and more...
            </p>
          </div>
        </div>
      </section>
      {/* our focus areas */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">THE 5 Es</h2>
        <div className="flex justify-center items-center space-x-8">
          <div>
            <img
              src="/5es-image.png"
              alt="5 Es Illustration"
              className="w-2xs h-72"
            />
            {/* <Image src="/5es-image.jpg" alt="5 Es Illustration" width={300} height={300} /> */}
          </div>
          <div className="space-y-4 text-left">
            <p>
              <span className="font-bold">Entrepreneurship:</span> Empower
              individuals through skills.
            </p>
            <p>
              <span className="font-bold">Education:</span> Provide access to
              quality education.
            </p>
            <p>
              <span className="font-bold">Empowerment:</span> Foster growth and
              independence.
            </p>
            <p>
              <span className="font-bold">Environment:</span> Promote
              sustainability.
            </p>
            <p>
              <span className="font-bold">Engagement:</span> Build community
              connections.
            </p>
          </div>
        </div>
      </section>

      {/* Our Programs */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          MAKING A LASTING IMPACT
        </h2>
        <div className="flex justify-center space-x-8">
          <div className="max-w-md bg-pink-100 p-6 rounded">
            <h3 className="text-xl font-bold mb-4">Program A</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <button className="mt-4 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">
              READ MORE
            </button>
          </div>
          <div className="max-w-md bg-pink-100 p-6 rounded">
            <h3 className="text-xl font-bold mb-4">Program B</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <button className="mt-4 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">
              READ MORE
            </button>
          </div>
          <div>
            <img
              src="program A.png"
              alt="Impact Image"
              width={400}
              height={300}
            />
            {/* <Image
              src="/impact-image.jpg"
              alt="Impact Image"
              width={400}
              height={300}
            /> */}
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700">
            VIEW ALL
          </button>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 bg-[#F8F1E9] min-w-screen text-center">
        <h2 className="text-3xl font-bold mb-6">
          JOIN US IN MAKING A DIFFERENCE
        </h2>
        <div className="flex justify-center space-x-8">
          <div className="bg-white p-6 rounded shadow">
            <p className="font-bold mb-2">DONATE</p>
            <p>Your donation can transform lives and communities.</p>
            <button className="mt-4 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">
              DONATE NOW
            </button>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <p className="font-bold mb-2">VOLUNTEER</p>
            <p>Contribute your skills and time to make an impact.</p>
            <button className="mt-4 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">
              BECOME A VOLUNTEER
            </button>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <p className="font-bold mb-2">PARTNER WITH US</p>
            <p>Join forces to create a sustainable future.</p>
            <button className="mt-4 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">
              BECOME A PARTNER
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
