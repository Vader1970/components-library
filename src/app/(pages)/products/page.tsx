import { Product1 } from "@/components/Product1";
import { Product10 } from "@/components/Product10";
import { Product11 } from "@/components/Product11";
import { Product12 } from "@/components/Product12";
import { Product2 } from "@/components/Product2";
import { Product3 } from "@/components/Product3";
import { Product4 } from "@/components/Product4";
import { Product5 } from "@/components/Product5";
import { Product6 } from "@/components/Product6";
import { Product7 } from "@/components/Product7";
import { Product8 } from "@/components/Product8";
import { Product9 } from "@/components/Product9";
import { ProductHeader1 } from "@/components/ProductHeader1";
import { ProductHeader2 } from "@/components/ProductHeader2";
import { ProductHeader3 } from "@/components/ProductHeader3";
import { ProductHeader4 } from "@/components/ProductHeader4";
import { ProductHeader5 } from "@/components/ProductHeader5";
import { ProductHeader6 } from "@/components/ProductHeader6";
import { ProductHeader7 } from "@/components/ProductHeader7";
import { ProductHeader8 } from "@/components/ProductHeader8";

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
      <h1 className='text-white bg-black text-4xl text-center tracking-tighter font-bold border-b py-4 sm:5xl'>
        Products
      </h1>
      <section className='mb-4'>
        {productComponents.map(({ component: ProductComponent, title }, index) => (
          <div key={index}>
            {/* Render the title as an h2 element */}
            <h2 className='bg-black text-white text-base sm:text-2xl font-bold text-center py-10 px-[5%] flex justify-between items-center'>
              {title}
              <a
                href={`/view-code/${title.replace(/\s+/g, "")}`}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-blue-500 text-white text-base px-4 py-2 rounded hover:bg-blue-600 transition duration-200'
              >
                View Code
              </a>
            </h2>
            {/* Render the component */}
            <ProductComponent />
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductsPage;
