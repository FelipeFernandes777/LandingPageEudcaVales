"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export function FormCard() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    consignment: false,
  });

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);

    if (digits.length <= 2) return `(${digits}`;
    if (digits.length <= 3) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 7)
      return `(${digits.slice(0, 2)}) ${digits[2]} ${digits.slice(3)}`;
    return `(${digits.slice(0, 2)}) ${digits[2]} ${digits.slice(3, 7)}-${digits.slice(7)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhone(e.target.value);
    setData((prev) => ({
      ...prev,
      phone: formattedPhone,
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      consignment: e.target.checked,
    }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(data);

    if (data.consignment) {
      localStorage.setItem("consentimentoAceito", "true");
    }

    setData({
      name: "",
      email: "",
      phone: "",
      consignment: false,
    });
  };

  return (
      <form
          className="w-full border border-[var(--green-color)] h-auto shadow-md rounded-2xl mt-4 mb-6 p-8 flex flex-col gap-6 lg:w-4/5"
          onSubmit={onSubmit}
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium text-slate-600 mb-1">
            Nome
          </label>
          <input
              type="text"
              name="name"
              id="name"
              required
              value={data.name}
              onChange={handleChange}
              className="border-b border-slate-300 focus:outline-none focus:border-b-2 focus:border-[--var(--light-green-color)] transition-all p-1"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="text-sm font-medium text-slate-600 mb-1">
            Telefone
          </label>
          <input
              type="tel"
              name="phone"
              id="phone"
              required
              maxLength={16}
              value={data.phone}
              onChange={handlePhoneChange}
              placeholder="(11) 9 1234-5678"
              className="border-b border-slate-300 focus:outline-none focus:border-b-2 focus:border-[--var(--light-green-color)] transition-all p-1"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-slate-600 mb-1">
            Email
          </label>
          <input
              type="email"
              name="email"
              id="email"
              required
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              title="Digite um email válido, como exemplo@email.com"
              value={data.email}
              onChange={handleChange}
              className="border-b border-slate-300 focus:outline-none focus:border-b-2 focus:border-[--var(--light-green-color)] transition-all p-1"
          />
        </div>

        <div className="w-full flex gap-3 items-start">
          <input
              type="checkbox"
              name="consignment"
              id="consignment"
              required
              checked={data.consignment}
              onChange={handleCheckboxChange}
          />
          <span className="flex gap-1 text-sm text-slate-600">
          Li e concordo com os{" "}
            <Link href="/politica-concentimento" className="text-blue-400">
            termos de consentimento.
          </Link>
        </span>
        </div>

        <button
            type="submit"
            className="mt-6 bg-[var(--green-color)]/90 text-white py-2 px-4 rounded-2xl hover:bg-[var(--green-color)] transition-all self-end w-full"
        >
          Enviar
        </button>
      </form>
  );
}
