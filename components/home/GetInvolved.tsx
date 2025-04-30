export default function GetInvolved() {
  return (
    <>
      <section className="py-16 bg-gray-100 text-center">
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
    </>
  );
}
