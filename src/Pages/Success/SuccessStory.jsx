

const SuccessStory = () => {
    return (
        <div className="pb-20">
            <div className="text-center text-4xl font-bold pt-10 mb-5 ">Success Story</div>

            <div className="flex justify-around flex-col md:flex-row gap-5">
            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://i.ibb.co/qYVQLbY/couple.jpg" alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Marrige Date:2-2-20</h5>
                        <div className="flex">
                            <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
                                Review Star: 
                            </p>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            </div>
                        </div>
                        <p>
                            Amid virtual meetings on a matrimony site, Maya found Abhay. <br/>A digital spark turned into love, leading to a heartwarming marriage.
                        </p>
                    </div>
                </a>

                <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48  md:rounded-none md:rounded-s-lg" src="https://i.ibb.co/GJbGTs9/couple3.jpg" alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Marrige Date:2-2-20</h5>
                        <div className="flex">
                            <p className="mb-3  text-gray-700 dark:text-gray-400 text-xl font-bold">
                                Review Star:  
                            </p>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 " />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            </div>
                        </div>
                        <p>
                            Aisha embraced arranged marriage via a matrimony site, finding unexpected love with Aditya. <br/>Their journey fused tradition and modernity beautifully.
                        </p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default SuccessStory;