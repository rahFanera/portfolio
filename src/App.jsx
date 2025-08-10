import BackgroundBlobs from "./components/BackgroundBlobs";
import MainCard from "./components/MainCard";

export default function App() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden bg-gray-950 px-4 py-8">
      <BackgroundBlobs />
      <div className="absolute inset-0 bg-[radial-gradient(white,transparent_1px)] bg-[length:3px_3px] opacity-10"></div>
      <MainCard />
    </div>
  );
}
