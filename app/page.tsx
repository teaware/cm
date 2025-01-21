"use client";
import Image from "next/image";
import React, { useState } from "react";
import RandomNumberComponent from "./ui/number";
import RandomPicker from "./ui/cm";

export default function Home() {
  const numbers: ReadonlyArray<number> = [
    134, 135, 136, 137, 138, 139, 150, 151, 152, 158, 159, 182, 187,
  ];
  const names: ReadonlyArray<string> = [
    "赵",
    "钱",
    "孙",
    "李",
    "张",
    "王",
    "朱",
    "郑",
    "沈",
    "胡",
    "万",
    "汪",
    "姜",
    "江",
    "贺",
    "郝",
    "马",
    "刘",
    "罗",
    "余",
    "施",
    "谭",
    "戚",
    "魏",
    "周",
    "武",
    "林",
    "杨",
    "董",
    "孔",
    "陶",
    "孙",
    "蒋",
    "邓",
    "毛",
    "蔡",
    "任",
    "柳",
    "宋",
    "曹",
    "谢",
    "龚",
  ];

  const [randomNumber, setRandomNumber] = useState<string | null>(null);

  // 定义获取随机数的函数
  const getRandomNumber = () => {
    // 生成0到100之间的随机数，保留两位小数
    const number = (Math.random() * 100 + 58).toFixed(2);
    setRandomNumber(number);
  };

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
            <RandomPicker values={numbers} init={135} />
            ****
            <RandomNumberComponent />{" "}
            <span className="font-normal">
              <RandomPicker values={names} init="赵" />*
            </span>
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
            {randomNumber ? randomNumber : "89.50"}
          </div>
          <div
            className="absolute top-24 left-[170px] font-extrabold text-3xl"
            onClick={getRandomNumber}
          >
            {randomNumber ? randomNumber : "89.50"}
          </div>
        </div>
      </div>

      <div className="w-screen max-w-lg h-[70px] fixed bottom-0 left-0">
        <Image src="/footer.png" alt="" sizes="100vw" fill />
      </div>
    </div>
  );
}
