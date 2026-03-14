import { ProductsPageHeader } from '@/widgets/ProductsPageHeader';
import { ProductTable } from '@/widgets/ProductTable';

export const ProductsPage = () => {
  return (
    <div className="min-h-screen w-full bg-neutral-100 py-5 px-7 flex flex-col justify-start items-start gap-7 overflow-hidden">
      <div className="w-full flex flex-col justify-start items-start gap-7">
        <ProductsPageHeader />
        <div className="self-stretch flex-1 inline-flex justify-start items-start gap-7 min-h-0">
          <div className="flex-1 flex flex-col justify-start items-start gap-7 min-h-0 min-w-0">
            <ProductTable />
          </div>
        </div>
      </div>
    </div>
  );
};
