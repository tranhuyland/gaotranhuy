const features = [
  {
    title: "Gạo sạch chất lượng",
    description: "Nguồn gốc rõ ràng, chọn lọc kỹ trước khi đến tay khách hàng.",
    icon: "🌾",
  },
  {
    title: "Giao hàng nhanh",
    description: "Giao tận nơi trong khu vực với thời gian nhanh chóng.",
    icon: "🚚",
  },
  {
    title: "Giá hợp lý",
    description: "Cam kết mức giá cạnh tranh và ổn định.",
    icon: "💰",
  },
  {
    title: "Hỗ trợ tận tâm",
    description: "Tư vấn loại gạo phù hợp với từng nhu cầu sử dụng.",
    icon: "❤️",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4">

        <h2 className="text-center text-3xl font-bold">
          Vì sao chọn Gạo Trần Huy?
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="text-5xl">{item.icon}</div>

              <h3 className="mt-4 text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
