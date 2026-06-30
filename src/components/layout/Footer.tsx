import Link from "next/link";

import { Container } from "@/components/ui";

export function Footer() {
  return (
    <footer className="border-t bg-gray-100">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-3">

          <div>
            <h3 className="text-xl font-bold text-green-700">
              Gạo Trần Huy
            </h3>

            <p className="mt-4 text-gray-600">
              Chuyên cung cấp các loại gạo sạch chất lượng cao,
              giao hàng tận nơi trên toàn quốc.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">
              Liên kết
            </h4>

            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-green-700">
                  Trang chủ
                </Link>
              </li>

              <li>
                <Link href="/san-pham" className="text-gray-600 hover:text-green-700">
                  Sản phẩm
                </Link>
              </li>

              <li>
                <Link href="/tin-tuc" className="text-gray-600 hover:text-green-700">
                  Tin tức
                </Link>
              </li>

              <li>
                <Link href="/lien-he" className="text-gray-600 hover:text-green-700">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">
              Thông tin liên hệ
            </h4>

            <div className="mt-4 space-y-2 text-gray-600">
              <p>📞 0931 555 551</p>
              <p>✉️ huy07kt@gmail.com</p>
              <p>📍 Đà Nẵng, Việt Nam</p>
            </div>
          </div>

        </div>

        <div className="border-t py-6 text-center text-sm text-gray-500">
          © 2026 Gạo Trần Huy. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
