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

  // add to Task Status
  const handleAddToStatus = (ticket) => {
    if (inProgress.some((t) => t.id === ticket.id)) {
      toast.info("Already in progress!");
      return;
    }
    if (resolved.some((t) => t.id === ticket.id)) {
      toast.info("Already resolved!");
      return;
    }
    setInProgress([...inProgress, ticket]);
    toast.success("Added to In-Progress!");
  };

  // mark as complete
  const handleComplete = (ticket) => {
    setInProgress(inProgress.filter((t) => t.id !== ticket.id));
    setResolved([...resolved, ticket]);
    setTickets(tickets.filter((t) => t.id !== ticket.id));
    toast.success("Ticket resolved!");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <Banner inProgress={inProgress.length} resolved={resolved.length} />

      {/* Main Layout */}
      <main className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Customer Tickets */}
        <section className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-3">Customer Tickets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tickets.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                onAdd={handleAddToStatus}   // ✅ নতুন prop
              />
            ))}
          </div>

          {/* Resolved List */}
          <h3 className="text-lg font-semibold pt-4">Resolved</h3>
          {resolved.length === 0 ? (
            <div className="text-gray-500 bg-white border border-dashed border-gray-300 rounded-xl p-4">
              No tickets resolved yet.
            </div>
          ) : (
            <ul className="grid gap-3">
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

        {/* Task Status */}
        <aside>
          <TaskStatus items={inProgress} onComplete={handleComplete} />
        </aside>
      </main>

      {/* Toast Container */}
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
}

export default App;
