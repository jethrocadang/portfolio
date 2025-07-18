import { Button } from "../ui/button";

export function ContactInfoSection() {
  return (
    <section className="flex h-full items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Get in Touch.</h1>
        <p> Currently I am open for job offer, feel free to contact me via email. Looking forward for your message!</p>
        <div className="space-x-2.5">
          <Button>Send Email</Button>
          <Button>Curicullum Vitae</Button>
        </div>
      </div>
    </section>
  );
}
