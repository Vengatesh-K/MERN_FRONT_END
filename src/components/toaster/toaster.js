import { toast } from "react-toastify";

export const Toaster = ({
  type = "success",
  message,
  position = "top-right",
  duration,
  ...options
}) => {
  toast[type](message, {
    position,
    autoClose: duration || 5000,
    hideProgressBar: false,
    closeOnClick: true,
    ...options,
  });
};

export const showMessage = (type, message, duration) => {
  Toaster({
    type: type || "success", // Or 'error', 'warning', or 'info'
    message: message || "Your data was updated!",
    duration: duration || 5000,
  });
};
