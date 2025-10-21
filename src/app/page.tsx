'use client';
import Landing from "./components/landing/landing";
import CallingCard from './components/callingCard/callingCard';
import Navigation from "./components/navigation/navigation";

export default function StartPage() {
  return (
    <div>
    <CallingCard></CallingCard>
    <Navigation></Navigation>
    <Landing></Landing>
    </div>
);
}
