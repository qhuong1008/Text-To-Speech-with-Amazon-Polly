let backendUrl = "";
if (process.env.NODE_ENV === "development") {
  //Dev env
  backendUrl = "http://localhost:8090";
} else {
  //Production env
  backendUrl = "http://ec2-54-196-208-85.compute-1.amazonaws.com:8090/";
}

const BACKEND_URL = backendUrl;

export { BACKEND_URL };
