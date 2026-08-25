import { useOnlineStatus } from "../hooks/useonlinestatus";

export default function OfflineBanner() {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="offline-banner">
      You're offline — changes will be saved and synced once you're back online.
    </div>
  );
}