// import React, { useEffect, useState } from "react";

// const AdminDashboard = () => {
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     fetchAppointments();
//   }, []);

//   const fetchAppointments = async () => {
//     try {
//       const res = await fetch("http://localhost:3000/admin");
//       const data = await res.json();
//       setAppointments(data);
//       console.log(data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleApprove = async (id) => {
//     await fetch(`http://localhost:3000/admin/approve/${id}`, {
//       method: "PUT",
//     });
//     fetchAppointments();
//   };

//   const handleCancel = async (id) => {
//     await fetch(`http://localhost:3000/admin/cancel/${id}`, {
//       method: "PUT",
//     });
//     fetchAppointments();
//   };

//   const handleDelete = async (id) => {
//      if (!window.confirm("Delete permanently?")) return;

//     await fetch(`http://localhost:3000/admin/delete/${id}`, {
//       method: "DELETE",
//     });

//     fetchAppointments();
//   };

//   const totalAppointments = appointments.length;
//   const todaysAppointments = appointments.filter(
//     (a) => new Date(a.date).toDateString() === new Date().toDateString(),
//   ).length;

//   const pendingAppointments = appointments.filter(
//     (a) => a.status === "pending",
//   ).length;

//   return (
//     <div className="flex min-h-screen bg-gray-100 text-gray-800">
//       {/* Main */}
//       <main className="flex-1 p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-semibold">Appointment Bookings</h2>
//           <span className="text-sm text-gray-500">
//             {new Date().toDateString()}
//           </span>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           <div className="bg-white p-5 rounded-xl shadow">
//             <p className="text-sm text-gray-500">Total Appointments</p>
//             <h3 className="text-3xl font-bold mt-2">{totalAppointments}</h3>
//           </div>
//           <div className="bg-white p-5 rounded-xl shadow">
//             <p className="text-sm text-gray-500">Today's Appointments</p>
//             <h3 className="text-3xl font-bold mt-2 text-[#2563EB]">
//               {todaysAppointments}
//             </h3>
//           </div>
//           <div className="bg-white p-5 rounded-xl shadow">
//             <p className="text-sm text-gray-500">Pending</p>
//             <h3 className="text-3xl font-bold mt-2 text-[#F97316]">
//               {pendingAppointments}
//             </h3>
//           </div>
//         </div>

//         {/* Table */}
//         <div className="bg-white rounded-xl shadow overflow-hidden">
//           <div className="p-4 border-b">
//             <h3 className="text-lg font-semibold">Recent Appointments</h3>
//           </div>

//           <table className="min-w-full text-sm">
//             <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
//               <tr>
//                 <th className="px-6 py-3 text-left">Patient</th>
//                 <th className="px-6 py-3 text-left">Email</th>
//                 <th className="px-6 py-3 text-left">Date</th>
//                 <th className="px-6 py-3 text-left">Time</th>
//                 <th className="px-6 py-3 text-left">Status</th>
//                 <th className="px-6 py-3 text-left">Action</th>
//               </tr>
//             </thead>

//             <tbody className="divide-y">
//               {appointments.map((app) => (
//                 <tr key={app._id}>
//                   <td className="px-6 py-4">{app.name}</td>
//                   <td className="px-6 py-4">{app.email || "—"}</td>
//                   <td className="px-6 py-4">
//                     {new Date(app.date).toISOString().split("T")[0]}
//                   </td>
//                   <td className="px-6 py-4">
//                     {new Date(app.date).toLocaleTimeString([], {
//                       hour: "2-digit",
//                       minute: "2-digit",
//                     })}
//                   </td>

//                   <td className="px-6 py-4">
//                     {app.status === "pending" && (
//                       <span className="px-3 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700">
//                         Pending
//                       </span>
//                     )}
//                     {app.status === "approved" && (
//                       <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-700">
//                         Approved
//                       </span>
//                     )}
//                     {app.status === "cancelled" && (
//                       <span className="px-3 py-1 rounded-full text-xs bg-red-100 text-red-700">
//                         Cancelled
//                       </span>
//                     )}
//                   </td>

//                   <td className="px-6 py-4 space-x-2">
//                     {app.status === "pending" && (
//                       <>
//                         <button
//                           onClick={() => handleApprove(app._id)}
//                           className="px-3 py-1 text-xs rounded bg-green-100 text-green-700"
//                         >
//                           Approve
//                         </button>

//                         <button
//                           onClick={() => handleCancel(app._id)}
//                           className="px-3 py-1 text-xs rounded bg-red-100 text-red-700"
//                         >
//                           Cancel
//                         </button>
//                       </>
//                     )}

//                     <button
//                       onClick={() => handleDelete(app._id)}
//                       className="px-3 py-1 text-xs rounded bg-gray-200 text-gray-700"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;

import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await fetch("https://clinic-backend-2kz2.onrender.com/admin");
      const data = await res.json();
      console.log(data);

      setAppointments(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleApprove = async (id) => {
    await fetch(`https://clinic-backend-2kz2.onrender.com/admin/approve/${id}`, {
      method: "PUT",
    });
    fetchAppointments();
  };

  const handleCancel = async (id) => {
    await fetch(`https://clinic-backend-2kz2.onrender.com/admin/cancel/${id}`, {
      method: "PUT",
    });
    fetchAppointments();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete permanently?")) return;

    await fetch(`https://clinic-backend-2kz2.onrender.com/admin/delete/${id}`, {
      method: "DELETE",
    });

    fetchAppointments();
  };

  const totalAppointments = appointments.length;

  const todaysAppointments = appointments.filter(
    (a) => new Date(a.date).toDateString() === new Date().toDateString(),
  ).length;

  const pendingAppointments = appointments.filter(
    (a) => a.status === "pending",
  ).length;

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 gap-2">
        <h2 className="text-xl sm:text-2xl font-semibold">
          Appointment Bookings
        </h2>
        <span className="text-sm text-gray-500">
          {new Date().toDateString()}
        </span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
        <div className="bg-white p-4 sm:p-5 rounded-xl shadow">
          <p className="text-sm text-gray-500">Total Appointments</p>
          <h3 className="text-2xl sm:text-3xl font-bold mt-2">
            {totalAppointments}
          </h3>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-xl shadow">
          <p className="text-sm text-gray-500">Today's Appointments</p>
          <h3 className="text-2xl sm:text-3xl font-bold mt-2 text-blue-600">
            {todaysAppointments}
          </h3>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-xl shadow">
          <p className="text-sm text-gray-500">Pending</p>
          <h3 className="text-2xl sm:text-3xl font-bold mt-2 text-orange-500">
            {pendingAppointments}
          </h3>
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="space-y-4 sm:hidden">
        {appointments.map((app) => (
          <div
            key={app._id}
            className="bg-white rounded-xl shadow p-4 space-y-2"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold">{app.name}</p>
                <p className="text-sm text-gray-500">{app.email || "—"}</p>
              </div>

              {app.status === "pending" && (
                <span className="px-3 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700">
                  Pending
                </span>
              )}
              {app.status === "approved" && (
                <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-700">
                  Approved
                </span>
              )}
              {app.status === "cancelled" && (
                <span className="px-3 py-1 rounded-full text-xs bg-red-100 text-red-700">
                  Cancelled
                </span>
              )}
            </div>

            <p className="text-sm">
              {new Date(app.date).toLocaleDateString()}{" "}
              {new Date(app.date).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
              {app.status === "pending" && (
                <>
                  <button
                    onClick={() => handleApprove(app._id)}
                    className="flex-1 px-3 py-2 text-xs rounded bg-green-100 text-green-700"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() => handleCancel(app._id)}
                    className="flex-1 px-3 py-2 text-xs rounded bg-red-100 text-red-700"
                  >
                    Cancel
                  </button>
                </>
              )}

              <button
                onClick={() => handleDelete(app._id)}
                className="w-full px-3 py-2 text-xs rounded bg-gray-200 text-gray-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* DESKTOP TABLE */}
      <div className="hidden sm:block bg-white rounded-xl shadow overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-6 py-3 text-left">Patient</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-left">Time</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {appointments.map((app) => (
              <tr key={app._id}>
                <td className="px-6 py-4">{app.name}</td>
                <td className="px-6 py-4">{app.email || "—"}</td>

                <td className="px-6 py-4">
                  {new Date(app.date).toLocaleDateString()}
                </td>

                <td className="px-6 py-4">
                  {new Date(app.date).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </td>

                <td className="px-6 py-4">
                  {app.status === "pending" && (
                    <span className="px-3 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700">
                      Pending
                    </span>
                  )}
                  {app.status === "approved" && (
                    <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-700">
                      Approved
                    </span>
                  )}
                  {app.status === "cancelled" && (
                    <span className="px-3 py-1 rounded-full text-xs bg-red-100 text-red-700">
                      Cancelled
                    </span>
                  )}
                </td>

                <td className="px-6 py-4 space-x-2">
                  {app.status === "pending" && (
                    <>
                      <button
                        onClick={() => handleApprove(app._id)}
                        className="px-3 py-1 text-xs rounded bg-green-100 text-green-700"
                      >
                        Approve
                      </button>

                      <button
                        onClick={() => handleCancel(app._id)}
                        className="px-3 py-1 text-xs rounded bg-red-100 text-red-700"
                      >
                        Cancel
                      </button>
                    </>
                  )}

                  <button
                    onClick={() => handleDelete(app._id)}
                    className="px-3 py-1 text-xs rounded bg-gray-200 text-gray-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
