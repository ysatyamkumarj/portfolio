import WorkMernAuthentication from '../assets/work_mern_authentication.png';
import WorkProjectManagementGraphQL from '../assets/work_project_management_graphql.png';

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen bg-[#F0F5F9] text-[#1E2022]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-[#52616B] text-3xl font-bold inline border-b-4 border-[#1E2022]'>Work</p>
                    <p className='py-6'>Check out some of my recent work</p>
                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-2 gap-4'>

                    {/* Grid item */}
                    <div style={{ backgroundImage: `url(${WorkMernAuthentication})` }}
                    className='max-w-[500px] shadow-lg shadow-[#52616B] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-[#F0F5F9] tracking-wider'>
                                MERN Authentication
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ysatyamkumarj/mern_auth' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#F0F5F9] text-[#1E2022] font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Grid item */}
                    <div style={{ backgroundImage: `url(${WorkProjectManagementGraphQL})` }}
                    className='max-w-[500px] shadow-lg shadow-[#52616B] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-[#F0F5F9] tracking-wider'>
                                Project Management using GraphQL
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/ysatyamkumarj/project_management_graphql' target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#F0F5F9] text-[#1E2022] font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;