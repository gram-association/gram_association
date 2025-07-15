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
            GRAM (Groundwater & Reforestation Adaptive Management) Association
            began with a simple but powerful idea: that real change starts from
            within the community. It was founded by Shashank Singh, whose life
            took a turning point during his time as an SBI Youth for India
            Fellow at Barefoot College, Tilonia, Rajasthan. Under the mentorship
            of Dr. Sanjit ‘Bunker’ Roy, Shashank spent 13 months living and
            working alongside community members, listening to their stories,
            understanding their struggles and realizing that the biggest
            challenge they faced was availability of water.
            <br />
            <br />
            When he asked a woman from the community about her problems, she
            spoke about the daily struggle to fetch drinking water and the
            hardship of caring for their cattle in a dry, unforgiving land. That
            conversation stayed with him. It led him to mobilize the community
            to revitalised a pond, turning it into a vital water source for over
            5,000 animals across five villages. For Shashank, it wasn’t just
            about building a pond; it was about building hope, dignity, and
            resilience.
          </p>
        </div>
        <div className="relative w-full md:w-5xl h-[300px] md:h-[400px] mt-8 md:mt-0 md:ml-6 rounded-xl overflow-hidden shadow-xl">
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
              The experience left a deep imprint on him when one particular
              request echoed in his mind: “Agar kuch karna hi hai, to paani ke
              liye karo” (If you really want to help, do something about our
              water). That simple plea became his motivation to keep going. Post
              his Fellowship,  the urge to do more stayed strong. This inspired
              Shashank to commence his journey on a motorcycle, traveling across
              13 states on a journey he called “Harvesting the Heaven.” 
              <br />
              <br />
              Along the way, he visited villages, schools, NGOs, and civil
              societies; learning from the wisdom rooted deep in India’s soil,
              and sharing the importance of rainwater harvesting as a solution
              to water scarcity. The journey tested him, challenged him, and
              ultimately shaped his dream: to make water accessible for the last
              mile beneficiaries. 
              <br />
              <br />
              In 2019, that dream took shape as the GRAM Association. What
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
              lead, real change follows.
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
