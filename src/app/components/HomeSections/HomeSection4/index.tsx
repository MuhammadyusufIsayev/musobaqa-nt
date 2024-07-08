import React from "react";
import Image from 'next/image';

const HomeSection4 = () => {
  const cards = [
    {
      date: "12.09.2021",
      title: "How to plant spinach correctly in winter",
      description:
        "In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...",
      imageUrl: "https://s3-alpha-sig.figma.com/img/4477/1607/7813b0a168b6ca7ab0df38f331108840?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PRQV1nvCzQg1M1hLEcTjlQucGlDsa1H37VDWWkeiizbQO6WtIsP5WsrurlLThqkRc7J-ChuX5r-KrADDoqJyZjrSx6A91eyBg~NT~2kUovzfRtMAN2ADoc9Pv85uBFJFSR0t2WClZidvBdD~8MiGhTY640YeK6zmL9sm1HrXYC47kh-KUdf3yp1XwVDGB3Qo6ag7dYyH95JAi9y~qpjbb5WOptkA2RvLENIyNs85Zwgj1nr8SVosV3BRUbwbiUVTHZahNICC9R7ahdiOYf2hVXbulSNLtBoelviR58tN6xoQxjJufglU2dyW5x9nf1iWmt9kQeE6vHvBxSqp1rletA__",
    },
    {
      date: "12.09.2021",
      title: "How to plant spinach correctly in winter",
      description:
        "In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...",
      imageUrl: "https://s3-alpha-sig.figma.com/img/ee6f/d6f3/d0bbebbc57401b629f48f141b09de68d?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S8q0VIu9aLSfsvQFxX36ADWBTSCihoqs-xZ5kwz1f4RvyQyXu5NQppNq3veoeWql3~P33Xlaq1jzjd~fx69nYBkWYsIIqsI31qJFMlvhzWOie3izU8XYLkxkrBGrBJq5~6No7RpOSSnLo8wDyd3m3jfdvBl3y0f4raxlI6Y9ogt8-DC5eqnTmhTDawbxUz7tcE8zrVkuM8PB6wU48ge3T1WqEiE83sL-aPa7CkF-Fs6V4IxmEQ0EDCEd3BLIK2DT5WW96WzKh22H-XgRObau8-susH5YI3yqMwnkNGmk0JtQsUnpmb1WG8zHC5utT3o~sDHIZFtbOYtKzeJ7xvCJrg__",
    },
    {
      date: "12.09.2021",
      title: "How to plant spinach correctly in winter",
      description:
        "In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...",
      imageUrl: "https://s3-alpha-sig.figma.com/img/53ee/636e/1b3209867cae3448de86073ab7493109?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UuDSrnKC7MG6DHGvJ0BdGvbM8ui3xMr7FD-FEnep5XQaaInRtLj~GV6noBwTqkBLcWHLi~iWmi91lOp6Uj~VzTtAyxm1z9SfTwhbQX-WjCJJLvj7AvLP6h4cFCLe1hfO~JPfaZbZQkN0vQpxmgpWnBdj5xrWdbpKE7cUeiVBd7RwAtz9msX~GxPi-oJvlCSqCtdBTUTrZzMxevZaTAXw~eXJAmmB82iA4lNXisRiYEsnP7MAzG11RDlbtUVcLzY8JOy51bjdPnFQVYMxJ-9XpIMn8of034xo8DmOPwl2mn5gbvgAlR2Ts8Mc5CKmSuH8mti7IUfiHb1XR~t04H~HXA__",
    },
    {
      date: "12.09.2021",
      title: "How to plant spinach correctly in winter",
      description:
        "In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...",
      imageUrl: "https://s3-alpha-sig.figma.com/img/53ee/636e/1b3209867cae3448de86073ab7493109?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UuDSrnKC7MG6DHGvJ0BdGvbM8ui3xMr7FD-FEnep5XQaaInRtLj~GV6noBwTqkBLcWHLi~iWmi91lOp6Uj~VzTtAyxm1z9SfTwhbQX-WjCJJLvj7AvLP6h4cFCLe1hfO~JPfaZbZQkN0vQpxmgpWnBdj5xrWdbpKE7cUeiVBd7RwAtz9msX~GxPi-oJvlCSqCtdBTUTrZzMxevZaTAXw~eXJAmmB82iA4lNXisRiYEsnP7MAzG11RDlbtUVcLzY8JOy51bjdPnFQVYMxJ-9XpIMn8of034xo8DmOPwl2mn5gbvgAlR2Ts8Mc5CKmSuH8mti7IUfiHb1XR~t04H~HXA__",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between my-[60px]">
        <h2 className="text-[36px] font-bold">Our blog</h2>
        <button className="px-[33px] py-[11px] border-[1px] border-[#EFEFEF] rounded-lg text-[#359740] font-semibold">
          Go to our blog
        </button>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col mb-[30px] p-[20px] border-[1px] border-[#EFEFEF] rounded-lg h-[300px]">
          <div className="mr-[20px] relative">
            <Image src={cards[0].imageUrl} alt={cards[0].title} width={320} height={300} className="rounded-lg absolute right-[-20px]" />
          </div>
          <div>
            <div className="text-[14px] text-[#A0A0A0] mb-[5px]">{cards[0].date}</div>
            <div className="text-[18px] font-bold mb-[10px]">{cards[0].title}</div>
            <div className="text-[16px] text-[#555555]">{cards[0].description}</div>
            <button className="border-[1px] w-[105px] h-[50px] text-[#359740] rounded-lg">Read</button>
          </div>
        </div>
        <div className="flex">
          <div className="flex-1 flex flex-col">
            {cards.slice(2).map((card, index) => (
              <div key={index} className="mb-[30px] p-[20px] border-[1px] border-[#EFEFEF] rounded-lg flex-1">
                <div className="mr-[20px]">
                  <Image src={card.imageUrl} alt={card.title} width={100} height={100} className="rounded-lg" />
                </div>
                <div>
                  <div className="text-[14px] text-[#A0A0A0] mb-[5px]">{card.date}</div>
                  <div className="text-[18px] font-bold mb-[10px]">{card.title}</div>
                  <div className="text-[16px] text-[#555555]">{card.description}</div>
                  <button className="border-[1px] w-[105px] h-[50px] text-[#359740] rounded-lg">Read</button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-1 mb-[30px] p-[20px] border-[1px] border-[#EFEFEF] rounded-lg ml-[30px]">
            <div className="mr-[20px]">
              <Image src={cards[1].imageUrl} alt={cards[1].title} width={100} height={100} className="rounded-lg" />
            </div>
            <div>
              <div className="text-[14px] text-[#A0A0A0] mb-[5px]">{cards[1].date}</div>
              <div className="text-[18px] font-bold mb-[10px]">{cards[1].title}</div>
              <div className="text-[16px] text-[#555555]">{cards[1].description}</div>
              <button className="border-[1px] w-[105px] h-[50px] text-[#359740] rounded-lg">Read</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection4;
