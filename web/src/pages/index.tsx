import Image from "next/image";
import logo from "../assets/logo.svg";
import userAvatarExample from "../assets/avatares.png";
import appPreviewImage from "../assets/iphones.png";
import iconCheck from "../assets/icon-check.svg";
import { api } from "../services";
import { promises } from "stream";
import { ALL } from "dns";

interface HomeProps {
  poolCount: number;
  guessesCount: number;
}

export default function Home(props: HomeProps) {
  return (
    <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 gap-28 items-center">
      <main>
        <Image src={logo} alt="NLW Copa" />

        <h1 className="mt-14 text-gray-100 text-5xl font-bold leading-tight">
          Crie seu próprio balão da copa e compartilhe entre amigos!
        </h1>

        <div className="mt-10 flex items-center gap-2 ">
          <Image src={userAvatarExample} alt="" />
          <strong className="text-gray-100 text-xl">
            <span className="text-ignite-500">+12.596</span> pessoas já estão
            participando
          </strong>
        </div>

        <form className="mt-10 flex gap-12">
          <input
            type="text"
            placeholder="Qual nome do seu bolão?"
            className="flex-1 px-6 py-4 rounded bg-gray-600 text-sm text-gray-100"
          />
          <button
            type="submit"
            className="bg-yellow-500 px-6 py-4 rounded text-sm text-bold uppercase hover:bg-yellow-700 border-gray-600 text-gray-900"
          >
            Criar meu bolão
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-300 leading-relaxed">
          Após criar seu bolão, você receberá um código único que poderá usar
          para convidar outras pessoas 🚀
        </p>

        <div className="mt-10 pt-10 border-t border-gray-600 flex items-center justify-between text-gray-100">
          <div className="flex items-center gap-6">
            <Image src={iconCheck} alt="" />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">+{props.poolCount}</span>
              <span>Bolões criados</span>
            </div>
          </div>

          <div className="w-px h-14 bg-gray-600"></div>

          <div>
            <div className="flex items-center gap-6">
              <Image src={iconCheck} alt="" />
              <div className="flex flex-col">
                <span className="font-bold text-2xl">
                  +{props.guessesCount}
                </span>
                <span>Palpites enviados</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Image
        src={appPreviewImage}
        alt="Dois celulares exibindo uma prévia da aplicação móvel do NLW Copa"
        quality={100}
      />
    </div>
  );
}

export const getServerSideProps = async () => {
  const [poolCountResponse, guessCountResponse] = await Promise.all([
    api.get("pools/count"),
    api.get("guesses/count"),
  ]);

  return {
    props: {
      poolCount: poolCountResponse.data.count,
      guessCount: guessCountResponse.data.count,
    },
  };
};
