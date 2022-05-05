type education = {
  institution?: string;
  area?: string;
  studyType?: string;
  startDate?: string;
  endDate?: string;
  gpa?: string;
  courses?: string;
};

const StudyType = ({ education }: { education: education }) => {
  if (!education.studyType) {
    return <h2 className="font-bold text-lg">{education.institution}</h2>;
  }
  return (
    <div>
      <h2 className="font-bold text-lg">{education.studyType}</h2>
      <h2>{education.institution}</h2>
    </div>
  );
};

export const Education = ({
  sectionHeader,
  education,
}: {
  sectionHeader: string;
  education: education[];
}) => (
  <section className="pb-6">
    <h2 className="text-xl pb-6 font-bold uppercase text-bright-red">
      {sectionHeader}
    </h2>
    <section>
      {education.map((edu, i) => {
        return (
          <div className="pb-5" key={i}>
            <StudyType education={edu} />
            <span className="text-gray-500">
              {edu.area && <p className="">{edu.area}</p>}
            </span>
          </div>
        );
      })}
    </section>
  </section>
);

{
  /* <div className="pb-5">
  {% if educationItem.studyType %}
    <div>
      <h2 className="font-bold text-lg">
        {{ educationItem.studyType }}
      </h2>
      <h2>
        {{ educationItem.institution }}
      </h2>
    </div>
  {% else %}
    <h2 className="font-bold text-lg">
      {{ educationItem.institution }}
    </h2>
  {% endif %}

  {% if educationItem.area %}
    <p className="">
      {{ educationItem.area }}
    </p>
  {% endif %}
</div> */
}
