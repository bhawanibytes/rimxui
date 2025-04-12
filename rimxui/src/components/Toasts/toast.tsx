import { AnimatePresence, motion } from "framer-motion";
import { useContext, createContext, ReactNode, useState } from "react";
import {
    CheckCircleIcon,
    AlertTriangleIcon,
    InfoIcon,
    XCircleIcon,
  } from "lucide-react";

type Variant = "error" | "success" | "info" | "warning";
type TostType = {
    id: number;
    description: string;
    variant?: Variant;
}
const ToastContext = createContext<{
    showToast: (description: string, variant?: Variant) => void;
}>({
    showToast: () => {},
});

export const useToast = () => useContext(ToastContext);

export function ToastProvider({ children }: { children: ReactNode }) {
    const [toasts, setToasts] = useState<TostType[]>([]);
    const showToast = (description: string, variant: Variant = "info") => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, description, variant }]);
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 5000);
    }

    // icon 
    const getIcon = (variant: Variant) => {
        switch (variant) {
            case "success":
                return <CheckCircleIcon className="text-emerald-500" />;
            case "error":
                return <XCircleIcon className="text-red-500" />;
            case "warning":
                return <AlertTriangleIcon className="text-yellow-500" />;
            case "info":
            default:
                return <InfoIcon className="text-blue-500" />;
        }
    };

    // background
    const getBg = (variant: Variant) => {
        switch (variant) {
            case "success":
                return "bg-emerald-100 text-emerald-800";
            case "error":
                return "bg-red-100 text-red-800";
            case "warning":
                return "bg-yellow-100 text-yellow-800";
            case "info":
            default:
                return "bg-blue-100 text-blue-800";
        }
    };
    return (
        <ToastContext.Provider value={{showToast}}>
            {children}
            <div className="fixed bottom-4 right-4 z-[9999] flex flex-col gap-3">
                <AnimatePresence>
                    {
                        toasts.map((toast) => (
                            <motion.div
                                key={toast.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.3 }}
                                className={`rounded-lg px-4 py-3 shadow-md flex items-center gap-3 ${getBg(toast.variant || "info")}`}
                            >
                                {getIcon(toast.variant || "info")}
                                <span className="text-sm">{toast.description}</span>
                            </motion.div>
                        ))
                    }
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    )
}
