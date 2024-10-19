// @flow strict
import { userData } from "@/data/user-data";
import Image from "next/image";
import GlowCard from "../helper/glow-card";
import SectionTitle from "../helper/section-title";

function Rank() {
  return (
    <div id="stats" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <SectionTitle title="Streak & Rank" />

      <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        <>
          <GlowCard identifier="streak">
            <Image
              src={`https://github-readme-streak-stats.herokuapp.com/?user=parves2023&theme=algolia&hide_border=true`}
              width={1080}
              height={520}
              alt="github streak"
              className="rounded-lg md:h-52 lg:h-60 w-full bg-primary-bg"
            />
          </GlowCard>
          <GlowCard identifier="productive-time">
            <Image
              src={`http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=parves2023&theme=algolia&utcOffset=${userData.timezone}`}
              width={1080}
              height={560}
              alt="github productive-time"
              className="rounded-lg md:h-52 lg:h-60 w-full bg-primary-bg"
            />
          </GlowCard>
        </>

        <>
          <Image
            src={`https://stardev.io/developers/parves2023/badge/languages/global.svg`}
            width={1080}
            height={520}
            alt="github global"
            className="rounded-lg"
          />
          <Image
            src={`https://stardev.io/developers/parves2023/badge/languages/locality.svg`}
            width={1080}
            height={520}
            alt="github locality"
            className="rounded-lg"
          />
        </>
      </div>
    </div>
  );
};

export default Rank;