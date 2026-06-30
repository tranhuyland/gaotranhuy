import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">

          {/* Giới thiệu */}
          <div>
            <h3 className="text-2xl font-bold text-green-700">
              Gạo Trần Huy
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Chuyên cung cấp các loại gạo sạch chất lượng cao,
              giao hàng tận nơi, phục vụ cá nhân, gia đình
              và nhà hàng.
            </p>
          </div>

          {/* Liên kết */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900">
              Liên kết
            </h4>

            <ul className="mt-4 space-y-3">

              <li>
                <Link
                  href="/"
                  className="text-gray-600 transition hover:text-green-700"
                >
                  Trang chủ
                </Link>
              </li>

              <li>
                <Link
                  href="/san-pham"
                  className="text-gray-600 transition hover:text-green-700"
                >
                  Sản phẩm
                </Link>
              </li>

              <li>
                <Link
                  href="/tin-tuc"
                  className="text-gray-600 transition hover:text-green-700"
                >
                  Tin tức
                </Link>
              </li>

              <li>
                <Link
                  href="/lien-he"
                  className="text-gray-600 transition hover:text-green-700"
                >
                  Liên hệ
                </Link>
              </li>

            </ul>
          </div>

          {/* Thông tin */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900">
              Liên hệ
            </h4>

            <div className="mt-4 space-y-3 text-gray-600">
              <p>📞 Hotline: 0931 555 551</p>

              <p>✉️ huy07kt@gmail.com</p>

              <p>📍 Đà Nẵng, Việt Nam</p>
            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-gray-300 pt-6 text-center text-sm text-gray-500">
          © 2026 Gạo Trần Huy. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
