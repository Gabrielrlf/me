import type { Metadata } from "next";
import { ResumeActions } from "@/components/ResumeActions";
import { ResumeContent } from "@/components/ResumeContent";

export const metadata: Metadata = {
  title: "Resume — Gabriel Fonseca",
  robots: { index: false },
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 print:bg-white">
      <ResumeActions />
      <ResumeContent />
    </div>
  );
}
