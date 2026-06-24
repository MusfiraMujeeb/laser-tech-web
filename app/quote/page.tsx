import { Suspense } from "react";
import QuoteClient from "./quote-client";

export default function QuotePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F8F6F2] px-4 py-12 text-[#26322E]">
          <div className="max-w-5xl mx-auto">Loading...</div>
        </div>
      }
    >
      <QuoteClient />
    </Suspense>
  );
}