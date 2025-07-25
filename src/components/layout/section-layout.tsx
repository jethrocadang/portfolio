import { cn } from "@/lib/utils";

export default function Section({
  children,
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      className={cn("mx-auto max-w-6xl px-5 py-12", className)}
      {...props}
    >
      {children}
    </section>
  );
}
