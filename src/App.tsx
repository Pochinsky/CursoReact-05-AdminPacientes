import PatientForm from "./components/PatientForm";
import PatientsList from "./components/PatientsList";

export default function App() {
  return (
    <>
      <div className="container mx-auto mt-8">
        <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
          Seguimiento de Pacientes {""}
          <span className="text-indigo-700">Veterinaria</span>
        </h1>
      </div>
      <div className="mt-12 md:px-6 md:flex lg:px-12 xl:px-18 2xl:px-24">
        <PatientForm />
        <PatientsList />
      </div>
    </>
  );
}
