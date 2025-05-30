"use client";

import { FormEvent, useState } from "react";

export function FormCard() {
  const [countryCode, setCountryCode] = useState("+55");

  const [data, setData] = useState<{
    name: string;
    email: string;
    phone: string;
  }>({
    phone: "",
    email: "",
    name: "",
  });

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);

    if (digits.length <= 2) return `(${digits}`;
    if (digits.length <= 3) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 7)
      return `(${digits.slice(0, 2)}) ${digits[2]} ${digits.slice(3)}`;
    return `(${digits.slice(0, 2)}) ${digits[2]} ${digits.slice(
      3,
      7
    )}-${digits.slice(7)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhone(e.target.value);
    setData((prev) => ({
      ...prev,
      phone: formattedPhone,
    }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name"));
    const email = String(formData.get("email"));

    const submittedData = {
      name,
      email,
      phone: `${countryCode} ${data.phone}`,
    };

    setData({
      name,
      email,
      phone: data.phone,
    });
    alert(JSON.stringify(submittedData, null, 2));

    setData({
      name: "",
      email: "",
      phone: "",
    });

    setCountryCode("+55");

    e.currentTarget.reset();
  };

  return (
    <form
      className="w-4/5 border border-blue-600 h-auto shadow-md rounded-2xl mt-4 mb-6 p-8 flex flex-col gap-6"
      onSubmit={onSubmit}
    >
      <div className="flex flex-col">
        <label
          htmlFor="name"
          className="text-sm font-medium text-slate-600 mb-1"
        >
          Nome
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="border-b border-slate-300 focus:outline-none focus:border-b-2 focus:border-blue-500 transition-all p-1"
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="country"
          className="text-sm font-medium text-slate-600 mb-1"
        >
          País / Código
        </label>
        <select
          name="country"
          id="country"
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          className="border-b border-slate-300 focus:outline-none focus:border-b-2 focus:border-blue-500 transition-all p-1"
        >
          <option value="+55">Brasil (+55)</option>
          <option value="+1">EUA (+1)</option>
          <option value="+44">Reino Unido (+44)</option>
          <option value="+34">Espanha (+34)</option>
          <option value="+351">Portugal (+351)</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="phone"
          className="text-sm font-medium text-slate-600 mb-1"
        >
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
          className="border-b border-slate-300 focus:outline-none focus:border-b-2 focus:border-blue-500 transition-all p-1"
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="text-sm font-medium text-slate-600 mb-1"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          title="Digite um email válido, como exemplo@email.com"
          className="border-b border-slate-300 focus:outline-none focus:border-b-2 focus:border-blue-500 transition-all p-1"
        />
      </div>

      <button
        type="submit"
        className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-2xl hover:bg-blue-700 transition-all self-end w-full"
      >
        Enviar
      </button>
    </form>
  );
}
