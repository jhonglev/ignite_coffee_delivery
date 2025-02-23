import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import locationCheckout from "@/assets/location-checkout.png";
import dolar from "@/assets/dolar.png";
import credit from "@/assets/credit.png";
import debit from "@/assets/debit.png";
import money from "@/assets/money.png";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { CheckoutItem } from "@/components/Home/checkout-item";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { CartContext } from "@/contexts/cart";
import { formatCurrency } from "@/utils/format-currency";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PatternFormat } from "react-number-format";
import { OrderContext } from "@/contexts/order";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  postalCode: z.string().min(1, { message: "CEP é obrigatório." }),
  street: z.string().min(1, { message: "Rua é obrigatória." }),
  number: z.coerce
    .number({ coerce: true, invalid_type_error: "Número inválido." })
    .min(1, {
      message: "Número é obrigatório.",
    }),
  complement: z.string().optional(),
  neighborhood: z.string().min(1, { message: "Bairro é obrigatório." }),
  city: z.string().min(1, { message: "Cidade é obrigatória." }),
  state: z
    .enum(
      [
        "AC",
        "AL",
        "AP",
        "AM",
        "BA",
        "CE",
        "DF",
        "ES",
        "GO",
        "MA",
        "MT",
        "MS",
        "MG",
        "PA",
        "PB",
        "PR",
        "PE",
        "PI",
        "RJ",
        "RN",
        "RS",
        "RO",
        "RR",
        "SC",
        "SP",
        "SE",
        "TO",
      ],
      { message: "UF inválida." }
    )
    .refine((value) => value, {
      message: "UF é obrigatória.",
    }),
  paymentMethod: z.enum(["credit", "debit", "money"]).refine((value) => value, {
    message: "Forma de pagamento é obrigatória.",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

export const Checkout = () => {
  const { setOrderData } = useContext(OrderContext);
  const { items, totalValue } = useContext(CartContext);
  const navigate = useNavigate();

  const cartItems = items.filter((item) => item.quantity > 0);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      postalCode: "",
      street: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: undefined,
      paymentMethod: "credit",
    },
  });

  const submit = (data: FormSchema) => {
    setOrderData(data);
    navigate("/order");
  };

  return (
    <div className="grid grid-cols-12 gap-8 max-h-[600px]">
      <div className="col-span-7 text-[#403937]">
        <div className="flex flex-col">
          <h4 className="font-semibold text-[#403937] text-lg mb-2">
            Complete seu pedido
          </h4>
          <Form {...form}>
            <form
              id="form"
              onSubmit={form.handleSubmit(submit)}
              className="space-y-8"
            >
              <div className="grid grid-cols-12 bg-[#F3F2F2] rounded-lg p-8">
                <div className="col-span-12 flex gap-2 mb-8">
                  <div>
                    <img src={locationCheckout} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg">Endereço de Entrega</span>
                    <span>
                      Informe o endereço onde deseja receber seu pedido
                    </span>
                  </div>
                </div>
                <div className="col-span-12 grid grid-cols-12 gap-3">
                  <FormField
                    control={form.control}
                    name="postalCode"
                    render={({ field }) => (
                      <FormItem className="col-span-4">
                        <FormControl>
                          <PatternFormat
                            placeholder="CEP"
                            format="##.###-###"
                            customInput={Input}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="street"
                    render={({ field }) => (
                      <FormItem className="col-span-12">
                        <FormControl>
                          <Input placeholder="Rua" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="number"
                    render={({ field }) => (
                      <FormItem className="col-span-4">
                        <FormControl>
                          <Input type="number" placeholder="Nº" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="complement"
                    render={({ field }) => (
                      <FormItem className="col-span-8">
                        <FormControl>
                          <Input placeholder="Complemento" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="neighborhood"
                    render={({ field }) => (
                      <FormItem className="col-span-4">
                        <FormControl>
                          <Input placeholder="Bairro" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem className="col-span-6">
                        <FormControl>
                          <Input placeholder="Cidade" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem className="col-span-2">
                        <FormControl>
                          <Input placeholder="UF" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="w-full mt-3 bg-[#F3F2F2] rounded-lg p-8">
                <div className="col-span-12 flex gap-2 mb-8">
                  <div>
                    <img src={dolar} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg">Pagamento</span>
                    <span>
                      O pagamento é feito na entrega. Escolha a forma que deseja
                      pagar
                    </span>
                  </div>
                </div>
                <FormField
                  control={form.control}
                  name="paymentMethod"
                  render={({ field }) => (
                    <FormItem className="col-span-6">
                      <FormControl>
                        <ToggleGroup
                          className="flex w-full justify-between gap-3"
                          type="single"
                          onValueChange={(
                            value: "credit" | "debit" | "money"
                          ) => form.setValue("paymentMethod", value)}
                          {...field}
                        >
                          <ToggleGroupItem
                            className="bg-[#E6E5E5] w-44 h-12 flex justify-start p-3 py-5 data-[state=on]:bg-[#EBE5F9] data-[state=on]:border data-[state=on]:border-[#8047F8]"
                            value="credit"
                          >
                            <img src={credit} />
                            CARTÃO DE CRÉDITO
                          </ToggleGroupItem>
                          <ToggleGroupItem
                            className="bg-[#E6E5E5] w-44 h-12 flex justify-start p-3 py-5 data-[state=on]:bg-[#EBE5F9] data-[state=on]:border data-[state=on]:border-[#8047F8]"
                            value="debit"
                          >
                            <img src={debit} />
                            CARTÃO DE DÉBITO
                          </ToggleGroupItem>
                          <ToggleGroupItem
                            className="bg-[#E6E5E5] w-44 h-12 flex justify-start p-3 py-5 data-[state=on]:bg-[#EBE5F9] data-[state=on]:border data-[state=on]:border-[#8047F8]"
                            value="money"
                          >
                            <img src={money} />
                            DINHEIRO
                          </ToggleGroupItem>
                        </ToggleGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>
        </div>
      </div>
      <div className="col-span-5">
        <h4 className="font-semibold text-[#403937] text-lg mb-2">
          Cafés selecionados
        </h4>
        <div className="bg-[#F3F2F2] rounded-lg rounded-tr-[2.5rem] rounded-bl-[2.5rem] px-6 pb-1">
          <div className="flex flex-col max-h-[375px] overflow-y-auto">
            <div className="grid grid-cols-1">
              {cartItems.map(({ id, name, photo, price, quantity }) => (
                <>
                  <CheckoutItem
                    id={id}
                    quantity={quantity}
                    name={name}
                    photo={photo}
                    price={price}
                  />
                  <div className="w-full h-[1px] bg-[#E6E5E5]"></div>
                </>
              ))}
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-3 text-[#403937] mt-6 mb-10">
            <div className="flex justify-between text-lg">
              <span>Total de itens</span>
              <span className="text-xl">{formatCurrency(totalValue)}</span>
            </div>
            <div className="flex justify-between text-lg">
              <span>Entrega</span>
              <span className="text-xl">R$ 3,50</span>
            </div>
            <div className="flex justify-between text-2xl font-semibold">
              <span>Total</span>
              <span>{formatCurrency(totalValue + 3.5)}</span>
            </div>
            <Button
              form="form"
              type="submit"
              className="text-white text-lg bg-[#DBAC2C] h-[46px]"
            >
              CONFIRMAR PEDIDO
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
