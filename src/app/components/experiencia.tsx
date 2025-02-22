"use client";
import { motion } from "framer-motion";

import {
  Reacticono,
  Javascript,
  Mysql,
  Mongodb,
  Sql,
  Postgree,
  Css,
  Node,
  Nextjsicono,
  Prisma,
  Typescript,
  Html,
} from "../iconos/svg";

export default function Prueba() {
  return (
    <section
      id="habilidades"
      className="mx-6 mt-10 md:mt-14 bg-fondo rounded-3xl md:mx-24 xl:mx-80 "
    >
      <h3 className="text-center pt-4 text-xl color-letras-principales md:text-2xl">
        Experiencia
      </h3>

      <motion.div
        className="grid grid-cols-2 otro-fondo text-center mt-4 md:grid-rows-4 md:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {[
          { id: "react", Icono: Reacticono, nombre: "React" },
          { id: "javascript", Icono: Javascript, nombre: "JavaScript" },
          { id: "mysql", Icono: Mysql, nombre: "MySQL" },
          { id: "mongodb", Icono: Mongodb, nombre: "MongoDB" },
          { id: "sql", Icono: Sql, nombre: "SQL" },
          { id: "postgree", Icono: Postgree, nombre: "PostgreSQL" },
          { id: "nodejs", Icono: Node, nombre: "Node.js" },
          { id: "html", Icono: Html, nombre: "HTML" },
          { id: "css", Icono: Css, nombre: "CSS" },
          { id: "nextjs", Icono: Nextjsicono, nombre: "Next.js" },
          { id: "prisma", Icono: Prisma, nombre: "Prisma" },
          { id: "typescript", Icono: Typescript, nombre: "TypeScript" },
        ].map(({ id, Icono, nombre }) => (
          <motion.div
            key={id}
            id={id}
            className="justify-self-center flex flex-col mt-3 items-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <Icono />
            {nombre}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
