import React from "react";
import { Nextjsicono, Postgree, Prisma } from "../iconos/svg";
import Turismo from "../imagenes/turismo.webp";
import Image from "next/image";
function Proyectos() {
  return (
    <section id="proyectos">
      <h3 className=" mt-12  md:mt-28 text-center mb-10  text-xl md:text-2xl">
        Proyecto
      </h3>
      <div className="flex justify-center  mt-10 bg-fondo rounded-3xl md:mx-24 xl:mx-80 md:mt-16 ">
        <div className="mx-3 rounded  overflow-hidden shadow-lg">
          <div className="px-6 py-4 ">
            <div className="font-bold text-lg text-center   mb-2 color-letras-principales">
              Turismo Whiteley
            </div>
            <div className="grid  md:grid-cols-2 place-items-center ">
              <div className="justify-self-center place-content-center h-full w-60   ">
                <Image
                  className=" object-cover"
                  src={Turismo}
                  width={400}
                  height={150}
                  alt="Fernando Whiteley"
                />
              </div>
              <div className="m-auto">
                {" "}
                <ul className="mt-6 space-y-4 text-sm text-white md:text-xl">
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✔</span>
                    Creador y desarrollador del proyecto turismowhiteley.cl.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✔</span>
                    Manejo del tiempo para realizar múltiples tareas con
                    precisión y eficacia.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✔</span>
                    Resolución de problemas para abordar situaciones
                    imprevistas.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✔</span>
                    Coordinador de rutas de transporte desde y hacia el
                    aeropuerto.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="px-6 pt-4 pb-2 flex justify-center">
            <span className="flex max-w-28 items-center transition-transform duration-300 hover:scale-105 hover:shadow-inner hover:shadow-white/20 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <Nextjsicono></Nextjsicono> <p className="ml-2">Nextjs</p>
            </span>
            <span className="flex max-w-32 items-center transition-transform duration-300 hover:scale-105 hover:shadow-inner hover:shadow-white/20 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <Postgree></Postgree> <p className="ml-2">Postgre</p>
            </span>
            <span className="flex max-w-28 items-center transition-transform duration-300 hover:scale-105 hover:shadow-inner hover:shadow-white/20 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <Prisma></Prisma> <p className="ml-2">Prisma</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Proyectos;
