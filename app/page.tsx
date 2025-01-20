import Image from "next/image";
import RandomNumberComponent from "./ui/number";

export default function Home() {
  return (
    <div className="bg-[#E0F0FD] h-screen w-screen pt-12 pt-safe-top max-w-lg">
      <Image
        className="w-full"
        src="/banner.png"
        alt=""
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="w-screen h-[40px] max-w-lg fixed top-0 pt-safe-top left-0">
        <Image className="" src="/header.png" alt="" sizes="100vw" fill />
      </div>

      <div className="flex justify-between items-center p-4 text-sm">
        <div>
          <div className="text-gray-900 font-semibold mb-1">
            136****
            <RandomNumberComponent /> <span className="font-normal">胡*</span>
          </div>
          <Image src="/rank.png" alt="" width={85} height={23} priority />
        </div>
        <div className="text-gray-900 bg-white px-2 rounded-xl">
          关怀版 &gt;
        </div>
      </div>
      <div className="bg-[#fefefe] rounded-xl py-5">
        <div className="relative px-5 overflow-hidden">
          <ul className="flex w-[450px]">
            <li className="w-[47px] h-[47px] border rounded-lg flex items-center justify-center border-transparent">
              <div className="text-black font-semibold text-base text-center">
                1月<div className="text-gray-500 text-xs font-normal">2025</div>
              </div>
            </li>
            <li className="w-[47px] h-[47px] border rounded-lg flex items-center justify-center border-[#2B94FB]">
              <div className="text-black font-semibold text-base text-center">
                12月
                <div className="text-gray-500 text-xs font-normal">2024</div>
              </div>
            </li>
            <li className="w-[47px] h-[47px] border rounded-lg flex items-center justify-center border-transparent">
              <div className="text-black font-semibold text-base text-center">
                11月
                <div className="text-gray-500 text-xs font-normal">2024</div>
              </div>
            </li>
            <li className="w-[47px] h-[47px] border rounded-lg flex items-center justify-center border-transparent">
              <div className="text-black font-semibold text-base text-center">
                10月
                <div className="text-gray-500 text-xs font-normal">2024</div>
              </div>
            </li>
            <li className="w-[47px] h-[47px] border rounded-lg flex items-center justify-center border-transparent">
              <div className="text-black font-semibold text-base text-center">
                9月<div className="text-gray-500 text-xs font-normal">2024</div>
              </div>
            </li>
            <li className="w-[47px] h-[47px] border rounded-lg flex items-center justify-center border-transparent">
              <div className="text-black font-semibold text-base text-center">
                8月<div className="text-gray-500 text-xs font-normal">2024</div>
              </div>
            </li>
            <li className="w-[47px] h-[47px] border rounded-lg flex items-center justify-center border-transparent">
              <div className="text-black font-semibold text-base text-center">
                7月<div className="text-gray-500 text-xs font-normal">2024</div>
              </div>
            </li>
            <li className="w-[47px] h-[47px] border rounded-lg flex items-center justify-center border-transparent">
              <div className="text-black font-semibold text-base text-center">
                6月<div className="text-gray-500 text-xs font-normal">2024</div>
              </div>
            </li>
          </ul>

          <div className="absolute w-[77px] top-0 right-0 bg-white">
            <Image
              // className="dark:invert"

              src="/rili.png"
              alt=""
              width={57}
              height={57}
              priority
            />
          </div>
        </div>
        <div className="relative">
          <Image
            className="w-full"
            src="/body.png"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
          />
          <div className="absolute top-8 left-36 font-semibold text-base">
            89.50
          </div>
          <div className="absolute top-24 left-[170px] font-extrabold text-3xl">
            89.50
          </div>
        </div>
      </div>

      <div className="w-screen max-w-lg h-[70px] fixed bottom-0 left-0">
        <Image src="/footer.png" alt="" sizes="100vw" fill />
      </div>
    </div>
  );
}
