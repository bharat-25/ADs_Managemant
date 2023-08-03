import { distroySession } from "../../middleware/user.sessionRadis";
import Session from "../../models/user.sessionmodel";
import User from "../../models/user.model";
const logoutservice = async (req: any) => {
  try {
    const isSession = await Session.findOne({where: { username: req.user.username }});
    if (isSession) {
        console.log("Session is present ")
      if (isSession.status) {
        console.log(isSession, "user is active");
        await Session.update(
          { status: !isSession.status },
          { where: { id: isSession.id } }
        );
        await distroySession(req.user);
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
};
export default logoutservice;
