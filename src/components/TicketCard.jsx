import React from "react";

const Dot = ({ color }) => (
  <span
    className={`inline-block h-2 w-2 rounded-full mr-1.5 ${
      color === "green" ? "bg-emerald-500" : color === "yellow" ? "bg-amber-500" : "bg-gray-400"
    }`}
  />
);

const StatusPill = ({ status }) => {
  const isOpen = status === "Open";
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 text-xs rounded-full border
      ${isOpen
        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
        : "bg-amber-50 text-amber-700 border-amber-200"
      }`}
    >
      <Dot color={isOpen ? "green" : "yellow"} />
      {isOpen ? "Open" : "In-Progress"}
    </span>
  );
};

const PriorityPill = ({ level }) => {
  const map = {
    High: "bg-red-50 text-red-600 border-red-200",
    Medium: "bg-amber-50 text-amber-700 border-amber-200",
    Low: "bg-emerald-50 text-emerald-700 border-emerald-200",
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 text-[11px] rounded-full border ${map[level] || "bg-gray-50 text-gray-600 border-gray-200"}`}>
      {level?.toUpperCase()} PRIORITY
    </span>
  );
};

const IconUser = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" className="text-gray-400">
    <path fill="currentColor" d="M12 12a5 5 0 1 0-5-5a5 5 0 0 0 5 5Zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5Z"/>
  </svg>
);

const IconCalendar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" className="text-gray-400">
    <path fill="currentColor" d="M7 2v2H5a2 2 0 0 0-2 2v2h18V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2zm14 8H3v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zm-2 8H5v-6h14z"/>
  </svg>
);

export default function TicketCard({ ticket, onAdd }) {
  return (
    <button
      onClick={() => onAdd(ticket)}
      className="text-left bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-gray-300 transition"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[15px] font-semibold text-gray-900">{ticket.title}</h3>
        <StatusPill status={ticket.status || "Open"} />
      </div>

      <p className="text-sm text-gray-600 mt-1 line-clamp-2">{ticket.description}</p>

      <div className="mt-3 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-gray-500">
          <span className="font-semibold">{ticket.id}</span>
          <PriorityPill level={ticket.priority} />
        </div>
        <div className="flex items-center gap-3 text-gray-500">
          <span className="inline-flex items-center gap-1">
            <IconUser />
            <span className="truncate max-w-[110px]">{ticket.customer}</span>
          </span>
          <span className="inline-flex items-center gap-1">
            <IconCalendar />
            {ticket.createdAt}
          </span>
        </div>
      </div>
    </button>
  );
}
