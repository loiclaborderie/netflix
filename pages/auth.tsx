/* eslint-disable react/no-unescaped-entities */
import Input from "@/components/Input";
import { useCallback, useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => (currentVariant === "login" ? "register" : "login"));
  }, []);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo netflix" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">{variant === "login" ? "Se connecter" : "S'inscrire"}</h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  label="Nom d'utilisateur"
                  onChange={(ev: any) => setUsername(ev.target.value)}
                  id="username"
                  type="text"
                  value={username}
                ></Input>
              )}
              <Input label="Email" onChange={(ev: any) => setEmail(ev.target.value)} id="email" type="email" value={email}></Input>
              <Input label="Mot de passe" onChange={(ev: any) => setPassword(ev.target.value)} id="password" type="password" value={password}></Input>
            </div>

            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              {variant === "login" ? "Se connecter" : "S'inscrire"}
            </button>
            <p className="text-neutral-500 mt-12 text-xs sm:text-base text-center">
              {variant === "login" ? "Pas de compte ?" : "J'ai déjà un compte ?"}
              <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                {variant === "login" ? "S'inscrire" : "Se connecter"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Auth;
