import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import initialTickets from "./tickets.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [tickets, setTickets] = useState(initialTickets);
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolvedList, setResolvedList] = useState([]);

  const handleSupport = (ticket) => {
    const isExist = taskStatus.find((t) => t.id === ticket.id);
    if (!isExist) {
      setTaskStatus([...taskStatus, ticket]);
      toast.success("Added to Task Status!");
    } else {
      toast.error("Already in progress!");
    }
  };

  const handleComplete = (ticket) => {
    setTaskStatus(taskStatus.filter((t) => t.id !== ticket.id));
    setTickets(tickets.filter((t) => t.id !== ticket.id));
    setResolvedList([...resolvedList, ticket]);
    toast.info("Ticket Resolved!");
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <Banner inProgress={taskStatus.length} resolved={resolvedList.length} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Customer Tickets */}
          <div className="lg:col-span-8">
            <h2 className="text-xl font-bold mb-6">Customer Tickets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm relative"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-sm leading-tight pr-10">
                      {ticket.title}
                    </h3>
                    <span
                      className={`text-[10px] px-2 py-1 rounded-full font-bold ${ticket.status === "Open" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"}`}
                    >
                      {ticket.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mb-4 line-clamp-2">
                    {ticket.description}
                  </p>
                  <div className="flex justify-between items-center text-[10px] font-bold">
                    <span className="text-orange-400 uppercase">
                      {ticket.priority}
                    </span>
                    <span className="text-gray-400">
                      {ticket.customer} | {ticket.createdAt}
                    </span>
                  </div>
                  <button
                    onClick={() => handleSupport(ticket)}
                    className="absolute bottom-4 right-4 text-gray-300 hover:text-primary"
                  >
                    ➔
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Task Status Section */}
          <div className="lg:col-span-4">
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h2 className="font-bold mb-4 border-b pb-2">Task Status</h2>
              <div className="space-y-3 mb-8">
                {taskStatus.length === 0 && (
                  <p className="text-gray-300 text-xs italic">
                    Select a ticket to add to Task Status
                  </p>
                )}
                {taskStatus.map((task) => (
                  <div
                    key={task.id}
                    className="bg-gray-50 p-3 rounded-md flex flex-col gap-2 border"
                  >
                    <span className="text-xs font-bold">{task.title}</span>
                    <button
                      onClick={() => handleComplete(task)}
                      className="btn btn-success btn-xs text-white w-full"
                    >
                      Complete
                    </button>
                  </div>
                ))}
              </div>

              <h2 className="font-bold mb-4 border-b pb-2">Resolved Task</h2>
              <div className="space-y-2">
                {resolvedList.map((res) => (
                  <div
                    key={res.id}
                    className="bg-blue-50 p-2 rounded text-blue-600 text-[10px] font-medium italic border border-blue-100"
                  >
                    {res.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
}
export default App;
