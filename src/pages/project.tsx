import { useNavigate } from "react-router-dom";
import NavigationBar from "../components/navigationBar";
import ProjectCard from "../components/projectCard";
import "../styles/project.css";

// Data project

const data = [
  {
    id: 1,
    categories: "Website Development",
    title: "Product List with adding to cart function",
    description:
      "Hey there! I wanted to share my latest project with you. I've been working on creating my personal website, and I'm really excited about how it's turning out. It took me about 5 days to design and develop, which was quite a challenge since I was new to using React. Come check out my website and see what I've been up to!",
    listType: ["HTML", "Vanilla CSS", "Vanilla JS"],
    url: "https://digit000.github.io/becomeDeveloper2025/product-list-with-cart-main/index.html",
  },
  {
    id: 2,
    categories: "Website & Design",
    title: "Custom Design BLog",
    description:
      "Hi, check out my latest exploration of my personal website building with react",
    listType: ["Figma", "HTML", "CSS", "Javascript"],
    url: "https://digit000.github.io/becomeDeveloper2025/product-list-with-cart-main/index.html",
  },
];

function Project() {
  const navigate = useNavigate();

  return (
    <main>
      <header className="container">
        <div className="containerWrapper headerContainer">
          <h1 className="heading-l">My Project</h1>
          <p className="bodyText">
            I'm a bit of a web-building hobbyist. Take a look and see what you
            think!
          </p>
        </div>
      </header>
      <section className="container">
        <div className="projectList">
          {data.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                mainType={project.categories}
                title={project.title}
                description={project.description}
                listType={project.listType}
                url={project.url}
                onClick={() => {
                  navigate("/my-project/" + project.title, {
                    state: {
                      projectTitle: project.title,
                      projectDescription: project.description,
                      projectListType: project.listType,
                      projectUrl: project.url,
                    },
                  });
                }}
              />
            );
          })}
        </div>
      </section>

      <NavigationBar />
    </main>
  );
}

export default Project;
