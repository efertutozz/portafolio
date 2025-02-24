import React from "react";

function AdminVideo() {
  return (
    <div className="text-black">
      <p className="text-center underline underline-offset-4">
        Algunas Funciones
      </p>
      <ul className="mt-6 border-4 space-y-4 text-sm text-pretty md:text-xl">
        <li className="flex items-center mt-2 gap-4 text-sm md:text-base">
          • Registro de cuentas con roles para diferenciar los cargos
          administrativos.
        </li>
        <li className="flex items-center  gap-4 text-sm md:text-base">
          • Iniciar sesión en el sistema.
        </li>
        <li className="flex items-center gap-4 text-sm md:text-base">
          • Subir la plantilla a un apartado dentro de la aplicación web para
          que los conductores vean la planificación del día.
        </li>
      </ul>
      <div className="flex mt-3">
        <div>
          <p className="text-xs md:text-base p-4 text-pretty ">
            Pequeña Demostración
          </p>
          <p className="text-xs md:text-base p-4 text-pretty ">
            <strong>Datos de prueba</strong>
          </p>
        </div>

        <video className="mt-3 w-3/4 rounded-lg shadow-lg" controls>
          <source src="/videos/admin1.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      </div>
    </div>
  );
}

export default AdminVideo;
