import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Ruler, Download, Info } from 'lucide-react';

interface SizeChartModalProps {
    isOpen: boolean;
    onClose: () => void;
    productName: string;
    rows?: {
        codeNo: string;
        description: string;
        packSize: string;
        bulkPackSize: string;
    }[];
}

export default function SizeChartModal({ isOpen, onClose, productName, rows }: SizeChartModalProps) {
    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8"
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-secondary/80 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
                    >
                        {/* Header - Fixed Height */}
                        <div className="bg-warm/30 px-6 py-4 flex items-center justify-between border-b border-gray-100 flex-shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Ruler className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-secondary text-base md:text-lg">Size Chart</h3>
                                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{productName}</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-white rounded-full transition-colors text-gray-400 hover:text-secondary"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Body - Scrollable Area */}
                        <div className="p-6 md:p-8 overflow-y-auto flex-grow custom-scrollbar">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <thead className="sticky top-0 bg-white z-10">
                                        <tr className="border-b-2 border-primary/10">
                                            {rows ? (
                                                <>
                                                    <th className="py-4 pr-4 font-bold text-secondary">Code No.</th>
                                                    <th className="py-4 pr-4 font-bold text-secondary">Description</th>
                                                    <th className="py-4 pr-4 font-bold text-secondary">Pack Size</th>
                                                    <th className="py-4 font-bold text-secondary">Bulk Pack Size</th>
                                                </>
                                            ) : (
                                                <>
                                                    <th className="py-4 font-bold text-secondary">Volume</th>
                                                    <th className="py-4 font-bold text-secondary">Material</th>
                                                    <th className="py-4 font-bold text-secondary">Typical Application</th>
                                                </>
                                            )}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {rows ? rows.map((row, idx) => (
                                            <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                                <td className="py-4 pr-4 font-bold text-primary">{row.codeNo}</td>
                                                <td className="py-4 pr-4 font-medium text-gray-600">{row.description}</td>
                                                <td className="py-4 pr-4 text-secondary font-bold">{row.packSize}</td>
                                                <td className="py-4 text-secondary font-bold">{row.bulkPackSize}</td>
                                            </tr>
                                        )) : [
                                            { vol: '0.5 ml', mat: 'PP / PC', app: 'Micro-centrifuge Tubes' },
                                            { vol: '1 ml', mat: 'PP', app: 'Cryogenic Vials / Tips' },
                                            { vol: '5 ml', mat: 'PP / HDPE', app: 'Sample Vials' },
                                            { vol: '10 ml', mat: 'HDPE / PP', app: 'Reagent Bottles' },
                                            { vol: '100 ml', mat: 'HDPE / LDPE', app: 'Diagnostic Packaging' },
                                            { vol: '500 ml', mat: 'HDPE', app: 'Bulk Reagents' },
                                            { vol: '1 L', mat: 'HDPE', app: 'Industrial Storage' },
                                            { vol: '2.5 L', mat: 'UN-Certified HDPE', app: 'Chemical Packaging' },
                                            { vol: '5 L', mat: 'UN-Certified HDPE', app: 'Jerry Cans / Logistics' },
                                        ].map((row, idx) => (
                                            <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                                <td className="py-4 font-bold text-primary">{row.vol}</td>
                                                <td className="py-4 font-medium text-gray-600">{row.mat}</td>
                                                <td className="py-4 text-secondary font-bold">{row.app}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-8 p-4 bg-accent/10 rounded-xl border border-accent/20 flex gap-4 items-start">
                                <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <p className="text-xs text-secondary/70 leading-relaxed">
                                    All measurements are taken under controlled laboratory conditions (23°C ± 2°C).
                                    Custom dimensions and technical drawings are available upon request for OEM projects.
                                </p>
                            </div>
                        </div>

                        {/* Footer - Fixed Height */}
                        <div className="px-8 py-6 bg-gray-50 border-t border-gray-100 flex items-center justify-between flex-shrink-0">
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Document ID: PLX-TS-045-A</p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
