"use client";
import React from "react";
import Image from "next/image";
//import proImagen from "../imagenes/pro.webp";
import { motion } from "framer-motion";
function Presentacion() {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-center">
      <motion.div
        className="mb-4 flex justify-center md:mr-4 relative"
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.1, rotate: 3 }}
      >
        <Image
          className="w-48 h-48 rounded-full object-cover border-4 border-foto shadow-lg"
          src={""}
          width={250}
          height={250}
          alt="Fernando Whiteley"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, staggerChildren: 0.3 },
          },
        }}
        className="flex flex-col items-center md:items-start"
      >
        <h1 className="my-2 text-center text-2xl md:text-4xl">
          Hola, soy
          <strong className="color-letras-principales">
            {""} Fernando Whiteley
          </strong>
        </h1>
        <h2 className="text-center color-letras-principales text-lg mt-4 md:text-2xl md:text-center">
          Ingeniero en Informática
        </h2>
      </motion.div>
    </div>
  );
}

export default Presentacion;
