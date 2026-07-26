import OpeningsBoard from "@/components/OpeningsBoard";
import { profile } from "@/data/profile";
import data from "@/data/openings.json";

export const metadata = {
  title: `Research Openings — ${profile.name}`,
  description:
    "Open research assistant and project positions across ongoing collaborations.",
};

export default function OpeningsPage() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Research Openings</h1>
          <p>
            Positions on research projects I'm involved with — typically working
            under a faculty advisor alongside a PhD student. Roles are listed
            with the advisor, the time commitment, and what background helps.
            If something fits, write to me directly.
          </p>
        </div>
      </header>

      <div className="container" style={{ paddingBottom: 72 }}>
        <OpeningsBoard
          openings={data.openings}
          universities={data.universities}
        />
      </div>
    </>
  );
}
