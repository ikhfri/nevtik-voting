import React, { useEffect, useState } from "react";

const VotedCard = ({ candidate }) => {
    const [candidateMission, setCandidateMission] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (candidate?.missions) {
            setIsLoading(false);
        }
        setCandidateMission(isLoading ? [] : JSON.parse(candidate?.missions));
    }, [candidate, isLoading]);

    return (
        <div className="w-11/12 lg:w-8/12 m-2 shadow-xl transition duration-300 glassmorphism rounded-3xl">
            <div className="flex justify-center">
                <div className="avatar static w-1/4 m-3">
                    <div className="rounded-3xl w-52 h-96">
                        <img src={candidate?.photo_url} alt="" />
                    </div>
                </div>
                <div className="w-3/4 text-dark-blue m-3 flex flex-col gap-1 justify-start">
                    <h1 className="text-4xl font-bold">{candidate?.name}</h1>
                    <div>
                        <div className="mb-5">
                            <h1 className="text-2xl">Visi</h1>
                            <p>{candidate?.vision}</p>
                        </div>
                        <div>
                            <h1 className="text-2xl">Misi</h1>
                            <ul className="list-disc ml-5">
                                {candidateMission?.map((candidate, index) => (
                                    <li key={index}>{candidate}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VotedCard;
