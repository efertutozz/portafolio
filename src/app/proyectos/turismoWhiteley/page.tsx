"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Funcionalidad from "@/app/components/proyecto/componentesTW/funcionalidad";

import CoorVideo from "@/app/components/proyecto/componentesTW/coordinador/coorVideo";

import ConVideo from "@/app/components/proyecto/componentesTW/conductor/conVideo";

import AdminVideo from "@/app/components/proyecto/componentesTW/administrador/adminVideo";
import Admin2 from "@/app/components/proyecto/componentesTW/administrador/admin2";

const Modal = ({
  isOpen,
  onClose,
  content,
}: {
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full"
      >
        <button
          onClick={onClose}
          className=" px-2 text-end bg-red-500 text-white rounded"
        >
          X
        </button>
        {content}
      </motion.div>
    </div>
  );
};

export default function Turismo() {
  const [openModal, setOpenModal] = useState<number | null>(null);

  const cards = [
    {
      id: 1,
      title: (
        <div className=" h-16 flex items-center text-center justify-center text-xl color-letras-principales">
          Funcionalidades Del Proyecto
        </div>
      ),
      isLarge: true,
      content: <Funcionalidad></Funcionalidad>,
    },
    {
      id: 2,
      title: (
        <div className="text-center h-16 flex justify-center items-center text-xl color-letras-principales">
          Coordinador
        </div>
      ),

      content: <CoorVideo></CoorVideo>,
    },
    {
      id: 3,
      title: (
        <div className="text-center h-16 flex justify-center items-center text-xl color-letras-principales">
          Administrador
        </div>
      ),

      content: <AdminVideo></AdminVideo>,
    },
    {
      id: 4,
      title: (
        <div className="text-center text-xl h-16 flex justify-center items-center color-letras-principales">
          Conductor
        </div>
      ),

      content: <ConVideo></ConVideo>,
    },
    {
      id: 5,
      title: (
        <div className="text-center text-xl h-16 justify-center flex items-center color-letras-principales">
          Administrador
        </div>
      ),
      content: <Admin2></Admin2>,
    },
  ];

  return (
    <div>
      <div className="text-center mt-3 text-xs md:mt-6">
        {" "}
        <Link
          className="mt-4 px-4 py-2 bg-gradient-to-r from-slate-600 to-slate-800 text-white rounded"
          href="/"
        >
          ← Portafolio
        </Link>{" "}
      </div>
      <div className=" color-letras-principales mt-4 text-lg md:mt-6">
        <div className=" mx-8 lg:mx-96 mt-5 "></div>
      </div>
      <div className="">
        <div className="grid grid-cols-1 grid-rows-5 gap-4 md:grid-cols-3 md:grid-rows-3 p-8">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              whileHover={{ scale: 1.05 }}
              className={`
        pt-2 px-4 otro-fondo text-white rounded-lg shadow cursor-pointer
        ${card.isLarge ? "md:col-span-3" : ""}
        ${card.id === 1 ? "md:col-span-3" : ""} 
        ${card.id === 2 ? "md:row-start-2" : ""} 
        ${card.id === 3 ? "md:row-start-2" : ""}
        ${card.id === 4 ? "md:row-start-2" : ""}
        ${card.id === 5 ? "md:col-start-2 row-start-3" : ""}
      `}
              onClick={() => setOpenModal(card.id)}
            >
              <div className="text-center">{card.title}</div>
            </motion.div>
          ))}

          {cards.map((card) => (
            <Modal
              key={card.id}
              isOpen={openModal === card.id}
              onClose={() => setOpenModal(null)}
              content={card.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
