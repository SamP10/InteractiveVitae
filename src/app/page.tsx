'use client';
import Landing from "./components/landing/landing";
import CallingCard from './components/callingCard/callingCard';
import NavigationContainer from "./components/navigation/navigationContainer/navigationContainer";

export default function StartPage() {
  return (
    <div>
    <CallingCard></CallingCard>
    <NavigationContainer></NavigationContainer>
    <Landing></Landing>
    </div>
);
}
