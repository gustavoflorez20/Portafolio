import React from "react";
import yoImage from "../images/yo.jpg";
const Cv = () => {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-white px-0 py-0 sm:py-0 lg:px-0">
        <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <figure className="mt-10">
              <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>
                Luego mi máster en desarrollo web , estoy emocionado por comenzar mi carrera como
desarrollador web. Me enfoque en JavaScript, HTML y CSS, y utilicé herramientas como
Visual Studio Code y Git para colaborar en proyectos. Adquirí experiencia en la creación de
páginas web interactivas con React, en el desarrollo de backend con Node.js y Express.js.
También sobre bases de datos NoSQL como MongoDB . Estoy ansioso por aplicar mis
habilidades en el mundo real y seguir creciendo profesionalmente.
                </p>
              </blockquote>
              <figcaption className="mt-10">
                <img className="mx-auto h-10 w-10 rounded-full" src={yoImage} />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-gray-900">
                    Gustavo Florez
                  </div>
                  <svg
                    viewBox="0 0 2 2"
                    width={3}
                    height={3}
                    aria-hidden="true"
                    className="fill-gray-900"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="text-gray-600">Jr Web Developer</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
      </section>

      <div className="bg-white py-0 sm:py-0">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              {/* <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Datos Personales
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Móvil: 722 29 79 54
                <br />
                Mail: <a href="mailto:gustavoflorez20@gmail.com">gustavoflorez20@gmail.com</a>
                <br />
                
                Residencia en Madrid
              </p> */}
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="flex max-w-xl flex-col items-start justify-between"
                >
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      src={post.author.imageUrl}
                      alt=""
                      className="h-10 w-10 rounded-full bg-gray-50"
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <a href={post.author.href}>
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </a>
                      </p>
                      <p className="text-gray-600">{post.author.role}</p>
                    </div>
                  </div>
                </article>
              ))}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cv;

const posts = [
  {
    id: 1,
    title: "Full Stack Development",
    href: "https://www.linkedin.com/in/gustavo-adolfo-fl%C3%B3rez-mier-y-ter%C3%A1n-016856169/",
    description:
      "El máster te permitirá establecer los fundamentos de programación y tecnologías modernas, simulando la realidad del trabajo de desarrollo full stack en una empresa. Aprenderás a programar en los lenguajes y frameworks más demandados, familiarizándote con el uso de todo el tech stack de desarrollo.",
    date: "2023",
    datetime: "2024-03-30",
    category: { title: "Programacion Web", href: "https://www.linkedin.com/feed/update/urn:li:activity:7175757259178733568/" },
    author: {
      name: "Master Full Development",
      role: "Nuclio Digital School 2024/ ESP",
      href: "https://www.linkedin.com/school/nuclio-digital/",
      imageUrl:
        "https://media.licdn.com/dms/image/C4E0BAQEvo-2saevpQQ/company-logo_100_100/0/1671022724807/nuclio_digital_logo?e=1720051200&v=beta&t=tUefoqRtXndALCll_ncgVw9jFKoiN68BUwtN-etCMvM",
    },
  },
  {
    id: 2,
    title: "Ciberseguridad ",
    href: "https://grow.google/intl/es/courses-and-tools/",
    description:
      "Enseña a identificar los riesgos, amenazas y vulnerabilidades más comunes en materia de ciberseguridad, así como las técnicas para mitigarlos.",
    date: "2022",
    datetime: "2024-03-30",
    category: { title: "Ciberseguridad ", href: "https://www.linkedin.com/feed/update/urn:li:activity:7175757259178733568/" },
    author: {
      name: "Cloud Computing",
      role: "Google Activate 2022/ ESP",
      href: "https://grow.google/intl/es/courses-and-tools/",
      imageUrl:
        "https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png",
    },
  },
  {
    id: 3,
    title: "Cloud Computing",
    href: "https://grow.google/intl/es/courses-and-tools/",
    description:
      "¿Sabes qué beneficios aporta el uso de la tecnología Cloud Computing a un proyecto? Descubre a lo largo de este curso sin coste cómo transformar un negocio e innovar dentro de tu empresa a la vez que reduces sus costes. Además, aprende cómo tener acceso a tu información en cualquier dispositivo y de forma segura.",
    date: "2022",
    datetime: "2024-03-30",
    category: { title: "Cloud Service", href: "https://www.linkedin.com/feed/update/urn:li:activity:7175757259178733568/" },
    author: {
      name: "Master Full Development",
      role: "Google Activate 2022/ ESP",
      href: "https://grow.google/intl/es/courses-and-tools/",
      imageUrl:
        "https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png",
    },
  },
  {
    id: 4,
    title: "Grado en Informatica",
    href: "https://www.linkedin.com/in/gustavo-adolfo-fl%C3%B3rez-mier-y-ter%C3%A1n-016856169/",
    description:
      "La mención en Computación te capacitará para evaluar la dificultad de un problema de computación, identificar las máquinas, los lenguajes y los paradigmas de programación más adecuados, y diseñar e implementar la mejor solución informática.",
    date: "2023",
    datetime: "2024-03-30",
    category: { title: "Estudios Univeritarios", href: "https://www.linkedin.com/feed/update/urn:li:activity:7175757259178733568/" },
    author: {
      name: "Licenciatura",
      role: "U.N.E Simón Rodríguez/ 2017 / VEN",
      href: "http://www.unesr.edu.ve/",
      imageUrl:
        "https://media.licdn.com/dms/image/C4E0BAQFVbrnNIzN2nw/company-logo_200_200/0/1630564567434/universidad_nacional_experimental_simon_rodriguez_logo?e=2147483647&v=beta&t=7HnJSFurooMbQe43-fmKF5gsbi6FNJRaGLylyAMux8E",
    },
  },
  {
    id: 5,
    title: "Técnico en Mecánica Automotriz",
    href: "https://www.linkedin.com/in/gustavo-adolfo-fl%C3%B3rez-mier-y-ter%C3%A1n-016856169/",
    description:
      "El objetivo es comprender la importancia de los diferentes sistemas que conforman el vehículo, sus partes, su funcionamiento y variantes, sus tipos de fallas y averías, y cómo repararlas.",
    date: " 2007",
    datetime: "2024-03-30",
    category: { title: "Formacion Profesional", href: "https://www.atema.com.ve/mecanica.php" },
    author: {
      name: "Tecnico Medio",
      role: "Programa de Mecánica Automotriz/ 2007/ VEN",
      href: "https://www.atema.com.ve/",
      imageUrl:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABblBMVEUAAAABAQHAEhH////CEhLz8/PCEhT7+/v39/erq6vEEhJ6enqnAAD19fXT09PX19e9AACFhYW5ubmwsLB/f3+vAADm5ubg4OCdnZ2+ExSMjIzt7e3BCwXIyMheXl6Rh4k6Ojq+vr4sLCwvLy9yUFD78e+Yi4l0dHSkpKRNTU2gAAPn3Ni0AADCAACWlpTJp6eshIiaHCDUvsJqampTU1MbGxs+AADJwby+s7dvU06nPzpgPzqYAABJAACSfX3f0dRPPj6odnYREREjAAAyAAATAABfAACgXF+8qaeKAAAeAADZvrXjyM1DQkJYXlpJU1MPGR2lFxu3Gxx+Ew4pNjSQGxynHyVrCwC0HCJ3EBRUAACVHyR2Gx9+T06FRUvs2d6OLTCzkYxETVeSGxW9fn6nU1SjSEjq+/iZcXLSnpuSXlyNPDhuOzuyRka2bm6WLDDgzMCkLi4BFhWWTE/NsqbKi4368/3s59qEGyBYMTeoC+AoAAASR0lEQVR4nO2di2Patr7HhYWRMNg8DDYGmwPJZZBASBNCe27XLHdpk7RrWAZtUpLu3Ky3abPtrGu3c5aT/fdX8gNs82ghQLzN3y4J+CHp45+k30+y7AHgy5cvX758+fLly5cvX758+fLly5cvX758+fLly5cvX758+foDKPBHkk/oE3pfPqFP6H3dOuHcr+BtE879Ct4q4WKuok84t9y9lZFPOMdMfUIPEi44u8UTTpff4nNcbHa3kOUM8/rkEvwRCKfK6uaIi8tsIA3r097X5UQiKxYrqUSi0drVd/Z+3Rzx1ggN5esai6EsxwRN0wRZzkFeElMF5yW4GeKiCF3n638aRYTkZPloCTx8ZGhv9/nXWS0HpcoKGDTiDHJeFCFVS0Qw2fgG3H2x0e52lI6h7sazF4/A83oMStl55TwXQse59HdDhkIDPDxtdxSOCTKhkKIoISKGCXJK93gfNDMsFJfBDFrj4gnJT16GycLe6UlHJWLSBIsxZPzlgsHO8Rkok6OWBhg9Seg6u1CE4vNHx11ujYmuEum/+iJfo1FFDbVfEEacHexyPE+YRcLRw+MOxzHqxrk8XPeiTEgJdV/sRVipdUMrzp/QeeqSgFLgtMPRRsedbG7es2lzs2h+epxmOCXEKSdnS0VYH2iMXibM88Lz7XaIU4OUsL2ZTP7doSSVQUgPUJXjQBlpzdld4dkTOk4CCVihBiSihMzLHV2CU+T7vSjHhUi3o3Bce/u5JC17l9B+DgAZmAAbIZWUmzoIasO/Fwdl1lLiN3R1vgUaajkrqncI7ecAUIFbj06IK9Clt8Pz6nBtRoO6lQ3El0AkiFNe4/kSugGP7p5wNkK184//svTfhowv//hfhTEaoiGCCKdGnCeh86QM/Ppul/SQNhtuIEiFiKBD51GF6dlQYUIEEU+LOE9CR+IR2CCAXNBeSzdKbF88e9n7uBNlFNpS6YE0yCGIWq4JApMXYXE23ELZh12LziI87hNitop6hNhOSMWF3gNZmOoqz5PQfsZuLgk2SPfoJOzbEG9+d/xj6WqYDSkgw3Wun+PMVIgLIhRz4LjfBgcJpX/Ga9FXaAQh6ZSCnbMG3JoGcRGEAZCH/7evcHZAvS+1Eb5mlPiXvWpKCUO2Wko/dwKi5FVCAFjxYYcbR8geROOr69huQzchd9xkM/YQ1UuEmVzgJTeGEGNUevXlU4h5fiQhGRmfReDy5P3p/AkDoAmz2/poghtGyGN8frj+28WdizvrH6oIjyDkFO4EyMmbXOgZE/YPBiILjFgm5BQlvLosrb85iaZrVNHoyZt1zPd7Gku6W+S40zJcnrAYiyAEAZTYDqlMcACREqLq22jchCEjQjUefXt+OYyQjJi5bkAKT9wQF0BYzxFXGBxOyJ+f1BiVCZqEjKIw8felSzuhQkRtSKI3ZT8Cb1CQmRLaj5YrjxRiAnVNVWtr8TWiuKG1jRJ6E1eCFMKYiSKGCnHxC7gTNY8wDlXpWWQfcwLY7GQFmT9hAGzB59dqiHl7cP/g7cHGgV3fr//QoRMyLtPeX3/8Y/+gHw/evj/47uCfP3aJGe+GpUl70/kTVmKgq4bSj0ufwQz8idVHEoZg6UmNCSpuQmYt/RbZD1v/DX8BE/CdynDXR3BpooIsopZK9TOFY2qPzz+Dn6GfcvbBxGGUCQUVzkVIKvS7c3TVOw6v38kRQvQuznFdgOteILQf20JHz0g3WHtc/QzW0ecSbxUcHd6PKv1p4L6oGduvSpdXbsI14hTvJicdYsydMJXbPSH9xwAhPmzXyDDXjWcQBtX0z3ZC9guY1QlDp2XkNUIx9rATHEJYuh9XqKMbShhS1GgvSjVtiN+tEa+y8SvMe4xQzt6l8xBuQn6zRlGUQUDDDyrce6sp8nbCLsilvEW4m0u8oF477SJEP9fMm01DRawb/YCd7fC+ypCIAAhhbxEW4NfHwSGEpfukGx1HGKpZA2In4aOi5i3CLVh4zbgIeZ7H56tMiBlLGH8zhDAUOiP+1VOEDX63TW+A2gj50uY5PowqylhChjTEUqmKSy7Cb8s5jxHiZjtIIuo+IV/9bnXj6Q7xhaPwTG3A9ffXr650wr9ZhNxpxPOEl1/WlPj9ex8nbH94wKhP7uE/HCH6V02p/fL0Ewj/vcrU0usWIaaEDPfMi4SMgxA/fRJf/ZLWUu4jhNVjtfasyvfbIRloedGGu+0gidpMwt9JLb3cfPWY9DSDAalN+vgYVg8OnmJbT0M8KPet1wjztJaS0UPPhiXSOV7xl9XVsfaj3uL+FUbo8spJGDyry94iLMCj13SMa/eHpUvd43+M8McrY4xlJ1SUba95/CW2ccqR9jMkahvlDKmX5Bi1ts67PT6dyPlKK3qLEEiJfVK3BgjxepobFnabhIyiPqgOEnJcB0gTztTMnVDT7naGEPKl9+roGspwQebAuk9jjZ7uq2T4vxGADY8RZuW97pBayl4Sjzi8M9UJuSdVtuQmVILBZ86JGi8Q5lHhmDg+nfAz9FOP8Aqtr8a5YU2RYzglvvrUGgD3ZzFUsmc7LE9UlAUQNtnIPhnKm4R9G16xl+cX6eH1VD25qFp11EHIdUGs4lh4cvuEAVDU9rqcMRNF59ow3xMuPVgbEtcEmfi7EtIPwJjHxNh3Sl/ALHynhtSXzkmMj/MtgrCMv9kghK82v6/e2flpc8fSh+pO9V/vGHd0GgwGu28ODg8Pnx6a2vnhYuf78y+qv5A6vZ/FkxRkboTueYwzMthNp2vRdFSJrkb7elKqtlXGPiNMWhoTv4CHD9K2w9LpaI38cHolDU96k3T+hECUQZsLcaSfYGhQYg576b2KjRK+qKnOOe8g84CMj9NcL2rVb80oCmEPcdcteo/Uc4QrsPVtSGfTe0qO48y/6kmJL71Jq/ZbUlz8wYdL/jBtWNaAozds6MohpfvQMR/8KXyLIAwATQBd0oboSjxjwZDl9TZKxPP/8CAdX1NJr8qparz24OI/JBIlhDo2nTGmx5OQgTqR64LD3d8qoePeTAsWTkNq0CmTkL3EV08v3r5sd09O3t+/+HcJ6fPhaSVo3hm1RKzYeZiccFyxKEKgkZY4ipAEcJdklFR6+tshukJXV+xIwtD1EXEVE7bCBREuwfJZhxtFqDP99iD+5IMVDZB2aNyRcpzQ3hM0MPlyk7kROhgz7NI1x7kJuY1e3CJd15j4ATTn8Wk7ZOyEdLFJ5yzhWp/oHUKiXHHvhGPcK/c2ekuEpO/WmFp/NOEi5ELEpNfPcfamxZgxoT3tFkzc7Qyu3LNF10+iT3YuS71a6iQkDuMXEBNuWoo5EgZAFh7tKwM2ZHv3S6+qm//p87oJievcq6DmDUsxT0KiZO6bb/VAxU7Y62no0qjenUXdhr2ehqPrbLqPyrQfnbwMCyMknwUJXHdUzrlGGJfIEKJUKvHmUIKK55GdkMRxSne7DCPA22uEA2BJ0sC14ljJ3j7cHKKdezvrdkKG624fwYrj+adPB1zcOm/iFXNa4JS4RaNLpYS/hDOVSob89JQh38jPKzNqozEbw51sl3F4uio6b0JX+k1JWtrv0K6fLsWkS4NyVfrEBX2Wq2r87T1vwek9DX1wJnjyVYpYcOpHShZIGAC7Gn/0yHzkQrfh30boi1UuaK6tUa5BHSamL8BCbUgkwnqANEZjbKG+hSMkrRregox5T38VUH76/BdMSL6Vkba73Q2RYRQZ1J78/vv/DOrzzz//idRl8o/rvPzqaz7WnL6KLpqQqiDTBxC7ZFAbHGdD4gO50Ml2M0mb4NS5L4LQnQP5Wofy0VeEUeW6FxdfDtPFz6QzUtpnu1k8+Aip1wmpmkUk5Pf2252gtdLUrTWlc7zdzOb01UHuFDxHOFBA8tMqIjm1d/e0TWdjlCBjro0yJqlUpbux/1Wrwubqu4N8HiQcnkQrzOJkI/Bw/5i+b4AxnsIjtJ1u+3R7bzkbg3JkdxbX99YIAdgtawhp9S0AHm2/eEb0+vWz/bsPwa+psGS+NmIW2d8Wobk9L8oQXgnJTL2eSNXrmUpRQhBq9cEXDcw4//kT2tSqZ4ox40ZGTktmRtXNKXO/fcKhu8ef4zHCjycFenV29rl7g3Dictw+4VRJTpf/pxToZjn8JQlnhvGxEnxqoaZN/zbxJivVLNO6XcBFEM64xDMq1+xS+vMTzri008knnFE6AdAPLSfLITDk00dK8tGyTZL/6FRc6RSSkX5JM+GhWmokRdGxRWzQM8k2MZxsDeQJQFYMi6KYDDu3hp1vy5gXoWt/BbL9LzFrAg0hjHHvy8pKuKIhnmw0X1ID6Uu9drMCRAIZGQ9mWoAYyVq4UXBsbUG0Nf5tZ3MhlFjUf8BMFpYKRFv1WCaM2cyKfhfQfItHQqij3tPZSNSLWpATRYzyA/W0iFjonhoGIIkHrsYCCMsoiXrLQpZ4CzYbFlHvNm5Or8cJIYx760WLop42uSYrPHY83ETVggJG7tl9AKCI2MLY+cYp+D5KqMEIwtblXpItAkrYK3hYn+i1EQZA2boqQriCYdmRIUkU1XMw4Zr8BlmYFKCrZc6fsMXmtGKv7uR7lShbsRGuJF2ERKxZfoHPs7xzbRDYgigbg/annPXNEivVUc79xjpHCWdOSDpP2GDL0FoZstSrQw7CgL7ZSWh1GTk2SZqn014Cy2ZjqOgqSB4WkxUJZsfNGs+cEAQkCVTCMkq6z8pWwj1C8wwnoSUc0xo5lrVvIijFsDbQqSRhqyVlkATcmjWhY2eD1iXYgKy75HZCE9FO2KtqTRRbkSMI9h1dAAiwKYY17HyYBDRZkp6QyDkb7RwInTs1fpn8qkvQ5YqdhIbshL1utgBjQCvLmLdeX0bfwiSCjFBErsaZhaSfjmiu7fMlpAsRaadfoHXHNfOZDQ8nNIzX60nBMqyAVq6MTP9IJeAlkMkloItE1h/ykhM8HOP1Z0xI4hmk+/JYKkcusGPXcEKEsgmiVKxX+jy9ZZisCDwu2Lfk2YTLVnmjmmTCMVJ950no2LXLG7UtpSXdOAOEAUJYQbwZxvV2JWjBmzgPSddpug9MKv4K34C8o20XjQq+JCcQciyOBiOLNxWhc1eZtHp9U6yMXUHWUBtWEM7o0nq7srppKsUkNj1OQ78PvIUa0PESpWVsBkHJiITEkSWcNWHMev4xkxGcXd/Idmg015ZZA0mBoR7noTzGRn2QWQq2DMtOwrr1hrotEt3ikYvepgEcSRgg/aC1QrIZi2BHgUYSmjVPsxPSaEAmbp8G4NT9kO9NSNyCvVb0X6Qo5HlUH9USZ0pIOgjbazrLEvX6/f2OuHSQcMU6MgmN0SVOSTw9Xs7pViaEUn8hO/UgfSXDKDcq+p4xIZLEpClNyyBSA/v762MJ+8fJZh8akRKImLNsRqNNGJHtNtR4K6ekmCPDRNe4Y2aEzh1ZZFvGK23x2B72V8bbUP9/rdgJgVyRSQAuGSakNhRgP/llaFtQK2Y1d9LT3PMZPHkggRg1mrUjE04i+3PXYTdhYHjkTQd8uhpslrh9i4oQxmxdJn3rMrCK0KK+xTVonoMN6RBHsOWynFuBONv3U6IownE2BGZvClmrg4qJAt8Lq5uQhN59wpwj7pVJlOcKy+dSS60+wipgRMC2KIQQjrVh3jQ47Bk+j+p8P0lZE/uDiwZ0jKSyQgSOWMk/Adfgya7zm6z9HU4B0lU0IO6H/W5CfXwo4t48TVHWZwdbfUKgaVL/S0wL07ZnzFUKtotJt8CVnMvrz4Mw0R+hGtvZVsw2pAuTsYVg20sUETIIy0mxXo8UCgSf7tiC/eHeFmuFSJRQKEMrtaZ5GQJWYlolg/HQJ4RnRhgpyhBBuVgxXFa5WBQwguS/nEautlgUWH3KUIoVRaOZZYpaDNM5xv56PVIvk1oOQVYLm+OSpEmbLWqyPiEpaxVykEBT0sSEHsgUkkkhp7/CDtrfsDSzvtRKIZKKUKUSxtTaViJlbCCbiBOzvpRTqUSiQJMAjUQkEXGo0TstVTaTXTIXDqWs5FKpMmhYH7M6YZPsM5NPJXYHCjkzQs9pdoSeYuzfLrlZ6bxLaMknnOD8vwahxxhnUba/IKGnGP/0hDMp2RBCzzDOplx/UcIJEpvfFZnVlR9P+PE0R2ftSmJ4imO+LoBwWNKOr2PzNjeOrx/9SzlwbcefOHPCgPPwwbNnRziuXH8KwrHlmorQly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz9wfT/M2WA2K1MFV0AAAAASUVORK5CYII=",
    },
  },

  {
    id: 6,
    title: "T. S. U. en Informática",
    href: "https://www.linkedin.com/in/gustavo-adolfo-fl%C3%B3rez-mier-y-ter%C3%A1n-016856169/",
    description:
      "El Técnico Superior en informática analiza, diseña y programa sistemas de computación, toma decisiones de índole administrativo, establece normas y procedimientos para los sistemas de computación desarrollados, prepara estudios de factibilidad y desarrollo de sistemas de computación.",
    date: " 2002",
    datetime: "2023-08-16",
    category: { title: "Formacion Profesional", href: "https://cuam.edu.ve/" },
    author: {
      name: "Tecnico Superior",
      role: "Colegio Universitario  / 2006 / VEN",
      href: "https://www.atema.com.ve/",
      imageUrl:
        "data:image/jpeg;base64,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",
    },
  },
  
];
