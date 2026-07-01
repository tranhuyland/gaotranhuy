import { z } from "zod";

export const checkoutSchema = z.object({
  fullName: z
    .string()
    .min(2, "Vui lòng nhập họ tên"),

  phone: z
    .string()
    .min(9, "Số điện thoại không hợp lệ"),

  email: z
    .string()
    .email("Email không hợp lệ")
    .optional()
    .or(z.literal("")),

  address: z
    .string()
    .min(5, "Vui lòng nhập địa chỉ"),

  city: z
    .string()
    .min(2, "Chọn tỉnh/thành"),

  note: z.string().optional(),

  payment: z.enum(
    ["cod", "bank", "wallet"],
    {
      message:
        "Vui lòng chọn phương thức thanh toán",
    }
  ),
});

export type CheckoutFormData =
  z.infer<typeof checkoutSchema>;
