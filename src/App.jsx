import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="h-screen bg-blue-950">
      <Navbar />
      <div className="flex justify-center bg-blue-950">
        <div className="p-6 gap-y-6 flex flex-col justify-start w-[80%] lg:w-[70%]">
          <h1 className="w-full p-6 bg-amber-100 font-extrabold text-center text-4xl">
            My React Template
          </h1>
          <section className="w-full p-5 bg-amber-100 flex">
            <ul className="list-inside list-disc flex-1">
              <span className="font-semibold">Tech Stack:</span>
              <li>Vite</li>
              <li>React</li>
              <li>JavaScript</li>
              <li>Tailwind</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
