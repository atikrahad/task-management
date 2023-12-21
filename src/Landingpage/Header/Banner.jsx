import bgimg from "../../assets/Landingpage/bgimg.png"
import bannerimg from "../../assets/Landingpage/1.png"
const Banner = () => {
    return (
        <div style={{background: `url(${bgimg})`, backgroundSize: "cover"}} className="min-h-screen w-full bg-cover">
            <div className="max-w-6xl text-center md:text-start gap-5 py-20 mx-auto flex flex-col-reverse md:flex-row justify-between items-center">
                <div className="md:w-[50%] space-y-4 w-full ">
                    <h1 className="text-3xl font-semibold text-orange-300">Welcome to ITask</h1>
                    <h1 className="text-4xl font-bold text">Manage your task</h1>
                    <p className="text-slate-500">Revolutionize your productivity with our cutting-edge Task Management System. Experience seamless collaboration, supercharge efficiency, and conquer your goals effortlessly with our intuitive platform.</p>
                </div>
                <div>
                    <img className="w-96" src={bannerimg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;