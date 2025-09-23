const sanitizeInput = (formData, type) => {
  let cleanData = {};
  let error = null;

  // Common fields for both login and signup
  const email = (formData.email || "").trim();
  const password = (formData.password || "").trim();

  cleanData.email = email;
  cleanData.password = password;

  // Signup-specific field
  if (type === "signup") {
    const fullName = (formData.fullName || "").trim();
    cleanData.fullName = fullName;

    if (!fullName) {
      error = "Please fill all required fields.";
      return { cleanData, error };
    }
  }

  // Validate common fields
  if (!email || !password) {
    error = "Please fill all required fields.";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    error = "Please enter a valid email address.";
  } else if (password.length < 6) {
    error = "Password must be at least 6 characters long.";
  }

  return { cleanData, error };
};

export default sanitizeInput;