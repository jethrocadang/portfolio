import { Hexagon } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="mx-auto mb-24 flex items-center space-y-2.5 border px-28 text-start">
        <div className="w-full space-y-2.5 border">
          <p className="text-md font-semibold tracking-widest">Hello! I am,</p>
          <div>
            <h1 className="text-5xl font-bold"> Jethro R. Cadang</h1>
            <h1 className="text-5xl font-bold">
              Passionate Developer & Problem Solver
            </h1>
          </div>
          <p className="border w-2xl">
            Aspiring Software Engineer dedicated to mastering the art of web
            development. I&apos;m actively building applications that challenge
            me to grow while preparing for my next career milestone.
          </p>
          <button className="border">
            View my work
          </button>
        </div>
        <div>
          <Hexagon className="" size={500} />
        </div>
      </div>
    </section>
  );
}
