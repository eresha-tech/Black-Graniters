import { useParams, Navigate } from 'react-router-dom';
import { allProducts, otherProducts, onyxProducts, quartziteProducts } from '../data/products';
import ProductPageTemplate from '../components/ProductPageTemplate';

const DynamicProductPage = () => {
  const { category, productId } = useParams<{ category: string; productId: string }>();

  let product: any = allProducts.find(p =>
    p.category === category && p.id === productId
  );

  if (!product && category === 'other-products') {
    product = otherProducts.find(p => p.id === productId);
  }
  
  if (!product && category === 'onyx') {
    product = onyxProducts.find(p => p.id === productId);
  }
  
  if (!product && category === 'quartzite') {
    product = quartziteProducts.find(p => p.id === productId);
  }
  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const getBackInfo = (category: string) => {
    switch (category) {
      case 'granite':
        return { link: '/shop/granite', label: 'Granite Collection' };
      case 'marble':
        return { link: '/shop/marble', label: 'Marble Collection' };
      case 'sandstone':
        return { link: '/shop/sandstone', label: 'Sandstone Collection' };
      case 'onyx':
        return { link: '/shop/onyx', label: 'Onyx Collection' };
      case 'quartzite':
        return { link: '/shop/quartzite', label: 'Quartzite Collection' };
      case 'other-products':
        return { link: '/shop/other-products', label: 'Other Products' };
      default:
        return { link: '/shop', label: 'Shop' };
    }
  };

  const backInfo = getBackInfo(category || '');

  return (
    <ProductPageTemplate
      product={product}
      backLink={backInfo.link}
      backLabel={backInfo.label}
    />
  );
};

export default DynamicProductPage;
