import { useEffect, useState } from "react";

export default function GachaChar() {
    const [randomData, setRandomData] = useState(false);
    const URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`

    const handleGacha = async (index) => {
        try {
            const response = await fetch(`${URL}${index}.png`);
            const data = response.json();
            const randomInt = Math.random(1, 20);
            console.log("tes" + randomInt)

            
            const random = Math.floor(Math.random() * data.length);
            setRandomData(random)
            console.log(random);
        } catch {
            
        }
    }
    
    useEffect(() => {
        handleGacha(24);
    }, [])

    return (
        <>
            <div className="justify-center my-10 flex">
                <button onClick={handleGacha} className="random-btn py-4 px-8 text-slate-100 rounded font-bold bg-sky-500">Gacha</button>
            </div>
        </>
    )
}