import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { mc } from "@utils";

const ModalContext = createContext<{
    open: boolean
    setOpen: (open: boolean) => void
}>({ open: false, setOpen: () => { } })

export const Modal = ({ children }: { children: ReactNode }) => {
    const [open, setOpen] = useState(false);
    return (
        <ModalContext.Provider value={{ open, setOpen }}>
            {children}
        </ModalContext.Provider>
    )
}

export const ModalTrigger = ({ children }: { children: ReactNode }) => {
    const { setOpen } = useContext(ModalContext);
    return (
        <div onClick={() => setOpen(true)} className="inline-block cursor-pointer">
            {children}
        </div>
    )
}

export const ModalContent = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    const { open, setOpen } = useContext(ModalContext);
    useEffect(() => {
            if (open) {
              document.body.style.overflow = 'hidden';
            } else {
              document.body.style.overflow = 'auto';
            }
          }, [open]);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={(e) => e.stopPropagation()}
                        className={mc(
                            "relative bg-white rounded-2xl shadow-lg px-4 py-6 sm:px-6 sm:py-8 w-[90%] max-w-md",
                            className
                        )}
                    >
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 text-gray-500"
                        >
                            <X size={20} />
                        </button>
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>

    );
};

export const ModalHeader = ({ children }: { children: ReactNode }) => (
    <div className="mb-4">{children}</div>
)

export const ModalTitle = ({
    children,
    className
}: {
    children: ReactNode,
    className?: string
}) => (
    <h2 className={mc("text-xl font-semibold", className)}>{children}</h2>
)

export const ModalDescription = ({
    children,
    className
}: {
    children: ReactNode,
    className?: string
}) => (
    <p className={mc("text-sm text-gray-500", className)}>{children}</p>
)

export const ModalBody = ({ children }: { children: ReactNode }) => (
    <div className="py-2">{children}</div>
)

export const ModalFooter = ({ children }: { children: ReactNode }) => (
    <div className="mt-6 flex justify-end space-x-2">{children}</div>
)

export const ModalClose = ({ children }: { children: ReactNode }) => {
    const { setOpen } = useContext(ModalContext);
    return (
        <div onClick={() => setOpen(false)} className="w-full cursor-pointer">{children}</div>
    )
}