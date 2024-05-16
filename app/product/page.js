import Header from "../ui/header";
import ProductSection from "../ui/product/preview/product-section";
import Footer from "../ui/footer/footer";
import { addToCart } from "../lib/action";
import { isAdded } from "../lib/action";
import { removeCaption } from "../lib/action";

export default async function Product({ searchParams }) {
  const code = searchParams.query;
  return (
    <div>
      <Header />
      <ProductSection
        code={code}
        addCart={addToCart}
        isAdded={isAdded}
        removeCaption={removeCaption}
      />
      <Footer />
    </div>
  );
}
