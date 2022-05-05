import workExperience from "../data/work.yaml";
import ReactMarkdown from "react-markdown";

function Highlights({ highlights }: { highlights: string[] }) {
  return (
    <div className="ml-4">
      {Array.isArray(highlights) ? (
        <ul className="dashed-ul">
          {highlights.map((w: any, i: number) => {
            return <li key={i}>{w}</li>;
          })}
        </ul>
      ) : (
        <ul className="dashed-ul">
          <li>{highlights}</li>
        </ul>
      )}
    </div>
  );
}

function Keywords({ keywords }: { keywords: string[] }) {
  return (
    <div className="ml-4 pt-4">
      <h2 className="font-semibold pb-1">Technology used:</h2>
      <ul className="dashed-ul">
        {keywords.map((w: string, i: number) => {
          return <li key={i}>{w}</li>;
        })}
      </ul>
    </div>
  );
}

export const Experience = () => {
  return (
    <section>
      <h2 className="text-2xl pb-6 font-bold uppercase text-bright-red">
        Work Experience
      </h2>

      <section>
        {workExperience.map((work: any, i: number) => {
          return (
            <div className="pb-xxl" key={i}>
              <div>
                <div className="flex justify-between flex-col sm:flex-row">
                  <span className="font-bold text-lg">
                    {work.position}
                    <span className="text-gray-400 mx-0.5 text-xl">@</span>
                    {work.website ? (
                      <a
                        className="text-deep-purple border-gray-400 border-b"
                        target="_blank"
                        rel="noreferrer"
                        href={work.website}
                      >
                        {work.company}
                      </a>
                    ) : (
                      <span className="text-gray-600">{work.company}</span>
                    )}
                  </span>

                  <span className="text-gray-500">
                    {work.startDate}—{work.endDate}
                  </span>
                </div>
              </div>

              <div className="pt-3">
                {work.summary && (
                  <div>
                    <ReactMarkdown>{work.summary}</ReactMarkdown>
                  </div>
                )}

                {work.highlights && <Highlights highlights={work.highlights} />}
                {work.keywords && <Keywords keywords={work.keywords} />}
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};
