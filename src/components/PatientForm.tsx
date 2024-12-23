import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Error from "./Error";
import type { DraftPatient } from "../types";
import { usePatientStore } from "../store";
import { useEffect } from "react";

export default function PatientForm() {
  const { addPatient, activeId, patients, updatePatient } = usePatientStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<DraftPatient>();

  const registerPatient = (data: DraftPatient) => {
    if (activeId) {
      updatePatient(data);
      toast.success("Paciente actualizado correctamente");
    } else {
      addPatient(data);
      toast.success("Paciente registrado correctamente");
    }
    reset();
  };

  useEffect(() => {
    if (activeId) {
      const activePatient = patients.filter(
        (patient) => patient.id === activeId
      )[0];
      setValue("name", activePatient.name);
      setValue("caretaker", activePatient.caretaker);
      setValue("date", activePatient.date);
      setValue("email", activePatient.email);
      setValue("symptoms", activePatient.symptoms);
    }
  }, [activeId]);

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Registro de pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        noValidate
        onSubmit={handleSubmit(registerPatient)}
      >
        {/* Field: Name */}
        <div className="mb-5">
          <label htmlFor="name" className="text-sm uppercase font-bold">
            Nombre del animal
          </label>
          <input
            id="name"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Ej: Canela"
            {...register("name", {
              required: "El nombre del animal es obligatorio",
            })}
          />
          {errors.name && <Error>{errors.name?.message}</Error>}
        </div>
        {/* Field: Caretaker */}
        <div className="mb-5">
          <label htmlFor="caretaker" className="text-sm uppercase font-bold">
            Nombre de el/la cuidadorx
          </label>
          <input
            id="caretaker"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Ej: Pedro"
            {...register("caretaker", {
              required: "El nombre de el/la cuidadorx es obligatorio",
            })}
          />
          {errors.caretaker && <Error>{errors.caretaker?.message}</Error>}
        </div>
        {/* Field: Email */}
        <div className="mb-5">
          <label htmlFor="email" className="text-sm uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            className="w-full p-3  border border-gray-100"
            type="email"
            placeholder="Ej: pedro@gmail.com"
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email No Válido",
              },
            })}
          />
          {errors.email && <Error>{errors.email?.message}</Error>}
        </div>
        {/* Field: Date */}
        <div className="mb-5">
          <label htmlFor="date" className="text-sm uppercase font-bold">
            Fecha Alta
          </label>
          <input
            id="date"
            className="w-full p-3  border border-gray-100"
            type="date"
            {...register("date", {
              required: "La fecha de alta es obligatoria",
            })}
          />
        </div>
        {errors.date && <Error>{errors.date?.message}</Error>}
        {/* Field: Symptoms */}
        <div className="mb-5">
          <label htmlFor="symptoms" className="text-sm uppercase font-bold">
            Síntomas
          </label>
          <textarea
            id="symptoms"
            className="w-full p-3  border border-gray-100"
            placeholder="Ej: vómitos"
            {...register("symptoms", {
              required: "Los síntomas son obligatorios",
            })}
          ></textarea>
          {errors.symptoms && <Error>{errors.symptoms?.message}</Error>}
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-lg"
          value={activeId ? "Guardar cambios" : "Guardar Paciente"}
        />
      </form>
    </div>
  );
}
