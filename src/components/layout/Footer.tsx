export function Footer() {
  return (
    <footer className="mt-20 border-t bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-12">

        <div className="grid gap-10 md:grid-cols-3">

          <div>
            <h3 className="text-xl font-bold text-green-700">
              Gạo Trần Huy
            </h3>

            <p className="mt-4 text-gray-600">
              Chuyên cung cấp các loại gạo sạch chất lượng cao,
              giao hàng tận nơi.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">
              Liên kết
            </h4>

            <ul className="mt-4 space-y-2 text-gray-600">
              <li>Trang chủ</li>
              <li>Sản phẩm</li>
              <li>Tin tức</li>
              <li>Liên hệ</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">
              Thông tin
            </h4>

            <p className="mt-4 text-gray-600">
              Hotline: 0931.55555.1
            </p>

            <p className="text-gray-600">
              Email: huy07kt@gmail.com
            </p>

            <p className="text-gray-600">
              Đà Nẵng, Việt Nam
            </p>
          </div>

        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
          © 2026 Gạo Trần Huy. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
