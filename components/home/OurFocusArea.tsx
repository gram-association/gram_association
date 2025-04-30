export default function OurFocusAreas() {
  return (
    <>
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
    </>
  );
}
