import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../context/ContextProvider";

const CandidateCard = ({ candidate, user, handler }) => {
    const { setToken } = useStateContext();
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const queryClient = useQueryClient();

    const { mutate } = useMutation(
        (payload) => axiosClient.post(`/voting/${candidate.id}`, payload),
        {
            onSuccess: () => {
                queryClient.invalidateQueries("user");
                setToken(null);
                navigate("/voted");
            },
            onError: (err) => {
                const response = err.response;
                if (
                    (response && response.status === 401) ||
                    response.status === 422
                ) {
                    setError(response.data.message);
                }
            },
        }
    );

    const onSubmit = (ev) => {
        ev.preventDefault();

        const payload = {
            candidate_id: candidate.id,
        };

        mutate(payload);
    };

    const candidateMission = JSON.parse(candidate?.missions);

    return (
        <>
            <div
                to={`/candidate/${candidate?.id}`}
                onClick={() => {
                    document
                        .getElementById(`modal${candidate?.id}`)
                        .showModal();
                }}
                className="glassmorphism flex flex-col gap-2 items-center my-5 md:my-0 w-52 h-[23rem] rounded-lg transition duration-300 candidate"
            >
                <div className="avatar static m-2">
                    <div className="w-48 h-60 rounded-lg candidate-img">
                        <img src={candidate?.photo_url} alt="" />
                    </div>
                </div>
                <div className="text-dark-blue w-44 text-center font-bold">
                    <span className="text-lg leading-none">
                        {candidate?.name}
                    </span>
                </div>
                {user?.role == "admin" ? (
                    <button
                        className="text-cream text-xl px-10 bg-red-700 rounded transition duration-300 hover:text-dark-blue hover:bg-light-blue"
                        onClick={(ev) => {
                            ev.stopPropagation();
                            handler(candidate?.id);
                        }}
                    >
                        Delete
                    </button>
                ) : (
                    <button
                        className="text-white text-xl px-10 bg-dark-blue rounded transition duration-300 hover:text-dark-blue hover:bg-light-blue"
                        onClick={(ev) => {
                            ev.stopPropagation();
                            document
                                .getElementById(`vote${candidate?.id}`)
                                .showModal();
                        }}
                    >
                        vote
                    </button>
                )}
            </div>
            <dialog id={`vote${candidate?.id}`} className="modal">
                <div className="modal-box bg-[#D9D9D9]">
                    <h3 className="font-bold text-2xl text-dark-blue">
                        Are you sure
                    </h3>
                    <p className="py-4 text-xl text-dark-blue">
                        You want to vote {candidate?.name}?
                    </p>
                    <div className="modal-action">
                        <button
                            onClick={onSubmit}
                            className="btn text-lg bg-cyan-600 text-white border-none"
                        >
                            Confirm
                        </button>
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn text-lg bg-red-700 text-white border-none">
                                Close
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
            <dialog id={`modal${candidate?.id}`} className="modal">
                <div className="flex justify-center glassmorphism modal-box max-w-full w-11/12 lg:w-8/12">
                    <div className="flex md:flex-row justify-center gap-5">
                        <div className="avatar md:inline hidden w-52">
                            <div className="rounded-3xl w-52 h-[26rem]">
                                <img src={candidate?.photo_url} alt="" />
                            </div>
                        </div>
                        <div className="md:w-3/4 w-11/12 text-dark-blue md:m-3 m-0 flex flex-col gap-5">
                            <h1 className="md:text-4xl text-3xl font-bold">
                                {candidate?.name}
                            </h1>
                            <div className="overflow-y-auto md:overflow-y-visible">
                                <div className="mb-5">
                                    <h1 className="text-2xl font-semibold">
                                        Visi
                                    </h1>
                                    <p>{candidate?.vision}</p>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-semibold">
                                        Misi
                                    </h1>
                                    <ul className="list-disc ml-5 md:ml-0">
                                        {candidateMission?.map(
                                            (candidate, index) => (
                                                <li key={index}>{candidate}</li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop glassmorphism">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
};

export default CandidateCard;
