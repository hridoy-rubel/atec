import { logout } from "@/actions/auth.actions";
import { Button } from "../ui/button";

const LogoutForm = () => {
  return (
    <form action={logout}>
      <Button>Logout</Button>
    </form>
  );
};

export default LogoutForm;
