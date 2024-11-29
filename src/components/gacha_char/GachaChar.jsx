import { useState } from "react";

export default function GachaChar({ pokemonData }) {
    const [randomPokemon, setRandomPokemon] = useState(null);

    const handleGacha = async () => {
        if (pokemonData.length > 0) {
            const randomIndex = Math.floor(Math.random() * pokemonData.length);
            const selectedPokemon = pokemonData[randomIndex];

            const response = await fetch(selectedPokemon.url);
            const pokemonDetail = await response.json();

            setRandomPokemon({
                name: selectedPokemon.name,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomIndex + 1}.png`,
                abilities: pokemonDetail.abilities,
            });
        }
    };

    return (
        <>
            <div className="justify-center my-10 flex flex-col items-center">
                <button
                    onClick={handleGacha}
                    className="random-btn py-4 px-8 text-slate-100 rounded font-bold bg-sky-500 hover:bg-sky-600 transition"
                >
                    Gacha
                </button>

                {/* Menampilkan Pokemon yang dipilih secara acak */}
                {randomPokemon && (
                    <div className="mt-8 text-center bg-slate-800 p-6 rounded-lg">
                        <img
                            src={randomPokemon.image}
                            alt={randomPokemon.name}
                            className="w-40 h-40 mx-auto"
                        />
                        <p className="text-slate-100 font-semibold mt-2 text-xl">
                            {randomPokemon.name}
                        </p>
                        <div className="mt-4 text-slate-200">
                            <p className="font-bold">Abilities:</p>
                            {randomPokemon.abilities.map((ability, index) => (
                                <p key={index} className="text-sm">{ability.ability.name}</p>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}