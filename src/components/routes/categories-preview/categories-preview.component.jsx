import { useContext} from "react";
import { CategoriesContext } from "../../../context/categories.context";
import ProductCard from "../../product-card/product-card.component";
import CategoryPreview from "../../category-preview/category-preview.component";


const CategoriesPreview =()=>{
    const {categoriesMap} = useContext(CategoriesContext);

    return(
        <>
            {
                Object.keys(categoriesMap).map(title=>{
                    const products = categoriesMap[title];
                    return (
                        <CategoryPreview key={title} title={title} products={products} />
                    )
                })
            }
        </>
    )
}

export default CategoriesPreview;