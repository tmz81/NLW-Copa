import Image from "next/image";
import logo from "../assets/logo.svg";
import userAvatarExample from "../assets/avatares.png";
import appPreviewImage from "../assets/iphones.png";
import iconCheck from "../assets/icon-check.svg";

export default function Home() {
  return (
    <div className="max-w-[1124px] h-screen mx-auto grid-cols-2 items-center">
      <main>
        <Image src={logo} alt="NLW Copa" />

        <h1 className="mt-14 text-white text-5xl font-bold leading-tight">
          Crie seu próprio balão da copa e compartilhe entre amigos!
        </h1>

        <div className="mt-10 flex items-center gap-2 ">
          <Image src={userAvatarExample} alt="" />
          <strong>
            <span className="text-green-500">+12.596</span> pessoas já estão participando
          </strong>
        </div>

        <form>
          <input type="text" placeholder="Qual nome do seu bolão?" />
          <button type="submit" className="bg-yellow-500">
            Criar meu bolão
          </button>
        </form>

        <p>
          Após criar seu bolão, você receberá um código único que poderá usar
          para convidar outras pessoas 🚀
        </p>

        <div>
          <div>
            <Image src={iconCheck} alt="" />
            <div>
              <span>+2.034</span>
              <span>Balões criados</span>
            </div>
          </div>
          <div>
            <div>
              <Image src={iconCheck} alt="" />
              <div>
                <span>+192.846</span>
                <span>Palpites enviados</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Image
        src={appPreviewImage}
        alt="Dois celulares exibindo uma prévia da aplicação móvel do NLW Copa"
      />
    </div>
  );
}
