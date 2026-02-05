import NavBar from "@/components/NavBar";
import RecordPlayer from "@/components/RecordPlayer";

export default function Home() {
    return (
        <div className="bg-[#F0F0F0] overscroll-none">
            <NavBar/>
            <div className="flex flex-col items-center justify-center w-full h-full -top-3 absolute overflow-x-auto">
                <RecordPlayer/>
            </div>
        </div>
    );
}
