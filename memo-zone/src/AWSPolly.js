var AWS = require("aws-sdk");
var $ = require("jquery");
AWS.config.region = "us-east-1"; // Region
AWS.config.credentials = new AWS.Credentials(
  "ASIASCU3UYOH2PLS74F6",
  "7/OYOBu3wU7hZTt9DY4/By5NyAMVuWUhzJhbOTbk",
  "FwoGZXIvYXdzEJz//////////wEaDHvHIvxHB7Is8OkyTiLPAWdZ/6qTiBnnYLIIGyKxlExDnC28v8CMcWgQU7q0GApk/pA8lH9Uprd9xRcwmlke9YSHHRi9h1hDBAFZlCzYOoo7THz+T6vwYAumWx9KCoYODe8lEErqENoCxLWPJKqNacFaiOoLDvfoaNDTiKKJNYGUwY4LWQaMYdrVvGxtS0l0GdJBVlvvzuCbFMKWGN+rTeebk5wWfSEbcGij1IJlyMefyd1eiXMHZw+zBp4WDn0/vD4NlWKHOLDqpJqmzBNKCnUhdy6fS+l+CobexbT57SipvN+cBjItBXi48AMeFEifjrvlCOuDxGlg6XHc8UjNtKmdHKuyw26FDjwRxtQd9kcLvpCf"
);

export default AWS;
