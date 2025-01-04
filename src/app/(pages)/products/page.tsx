import { Product1 } from "@/components/Products/Product1";
import { Product10 } from "@/components/Products/Product10";
import { Product11 } from "@/components/Products/Product11";
import { Product12 } from "@/components/Products/Product12";
import { Product2 } from "@/components/Products/Product2";
import { Product3 } from "@/components/Products/Product3";
import { Product4 } from "@/components/Products/Product4";
import { Product5 } from "@/components/Products/Product5";
import { Product6 } from "@/components/Products/Product6";
import { Product7 } from "@/components/Products/Product7";
import { Product8 } from "@/components/Products/Product8";
import { Product9 } from "@/components/Products/Product9";
import { ProductHeader1 } from "@/components/Products/ProductHeader1";
import { ProductHeader2 } from "@/components/Products/ProductHeader2";
import { ProductHeader3 } from "@/components/Products/ProductHeader3";
import { ProductHeader4 } from "@/components/Products/ProductHeader4";
import { ProductHeader5 } from "@/components/Products/ProductHeader5";
import { ProductHeader6 } from "@/components/Products/ProductHeader6";
import { ProductHeader7 } from "@/components/Products/ProductHeader7";
import { ProductHeader8 } from "@/components/Products/ProductHeader8";

const productComponents = [
  { component: Product1, title: "Product 1" },
  { component: Product2, title: "Product 2" },
  { component: Product3, title: "Product 3" },
  { component: Product4, title: "Product 4" },
  { component: Product5, title: "Product 5" },
  { component: Product6, title: "Product 6" },
  { component: Product7, title: "Product 7" },
  { component: Product8, title: "Product 8" },
  { component: Product9, title: "Product 9" },
  { component: Product10, title: "Product 10" },
  { component: Product11, title: "Product 11" },
  { component: Product12, title: "Product 12" },
  { component: ProductHeader1, title: "Product Header 1" },
  { component: ProductHeader2, title: "Product Header 2" },
  { component: ProductHeader3, title: "Product Header 3" },
  { component: ProductHeader4, title: "Product Header 4" },
  { component: ProductHeader5, title: "Product Header 5" },
  { component: ProductHeader6, title: "Product Header 6" },
  { component: ProductHeader7, title: "Product Header 7" },
  { component: ProductHeader8, title: "Product Header 8" },

  // Add more products as necessary
];

const ProductsPage = () => {
  return (
    <div>
      <h1 className='text-slate-800 text-8xl text-center underline font-bold my-4'>Products</h1>
      <section className='mb-4'>
        {productComponents.map(({ component: ProductComponent, title }, index) => (
          <div key={index}>
            {/* Render the title as an h2 element */}
            <h2 className='bg-slate-300 text-4xl font-bold text-center py-10'>{title}</h2>
            {/* Render the component */}
            <ProductComponent />
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductsPage;
