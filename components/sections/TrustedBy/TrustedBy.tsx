import Image from "next/image";


const TrustedBy = () => {
    return (
        <div className="py-8.75 bg-[#E5E7EA] px-4 rounded-lg">
            <h1 className="text-[26px] text-[#6D717F] font-semibold text-center">Trusted By</h1>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8 items-center">
                    <div>
                        <Image src="/images/Vector.svg" alt="Brand 1" className="mx-auto my-4" width={100} height={100} />
                    </div>
                    <div>
                        <Image src="/images/2.svg" alt="Brand 1" className="mx-auto my-4" width={100} height={100} />
                    </div>
                    <div>
                        <Image src="/images/3.svg" alt="Brand 1" className="mx-auto my-4" width={100} height={100} />
                    </div>
                    <div>
                        <Image src="/images/4.svg" alt="Brand 1" className="mx-auto my-4" width={100} height={100} />
                    </div>
                    <div>
                        <Image src="/images/5.svg" alt="Brand 1" className="mx-auto my-4" width={100} height={100} />
                    </div>
                    <div>
                        <Image src="/images/6.svg" alt="Brand 1" className="mx-auto my-4" width={100} height={100} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustedBy;