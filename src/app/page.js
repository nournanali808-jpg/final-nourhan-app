
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 p-8 text-right" dir="rtl">
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">منصة تعلمية </h1>
        <p className="text-xl text-slate-600">منصة تعليمية متخصصة في علوم الطبيعة والموارد المائية</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Link href="/units" className="p-6 bg-white rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition">
          <h2 className="text-2xl font-bold text-blue-700">الوحدات الدراسية</h2>
          <p className="mt-2 text-slate-500">استعرض الدروس التعليمية لمادة العلوم.</p>
        </Link>
        <Link href="/exam" className="p-6 bg-white rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition">
          <h2 className="text-2xl font-bold text-blue-700">الاختبارات</h2>
          <p className="mt-2 text-slate-500">اختبر معلوماتك في الدرس الأول والثاني.</p>
        </Link>
      </section>
    </main>
  );
}