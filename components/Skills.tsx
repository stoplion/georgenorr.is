import skills from "../data/skills.yaml";

export function Skills() {
  return (
    <section className="pb-6">
      <h2 className="text-xl pb-6 font-bold uppercase text-bright-red">
        Skills
      </h2>
      <section>
        {skills.map((skill: any, i: number) => {
          return (
            <div className="pb-5" key={i}>
              <h2 className="font-bold text-lg pb-2">{skill.name}</h2>

              {skill.keywords.sort().map((keyword: any) => {
                return (
                  <div
                    key={keyword}
                    className="text-sm mb-2 inline-flex items-center leading-sm px-3 py-1 bg-gray-200 rounded-full mr-2"
                  >
                    {keyword}
                  </div>
                );
              })}
            </div>
          );
        })}
      </section>
    </section>
  );
}
