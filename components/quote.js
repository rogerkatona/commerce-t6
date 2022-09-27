import quoteItems from "../data/quoteItems";


export default function Quote(props) {

    let filteredItem = quoteItems.filter(function (item){
        return item.id === props.id
    });


    return (

        <>
            {filteredItem
                .map(filteredItem => (
                    <div
                        key={filteredItem.id}
                        className="flex flex-row max-w-7xl mx-auto xl:px-0 px-6 pb-12">

                        <section className={`max-w-7xl mx-auto w-3/4 ${filteredItem.id % 2 === 0  ? 'bg-white.100' : 'bg-white.100'}`}>
                            <div className="flex flex-col justify-center items-center ">
                                <div className="flex flex-col pt-12 text-darkBlue.700">
                                    <div className="text-center font-light text-xl">&quot;{filteredItem.text}&quot;</div>
                                    <div className="text-center font-light text-lg pt-3"> - {filteredItem.author}, {filteredItem.title}</div>
                                </div>
                            </div>
                        </section>
                    </div>
                ))}
        </>

    )
}






