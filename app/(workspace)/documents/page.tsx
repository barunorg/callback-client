import type { Metadata } from "next";
import DocumentsScreen from "./components/DocumentsScreen";

export const metadata: Metadata = { title: "Documents · Callback" };

export default function DocumentsPage() {
  return <DocumentsScreen />;
}
