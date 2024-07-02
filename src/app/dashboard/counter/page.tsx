import { CartCounter } from "@/shopping-cart";

export const metadata = {
  title: "Counter",
  description: "Counter page",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Shopping cart products</span>
      <CartCounter value={35}/>
    </div>
  );
}
