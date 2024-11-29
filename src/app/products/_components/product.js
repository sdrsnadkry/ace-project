import Image from "next/image";
import Link from "next/link";

function Product(props) {
  return (
    <Link href={"/products/" + props.id} className="border rounded-md border-slate-500">
      {/* image */}
      <Image
        width={200}
        height={200}
        className="w-full h-[300px]"
        alt="Product image"
        src={props.image}
      />
      {/* title */}
      <p className="font-bold text-center">{props.title}</p>
      {/* price */}
      <p className="text-center">$ {props.price}</p>
      {/* ratings */}
      <p className="text-center">4.5/5</p>
    </Link>
  );
}

export default Product;
