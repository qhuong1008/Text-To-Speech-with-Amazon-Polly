let backendUrl = "";
if (process.env.NODE_ENV === "development") {
  //Dev env
  backendUrl = "http://localhost:8090";
} else {
  //Production env
  backendUrl = "http://ec2-54-175-40-54.compute-1.amazonaws.com:8090";
}

const BACKEND_URL = backendUrl;

export { BACKEND_URL };
