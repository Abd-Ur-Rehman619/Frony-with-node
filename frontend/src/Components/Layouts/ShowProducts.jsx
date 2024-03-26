import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import DescriptionLabel from "./DescriptionLabel";
import ProductCard from "./ProductCard";
import TitleLabel from "./TitleLabel";

export default function ShowProducts({ titleLabel, descriptionLabel }) {
  const [shoes, setShoes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchShoes() {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        setShoes(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching shoes:", error);
        setIsLoading(false);
      }
    }
    fetchShoes();
  }, []);

  return (
    <>
      <div className="flex items-center flex-col gap-32 ">
        <div className="container flex gap-32 mt-5">
          <main className="flex flex-col gap-10">
            <div>
              <TitleLabel>{titleLabel}</TitleLabel>
            </div>
            <div>
              <DescriptionLabel> {descriptionLabel} </DescriptionLabel>
            </div>
            {isLoading ? (
              <div className="flex justify-center ">
                <CircularProgress />
              </div>
            ) : (
              <div className="grid grid-cols-5 gap-10">
                {shoes &&
                  shoes.map((items) => (
                    <div key={items._id}>
                      <ProductCard
                        slug={items.slug}
                        name={items.name}
                        price={items.price}
                        brand={items.brand}
                        discount={items.discount}
                        gender={items.gender}
                        image={items.imageURL}
                      />
                    </div>
                  ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
}
