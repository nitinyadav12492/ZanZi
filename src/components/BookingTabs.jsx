// import React, { useState } from 'react';
// import { Clock, CheckCircle, XCircle, Calendar as CalendarIcon, MapPin, ChevronRight } from 'lucide-react';

// export default function BookingTabs({ bookings = [] }) {
//   const [activeFilter, setActiveFilter] = useState('upcoming');

//   const filters = [
//     { id: 'upcoming', label: 'Upcoming', filterFn: (b) => b.status === 'pending' || b.status === 'confirmed' },
//     { id: 'ongoing', label: 'Ongoing', filterFn: (b) => b.status === 'ongoing' },
//     { id: 'completed', label: 'Completed', filterFn: (b) => b.status === 'completed' },
//     { id: 'cancelled', label: 'Cancelled', filterFn: (b) => b.status === 'cancelled' },
//   ];

//   const currentFilterFn = filters.find(f => f.id === activeFilter).filterFn;
//   const filteredBookings = bookings.filter(currentFilterFn);

//   const getStatusConfig = (status) => {
//     switch(status.toLowerCase()) {
//       case 'pending': return { color: 'text-yellow-700', bg: 'bg-yellow-100', text: 'Pending' };
//       case 'confirmed': return { color: 'text-blue-700', bg: 'bg-blue-100', text: 'Confirmed' };
//       case 'ongoing': return { color: 'text-indigo-700', bg: 'bg-indigo-100', text: 'Ongoing' };
//       case 'completed': return { color: 'text-green-700', bg: 'bg-green-100', text: 'Completed' };
//       case 'cancelled': return { color: 'text-red-700', bg: 'bg-red-100', text: 'Cancelled' };
//       default: return { color: 'text-gray-700', bg: 'bg-gray-100', text: status };
//     }
//   };

//   return (
//     <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      
//       {/* Tabs Header */}
//       <div className="flex border-b border-gray-200 bg-gray-50 px-4">
//         {filters.map(filter => {
//           const isActive = activeFilter === filter.id;
//           return (
//             <button
//               key={filter.id}
//               onClick={() => setActiveFilter(filter.id)}
//               className={`
//                 px-4 py-3 text-sm font-medium border-b-2 transition-colors
//                 ${isActive ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700'}
//               `}
//             >
//               {filter.label}
//             </button>
//           );
//         })}
//       </div>

//       {/* Bookings List */}
//       <div className="p-0">
//         {filteredBookings.length === 0 ? (
//           <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
//             <CalendarIcon className="text-gray-300 mb-3" size={32} />
//             <h3 className="text-base font-semibold text-gray-900">No bookings found</h3>
//             <p className="text-sm text-gray-500 mt-1">You don't have any bookings in this category.</p>
//           </div>
//         ) : (
//           <div className="divide-y divide-gray-100">
//             {filteredBookings.map((booking) => {
//               const statusConf = getStatusConfig(booking.status);
              
//               return (
//                 <div key={booking.id || booking._id} className="p-4 sm:p-6 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center hover:bg-gray-50 transition-colors">
                  
//                   {/* Info */}
//                   <div className="flex gap-4 items-start">
//                     <div className={`mt-1 w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${statusConf.bg}`}>
//                       {statusConf.text === 'Completed' ? <CheckCircle className={statusConf.color} size={20} /> : 
//                        statusConf.text === 'Cancelled' ? <XCircle className={statusConf.color} size={20} /> : 
//                        <Clock className={statusConf.color} size={20} />}
//                     </div>
                    
//                     <div>
//                       <div className="flex items-center gap-2 mb-1">
//                         <span className={`px-2 py-0.5 text-[0.7rem] font-semibold uppercase tracking-wider rounded ${statusConf.bg} ${statusConf.color}`}>
//                           {statusConf.text}
//                         </span>
//                       </div>
//                       <h4 className="font-semibold text-gray-900 text-base">{booking.serviceType}</h4>
                      
//                       <div className="flex flex-col sm:flex-row gap-x-4 gap-y-1 mt-2 text-sm text-gray-500">
//                         <div className="flex items-center gap-1.5">
//                           <CalendarIcon size={14} />
//                           {new Date(booking.date).toLocaleDateString('en-IN', {
//                             month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'
//                           })}
//                         </div>
//                         <div className="flex items-center gap-1.5">
//                           <MapPin size={14} />
//                           {booking.address || 'Address not listed'}
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Actions */}
//                   <div className="flex items-center gap-3 w-full md:w-auto mt-2 md:mt-0">
//                     <div className="hidden md:block mr-4 text-right">
//                       <p className="text-xs text-gray-500 mb-0.5">Professional</p>
//                       <p className="text-sm font-medium text-gray-900">{booking.worker || 'Pending'}</p>
//                     </div>
//                     <button className="flex-1 md:flex-none px-4 py-2 bg-white border border-gray-300 text-gray-700 font-medium text-sm rounded-lg hover:bg-gray-50">
//                       View Details
//                     </button>
//                     {(booking.status === 'pending' || booking.status === 'confirmed') && (
//                       <button className="flex-1 md:flex-none px-4 py-2 border border-red-200 text-red-600 font-medium text-sm rounded-lg hover:bg-red-50">
//                         Cancel
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import styles from "./BookingTabs.module.css";

export default function BookingTabs({ bookings = [] }) {
  const [activeFilter, setActiveFilter] = useState("upcoming");

  const filters = [
    {
      id: "upcoming",
      label: "Upcoming",
      filterFn: (b) => b.status === "pending" || b.status === "confirmed",
    },
    {
      id: "ongoing",
      label: "Ongoing",
      filterFn: (b) => b.status === "ongoing",
    },
    {
      id: "completed",
      label: "Completed",
      filterFn: (b) => b.status === "completed",
    },
    {
      id: "cancelled",
      label: "Cancelled",
      filterFn: (b) => b.status === "cancelled",
    },
  ];

  const currentFilter = filters.find((f) => f.id === activeFilter);
  const filteredBookings = bookings.filter(currentFilter.filterFn);

  const getStatusClass = (status) => {
    switch (status?.toLowerCase()) {
      case "pending":
        return styles.pending;
      case "confirmed":
        return styles.confirmed;
      case "ongoing":
        return styles.ongoing;
      case "completed":
        return styles.completed;
      case "cancelled":
        return styles.cancelled;
      default:
        return styles.defaultStatus;
    }
  };

  const getStatusText = (status) => {
    if (!status) return "Unknown";
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className={styles.wrapper}>
      {/* Tabs */}
      <div className={styles.tabs}>
        {filters.map((filter) => {
          const isActive = activeFilter === filter.id;
          return (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`${styles.tabBtn} ${isActive ? styles.activeTab : ""}`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className={styles.content}>
        {filteredBookings.length === 0 ? (
          <div className={styles.emptyState}>
            <h3>No bookings found</h3>
            <p>You do not have any bookings in this category.</p>
          </div>
        ) : (
          <div className={styles.bookingList}>
            {filteredBookings.map((booking) => (
              <div key={booking.id || booking._id} className={styles.bookingCard}>
                <div className={styles.left}>
                  <span
                    className={`${styles.statusBadge} ${getStatusClass(
                      booking.status
                    )}`}
                  >
                    {getStatusText(booking.status)}
                  </span>

                  <h4 className={styles.serviceName}>{booking.serviceType}</h4>

                  <div className={styles.meta}>
                    <p>
                      <strong>Date:</strong>{" "}
                      {new Date(booking.date).toLocaleDateString("en-IN", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>

                    <p>
                      <strong>Time:</strong>{" "}
                      {new Date(booking.date).toLocaleTimeString("en-IN", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>

                    <p>
                      <strong>Address:</strong>{" "}
                      {booking.address || "Address not listed"}
                    </p>

                    <p>
                      <strong>Professional:</strong> {booking.worker || "Pending"}
                    </p>
                  </div>
                </div>

                <div className={styles.right}>
                  <button className={styles.detailsBtn}>View Details</button>

                  {(booking.status === "pending" ||
                    booking.status === "confirmed") && (
                    <button className={styles.cancelBtn}>Cancel</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}