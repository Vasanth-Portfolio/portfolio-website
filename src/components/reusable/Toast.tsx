import { AnimatePresence, motion } from "framer-motion";

interface ToastProps {
  message: string;
  type: "success" | "error";
  visible: boolean;
  onClose: () => void;
}

const Toast = ({ message, type, visible, onClose }: ToastProps) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 1.3 }}
          className={`fixed bottom-6 right-6 z-50 flex items-center px-4 py-3 rounded shadow-lg 
            ${type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}
        >
          <span className="text-sm font-medium">{message}</span>
          <button
            onClick={onClose}
            className="ml-4 text-white hover:text-gray-200 focus:outline-none text-lg"
          >
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
