import { Linkedin } from "./iconos/svg";

import Presentacion from "@/app/components/presentacion";
import Experiencia from "./components/experiencia";
import Conocimiento from "./components/conocimiento";
import Proyectos from "./components/proyectos";
import Educacion from "./components/educacion";
import SobreMi from "./components/sobreMi";

export default function Home() {
  return (
    <div>
      <header className="p-4 mb-4 md:p-12"></header>
      <Presentacion></Presentacion>
      <main>
        <Experiencia></Experiencia>

        <Conocimiento></Conocimiento>

        <Proyectos></Proyectos>

        <Educacion></Educacion>

        <SobreMi></SobreMi>
      </main>

      <footer>
        {" "}
        <div id="linkedin">
          <Linkedin></Linkedin>
        </div>
      </footer>
    </div>
  );
}
