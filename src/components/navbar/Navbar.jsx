import './navbar.css';

export default function Navbar() {
    return (
        <>
            <div className="flex max-w-fit rounded-lg justify-center shadow-lg">
                    <div className="text font-bold text-lg text-gray-500 hover:text-slate-100 p-10 hover:bg-gray-400 cursor-pointer border-b-8 border-gray-400">Home</div>
                    <div className="text font-bold text-lg text-gray-500 hover:text-slate-100 p-10 hover:bg-orange-600 cursor-pointer border-b-8 border-orange-600">Pokedex</div>
                    <div className="text font-bold text-lg text-gray-500 hover:text-slate-100 p-10 hover:bg-orange-400 cursor-pointer border-b-8 border-orange-400">Video Games & Apps</div>
                    <div className="text font-bold text-lg text-gray-500 hover:text-slate-100 p-10 hover:bg-yellow-400 cursor-pointer border-b-8 border-yellow-400">Trading Card Game</div>
                    <div className="text font-bold text-lg text-gray-500 hover:text-slate-100 p-10 hover:bg-green-400 cursor-pointer border-b-8 border-green-400">Animation</div>
                    <div className="text font-bold text-lg text-gray-500 hover:text-slate-100  p-10 hover:bg-sky-400 cursor-pointer border-b-8 border-sky-400">Play! Pokemon Events</div>
                    <div className="text font-bold text-lg text-gray-500 hover:text-slate-100 p-10 hover:bg-sky-600 cursor-pointer border-b-8 border-sky-600">News</div>
            </div>
        </>
    )
}