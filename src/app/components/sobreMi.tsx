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
            <ul className="mt-6 space-y-4 text-sm text-balance text-white md:text-xl">
              <li className="flex items-center mt-2 gap-4 text-sm md:text-xl">
                <span className="text-green-400">✔</span> Ingeniero informático
                con experiencia en desarrollo de software y sistemas
                informáticos.
              </li>
              <li className="flex items-center  gap-4 text-sm md:text-xl">
                <span className="text-green-400 ">✔</span> Capacidad para
                resolver problemas y adaptarse a nuevas tecnologías.
              </li>
              <li className="flex items-center gap-4 text-sm md:text-xl">
                <span className="text-green-400">✔</span> Demostrada habilidad
                para trabajar en equipo, colaborar con colegas y contribuir a un
                entorno de trabajo colaborativo.
              </li>
              <li className="flex items-center gap-4 text-sm md:text-xl">
                <span className="text-green-400">✔</span> Buscando oportunidades
                para aplicar mis habilidades técnicas y contribuir al
                crecimiento de una empresa.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default SobreMi;
