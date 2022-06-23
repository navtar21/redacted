import Footer from "../components/footer";
import Nav from "../components/Nav";

function Recruitment() {
  return (
    <>
      <div>
        <Nav />
        <div className="bg-Silver">
          <h1 className="text-7xl text-center pt-3">Qui sommes nous? 🤔</h1>
          <p className="text-2xl text-justify m-9">
            🔵 [REDACTED] est un clan actuellement basé sur les gdc ⚔️et ldc qui
            évolue dans une très bonne ambiance et dans lequel tout le monde
            s'entraide.
          </p>
          <p className="text-2xl text-justify m-9">
            🔵 Nous avons longtemps été un clan rush, avec un record top 8 fr🏆,
            et nous avions également une équipe esport🥇 ayant évolué à un bon
            niveau et ayant remporté plusieurs compétitions.{" "}
          </p>
          <h2 className="text-3xl text-center underline">
            Pourquoi nous rejoindre ?
          </h2>
          <p className="text-2xl text-justify m-9">
            🔴 Et bien vous avez du le comprendre : nous avons de nombreux bons
            joueurs que ce soit en rush ou en esport, qui pourront vous aider à
            vous améliorer.
          </p>
          <p className="text-2xl text-justify m-9">
            🔴 Vous pourrez participer à des gdc compétitives sans trop de
            pression, nous enchaînons régulièrement les victoires avec
            régulièrement des séries de 9-15 victoires consécutives.
          </p>
          <p className="text-2xl text-justify m-9">
            🔴 Nous vous proposons également des ldc pour tous : le clan
            principal est en maître 3 et tous ceux n'ayant pas le niveau requis
            pour jouer en maître 3 pourront faire les ldc dans notre 2ème clan
            ldc en or 1.
          </p>
          <p className="text-2xl text-justify m-2 p-7">
            🔴Et pour finir, sachez que si vous nous rejoignez : vous rejoindrez
            un clan fort, avec de l'expérience, mais surtout un clan ambitieux
            qui voit grand avec des objectifs et dans lequel tout est mis en
            place pour atteindre ces objectifs de la meilleure des manières :
            dans la bonne ambiance. Et voilà ! Si jamais tu es intéressé où as
            des questions je te laisse me mp où alors rejoindre notre serveur
            discord 😉
          </p>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Recruitment;
