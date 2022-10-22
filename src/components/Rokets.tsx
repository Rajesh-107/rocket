
import { useGetRoketNameQuery } from '../features/api/apiSlice';
import Roket from './Roket';

const Rokets = () => {
    const {data:RoketName, isLoading, isError} = useGetRoketNameQuery();

    let content = null;
    if(isLoading){
        content = <div>
            <h1>Loading.....</h1>
        </div>
    }

    return (

        <div id='bikeparts'>

            <section id="carpart" className="text-gray-600 body-font">
                <div className="py-24 container m-auto lg:w-10/12 w-full">
                    <h1 className="sm:text-3xl text-2xl text-center font-medium title-font mb-2 text-gray-900">
                        All Bikepart Item availabe
                    </h1>
                    <div className="flex flex-wrap w-full py-14 mb-20 px-4">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0 ">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                                Our Service
                            </h1>

                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <Roket></Roket>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Rokets;