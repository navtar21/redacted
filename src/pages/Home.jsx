import Nav from "../components/Nav";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div class="border-x-4 border-black">
      <article>
        <Nav />
        <div className="bg-Silver">
          <h1 className="text-7xl text-center underline pt-3 mb-6">REDACTED</h1>
          <h1 className="text-4xl text-center mb-11">
            Vous souhaite la bienvenue!
          </h1>
          <h2 className="text-4xl text-center mb-10">
            Équipe e-sport, évoluant sur le jeu Clash Of Clan.
          </h2>
          <div className="max-w-2xl mx-auto mb-6">
            <img src="./src/assets/coc.png" alt="logo_jeux" />
          </div>
          <p className="text-3xl text-center mb-8">
            Clan crée le 15 août 2019, avec un Top 10 France 🥇 réaliser le 08
            Mai 2022.
          </p>
          <p className="text-3xl text-center p-1">
            Clan à la recherche de nouveaux défis, et n'attend que vous !
          </p>
          <Footer />
        </div>
      </article>
    </div>
  );
}
