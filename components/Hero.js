import Image from "next/image";
import Sns from './Sns';

export default function Hero() {
  return(
    <div className="w-[80%] mt-5 xl:w-[55%] m-auto flex flex-col xl:flex-row xl:justify-between xl:mt-20">
      <Image src="/profile.webp" width={400} height={400} objectFit="contain" alt="profile-image" quality={70} />
      <div className="xl:w-[40%]">
        <h4 className="mt-5 text-xl font-bold xl:text-xl mb-3">泉原遥輝 | Haruki Izumihara</h4>
        <p className="text-lg mb-3 leading-[2]">大阪市内でフリーランスとして活動しています。Web制作、LPなどをメインの業務としています。本サイトは主に営業活動を目的として作成しています。携わったサイトの掲載をしています。お気軽にお問い合わせ下さい。</p>
        <Sns />
      </div>
    </div>
  )
}