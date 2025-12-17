'use client';
import Landing from "./components/landing/landing";
import NavigationBar from "./components/navigation/navigationBar/navigationBar";
import NavigationContainer from "./components/navigation/navigationContainer/navigationContainer";

export default function StartPage() {
  return (
    <div>
    <NavigationBar></NavigationBar>
    {/* <NavigationContainer></NavigationContainer> */}
    <Landing></Landing>
    </div>
);
}
