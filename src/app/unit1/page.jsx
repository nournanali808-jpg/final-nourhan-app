import Link from 'next/link';

export default function UnitOne() {
  return (
    <article className="max-w-4xl mx-auto p-8 text-right" dir="rtl">
      <h1 className="text-3xl font-bold text-blue-800 border-b-2 border-blue-200 pb-4 mb-6">الوحدة الأولى: الموارد الطبيعية والمياه</h1>
      
      <div className="space-y-4">
        <section className="p-4 bg-blue-50 rounded-lg">
          <h2 className="text-xl font-semibold">الدرس الأول: الموارد الطبيعية</h2>
          <p className="text-slate-600 mb-4">تعرف على أنواع المسطحات المائية وطرق الحفاظ على المياه.</p>
          <Link href="/unit1/lesson1" className="text-blue-600 font-medium underline">ابدأ الدرس الآن</Link>
        </section>

        <section className="p-4 bg-blue-50 rounded-lg">
          <h2 className="text-xl font-semibold">الدرس الثاني: المسطحات المائية العذبة</h2>
          <p className="text-slate-600 mb-4">توازن المياه، مستجمعات المياه، والمخاوف المتعلقة بالجودة.</p>
          <Link href="/unit1/lesson2" className="text-blue-600 font-medium underline">ابدأ الدرس الآن</Link>
        </section>
      </div>
    </article>
  );
}