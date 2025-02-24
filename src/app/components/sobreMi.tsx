"use client";
import React from "react";
import { motion } from "framer-motion";
function SobreMi() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.5,
        delay: 0.3,
        type: "spring",
        stiffness: 100,
        damping: 10,
      }}
      id="sobre-mi"
      className=" mx-6 mt-10 md:mt-14 bg-fondo rounded-3xl md:mx-24 xl:mx-80 "
    >
      <div className=" rounded bg-fondo overflow-hidden shadow-lg">
        <div className="  px-6 py-4">
          <div className=" text-center font-bold text-xl mb-2  md:text-2xl color-letras-principales">
            Sobre Mi
          </div>

          <div className="m-auto">
            <ul className="mt-6 space-y-4 text-sm text-pretty text-white md:text-xl">
              <li className="flex items-center mt-2 gap-4 text-sm md:text-lg">
                <span className="text-green-400">✔</span> Egresado de Ingeniero
                informático de Inacap Chile, con experiencia en desarrollo de
                software y sistemas, análisis de datos y optimización de
                procesos informáticos.
              </li>
              <li className="flex items-center  gap-4 text-sm md:text-lg">
                <span className="text-green-400 ">✔</span> Competente en base de
                datos SQL, Postgre, Mongodb, MySQL.
              </li>
              <li className="flex items-center gap-4 text-sm md:text-lg">
                <span className="text-green-400">✔</span> Habilidad para
                trabajar en equipo, comunicación efectiva, adaptabilidad y
                resolución de problemas, lo que me permite ofrecer distintas
                soluciones orientada a los resultados.
              </li>
              <li className="flex items-center gap-4 text-sm md:text-lg">
                <span className="text-green-400">✔</span> Buscando oportunidades
                para aplicar mis habilidades técnicas y contribuir en proyectos
                de tecnología e innovacion. crecimiento de una empresa.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default SobreMi;
