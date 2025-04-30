export default function OurPrograms() {
  return (
    <>
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
    </>
  );
}
