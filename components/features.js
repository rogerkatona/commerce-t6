import serviceItems from "../data/serviceItems";
import Link from "next/link";
import Date from "./date";

export default function Features(props) {

    let filteredItem = serviceItems.filter(function (item){
        return item.featured === props.featured
    });

    return (
        <>
                {filteredItem
                    .filter(filteredItem => filteredItem.type === props.type)
                    .map(filteredItem => (

                        <section
                            key={filteredItem.id}
                            className={`md:px-12 px-6 py-12 ${filteredItem.featuredID % 2 !== 0  ? 'bg-gray.600' : 'bg-gray.100'}`}>

                            <div className="flex flex-col-reverse max-w-7xl mx-auto">
                                <div className=' '>
                                    <img
                                        src={filteredItem.src}
                                        width={1500}
                                        alt={'Featured Article'}
                                    />
                                </div>
                                <div className={`lg:pt-0 pt-6 flex flex-row ${filteredItem.featuredID % 2 !== 0  ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>

                                    <div className={`mb-3  ${filteredItem.featuredID % 2 !== 0  ? 'lg:mr-3' : 'lg:ml-3'}`}>
                                        <img
                                            src={filteredItem.srcThumbnail}
                                            width={300}

                                            alt={'Featured Article'}
                                        />
                                    </div>

                                    <div className='bg-gray.800 p-6 mb-3'>
                                        <div className='text-gray.100 '>
                                            <Link href={filteredItem.featuredHREF}>
                                                <a className='hover:underline uppercase text-xs'>{filteredItem.featuredURL}</a>
                                            </Link>
                                        </div>

                                        <div className='font-bebasNeue text-5xl text-gray.300 pt-3'>
                                            {filteredItem.title}
                                        </div>

                                        <div className='text-gray.400 pb-6'>{filteredItem.description}</div>
                                        <div className="flex flex-row">
                                            <div className={`${filteredItem.isButtonActive === 'true'  ? 'block' : 'hidden'}  pr-2`}>
                                                <a href={filteredItem.buttonHref}>
                                                    <button className="hover:bg-newYellow.500 hover:text-newGray.700 text-xs text-newYellow.500 uppercase px-4 py-3 border border-rust.500 rounded-lg">
                                                        {filteredItem.buttonText}
                                                    </button>
                                                </a>
                                            </div>
                                            <div className="">
                                                <Link href={filteredItem.featuredHREF}>
                                                    <button className="hover:bg-newYellow.500 hover:text-newGray.700 text-xs text-newYellow.500 uppercase px-4 py-3 border border-rust.500 rounded-lg">
                                                        {filteredItem.featuredButtonLabel}
                                                    </button>
                                                </Link>
                                            </div>
                                         </div>
                                    </div>

                                </div>
                            </div>
                        </section>
                    ))}
        </>
    )
}






