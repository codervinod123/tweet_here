import zod from "zod";

export const authValidator = (req, res, next) => {
  const { email, password } = req.body;
  const emailValidation = zod
    .string()
    .email({ message: "Invalid email address" });
  const passValidation = zod.string().min(5, { message: "Weak Password" });
  const isValidEmail = emailValidation.safeParse(email);
  const isValidPass = passValidation.safeParse(password);

  if (!isValidEmail.success) {
    return res
      .status(403)
      .json({ isValid: false, message: "Invalid email address" });
  }

  if (!isValidPass.success) {
    return res.status(403).json({ isValid: false, message: "Week Password" });
  }

  next();
};
