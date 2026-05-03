import Link from "next/link";

export default function Units() {
  return (
    <div className="space-y-6">

      <h2 className="text-2xl font-bold text-sky-600">
        الوحدات الدراسية
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <Link href="/unit1" className="bg-white p-6 rounded-2xl shadow hover:shadow-lg">
          <h3 className="text-xl font-semibold">الوحدة الأولى</h3>
          <p className="text-gray-500">الموارد الطبيعية والمياه</p>
        </Link>

      </div>

    </div>
  );
}