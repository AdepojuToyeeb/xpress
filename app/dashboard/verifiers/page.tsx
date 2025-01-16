import { VerifiersTable } from "@/components/verifiers-table";
import { verifiers } from "@/lib/verifier-data";

export default function VerifiersPage() {
  return (
    <div className="space-y-4">
      <VerifiersTable verifiers={verifiers} />
    </div>
  );
}
