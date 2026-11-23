import type { Metadata } from "next";
import CareerModeScreen from "./components/CareerModeScreen";

export const metadata: Metadata = { title: "Career mode · Callback" };

export default function CareerModePage() {
  return <CareerModeScreen />;
}
