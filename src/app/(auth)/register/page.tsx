import { type Metadata } from "next";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/icons";
import RegisterForm from "@/components/forms/register-form";

export const metadata: Metadata = {
  title: "Register",
  description: "Register for an account",
};

const RegisterPage = async (): Promise<JSX.Element> => {
  return (
    <div className="flex h-auto min-h-screen w-full items-center justify-center md:flex">
      <Card className="max-sm:flex max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:rounded-none max-sm:border-none">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">Register</CardTitle>
            <Link href="/">
              <Icons.close className="size-4" />
            </Link>
          </div>
        </CardHeader>
        <CardContent className="max-sm:w-full max-sm:max-w-[340px] max-sm:px-10">
          <RegisterForm />
        </CardContent>
        <CardFooter className="grid w-full gap-4 text-sm text-muted-foreground max-sm:max-w-[340px] max-sm:px-10">
          <div>
            <span> Already have an account? </span>
            <Link
              aria-label="login"
              href="/login"
              className="font-bold tracking-wide text-primary underline-offset-4 transition-all hover:underline"
            >
              Login
              <span className="sr-only">Login</span>
            </Link>
          </div>

          <div className="text-sm text-muted-foreground md:text-xs">
            By continuing, you agree to our
            <Link
              aria-label="Terms of Service"
              href="/tos"
              className="font-semibold underline-offset-4 transition-all hover:underline"
            >
              ToS
            </Link>
            <br className="xs:hidden sm:block md:hidden" />
            and
            <Link
              aria-label="Privacy Policy"
              href="/privacy"
              className="font-semibold underline-offset-4 transition-all hover:underline"
            >
              Privacy Policy
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterPage;
