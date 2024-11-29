import { useState, useEffect } from "react";

export default function ApiContent() {
    const [data, setData] = useState([]);
    const [detail, setDetail] = useState([]);
    const [error, setError] = useState('');
    const URL = 'https://pokeapi.co/api/v2/pokemon'

    const fetchApi = async () => {
        try {
            const response = await fetch(URL);

            const data = await response.json();

            setData(data.results);

            // await Promise.all(data.results.map(async (datas) => {
            //     const res = await fetch(datas.url);
            //     const dataUrl = await res.json();
            //     setDetail(dataUrl.abilities);
            //     console.log(detail)
            // }))
        } catch (e) {
            setError("Error: " + e.message);
        }
    }
    
    useEffect(() => {
        fetchApi();
        // const detil = detail.abilities.map((abies) => setShowDetail(abies.ability.name))
        // console.log(detail.ability[0])
    }, []);

    return (
        <>
            <div className="container justify-center inline-flex flex-wrap gap-5 items-center">
                {error && <p className="text-red-500">{error}</p>}
                {data.map((datas, index) => (
                    <div className="card gap-5 bg-slate-800 hover:scale-125 w-fit h-fit rounded-md px-4 pt-4 pb-10 justify-center text-center">
                        <img className="justify-center m-auto p-5 w-64 bg-slate-500 rounded-lg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}></img>
                        <p className="text-slate-100 font-semibold text-2xl">Name: {datas.name}</p>
                    </div>
                ))}
                {/* {detail.map((details) => {
                    <div>
                        <p>{details.ability.name}</p>
                    </div>
                })} */}
            </div>
        </>
    )
}