export const loginStyles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f5f5f5",
  },
  form: {
    width: "320px",
    padding: "25px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  field: {
    marginBottom: "15px",
    display: "flex",
    flexDirection: "column",
  },
  error: {
    color: "red",
    fontSize: "12px",
  },
  apiError: {
    color: "white",
    background: "red",
    padding: "8px",
    marginBottom: "10px",
    borderRadius: "5px",
  },
};

export default loginStyles;