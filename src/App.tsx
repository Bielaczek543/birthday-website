import { useEffect, useState } from "react";
import obraz1 from "./assets/obraz1.png";
import obraz2 from "./assets/obraz2.png";
import obraz3 from "./assets/obraz3.png";
import obraz4 from "./assets/obraz4.png";
import obraz5 from "./assets/obraz5.png";

const memories = [
  {
    number: "01",
    chapter: "WSZYSTKO MA SWÓJ POCZĄTEK",
    title: "Zaczęło się od klocków.",
    description:
      "Kto by pomyślał, że dwójka dzieciaków bawiących się razem w przedszkolu będzie miała kiedyś tyle wspólnych historii? Wtedy naszym największym problemem było to, kto zbuduje większą wieżę z klocków. Nie wiedzieliśmy jeszcze, ile przygód przed nami.",
    image: obraz2,
    caption: "Mały początek wielkiej historii",
    layout: "left",
  },
  {
    number: "02",
    chapter: "PIERWSZE WIELKIE PRZYGODY",
    title: "Witaj Paryż😈",
    description:
      "Trochę podrośliśmy, a nasze zabawy zamieniły się w prawdziwe przygody. Tym razem Paryż, wieża Eiffla i wspólne odkrywanie świata. Kiedyś bawiliśmy się w przedszkolu, a teraz zwiedzamy Francję. Całkiem nieźle nam idzie!",
    image: obraz3,
    caption: "Paryż, Francja",
    layout: "right",
  },
  {
    number: "03",
    chapter: "NIE WSZYSTKO ZAWSZE SZŁO ZGODNIE Z PLANEM",
    title: "Bywało różnie...",
    description:
      "Nie będziemy udawać, że zawsze byliśmy rozsądni. Były wieczory, których może nie pamiętamy w każdym szczególe, i sytuacje, w których najlepszym pomysłem było po prostu odpocząć. Ale właśnie takie momenty też tworzą nasze wspomnienia. Najważniejsze, że zawsze jest się z czego pośmiać.",
    image: obraz5,
    caption: "Tego wieczoru już wystarczyło przygód",
    layout: "left",
  },
  {
    number: "04",
    chapter: "ILE JESZCZE PRZED NAMI?",
    title: "Dobrze mieć kogoś obok.",
    description:
      "Z czasem człowiek zaczyna rozumieć, że nie chodzi tylko o wielkie podróże i spektakularne przygody. Liczą się też zwykłe chwile, rozmowy, śmiech i ludzie, z którymi można po prostu być sobą. Mam nadzieję, że jeszcze długo będziemy zbierać takie momenty.",
    image: obraz4,
    caption: "Kolejne wspomnienia dopiero przed nami",
    layout: "right",
  },
  {
    number: "05",
    chapter: "TO JESZCZE NIE KONIEC",
    title: "Od przedszkola na sam szczyt.",
    description:
      "Kto by pomyślał, że zajdziemy aż tak daleko? Od zabawy klockami po zdobywanie Mount Everestu. Może jeszcze nie zdobyliśmy wszystkich szczytów, ale jedno jest pewne — najlepsze przygody dopiero przed nami. A jak już coś robimy, to oczywiście razem!",
    image: obraz1,
    caption: "Mount Everest · 8 848 m",
    layout: "left",
  },
];

function Fireworks() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {Array.from({ length: 14 }).map((_, i) => (
        <div
          key={i}
          className="firework"
          style={{
            left: `${5 + ((i * 31) % 90)}%`,
            top: `${8 + ((i * 19) % 75)}%`,
            animationDelay: `${(i % 7) * 0.7}s`,
          }}
        />
      ))}
    </div>
  );
}

function App() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(".reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#080a10] text-white overflow-hidden">
      <Fireworks />

      {/* HERO */}
      <section className="relative z-10 min-h-screen flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#29223b_0%,_transparent_65%)] opacity-70" />

        <div className="relative">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-tight">
            Wszystkiego
            <br />
            najlepszego,
            <br />
            <span className="text-amber-300 italic">Ksawery</span>
          </h1>

          <p className="text-gray-400 mt-8 text-lg max-w-lg mx-auto">
            Od przedszkola aż po Mount Everest. Jedna znajomość, tysiące
            wspomnień.
          </p>

          <a
            href="#historia"
            className="inline-block mt-12 px-8 py-4 rounded-full bg-amber-300 text-black font-semibold hover:bg-amber-200 transition hover:scale-105"
          >
            Rozpocznij podróż ↓
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section
        id="historia"
        className="relative z-10 py-32 px-6 text-center reveal"
      >
        <h2 className="text-4xl md:text-6xl font-semibold">
          Każda historia
          <br />
          ma swój <span className="text-amber-300 italic">początek.</span>
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mt-8 leading-8">
          Zamiast zwykłych życzeń przygotowałem małą podróż przez kilka naszych
          wspólnych momentów. Cofnijmy się na chwilę.
        </p>
      </section>

      {/* HISTORIA */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
        {memories.map((memory, index) => (
          <article
            key={memory.number}
            className={`reveal flex flex-col ${
              memory.layout === "right" ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-10 md:gap-20 mb-36`}
          >
            <div className="w-full md:w-[55%] relative group">
              <div className="absolute -inset-3 bg-amber-300/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700" />

              <div className="relative overflow-hidden rounded-xl border border-white/10">
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-amber-200 text-xs tracking-widest">
                    {memory.caption}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-[45%]">
              <p className="text-amber-300 tracking-[0.25em] text-xs mb-6">
                {memory.chapter}
              </p>

              <span className="text-white/10 text-7xl font-bold block mb-3">
                {memory.number}
              </span>

              <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
                {memory.title}
              </h2>

              <p className="text-gray-400 mt-7 leading-8">
                {memory.description}
              </p>

              <div className="w-16 h-[2px] bg-amber-300 mt-8" />
            </div>
          </article>
        ))}
      </section>

      {/* ŻYCZENIA */}
      <section className="relative z-10 py-36 px-6 text-center bg-gradient-to-b from-transparent via-amber-300/5 to-transparent reveal">
        <p className="text-amber-300 tracking-[0.3em] text-xs mb-8">
          NAJWAŻNIEJSZE NA KONIEC
        </p>

        <h2 className="text-5xl md:text-7xl font-bold leading-tight">
          Wszystkiego
          <br />
          <span className="text-amber-300 italic">najlepszego!</span>
        </h2>

        <div className="max-w-2xl mx-auto mt-12 text-gray-300 leading-9">
          <p>
            Ksawery życzę Ci przede wszystkim zdrowia, szczęścia, spełnienia
            wszystkich marzeń i samych dobrych ludzi wokół. Żebyś nigdy nie
            stracił swojego charakteru, odwagi i chęci do rozchmurzania ludzi
            wokół swoim optymistycznym podejściem. I pamiętaj, żeby się uczyć na
            elektryke do dziada.
          </p>

          <p className="mt-10 text-amber-300 text-xl italic">
            To dopiero początek. ❤️
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
