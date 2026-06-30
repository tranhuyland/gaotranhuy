import { create } from "zustand";

import type { Product } from "@/types/product";

import type {
  Cart,
  CartItem,
} from "../types";

import {
  calculateDiscount,
  calculateShipping,
  calculateSubtotal,
  calculateTotal,
  calculateTotalItems,
} from "../utils";

interface CartStore extends Cart {
  addItem: (
    product: Product,
    quantity?: number
  ) => void;

  removeItem: (productId: string) => void;

  increase: (productId: string) => void;

  decrease: (productId: string) => void;

  updateQuantity: (
    productId: string,
    quantity: number
  ) => void;

  clearCart: () => void;
}

function buildSummary(items: CartItem[]) {
  const subtotal = calculateSubtotal(items);

  const discount = calculateDiscount(items);

  const shippingFee =
    calculateShipping(subtotal);

  return {
    subtotal,
    discount,
    shippingFee,
    total: calculateTotal(
      subtotal,
      discount,
      shippingFee
    ),
    totalItems:
      calculateTotalItems(items),
  };
}

export const useCartStore =
  create<CartStore>((set) => ({
    items: [],

    summary: {
      subtotal: 0,
      discount: 0,
      shippingFee: 0,
      total: 0,
      totalItems: 0,
    },

    addItem(product, quantity = 1) {
      set((state) => {
        const existing = state.items.find(
          (item) =>
            item.product.id === product.id
        );

        let items: CartItem[];

        if (existing) {
          items = state.items.map((item) =>
            item.product.id === product.id
              ? {
                  ...item,
                  quantity:
                    item.quantity + quantity,
                }
              : item
          );
        } else {
          items = [
            ...state.items,
            {
              product,
              quantity,
            },
          ];
        }

        return {
          items,
          summary: buildSummary(items),
        };
      });
    },

    removeItem(productId) {
      set((state) => {
        const items =
          state.items.filter(
            (item) =>
              item.product.id !== productId
          );

        return {
          items,
          summary: buildSummary(items),
        };
      });
    },

    increase(productId) {
      set((state) => {
        const items = state.items.map(
          (item) =>
            item.product.id === productId
              ? {
                  ...item,
                  quantity: Math.min(
                    item.quantity + 1,
                    item.product.stock
                  ),
                }
              : item
        );

        return {
          items,
          summary: buildSummary(items),
        };
      });
    },

    decrease(productId) {
      set((state) => {
        const items = state.items
          .map((item) =>
            item.product.id === productId
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                }
              : item
          )
          .filter(
            (item) => item.quantity > 0
          );

        return {
          items,
          summary: buildSummary(items),
        };
      });
    },

    updateQuantity(
      productId,
      quantity
    ) {
      set((state) => {
        const items = state.items.map(
          (item) =>
            item.product.id === productId
              ? {
                  ...item,
                  quantity: Math.max(
                    1,
                    Math.min(
                      quantity,
                      item.product.stock
                    )
                  ),
                }
              : item
        );

        return {
          items,
          summary: buildSummary(items),
        };
      });
    },

    clearCart() {
      set({
        items: [],
        summary: {
          subtotal: 0,
          discount: 0,
          shippingFee: 0,
          total: 0,
          totalItems: 0,
        },
      });
    },
  }));
