import React from "react";

function TaskStatus({ items, onComplete }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Task Status</h2>
      {items.length === 0 ? (
        <div className="text-gray-500 bg-white border border-dashed border-gray-300 rounded-xl p-4">
          Select a ticket to add to Task Status
        </div>
      ) : (
        <ul className="space-y-3">
          {items.map((t) => (
            <li
              key={t.id}
              className="bg-white p-3 rounded-xl shadow flex justify-between items-center"
            >
              <span>{t.title}</span>
              <button
                onClick={() => onComplete(t)}
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1 rounded-md text-xs"
              >
                Complete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskStatus;
