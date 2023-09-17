import Input from "components/form/Input";
import { useForm } from "react-hook-form";
import { SignUpForm } from "../types";
import { yupResolver } from "@hookform/resolvers/yup";
import { boolean, number, object, ref, string } from "yup";
import { signUp } from "api/auth/authApi";
import { useNavigate } from "react-router-dom";
import { AppRoutePath } from "router/types";

const defaultValues: SignUpForm = {
  username: "",
  email: "",
  first_name: "",
  last_name: "",
  phone_number: "",
  birthday: "",
  note: "",
  city: 0,
  show_phone_number: false,
  password: "",
  passwordRepeat: "",
};

const phoneRegExp = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{6}$/;

const signUpSchema = object().shape({
  username: string().required(),
  email: string().email(),
  first_name: string(),
  last_name: string(),
  phone_number: string().matches(phoneRegExp, "Phone number is not valid"),
  birthday: string(),
  note: string(),
  city: number(),
  show_phone_number: boolean(),
  password: string().required(),
  passwordRepeat: string()
    .required()
    .oneOf([ref("password")], "password should be same"),
});

const SignUpPage = () => {
  const methods = useForm({ defaultValues, resolver: yupResolver(signUpSchema) });
  const navigate = useNavigate();

  const { register, handleSubmit } = methods;

  const errors = methods?.formState?.errors;

  const onSubmit = async (values: SignUpForm) => {
    try {
      const response = await signUp(values);
      if (response) {
        navigate(AppRoutePath.Dashboard);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-6 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register new account</h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <Input name="username" label="username" register={register} errors={errors} />
              <Input name="email" label="email" register={register} errors={errors} />
              <Input name="first_name" label="first name" register={register} errors={errors} />
              <Input name="last_name" label="last name" register={register} errors={errors} />
              <Input name="phone_number" label="phone number" register={register} errors={errors} />
              <Input name="password" label="password" register={register} errors={errors} />
              <Input name="passwordRepeat" label="password repeat" register={register} errors={errors} />
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <button className="text-purple-500 underline mt-2" onClick={() => navigate(AppRoutePath.SignIn)}>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
