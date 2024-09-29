import sender from '../config/email-config.js';

const welcomeMailSender = async (req,res,next) => {
  try {
    await sender.sendMail({
      from: 'vinodgen630@gmail.com',
      to: req.body.email,
      subject:"Welcome to Tweet Here",
      text:`Hi ${req.body.name}, We're excited to have you join our community! You are now part of a growing network.`,
    })
    next();
  } catch (error) {
    return res.status(403).json({
      message:"Can not register to platform",
      error:error
    })
  }
}

export default welcomeMailSender;