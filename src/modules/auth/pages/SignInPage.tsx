import Input from "components/form/Input";
import { useForm } from "react-hook-form";
import { SignInForm } from "../types";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { useNavigate } from "react-router-dom";
import { AppRoutePath } from "router/types";
import { signIn } from "api/auth/authApi";
import { useStore } from "store/StoreContext";

const defaultValues: SignInForm = {
  username: "",
  password: "",
};

const signUpSchema = object().shape({
  username: string().required(),
  password: string().required(),
});

const SignInPage = () => {
  const navigate = useNavigate();
  const {
    auth: { setUserTokens },
  } = useStore();

  const methods = useForm({ defaultValues, resolver: yupResolver(signUpSchema) });
  const { register, handleSubmit } = methods;

  const errors = methods?.formState?.errors;

  const onSubmit = async (values: SignInForm) => {
    try {
      const response = await signIn(values);
      setUserTokens(response);

      navigate(AppRoutePath.Dashboard);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-6 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <Input name="username" label="username" register={register} errors={errors} />
              <Input name="password" label="password" register={register} errors={errors} />
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign In
                </button>
              </div>
            </form>
            <button className="text-purple-500 underline mt-2" onClick={() => navigate(AppRoutePath.SignUp)}>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
