"use client";

import React, {FormEvent, useState} from "react";
import Link from "next/link";

type ModalProps = {
    show: boolean;
    onClose: () => void;
};

export default function Modal({ show, onClose }: ModalProps) {
    if (!show) return null;

    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        graduation: false,
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

    const handleGraduationChange = (value: boolean) => {
        setData((prev) => ({
            ...prev,
            graduation: value,
        }));
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(data);

        if (data.consignment) {
            localStorage.setItem("consentimentoAceito", "true");
            // localStorage.setItem("formData", JSON.stringify(data)); // opcional
        }

        setData({
            name: "",
            email: "",
            phone: "",
            graduation: false,
            consignment: false,
        });
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-2xl shadow-xl relative w-[90%] max-w-md">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl"
                >
                    ×
                </button>
                <form
                    className="w-full border border-[var(--green-color)] h-auto shadow-md rounded-2xl p-8 flex flex-col gap-6"
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
                            autoComplete="name"
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
                            autoComplete="tel"
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
                            autoComplete="email"
                            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                            title="Digite um email válido, como exemplo@email.com"
                            value={data.email}
                            onChange={handleChange}
                            className="border-b border-slate-300 focus:outline-none focus:border-b-2 focus:border-[--var(--light-green-color)] transition-all p-1"
                        />
                    </div>

                    <div className="w-full flex gap-3 flex-col">
                        <span className="text-sm text-slate-600">Você possui graduação?</span>
                        <div className="w-full flex gap-20 items-center justify-start">
                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="graduation"
                                    id="graduation_yes"
                                    value="true"
                                    checked={data.graduation === true}
                                    onChange={() => handleGraduationChange(true)}
                                />
                                <label htmlFor="graduation_yes" className="text-sm text-slate-600">
                                    Sim
                                </label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="graduation"
                                    id="graduation_no"
                                    value="false"
                                    checked={data.graduation === false}
                                    onChange={() => handleGraduationChange(false)}
                                />
                                <label htmlFor="graduation_no" className="text-sm text-slate-600">
                                    Não
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex gap-3 items-center">
                        <input
                            type="checkbox"
                            name="consignment"
                            id="consignment"
                            required
                            checked={data.consignment}
                            onChange={handleCheckboxChange}
                        />
                        <span className="flex gap-1 text-sm text-slate-600 max-[426px]:flex max-[426px]:flex-col">
          Li e concordo com os{" "}
                            <Link href="/politica-concentimento" className="text-blue-400">
            termos de consentimento.
                    </Link>
        </span>
                    </div>

                    <Link
                        href={"/redirect-whatsapp"}
                        type="submit"
                        className="mt-6 bg-[var(--green-color)]/90 text-white py-2 px-4 rounded-2xl hover:bg-[var(--green-color)] transition-all self-end w-full flex items-center justify-center"
                    >
                        Enviar
                    </Link>
                </form>
            </div>
</div>
    );
}