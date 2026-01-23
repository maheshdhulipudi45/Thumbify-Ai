import Contact from "../models/Contact.js";

export const createContact = async (req, res) => {
  try {
    console.log("CONTACT BODY 👉", req.body);

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields required" });
    }

    await Contact.create({ name, email, message });

    res.status(201).json({
      message: "Contact saved successfully",
    });
  } catch (error) {
    console.error("CONTACT ERROR ❌", error);
    res.status(500).json({
      message: "Server error",
    });
  }
};
