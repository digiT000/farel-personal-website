import profileImage from "../assets/profileImage.jpg";
import NavigationBar from "../components/navigationBar";
import "../styles/home.css";

function App() {
  return (
    <main>
      <header className="container">
        <div className="containerWrapper headerWrapper fade-in">
          <img className="profileImage" src={profileImage} alt="" />
          <div className="profileInfo">
            <p className="bodyText">Hi There 👋</p>
            <h1 className="heading-l">I’m Farel Darari Deksano</h1>
          </div>
        </div>
      </header>
      <section id="detailProfile" className="container">
        <div className="containerWrapper profile fade-in">
          <h2 className="bigText orange">A Designer & Developer</h2>
          <p className="bodyText">
            Hey there! 👋 Thanks for checking me out. I've got 2+ years of
            design experience under my belt and I'm currently on a mission to
            become a keyboard ninja, AKA a developer! ⌨️
          </p>
        </div>
      </section>
      <section className="container">
        <div className="containerWraper statusProfile fade-in">
          <h3 className="heading-s">Currently busy</h3>
          <div className="status">
            <h3 className="heading-s">Bootcamp in purwhadika</h3>
          </div>
        </div>
      </section>
      <NavigationBar />
    </main>
  );
}

export default App;
