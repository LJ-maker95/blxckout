import { FC } from "react";

export const TeamView: FC = ({ }) => {

    return (
        <div>
            <div className="w-full bg-black px-10 pt-10">
                <div className="container mx-auto">
                    <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                    <div className="container flex justify-center bg-black mx-auto pt-10">
                        <div>
                            <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-[#eacda3] to-[#d6ae7b] mx-auto py-5">CORE TEAM</h1>
                        </div>
                    </div>
                        <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                            <div className="rounded overflow-hidden shadow-md bg-black">
                                <div className="absolute -mt-20 w-full flex justify-center">
                                    <div className="h-32 w-32">
                                        <img src="blocksmith1.jpeg" className="rounded-full object-cover h-full w-full shadow-md" />
                                    </div>
                                </div>
                                <div className="px-6 mt-16">
                                    <div className="font-bold text-3xl text-white text-center">LJ</div>
                                    <p className="text-white text-2xl text-center">Product Development</p>
                                    <p className="text-center text-base pt-5 font-normal">Technology strategy & cloud consultant for a FAANG equivalent - worked with Fortune 500 companies to define IT strategies for last 5+ years including brands like Virgin Media & Accenture.</p>
                                    <div className="w-full flex justify-center pt-5 pb-5">
                                        <a href="javascript:void(0)" className="mx-5">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                                </svg>
                                            </div>
                                        </a>
                                        <a href="https://twitter.com/lukej_sol" className="mx-5">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                            <div className="rounded overflow-hidden shadow-md bg-black">
                                <div className="absolute -mt-20 w-full flex justify-center">
                                    <div className="h-32 w-32">
                                        <img src="blocksmith2.jpeg" className="rounded-full object-cover h-full w-full shadow-md" />
                                    </div>
                                </div>
                                <div className="px-6 mt-16">
                                    <div className="font-bold text-3xl text-white text-center pb-1">Solbrood</div>
                                    <p className="text-white text-2xl text-center">Community & Creative</p>
                                    <p className="text-center text-base pt-5 font-normal">Creative, previously worked with numerous global lifestyle brands including Timeout UK. He has directed, produced, filmed and edited both long and short form content for social media.</p>
                                    <div className="w-full flex justify-center pt-5 pb-5">
                                        <a href="https://twitter.com/solbrood" className="mx-5">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                            <div className="rounded overflow-hidden shadow-md bg-black">
                                <div className="absolute -mt-20 w-full flex justify-center">
                                    <div className="h-32 w-32">
                                        <img src="blocksmith3.jpeg" className="rounded-full object-cover h-full w-full shadow-md" />
                                    </div>
                                </div>
                                <div className="px-6 mt-16">
                                    <div className="font-bold text-3xl text-white text-center pb-1">Big C</div>
                                    <p className="text-white text-2xl text-center">Economy & Tokenomics</p>
                                    <p className="text-center text-base pt-5 font-normal">PHD Economics student at University College London (UCL) repsonsible for designing the economic model for our token. Big C will work closely with LJ and Solbrood to build out the social economy and research DAO's. </p>
                                    <div className="w-full flex justify-center pt-5 pb-5">
                                        <a href="javascript:void(0)" className="mx-5">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-black px-10 pt-2">
                <div className="container mx-auto">
                    <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                    <div className="container flex justify-center bg-black mx-auto pt-16">
                        <div>
                            <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-[#eacda3] to-[#d6ae7b] mx-auto py-5">SUPPORT TEAM</h1>
                        </div>
                    </div>
                        <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                            <div className="rounded overflow-hidden shadow-md bg-black">
                                <div className="absolute -mt-20 w-full flex justify-center">
                                    <div className="h-32 w-32">
                                        <img src="blocksmith1.jpeg" className="rounded-full object-cover h-full w-full shadow-md" />
                                    </div>
                                </div>
                                <div className="px-6 mt-16">
                                    <div className="font-bold text-3xl text-white text-center">Soldrizz</div>
                                    <p className="text-white text-2xl text-center">Community Manager</p>
                                    <p className="text-center text-base pt-3 font-normal">Younger brother of Solbrood and recently graduated Biology student, trying his hand at crytpo community management - let's hope we earn him a bit of spare beer money.</p>
                                    <div className="w-full flex justify-center pt-5 pb-5">
                                        <a href="https://twitter.com/lukej_sol" className="mx-5">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                            <div className="rounded overflow-hidden shadow-md bg-black">
                                <div className="absolute -mt-20 w-full flex justify-center">
                                    <div className="h-32 w-32">
                                        <img src="blocksmith2.jpeg" className="rounded-full object-cover h-full w-full shadow-md" />
                                    </div>
                                </div>
                                <div className="px-6 mt-16">
                                    <div className="font-bold text-3xl text-white text-center pb-1">Solshrimp</div>
                                    <p className="text-white text-2xl text-center">Moderator</p>
                                    <p className="text-center text-base pt-3 font-normal">Managing the discord and supporting social media operations.</p>
                                    <div className="w-full flex justify-center pt-5 pb-5">
                                        <a href="https://twitter.com/solbrood" className="mx-5">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
