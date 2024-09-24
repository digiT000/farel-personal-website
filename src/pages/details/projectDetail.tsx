import { useLocation } from "react-router-dom";
import Chips from "../../components/chips";
import "../../styles/projectDetail.css";

function ProjectDetail() {
  let location = useLocation();
  let data = location.state;

  return (
    <>
      <main className="projectWrapper mainProjectWrapper">
        <div className="projectWrapper">
          <header className="container">
            <div className="projectHeader">
              <h1 className="bigText">{data.projectTitle}</h1>
              <p className="bodyText">{data.projectDescription}</p>
            </div>
          </header>

          <section className="container">
            <div className="containerWraper statusProfile fade-in">
              <h3 className="heading-s">Tools & Tech</h3>

              <div className="techWrapper">
                {data.projectListType.map((item: any) => {
                  return <Chips isMainType={false} text={item} />;
                })}
              </div>
            </div>
          </section>
        </div>

        <section className="webContainer">
          <div>
            <iframe
              className="webViewContainer"
              src={data.projectUrl}
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </main>
      ;
    </>
  );
}

export default ProjectDetail;
