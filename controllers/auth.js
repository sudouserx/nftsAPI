import jwt from "jsonwebtoken";

/** LOGGING IN */
export const createLoginToken = (req, res) => {
  try {
    /**
     * implemented a mock example of login
     */
    const { username, password } = req.body;
    const token = jwt.sign({ username, password }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
