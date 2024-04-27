import ServicesLayout from "./Layouts/ServicesLayout";
import Delivery from "../assets/Delivery.png";
import CustomerService from "../assets/CustomerService.png";
import MoneyBack from "../assets/MoneyBack.png";

export default function ServicesComponent() {
  return (
    <>
      <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 lg:grid-cols-3 md:justify-between justify-items-center gap-6">
        <ServicesLayout
          img={Delivery}
          title={"FREE AND FAST DELIVERY"}
          description={"Free delivery for all orders over $140"}
        />
        <ServicesLayout
          img={CustomerService}
          title={"24/7 CUSTOMER SERVICE"}
          description={"Friendly 24/7 customer support"}
        />
        <ServicesLayout
          img={MoneyBack}
          title={"MONEY BACK GUARANTEE"}
          description={"We return money within 30 days"}
        />
      </div>
    </>
  );
}
