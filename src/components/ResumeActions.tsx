"use client";

import Link from "next/link";

export function ResumeActions() {
  return (
    <div className="no-print fixed right-4 top-4 z-50 flex gap-2">
      <button
        type="button"
        onClick={() => window.print()}
        className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
      >
        Print / Save as PDF
      </button>
      <Link
        href="/"
        className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        Back to Portfolio
      </Link>
    </div>
  );
}
