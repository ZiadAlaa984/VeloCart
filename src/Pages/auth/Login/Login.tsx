import "./Login.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Checkbox } from "../../../components/ui/checkbox";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import img from "./../../../assets/login.png";
import { Link } from "react-router-dom";

const FormSchema = z.object({
  email: z.string().email("Invalid email address."),
  password: z.string().regex(/^(?=.*[A-Z])(?=.*\d).{6,}$/, {
    message: "Password must be 6+ chars, 1 uppercase, 1 number.",
  }),
});

export default function Register() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values) => {
    console.log("submit", values);
  };

  return (
    <div className="flex justify-between align-middle">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-[640px] space-y-6 flex flex-col gap-2 form"
        >
          <div className="flex flex-col gap-[16px]">
            <h1 className="w-[153px] h-[60px]">Login</h1>
            <p className="w-[508px] h-[24px] opacity-[75%]">
              Login to access your travelwise account
            </p>
          </div>
          <div className="flex flex-col gap-[24px]">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-between space-x-2 mt-4 ">
              <Checkbox id="terms" className="w-[24px] h-[24px]" />
              <label
                htmlFor="terms"
                className="label text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
              <div className="flex-grow" />
              <Link to="###">Forgot Password?</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Button
              type="submit"
              className="bg-primary w-[640px] h-[62px] rounded-[8px] py-[14px] px-[10px] hover:bg-primary"
            >
              Login
            </Button>
            <span className="text-center span">
              Already have an account?{" "}
              <Link to="/register" className="text-primary">
                Sing up
              </Link>
            </span>
          </div>
          <span className="orsign text-center text-[#131314]">
            Or login with
          </span>
          <div className="icos flex gap-10">
            <div className="facebook px-[24px] py-[16px] border-[1px] border-[#515DEF] w-[202.67px] h-[56px] flex justify-center align-middle ">
              <FaFacebook className=" text-[#1877F2] w-[24px] h-[24px]" />
            </div>
            <div className="google px-[24px] py-[16px] border-[1px] border-[#515DEF] w-[202.67px] h-[56px] flex justify-center align-middle">
              <FcGoogle className="w-[24px] h-[24px]" />
            </div>
            <div className="apple px-[24px] py-[16px] border-[1px] border-[#515DEF] w-[202.67px] h-[56px] flex justify-center align-middle">
              <FaApple className=" text-gray-600 w-[24px] h-[24px]" />
            </div>
          </div>
        </form>
      </Form>
      <div className="bg-[#FFE9DA] w-[550px] h-[939px] mt-[178px] ml-[114px] rounded-tl-[394px] rounded-tr-[394px]  ">
        <img src={img} className="w-full mt-[453px]  " alt="shopping" />
      </div>
    </div>
  );
}
