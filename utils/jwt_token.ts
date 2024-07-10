import jwt from "jsonwebtoken";

interface UserInfo {
    email: string;
    role: string;
  }

const generateToken = (userInfo:UserInfo) => {

  const payload = {
    email: userInfo.email,
    role: userInfo.role,
  };

  // Check if TOKEN_SECRET is defined
  if (!process.env.TOKEN_SECRET) {
    throw new Error("TOKEN_SECRET is not defined in the environment variables");
  }

  //Token generate
  const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: 60 * 60,
  });

  return token;
};

export default generateToken;