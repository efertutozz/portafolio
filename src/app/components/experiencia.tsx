"use client";
import { motion } from "framer-motion";
import React from "react";
import {
  Html,
  Javascript,
  Mongodb,
  Mysql,
  Postgree,
  Reacticono,
  Sql,
  Node,
  Css,
  Nextjsicono,
  Prisma,
  Typescript,
} from "../iconos/svg";

function Experiencia() {
  return (
    <motion.section //listo experencia
      id="habilidades"
      className="mx-auto mt-4 bg-fondo rounded-3xl md:mx-24 xl:mx-80 md:mt-6"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="  text-center pt-4 text-xl color-letras-principales md:text-2xl">
        Experiencia
      </h3>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="grid grid-cols-2 otro-fondo text-center mt-4 md:grid-rows-4 md:grid-cols-3"
      >
        <motion.div
          whileHover={{ scale: 1.3, rotate: -3 }}
          id="react"
          className="justify-self-center flex flex-col "
        >
          <Reacticono></Reacticono>
          React
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, rotate: -3 }}
          id="javascript"
          className="justify-self-center flex flex-col items-center "
        >
          <Javascript></Javascript>
          JavaScript
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.3, rotate: -3 }}
          id="MySQL"
          className="justify-self-center mt-3 flex flex-col lg:mt-0"
        >
          {" "}
          <Mysql></Mysql>
          MySQL
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, rotate: -3 }}
          id="mongodb"
          className="justify-self-center mt-3 flex flex-col lg:m-6"
        >
          <Mongodb></Mongodb>
          MongoDB
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, rotate: 3 }}
          id="sql"
          className="justify-self-center mt-3 flex flex-col lg:mt-6"
        >
          <Sql></Sql>
          SQL
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, rotate: 3 }}
          id="postgree"
          className="flex flex-col justify-center mt-3 items-center lg:mt-6"
        >
          <Postgree></Postgree>
          PostgreSQL
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, rotate: 3 }}
          id="nodejs"
          className="justify-self-center mt-3 flex flex-col lg:mt-6"
        >
          <Node></Node>
          Node.js
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, rotate: -3 }}
          id="html"
          className="justify-self-center mt-3 flex flex-col lg:mt-6"
        >
          <Html></Html>
          HTML
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, rotate: 3 }}
          id="css"
          className="justify-self-center mt-3 flex flex-col lg:mt-6"
        >
          <Css></Css>
          CSS
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, rotate: -3 }}
          id="nextjs"
          className="justify-self-center mt-3 flex flex-col lg:mt-6"
        >
          <Nextjsicono></Nextjsicono>
          Next.js
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, rotate: 3 }}
          id="prisma"
          className="justify-self-center mt-3 flex flex-col lg:mt-6 "
        >
          <Prisma></Prisma>
          Prisma
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, rotate: 3 }}
          id="typescript"
          className="justify-self-center mt-3 flex flex-col items-center lg:mt-6 "
        >
          <Typescript></Typescript>
          Typescript
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Experiencia;
