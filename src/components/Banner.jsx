const Banner = ({ inProgress, resolved }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 px-0">
      <div
        className="relative overflow-hidden p-8 text-center text-white rounded-[2rem] shadow-2xl flex flex-col justify-center items-center min-h-[300px]"
        style={{
          background: "linear-gradient(135deg, #7E3AF2 0%, #5B21B6 100%)",
        }}
      >
        <img
          src="/v2.png"
          alt="left-pattern"
          className="absolute top-0 left-0 h-full w-auto opacity-100 object-cover pointer-events-none scale-x-[-1]"
        />

        <img
          src="/v2.png"
          alt="right-pattern"
          className="absolute top-0 right-0 h-full w-auto opacity-100 object-cover pointer-events-none"
        />

        <div className="relative z-10">
          <h3 className="text-2xl font-medium opacity-90 mb-4 tracking-wide">
            In-Progress
          </h3>
          <p className="text-6xl font-bold tracking-tighter">{inProgress}</p>
        </div>
      </div>

      <div
        className="relative overflow-hidden p-8 text-center text-white rounded-[2rem] shadow-2xl flex flex-col justify-center items-center min-h-[250px]"
        style={{
          background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
        }}
      >
        <img
          src="/v2.png"
          alt="left-pattern"
          className="absolute top-0 left-0 h-full w-auto opacity-100 object-cover pointer-events-none scale-x-[-1]"
        />

        <img
          src="/v2.png"
          alt="right-pattern"
          className="absolute top-0 right-0 h-full w-auto opacity-100 object-cover pointer-events-none"
        />

        <div className="relative z-10">
          <h3 className="text-2xl font-medium opacity-90 mb-4 tracking-wide">
            Resolved
          </h3>
          <p className="text-6xl font-bold tracking-tighter">{resolved}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
