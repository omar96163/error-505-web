import Navbar from "./components/navbar";
import Main from "./components/main";

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <Main />
    </div>
  );
}
