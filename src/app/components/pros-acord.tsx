'use client'
import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function ProAcords() {
  const defaultContent = [
    "Usar tu inhalador de la manera correcta garantiza que el medicamento llegue a tus pulmones, donde realmente lo necesitas. Esto ayuda a controlar tus síntomas y a mantenerte activo y saludable.",
    "Al inhalar el medicamento, este actúa directamente en tus pulmones, lo que significa que se necesita menos cantidad de medicamento y hay menos riesgo de efectos secundarios en comparación con otros métodos de administración.",
    "Con la técnica inhalatoria adecuada, puedes obtener los mismos beneficios con una dosis menor de medicamento. Esto no solo es más seguro, sino también más económico.",
    "Con la técnica inhalatoria adecuada, puedes obtener los mismos beneficios con una dosis menor de medicamento. Esto no solo es más seguro, sino también más económico.",
    "Los inhaladores son fáciles y convenientes de usar. Dominar la técnica correcta significa que es más probable que sigas tu plan de tratamiento, lo que te ayudará a controlar tu enfermedad a largo plazo."
  ]
  return (
    <Accordion variant="bordered" className="max-w-[80%] mx-auto lg:max-w-[500px] xl:max-w-[1000px] border-sky-200 border-medium text-justify" >
      <AccordionItem key="1" aria-label="Accordion 1" title="Mejora la eficacia del medicamento" className="text-justify">
        {defaultContent[0]}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Minimiza los efectos secundarios" className="text-justify">
        {defaultContent[1]}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Proporciona alivio rápido" className="text-justify">
        {defaultContent[2]}
      </AccordionItem>
      <AccordionItem key="4" aria-label="Accordion 3" title="Optimiza la dosis" className="text-justify">
        {defaultContent[3]}
      </AccordionItem>
      <AccordionItem key="5" aria-label="Accordion 3" title="Facilita el seguimiento del tratamiento" className="text-justify">
        {defaultContent[4]}
      </AccordionItem>
    </Accordion>
  );
}