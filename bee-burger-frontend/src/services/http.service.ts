import axios from "axios";
import cogoToast from "cogo-toast";

// axios.defaults.withCredentials = true;

function handleApiError(ex: any) {
  if (ex && ex.response) {
    if (ex.response.status === 500) {
      cogoToast.error("An unexpected error occurred");
    } else {
      if (ex.response.data.error) {
        cogoToast.error(ex.response.data.error);
      } else {
        console.error(ex);
        cogoToast.error("An unknown error occurred.");
      }
    }
  } else {
    console.error(ex);
    cogoToast.error("An unknown error occurred.");
  }
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  handleApiError,
};
