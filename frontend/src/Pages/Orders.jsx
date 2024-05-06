import { useEffect, useState } from "react";
import OrdersCard from "../Components/OrdersCard";
import { useNavigate } from "react-router-dom";

export default function Orders() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/orders", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (data === "Unauthorized!") {
          navigate("/");
        }
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    }
    fetchData();
  }, [token]);

  return (
    <>
      <div className="h-screen">
        {orders.map((order) => (
          <OrdersCard orders={order} key={order._id} />
        ))}
      </div>
    </>
  );
}
