import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#e0effe] h-screen w-screen pt-12 pt-safe-top">
      <Image
        className="w-full"
        src="/banner.png"
        alt=""
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="w-screen h-[40px] fixed top-0 pt-safe-top left-0">
        <Image className="" src="/header.png" alt="" sizes="100vw" fill />
      </div>

      <div className="flex justify-between items-center p-4 text-sm">
        <div className="text-gray-900 font-semibold">
          136****2314 <span className="font-normal">胡*</span>
        </div>
        <div className="text-gray-900 bg-white px-2 rounded-xl">
          关怀版 &gt;
        </div>
      </div>
      <div className="bg-[#fefefe] rounded-xl py-5">
        <div className="relative px-5">
          <ul className="flex">
            <li className="w-[60px] h-[60px]">
              <div className="text-black font-semibold text-lg">1月</div>
              <div className="text-gray-500 text-xs">2025</div>
            </li>
            <li>
              <div>12月</div>
              <div>2024</div>
            </li>
            <li>
              <div>11月</div>
              <div>2024</div>
            </li>
            <li>
              <div>10月</div>
              <div>2024</div>
            </li>
            <li>
              <div>9月</div>
              <div>2024</div>
            </li>
            <li>
              <div>8月</div>
              <div>2024</div>
            </li>
            <li>
              <div>6月</div>
              <div>2024</div>
            </li>
            <li>
              <div>5月</div>
              <div>2024</div>
            </li>
            <li>
              <div>4月</div>
              <div>2024</div>
            </li>
          </ul>

          <Image
            // className="dark:invert"
            className="absolute top-0 right-5"
            src="/rili.png"
            alt=""
            width={57}
            height={57}
            priority
          />
        </div>
        <Image
          className="w-full"
          src="/body.png"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>

      <div className="w-screen h-[70px] fixed bottom-0 left-0">
        <Image src="/footer.png" alt="" sizes="100vw" fill />
      </div>
    </div>
  );
}
