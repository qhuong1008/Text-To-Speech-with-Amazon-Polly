var AWS = require("aws-sdk");
var $ = require("jquery");
AWS.config.region = "us-east-1"; // Region
AWS.config.credentials = new AWS.Credentials(
  "ASIAWLTLA44KT5Z3KPEK",
  "kXV0KBMvSrAUihbvO0wABeJfQ0J+zn6hzwgcI35B",
  "FwoGZXIvYXdzEJ3//////////wEaDJrPb85apYsTq+Q4HSLPASpcvoJ78o7CgmuAxJPXZK2XfD2rFVrBCPiB+iZMR5UxRbAQoJojY9GMILE13gqv7FskxkMGUXeaStzjJ/fE18ZcAysrptfLtxhPpeOzN68qvm8z7cBFrOv7EWhckEiwlHuu0Io5dezK/UDSIyJtLaVnnHUiI9uiTUVzbqx58qfRkaZkpSez/C0Ngwqk4hqRfAJB2xU9dhgBY9guf5//1sMKzq7FF5pjEJ0gnHogCa0qEdpIFxgUo2xWuUn1AT9uDvb72Bl8FgKUdrtuizcHXyiZ49+cBjItXKuWnsPVGbFq8ONGnQDPX5WBF2zM+oygo/CYQ/sMQgsyiwdC+uf4YzJWRCRQ"
  );

export default AWS;
