import { PatientForm } from "@/components/forms";
import Image from "next/image";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
            priority
          />
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © {currentYear} CarePulse
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
