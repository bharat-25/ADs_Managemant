import { log } from "console";
import { maintain_session_redis } from "../../middleware/user.sessionRadis";
import Session from "../../models/user.sessionmodel";

const maintain_session_service = async (user) => {
  try {
    // console.log(user);
    let isSession = await Session.findOne({ where: { id: user.id } });
    console.log(isSession);
    if (!isSession) {
      const session_details = {
        user_id: user.id,
        username: user.username,
      };
      isSession = await Session.create(session_details);
      console.log("Session stored successfully");
      // console.log(session);
    } else if (isSession.status) {
      await Session.update({ status: true }, { where: { user_id: user.id } });
      console.log("Session Activate");
    }
    await maintain_session_redis(user);
    return true;
  } catch (err) {
    console.log("Server Error");
    return false;
  }
};

export default maintain_session_service;
