
const CounterSection = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center py-10">Counter Section</h1>
            <div className="grid grid-cols-3 gap-10 text-center">
                <div>
                    <h1 className="text-red-800 font-bold text-4xl">1000</h1>
                    <p className="">Total Bio_data of this website</p>
                </div>
                <div>
                    <h1 className="text-red-800 font-bold text-4xl">500</h1>
                    <p>We have 500 girls Bio_data</p>
                </div>
                <div>
                    <h1 className="text-red-800 font-bold text-4xl">500</h1>
                    <p>We have 500 boys Bio_data</p>
                </div>
            </div>
        </div>
    );
};

export default CounterSection;