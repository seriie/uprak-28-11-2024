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

            const details = await Promise.all(
                data.results.map(async (datas) => {
                    const res = await fetch(datas.url);
                    return await res.json();
                })
            );

            setDetail(details);
        } catch (e) {
            setError("Error: " + e.message);
        }
    }
    
    useEffect(() => {
        fetchApi();
    }, []);

    return (
        <>
            <div className="container justify-center inline-flex flex-wrap gap-5 items-center">
                {error && <p className="text-red-500">{error}</p>}
                {data.map((datas, index) => {
                    const details = detail[index];
                                
                    return (
                        <div
                            key={datas.name}
                            className="card gap-5 bg-slate-800 hover:scale-105 transition-all ease-in-out cursor-pointer w-fit h-fit rounded-md px-4 pt-4 pb-10 justify-center text-center"
                        >
                            <img
                                alt={datas.name}
                                className="justify-center m-auto p-5 w-64 bg-slate-500 rounded-lg"
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                            />
                            <p className="text-slate-100 font-semibold text-2xl">
                                Name: {datas.name}
                            </p>
                    
                            {details && (
                                <div className="mt-2">
                                    <p className="text-slate-100 font-bold text-2xl">Ability:</p>
                                    {details.abilities.map((abs, idx) => (
                                        <div key={idx} className="text-slate-300">
                                            <div className="inline-block">
                                                - {abs.ability.name}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </>
    )
}