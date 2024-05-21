import React, { useState } from "react";

const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <section className="pt-20 pb-12 lg:pt-[0px] lg:pb-[0 px] dark:bg-dark">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="text-primary mb-2 block text-lg font-semibold">
                Bienvendido a mi Portafolio 
              </span>
              <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
             Proyectos Recientes
              </h2>
              <p className="text-body-color text-base dark:text-dark-6">
                Te muestro un breve resumen donde puse en practicas las tecnologias utilizadas y los conocimientos adquiridos en el <br />Master Full Stack Development 
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-wrap justify-center ">
          <div className="w-full px-4">
            <ul className="flex flex-wrap justify-center mb-12 space-x-1">
              {/* <li className="mb-1">
                <button
                  onClick={() => handleProject("all")}
                  className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                    showCard === "all"
                      ? "activeClasses bg-primary text-white"
                      : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                  }`}
                >
                  All Projects
                </button>
              </li> */}
              <li className="mb-1 ">
                <button
                  onClick={() => handleProject("Cv Html-Ccs")}
                  className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                    showCard === "branding"
                      ? "activeClasses bg-primary text-white"
                      : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                  }`}
                >
                  Html-Ccs
                </button>
              </li>
              <li className="mb-1">
                <button
                  onClick={() => handleProject("Calculadora Js")}
                  className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                    showCard === "design"
                      ? "activeClasses bg-primary text-white"
                      : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                  }`}
                >
                  Calculadora Js
                </button>
              </li>
              <li className="mb-1">
                <button
                  onClick={() => handleProject("E-Commerce")}
                  className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                    showCard === "marketing"
                      ? "activeClasses bg-primary text-white"
                      : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                  }`}
                >
                  E-Commerce
                </button>
              </li>
              {/* <li className="mb-1">
                <button
                  onClick={() => handleProject("development")}
                  className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                    showCard === "development"
                      ? "activeClasses bg-primary text-white"
                      : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                  }`}
                >
                  Portafolio
                </button>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          {/* <PortfolioCard
            ImageHref="https://i.ibb.co/64WfFPt/image-01.jpg"
            category="Web Noticias "
            title="Creative Agency"
            button="Ver Detalles"
            buttonHref="#"
            showCard={showCard}
          /> */}
          <PortfolioCard
            ImageHref="https://i.ibb.co/PT7ghRs/image-06.jpg"
            category="e-Commerce"
            title="Proyecto 3"
            button="Ver Detalles"
            buttonHref="https://tequetapas-es.onrender.com"
            showCard={showCard}
          />
          {/* <PortfolioCard
            ImageHref="https://i.ibb.co/vkt8C1P/image-02.jpg"
            category="E-Commerce"
            title="Creative Agency"
            button="Ver Detalles"
            buttonHref="#"
            showCard={showCard}
          /> */}
          <PortfolioCard
            ImageHref="https://i.ibb.co/3FKqS1G/image-03.jpg"
            category="Calculadora Js"
            title="Proyecto 2"
            button="Ver Detalles"
            buttonHref="https://calculadora-react-gvcm.onrender.com/"
            showCard={showCard}
          />
          {/* <PortfolioCard
            ImageHref="https://i.ibb.co/m6dq2fX/image-04.jpg"
            category="Design"
            title="Creative Agency"
            button="Ver Detalles"
            buttonHref="#"
            showCard={showCard}
          /> */}
          <PortfolioCard
            ImageHref="https://i.ibb.co/mCPjBsH/image-05.jpg"
            category="Html-Ccs"
            title="Proyecto 1"
            button="Ver Detalles"
            buttonHref="https://github.com/NFSD1023/reto-1-maquetacion-gustavoflorez20"
            showCard={showCard}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}) => {
  return (
    <div
      className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
        showCard === "all" || showCard === category.toLowerCase()
          ? "block"
          : "hidden"
      }`}
    >
      <div className="relative mb-12">
        <div className="overflow-hidden rounded-[10px]">
          <img src={ImageHref} alt="portfolio" className="w-full" />
        </div>
        <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
          <span className="text-primary mb-2 block text-sm font-medium">
            {category}
          </span>
          <h3 className="text-dark dark:text-white mb-5 text-xl font-bold">
            {title}
          </h3>
          <a
  href={buttonHref}
  className="text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary hover:text-blue-500 inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-blue"
>
  {button}
</a>
        </div>
      </div>
    </div>
  );
};
