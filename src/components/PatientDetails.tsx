import { Patient } from "../types";
import PatientDetailsItem from "./PatientDetailsItem";

type PatientDetailsProps = {
  patient: Patient;
};

export default function PatientDetails({ patient }: PatientDetailsProps) {
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailsItem label="Nombre" data={patient.name} />
      <PatientDetailsItem label="Cuidadorx" data={patient.caretaker} />
      <PatientDetailsItem label="Email" data={patient.email} />
      <PatientDetailsItem
        label="Fecha del alta"
        data={patient.date.toString()}
      />
      <PatientDetailsItem label="Síntomas" data={patient.symptoms} />
      <div className="mt-8 flex flex-col-reverse gap-8 md:flex-row md:justify-between">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg transition-colors"
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg transition-colors"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
