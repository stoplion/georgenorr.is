import ReactMarkdown from "react-markdown";
import basics from "../data/basics.yaml";
import { SocialLinks } from "./SocialLinks";

export const Header = () => {
  return (
    <header className="pb-7">
      <h1 className="uppercase text-4xl font-bold pb-7">{basics.name}</h1>

      <div className="pb-7">
        <SocialLinks />
      </div>

      <p className="pb-6 text-lg">
        <ReactMarkdown
          components={{
            br: "br",
          }}
        >
          {basics.summary}
        </ReactMarkdown>
      </p>
    </header>
  );
};
