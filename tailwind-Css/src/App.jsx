import instagram from "./img/insta-img.png";
import logo from "./img/insta-logo.png";
import google from "./img/google.png";
import apple from "./img/apple.png";
import { AiFillFacebook } from "react-icons/ai";
function App() {
  return (
    <>
      <div className="flex flex-row justify-evenly p-10">
        <div className="">
          <img
            src={instagram}
            className="h-100%"
            alt="titulo da rede social"
          />
        </div>

        <div className="flex flex-col text-center">
          <span className="flex justify-center">
            <img
              src={logo}
              alt="logo da rede social"
              className="size-70 w-52"
            />
          </span>
          <form action="" className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Número de telomóvel, nome de utilizador"
              bg-zinc
              className="p-2 border border-gray outline-none bg-zinc text-sm"
            />
            <input
              type="password"
              placeholder="Palavra-passe"
              className="p-2 border border-gray outline-none bg-zinc text-sm"
            />
            <button className="bg-blue w-100% h-9 rounded-md text-white font-bold hover:">
              Iniciar sessão
            </button>
          </form>

          <div className="flex flex-row p-4 justify-center items-center gap-5">
            <hr className="w-28 text-gray" />
            <p className="font-bold ">OU</p>
            <hr className="w-28 text-gray" />
          </div>

          <div className="flex flex-col gap-4">
            <a href="#" className="text-fb font-semibold">
              {/* <AiFillFacebook className="flex absolute right-76%" /> */}
              Iniciar sessão com o Facebook
            </a>
            <a href="#">Esqueci a minha senha</a>

            <p className="p-10">
              Não tens uma conta?
              <a href="#" className="text-blue font-bold">
                {" "}
                {""}
                Regista-te.
              </a>
            </p>

            <div className="flex gap-5 justify-center">
              <span>
                <img src={google} className="w-30 h-9" />
              </span>
              <span>
                <img src={apple} className="w-30 h-9" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
