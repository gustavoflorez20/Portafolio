import React from "react";
import yoImage from "../images/yo2.jpg";
import Code from "../images/technology-1283624_1280.jpg";
const Mediun = () => {
  return (
    <nav className="bg-blue dark:bg-white-800 w-full py-8">
      <div className="mediun grid grid-cols-3 gap-3">
        <div className="flex justify-left items-left">
          <div className="text-center ml-0">
            {" "}
            <br />
            <br />
            <br />
            
            Un apasionado por el
            desarrollo de software. Me siento atraído por el mundo de la
            tecnología y estoy emocionado por explorar nuevas oportunidades y
            desafíos en este campo. Tengo un gran interés en trabajar con código
            y desarrollar habilidades en el área de la programación.
          </div>
        </div>
        <img
          src={yoImage}
          alt="Imagen"
          className="h-50 w-50"
          style={{ borderRadius: "20%" }}
        />

        <div className="text-center ml-0">
          {" "}
          <br />
            <br />
            <br />
          He Trabajado Backend con las tecnologias:
          <ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
</ul><br />
          He Trabajado Frontend con las tecnologias:
          <ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
</ul>
        </div>
      </div>
    </nav>
  );
};

export default Mediun;
