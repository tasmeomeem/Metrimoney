// import Biodata from "./Biodata/Biodata";
import CounterSection from "./Counter/CounterSection";
import FilterSection from "./FilterSection/FilterSection";
import Footer from "./Footer/Footer";
import Banner from "./Home/Banner";
import Premium from "./Home/premium";
import SuccessStory from "./Success/SuccessStory";
import WorkingProcess from "./Work/WorkingProcess";
// import Category from "./Home/Category";


const Home = () => {
    return (
        <div>
            <Banner/>
            {/* <Category/> */}
            <Premium/>
            <WorkingProcess/>
            <CounterSection/>
            <SuccessStory/>
            <FilterSection/>
            {/* <Biodata/> */}
            <Footer/>
        </div>
    );
};

export default Home;