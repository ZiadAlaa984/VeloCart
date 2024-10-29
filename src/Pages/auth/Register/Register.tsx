import "./Register.css";
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
import img from "./../../../assets/singup.png";
import { Link } from "react-router-dom";

const FormSchema = z
  .object({
    firstname: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    lastname: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    email: z.string().email("Invalid email address."),
    phone: z
      .string()
      .regex(
        /^01[0125][0-9]{8}$/,
        "Phone number must be a valid Egyptian number."
      ),
    password: z.string().regex(/^(?=.*[A-Z])(?=.*\d).{6,}$/, {
      message: "Password must be 6+ chars, 1 uppercase, 1 number.",
    }),
    confirmPassword: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.confirmPassword !== data.password) {
      ctx.addIssue({
        code: "custom",
        path: ["confirmPassword"],
        message: "Passwords must match.",
      });
    }
  });

export default function Register() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values) => {
    console.log("submit", values);
  };

  return (
    <div className="flex justify-between align-middle gap-32">
      <div className="bg-[#FFE9DA] w-[550px] h-[939px] mt-[178px] ml-[114px] rounded-tl-[394px] rounded-tr-[394px]  ">
        <img
          src={img}
          className="w-full mt-[491px] ml-[99px] "
          alt="shopping"
        />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-[640px] space-y-6 flex flex-col gap-2 form "
        >
          <div className="flex flex-col gap-[16px]">
            <h1 className="w-[153px] h-[60px]">Sign up</h1>
            <p className="w-[508px] h-[24px] opacity-[75%]">
              Let’s get you all st up so you can access your personal account.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="grid grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
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
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input {...field} type="tel" />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

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

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center space-x-2 mt-4 ">
              <Checkbox id="terms" className="w-[24px] h-[24px]" />
              <label
                htmlFor="terms"
                className="label text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to all the <a className="text-primary">Terms</a> amd{" "}
                <a className="text-primary">Privacy Policies</a>
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Button
              type="submit"
              className="bg-primary w-[640px] h-[62px] rounded-[8px] py-[14px] px-[10px] hover:bg-primary"
            >
              Create account
            </Button>
            <span className="text-center span">
              Already have an account?{" "}
              <Link to="/login" className="text-primary">
                Login
              </Link>
            </span>
          </div>
          <span className="orsign text-center text-[#131314]">
            Or Sign up with
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
    </div>
  );
}
