import Categories from "@/components/Categories/Categories";
import NewProducts from "@/components/NewProducts/NewProducts";
import ProductList from "@/components/ProductList/ProductList";
import Slider from "@/components/Slider/Slider";


export default function Home() {
  return <main className=" overflow-hidden">

    <Slider/>

    <ProductList/>


    <Categories/>

    <NewProducts/>
  </main>;
}
