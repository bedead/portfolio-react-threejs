

const CertificateCard = ({
    index,
    image,
}) => {
    return (
        <motion.div>
            <div>
                <motion.div
                // variants={
                //     fadeIn('right', 'spring', 0.5 * index, 0.75)
                // }
                >
                    <Tilt options={
                        {
                            max: 45,
                            scale: 1,
                            speed: 450
                        }
                    }
                        className='bg-white shadow-[#fcd4d4] shadow-card p-5 rounded-2xl sm:w-[360px] w-full'>

                        <div className='relative w-full h-[230px]'>
                            <img src={image}
                                alt='project_image'
                                className='w-full h-full object-cover rounded-2xl' />

                            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                                <div onClick={
                                    () => window.open(source_code_link, "_blank")
                                }
                                    className='white-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                                    <img src={
                                        link_type == 'github' ? github : link_type == 'colab' ? colab : link_type == 'huggingface' ? huggingface : link_type == 'appstore' ? appstore : github
                                    }
                                        alt='github repositories for projects'
                                        className='w-1/2 h-1/2 object-contain' />
                                </div>
                            </div>
                        </div>

                        <div className='mt-5'>
                            <h3 className='text-black font-bold text-[24px]'>
                                {name}</h3>
                            <p className='mt-2 text-secondary text-[14px]'>
                                {description}</p>
                        </div>

                        <div className='mt-4 flex flex-wrap gap-2'>
                            {
                                tags.map((tag) => (
                                    <p key={
                                        `${name}-${tag.name
                                        }`
                                    }
                                        className={
                                            `text-[14px] ${tag.color
                                            }`
                                        }>
                                        #{
                                            tag.name
                                        } </p>
                                ))
                            } </div>
                        <p>{date}</p>
                    </Tilt>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default CertificateCard;