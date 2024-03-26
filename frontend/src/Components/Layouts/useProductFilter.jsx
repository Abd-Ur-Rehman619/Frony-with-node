import { useEffect, useState } from "react";

export function useProductFilter(gender) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchShoes() {
      try {
        const response = await fetch("http://localhost:3000/");
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

  useEffect(() => {
    const filteredProducts = shoes.filter((shoe) => shoe.gender === gender);
    setFilteredProducts(filteredProducts);
  }, [gender]);

  return { filteredProducts, isLoading };
}
