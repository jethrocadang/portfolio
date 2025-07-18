"use client";

export default function AboutMeSection() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="font-bold text-2xl">About Me</h1>
      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          Hello! I&apos;m{" "}
          <span className="font-semibold text-blue-600">Jethro Cadang</span>, a
          fresh graduate with a BS in Information Systems. While I&apos;m still
          growing in my field, I&apos;m committed to becoming competitive
          through continuous learning and hands-on experience.
        </p>

        <p>
          My programming journey began during my third year when I decided to
          explore uncharted territory. Originally focused on project management,
          I discovered that programming offered something more fulfilling—the
          incredible satisfaction of solving complex problems through code.
        </p>

        <p>
          This led me to start building web applications with{" "}
          <span className="font-medium">Next.js</span>, a framework that
          immediately captured my interest with its excellent documentation and
          powerful capabilities. What started as curiosity quickly transformed
          into a genuine passion for creating clean, readable, and efficient
          codebases.
        </p>

        <p>
          Today, I&apos;m dedicated to keeping pace with our rapidly evolving
          tech landscape by building practical web applications and tackling
          real-world problems. Each project is an opportunity to learn something
          new and push my skills further.
        </p>

        <div className="mt-8 border-t border-gray-200 pt-6">
          <p className="text-center text-gray-600 italic">
            &apos;Every problem is a puzzle waiting to be solved, and every
            solution is a step toward mastery.&apos;
          </p>
        </div>
      </div>
    </div>
  );
}
