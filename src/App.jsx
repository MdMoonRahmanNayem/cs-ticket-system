import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketCard from "./components/TicketCard";
import TaskStatus from "./components/TaskStatus";
import ticketsData from "./data/tickets";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [tickets, setTickets] = useState(ticketsData);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  const handleAddToStatus = (ticket) => {
    if (inProgress.some((t) => t.id === ticket.id)) {
      toast.info("Already in progress!");
      return;
    }
    if (resolved.some((t) => t.id === ticket.id)) {
      toast.info("Already resolved!");
      return;
    }
    setInProgress((prev) => [...prev, { ...ticket, status: "In-Progress" }]);
    toast.success("Added to In-Progress!");
  };

  const handleComplete = (ticket) => {
    setInProgress((prev) => prev.filter((t) => t.id !== ticket.id));
    setResolved((prev) => [{ ...ticket, status: "Resolved" }, ...prev]);
    setTickets((prev) => prev.filter((t) => t.id !== ticket.id));
    toast.success("Ticket resolved!");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Banner inProgress={inProgress.length} resolved={resolved.length} />

      <main className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT: Customer Tickets */}
        <section className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-3">Customer Tickets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tickets.length === 0 ? (
              <div className="text-gray-500 bg-white border border-dashed border-gray-300 rounded-xl p-4">
                No open tickets.
              </div>
            ) : (
              tickets.map((t) => (
                <TicketCard key={t.id} ticket={t} onAdd={handleAddToStatus} />
              ))
            )}
          </div>
        </section>

        {/* RIGHT: Task Status + Resolved Task */}
        <aside className="lg:col-span-1 space-y-6">
          <TaskStatus items={inProgress} onComplete={handleComplete} />

          <section>
            <h2 className="text-lg font-semibold mb-3">Resolved Task</h2>
            {resolved.length === 0 ? (
              <div className="text-gray-500 bg-white border border-dashed border-gray-300 rounded-xl p-4">
                No resolved tasks yet.
              </div>
            ) : (
              <ul className="space-y-3">
                {resolved.map((t) => (
                  <li
                    key={t.id}
                    className="bg-white border border-gray-200 rounded-xl p-3 flex items-center justify-between shadow"
                  >
                    <div>
                      <div className="font-medium">{t.title}</div>
                      <div className="text-xs text-gray-500">
                        {t.id} • {t.customer}
                      </div>
                    </div>
                    <span className="px-2 py-0.5 text-xs rounded-full border bg-emerald-50 text-emerald-700 border-emerald-200">
                      Resolved
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </aside>
      </main>

      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
}

export default App;
