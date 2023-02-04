import { ToastContainer as ToastModule, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastProperties = {
	position: "bottom-right",
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: "dark"
}

const loadToast = (promise: Promise<any>, load: string, success: string, error: string) => toast.promise(promise, {
    pending: load,
    success: success,
    error: error
}, Object.assign(toastProperties));

const successToast = (message: string) => {
    toast.success(message, Object.assign(toastProperties));
}

const errorToast = (message: string) => {
    toast.error(message, Object.assign(toastProperties));
}

const infoToast = (message: string) => {
    toast.info(message, Object.assign(toastProperties));
}

const darkToast = (message: string) => {
    toast.dark(message, Object.assign(toastProperties));
}

const hideToast = () => toast.dismiss();

const ToastContainer = () => <ToastModule/>;

export {
	successToast,
	errorToast,
	darkToast,
	loadToast,
	infoToast,
	hideToast
}

export default ToastContainer;