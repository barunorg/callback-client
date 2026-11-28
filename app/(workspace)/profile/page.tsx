import type { Metadata } from "next";
import ClientOnly from "@/components/shared/ClientOnly";
import ProfileScreen from "./components/ProfileScreen";
import ProfileSkeleton from "./components/ProfileSkeleton";

export const metadata: Metadata = { title: "Profile" };

// Data is per-user, so the screen renders (and fetches) only in the browser.
// The static HTML shows the matching skeleton instead.
export default function ProfilePage() {
  return (
    <ClientOnly fallback={<ProfileSkeleton />}>
      <ProfileScreen />
    </ClientOnly>
  );
}
