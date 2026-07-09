export default function AvailabilityBadge({ className = "" }) {
  return (
    <span
      className={`availability-badge ${className}`.trim()}
      role="status"
      aria-label="Currently available to work"
    >
      <span className="availability-dot" aria-hidden="true">
        <span className="availability-dot-inner"></span>
      </span>
      Available to work
    </span>
  );
}
