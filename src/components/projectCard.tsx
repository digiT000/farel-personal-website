import "../styles/components/projectCard.css";

import Chips from "./chips";

// interface MainType {
//   typeName: string;
// }

interface projectCardProps {
  title: string;
  description: string;
  listType: string[];
  mainType: string;
  url: string;
  onClick: () => void;
}

function ProjectCard({
  title,
  description,
  listType,
  mainType,
  onClick,
}: projectCardProps) {
  const truncatedText = description.substring(0, 128) + "...";

  return (
    <a className="projectContainer" href="" onClick={onClick}>
      <div className="projectCardContainer">
        <Chips isMainType={true} text={mainType} />
        <div className="projectBody">
          <h3 className="heading-s">{title}</h3>
          <p className="bodyText ">
            {description.length >= 128 ? truncatedText : description}
          </p>
        </div>
        <div className="listWrapper">
          {listType.map((item) => {
            return <Chips isMainType={false} text={item} />;
          })}
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
