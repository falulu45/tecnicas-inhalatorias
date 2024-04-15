import React from "react";
import {Image, Card, CardBody} from "@nextui-org/react";
import ProAcords from "./components/pros-acord"


export default function Home() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="mb-[4rem]">
      <div className=" text-center mt-10">
        <h1 className=" text-2xl">Correcto uso del inhalador</h1>
      </div>
      <div className=" lg:flex lg:max-w-[1000px] lg:mx-auto lg:mt-20">
        <div className="mx-auto flex justify-center">
          <Image 
            src='https://escolasalut.sjdhospitalbarcelona.org/sites/default/files/2023-10/inhalador.jpg'
            alt="inhalador"
            height={300}
            width={300}
            className=" w-[250px] shadow-xl mt-20 lg:w-[200%] lg:my-auto"
          />
        </div>
        <div className="mt-10 lg:my-auto">
          <Card className="max-w-[80%] mx-auto lg:max-w-[500px] border-sky-200 border-medium">
            <CardBody>
              <p className="text-justify">En la práctica médica, es bastante común encontrarse con pacientes que tienen
                dificultades para controlar su asma. De hecho, alrededor del 60% de ellos experimentan esta situación. En
                muchos casos, el problema no radica en la necesidad de cambiar el tratamiento, sino en
                la <a href="#" className=" text-blue-400">técnica de inhalación</a> que están
                utilizando. Prestar atención a cómo se utiliza el inhalador puede ser crucial para lograr un mejor control de la enfermedad.</p>
            </CardBody>
          </Card>
        </div>
      </div>
      <div id="">
        <div className=" text-center mt-14 mb-[-1rem] lg:mt-20 xl:mt-28">
          <h1 className=" text-2xl">Importancia del correcto uso</h1>
        </div>
        <div className="mt-10" id="importancia">
          <ProAcords />
        </div>
      </div>
    </div>
  );
}
