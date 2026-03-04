const Banner = ({ inProgress, resolved }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
      <div className="bg-[#7E3AF2] rounded-xl p-8 text-white text-center shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-lg opacity-80">In-Progress</h3>
          <p className="text-6xl font-bold">{inProgress}</p>
        </div>
        <div className="absolute top-0 right-0 opacity-10 text-9xl">〰️</div>
      </div>
      <div className="bg-[#10B981] rounded-xl p-8 text-white text-center shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-lg opacity-80">Resolved</h3>
          <p className="text-6xl font-bold">{resolved}</p>
        </div>
        <div className="absolute top-0 right-0 opacity-10 text-9xl">〰️</div>
      </div>
    </div>
  );
};
export default Banner;
