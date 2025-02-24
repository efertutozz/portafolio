"use client";
import React from "react";
import { C, Java, Linux, Php, Python, Windows } from "../iconos/svg";
import { motion } from "motion/react";

function Conocimiento() {
  return (
    <motion.section
      id="conocimiento"
      className="mx-6 mt-10 md:mt-14 bg-fondo rounded-3xl md:mx-24 xl:mx-80"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}
    >
      <h3 className="  text-center text-xl pt-4 mt-4 color-letras-principales md:text-2xl">
        Conocimiento
      </h3>
      <div className="grid grid-cols-2 fondo-revez text-center mt-4 md:grid-rows-2 md:grid-cols-3 ">
        <motion.div
          whileHover={{ scale: 1.1, rotate: -3 }}
          id="java"
          whileTap={{ scale: 1.5 }}
          className="justify-self-center flex flex-col"
        >
          <Java></Java>
          Java
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 1.5 }}
          id="c#"
          className="justify-self-center flex flex-col items-center"
        >
          <C></C>
          C#
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 1.5 }}
          id="python"
          className="justify-self-center flex flex-col  mt-3 lg:mt-0"
        >
          <Python></Python>
          Python
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, rotate: -3 }}
          whileTap={{ scale: 1.5 }}
          id="php"
          className="justify-self-center flex mt-3 flex-col lg:m-6"
        >
          <Php></Php>
          PHP
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 1.5 }}
          id="windows"
          className="justify-self-center mt-3 flex flex-col items-center lg:m-6"
        >
          <Windows></Windows>
          Server Windows
        </motion.div>
        <motion.div
          whileTap={{ scale: 1.5 }}
          whileHover={{ scale: 1.1, rotate: 3 }}
          id="linux"
          className="justify-self-center mt-3 flex flex-col items-center lg:m-6"
        >
          <Linux></Linux>
          Server Linux
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Conocimiento;
