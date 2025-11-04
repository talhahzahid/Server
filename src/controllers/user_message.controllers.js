import userMessageSchema from "../model/user_message.model.js";

const userMessage = async (req, res) => {
  console.log(req.body);
  const { fullName, email, phoneNumber, companyName, message } = req.body;

  if (!fullName || !email || !phoneNumber || !companyName || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingEmail = await userMessageSchema.findOne({ email });
    if (existingEmail) {
      return res.status(409).json({
        message: "This email is already in use. Try a different email.",
      });
    }

    const body = {
      fullName,
      email,
      phoneNumber,
      companyName,
      message,
    };

    const saveMessage = await userMessageSchema.create(body);

    res.status(201).json({
      message: "Message sent successfully.",
      status: true,
      data: saveMessage,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", status: false });
    console.log(error);
  }
};

export { userMessage };
