"use client";

import { useState } from "react";
import { FileText, Download, X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ResourcesPage() {
    type FileType = {
        title: string;
        size: string;
        file: string;
    };

    const [selectedFile, setSelectedFile] = useState<FileType | null>(null);

    const files = [
        {
            title: "Bottles & Carboys Catalogue",
            size: "10 MB",
            file: "/files/Bottles.pdf"
        },
        {
            title: "Centrifuge Tubes Catalogue",
            size: "6 MB",
            file: "/files/Centrifuge.pdf"
        },
        {
            title: "Laboratory Disposables",
            size: "5 MB",
            file: "/files/LaboratoryDisposables.pdf"
        },
        {
            title: "PreciX Tips Catalogue",
            size: "7 MB",
            file: "/files/Tips.pdf"
        }
    ];

    return (
        <div className="bg-white">
            {/* HEADER */}
            <div className="bg-primary text-white py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <ScrollReveal width="100%">
                        <h1 className="text-4xl font-bold mb-4">
                            Product Literature
                        </h1>
                        <p className="text-xl">
                            Access catalogues, brochures & certificates
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            {/* FILE LIST */}
            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="space-y-6">
                    {files.map((file, idx) => (
                        <div
                            key={idx}
                            onClick={() => setSelectedFile(file)}
                            className="flex items-center justify-between bg-white p-6 rounded-2xl shadow hover:shadow-lg cursor-pointer group"
                        >
                            <div className="flex items-center gap-6">
                                <div className="bg-primary/10 p-4 rounded-xl text-primary">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="font-bold text-lg block">
                                        {file.title}
                                    </span>
                                    <span className="text-sm text-gray-500">
                                        {file.size} • PDF
                                    </span>
                                </div>
                            </div>

                            <Download className="w-5 h-5 text-gray-400 group-hover:text-primary" />
                        </div>
                    ))}
                </div>
            </div>

            {/* MODAL PREVIEW */}
            {selectedFile && (
                <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
                    <div className="bg-white w-[90%] h-[90%] rounded-xl overflow-hidden relative">

                        {/* TOP BAR */}
                        <div className="flex justify-between items-center p-4 border-b">
                            <h2 className="font-semibold">
                                {selectedFile.title}
                            </h2>

                            <div className="flex items-center gap-4">
                                {/* DOWNLOAD BUTTON */}
                                <a
                                    href={selectedFile.file}
                                    download
                                    className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg"
                                >
                                    <Download className="w-4 h-4" />
                                    Download
                                </a>

                                {/* CLOSE */}
                                <button onClick={() => setSelectedFile(null)}>
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        {/* PDF PREVIEW */}
                        <iframe
                            src={selectedFile.file}
                            className="w-full h-full"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}