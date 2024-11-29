import { useEffect, useState } from "react";

export default function GachaChar() {
    const [randomData, setRandomData] = useState(false);
    const URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`
    
    const handleGacha = async (index) => {
        try {
            const response = await fetch(`${URL}${index}.png`);
            const data = response.json();
            const randomInt = Math.floor(Math.random(1, 20) * 10);
            console.log("Random num: " + randomInt)

            
            const random = Math.floor(Math.random() * data.length);
            setRandomData(random)
            console.log(randomData)
        } catch (e) {
            console.error("Error: " + e.message);
        }
    }
    
    useEffect(() => {
        handleGacha();
    }, [])
    
    return (
        <>
            <div className="justify-center my-10 flex">
                <button onClick={handleGacha} className="random-btn py-4 px-8 text-slate-100 rounded font-bold bg-sky-500">Gacha</button>
            </div>
        </>
    )
}