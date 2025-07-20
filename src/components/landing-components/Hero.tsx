import {WordRotate} from "@/components/magicui/word-rotate";
import Link from "next/link";
import {ArrowRight} from "lucide-react";
import {AvatarCircles} from "@/components/magicui/avatar-circles";

const Hero = () => {
    const avatars = [
        {
            imageUrl: "https://avatars.githubusercontent.com/u/16860528",
            profileUrl: "https://github.com/dillionverma",
        },
        {
            imageUrl: "https://avatars.githubusercontent.com/u/20110627",
            profileUrl: "https://github.com/tomonarifeehan",
        },
        {
            imageUrl: "https://avatars.githubusercontent.com/u/106103625",
            profileUrl: "https://github.com/BankkRoll",
        },
        {
            imageUrl: "https://avatars.githubusercontent.com/u/59228569",
            profileUrl: "https://github.com/safethecode",
        },
        {
            imageUrl: "https://avatars.githubusercontent.com/u/59442788",
            profileUrl: "https://github.com/sanjay-mali",
        },
        {
            imageUrl: "https://avatars.githubusercontent.com/u/89768406",
            profileUrl: "https://github.com/itsarghyadas",
        },
    ];
    return (<main className="flex gap-[1.5rem] mt-[3rem] flex-col items-center">
        <div className="max-w-4xl flex flex-col gap-[1rem]">
            <div className="text-5xl text-center leading-14 items-center">Manage your time <WordRotate className="dark:text-white italic " words={["effectively", "optimally", "simple"]} /> by starting to use our Todo task manager.</div>
            <p className="text-center">Benefit from daily monitoring of your activities, while analyzing your daily progress. Choosing Todo Tasks means choosing to significantly increase your productivity.</p>
        </div>
        <div className="flex gap-[2rem] flex-col items-center">
            <div className="flex flex-col items-center underline gap-1">
                <AvatarCircles numPeople={99} avatarUrls={avatars} />
                <span>+99 people use this app</span>
            </div>
            <Link className="flex items-center w-fit gap-1 bg-neutral-950 text-white dark:text-white px-4 py-2 rounded-lg" href={"/"}>Get started free<ArrowRight size={16} /></Link>
        </div>
    </main>)
}

export default Hero;