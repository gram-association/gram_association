import Image from "next/image";
import Advisor from "./components/Advisor";
// import OurPartners from "./components/OurPartners";
import OurTeam from "./components/OurTeam";

export default function AboutUs() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#e2f7f1] to-white  dark:to-[#0f172a] bg-no-repeat bg-[length:100%_600px] dark:bg-[#0f172a] justify-between px-4 sm:px-6 md:px-8 lg:px-24 pt-16 pb-24">
      {/* Our Story Section */}
      <section className="flex flex-col md:flex-row w-full max-w-7xl mx-auto mt-20 animate-fade-in">
        <div className="text-left px-4 md:px-0">
          <span className="inline-block bg-[#DEE6EB] dark:bg-gray-700 rounded-full px-3 py-1 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200 mb-4">
            About Us
          </span>
          <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800  mb-4">
            Our Story
          </h1>
          <p className=" text-sm sm:text-base md:text-sm text-gray-600 dark:text-gray-200 max-w-5xl mx-auto text-justify leading-relaxed">
            Words are a powerful mode of communication at the same time language
            is for communication and 10 words echoed in the mind of our founder.
            Shashank’s journey started as a Fellow with SBI Fellowship placed
            with Barefoot College Tilonia, Rajasthan. In the initial days of the
            Fellowship when he was trying to understand how he could make
            himself useful to the cause he met the community and was trying to
            understand the ground realities. When he met a woman who said “Agar
            kuch karna hi hai, to paani ke liye karo” those 10 words etched in
            his mind and those simple yet powerful words became his motivation
            to keep going. Post his Fellowship, the urge to do more stayed
            strong.
            <br />
            <br />
            This powerful conviction raised curiosity in Shashank to commence an
            epic journey on his motorcycle, traversing 13 states on a mission he
            named <span className="font-bold">“Harvesting the Heaven.”</span> He
            visited villages, schools, NGOs, and civil societies; learning from
            the wisdom of the community and enforcing the common idea of the
            importance of rainwater harvesting as one of the solutions to water
            issues scarcity across geographies. The journey tested him,
            challenged him, and ultimately shaped his dream: to bring
            sustainable water management to every corner of the nation. Which
            led to the birth of GRAM (Groundwater & Reforestation Adaptive
            Management) Association, 2019 with a simple idea that real change
            starts within the community.
          </p>
        </div>
        <div className="relative w-full md:w-5xl h-[300px] md:h-[400px] mt-12 md:mt-0 md:ml-6 rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/assets/about-us/DSC_0365.JPG"
            alt="Story Image"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </section>

      {/* How We Started Section */}
      <section className="w-full max-w-7xl mx-auto my-16 md:mt-10 animate-fade-in">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          <div className="w-full lg:w-1/2  order-2 lg:order-1">
            <div className="relative aspect-video w-full h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/assets/about-us/IMG_0008.JPG"
                alt="Story Image"
                fill
                className="object-cover transition-transform  duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <p className="font-sourceSans3 text-base sm:text-sm text-gray-600 dark:text-gray-200 text-justify leading-relaxed">
              GRAM started as an organisation focused on water and environment
              conservation. However, as GRAM grew and its roots deepened within
              various communities, a vital truth became abundantly clear, the
              development sector is not a collection of isolated issues, but a
              cross cutting tapestry. Water scarcity, for instance, isn't just
              an environmental problem; it impacts women who walk miles to fetch
              it, children whose education suffers due to waterborne illnesses,
              and livelihoods dependent on agriculture.
              <br />
              <br />
              Over the years, as passionate individuals with diverse expertise
              joined hands with Shashank, GRAM's vision naturally expanded. What
              started as a dedicated effort in water and environmental
              conservation has organically evolved into a more holistic approach
              to community well-being. This growth wasn't a deviation from our
              core, but rather a realization that true, sustainable impact
              requires addressing the interconnected needs of a community.
              <br />
              <br />
              {/* In 2019, that dream took shape as the GRAM Association. What
              started with a focus on indigenous water conservation methods grew
              into a mission that connects water security, livelihood,
              environmental sustainability, health, education, and relief
              activities. At GRAM, we believe that indigenous wisdom, when
              combined with thoughtful innovation, can transform lives and
              landscapes.
              <br />
              <br />
              The road hasn’t always been easy. There have been uncertainties,
              and a global pandemic along the way. But through it all, our
              commitment has only grown stronger. Today, GRAM stands as a
              living, breathing movement supported by the people, for the
              people; working to build a future where communities don’t just
              survive, but thrive. We’re proud of how far we’ve come, and even
              more excited about where we’re headed. Because when communities
              lead, real change follows. */}
            </p>
          </div>
        </div>
      </section>

      {/* Team, Partners, and Advisor Sections */}
      <section className="w-full max-w-7xl mx-auto ">
        <OurTeam />
        {/* <OurPartners /> */}
        <Advisor />
      </section>
    </main>
  );
}
