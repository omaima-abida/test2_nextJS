import Image from "next/image";
import React from "react";
const ProductCard = ({image,prix,des,id}) => {
    return (
        <>
    {/* <Link href={`/products/${id}`}> */}
    <div className="shadow rounded-md hover:shadow-md cursor-pointer overflowhidden p-4">
    
        <Image
        src={image}
        width={300}
        height={200}
        alt={des}
        />
    <h6 className="text-center text-slate-600 p-2">{des.substring(0,20)}...</h6>
    <p className="text-center text-emerald-500 p-2">{prix}</p>
    </div>
    {/* </Link> */}
    </>
    );
    }
    export default ProductCard;