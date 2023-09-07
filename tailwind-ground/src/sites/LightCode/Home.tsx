import IMAGES from "../../Images/Images";

const Home = () => {
  return (
    <section id="home" className="relative">
      <div className="w-80 h-80 bg-color-blob absolute top-0 -left-5 -z-10 blur-2xl opacity-30 overflow-hidden rounded-full" />
      <div className="w-80 h-80 bg-color-secondary absolute  bottom-10 right-0 -z-10 blur-2xl opacity-30 overflow-hidden rounded-full" />
      <div className="container py-20">
        <div className="flex flex-col items-center z-20 md:flex-row">
          <div className="text-center mb-12 md:text-left md:w-1/2 md:pr-12">
            <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
              Awesome App for Your Something
            </h1>
            <p className="leading-relaxed mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              rerum ullam adipisci odio vel nemo in voluptate pariatur dolores
              accusamus veniam iusto!.
            </p>
            <button className="btn">Download App</button>
          </div>

          <div className="md:w-1/2">
            <img src={IMAGES.hero4} alt="hero4"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
