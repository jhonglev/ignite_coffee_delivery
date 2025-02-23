import { createContext, ReactNode, useState } from "react";
import expressoTradicional from "@/assets/expresso-tradicional.png";
import expressoAmericano from "@/assets/expresso-americano.png";
import expressoCremoso from "@/assets/expresso-cremoso.png";
import expressoGelado from "@/assets/expresso-gelado.png";
import cafeComLeite from "@/assets/cafe-com-leite.png";
import latte from "@/assets/latte.png";
import capuccino from "@/assets/capuccino.png";
import machiatto from "@/assets/machiatto.png";
import mocaccino from "@/assets/mocaccino.png";
import chocolateQuente from "@/assets/chocolate-quente.png";
import cubano from "@/assets/cubano.png";
import havaiano from "@/assets/havaiano.png";
import arabe from "@/assets/arabe.png";
import irlandes from "@/assets/irlandes.png";

export interface CoffeeProps {
  id: number;
  name: string;
  description?: string;
  price: number;
  photo: string;
  tags?: string[];
  quantity: number;
}

export const coffeeList: CoffeeProps[] = [
  {
    id: 1,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    photo: expressoTradicional,
    tags: ["Tradicional"],
    quantity: 0,
  },
  {
    id: 2,
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
    photo: expressoAmericano,
    tags: ["Tradicional"],
    quantity: 0,
  },
  {
    id: 3,
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
    photo: expressoCremoso,
    tags: ["Tradicional"],
    quantity: 0,
  },
  {
    id: 4,
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
    photo: expressoGelado,
    tags: ["Tradicional", "Gelado"],
    quantity: 0,
  },
  {
    id: 5,
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
    photo: cafeComLeite,
    tags: ["Tradicional", "Com Leite"],
    quantity: 0,
  },
  {
    id: 6,
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
    photo: latte,
    tags: ["Tradicional", "Com Leite"],
    quantity: 0,
  },
  {
    id: 7,
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
    photo: capuccino,
    tags: ["Tradicional", "Com Leite"],
    quantity: 0,
  },
  {
    id: 8,
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
    photo: machiatto,
    tags: ["Tradicional", "Com Leite"],
    quantity: 0,
  },
  {
    id: 9,
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
    photo: mocaccino,
    tags: ["Tradicional", "Com Leite"],
    quantity: 0,
  },
  {
    id: 10,
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
    photo: chocolateQuente,
    tags: ["Especial", "Com Leite"],
    quantity: 0,
  },
  {
    id: 11,
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
    photo: cubano,
    tags: ["Especial", "Alcoólico", "Gelado"],
    quantity: 0,
  },
  {
    id: 12,
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.9,
    photo: havaiano,
    tags: ["Especial"],
    quantity: 0,
  },
  {
    id: 13,
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
    photo: arabe,
    tags: ["Especial"],
    quantity: 0,
  },
  {
    id: 14,
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.9,
    photo: irlandes,
    tags: ["Especial", "Alcoólico"],
    quantity: 0,
  },
];

interface CartContextProps {
  items: Array<CoffeeProps>;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  totalNumberOfProducts: number;
  totalValue: number;
  removeItem: (id: number) => void;
}

export const CartContext = createContext<CartContextProps>({
  items: coffeeList,
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  totalNumberOfProducts: 0,
  totalValue: 0,
  removeItem: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<Array<CoffeeProps>>(coffeeList);
  const totalNumberOfProducts = items.filter(
    (item) => item.quantity > 0
  ).length;
  const totalValue = items.reduce(
    (acc, item) => (acc = acc + item.quantity * item.price),
    0
  );

  const increaseQuantity = (id: number) => {
    setItems((items) => {
      return items.map((item) => {
        if (item.id !== id) {
          return item;
        }
        return { ...item, quantity: item.quantity + 1 };
      });
    });
  };

  const decreaseQuantity = (id: number) => {
    setItems((items) => {
      return items.map((item) => {
        if (item.id !== id || item.quantity === 0) {
          return item;
        }
        return { ...item, quantity: item.quantity - 1 };
      });
    });
  };

  const removeItem = (id: number) =>
    setItems((items) =>
      items.map((item) => {
        if (item.id !== id) {
          return item;
        }
        return { ...item, quantity: 0 };
      })
    );

  return (
    <CartContext.Provider
      value={{
        items,
        increaseQuantity,
        decreaseQuantity,
        totalNumberOfProducts,
        totalValue,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
