import basics from "../data/basics.yaml";

export const SocialLinks = () => {
  return (
    <div className="flex justify-start">
      {basics.profiles.map((profile: any, i: number) => {
        return (
          <a
            key={i}
            className="mr-6 text-gray-500 hover:text-gray-700 transition-colors duration-100"
            href={profile.url}
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">{profile.network}</span>
            <img
              alt="social-icon"
              width="30px"
              height="30px"
              src={`/images/${profile.network.toLowerCase()}.svg`}
            />
          </a>
        );
      })}
    </div>
  );
};
