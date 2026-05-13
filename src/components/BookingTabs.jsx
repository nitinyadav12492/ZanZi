
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