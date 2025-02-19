import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Introduction from "@/components/Introduction";

export default function Home() {
    return (
        <div className="flex flex-col mx-48">
            <div className="py-16"></div>

            <Introduction />

            <div className="flex flex-col gap-28">
                <AboutMe />

                <Experience />
            </div>
        </div>
    );
}
