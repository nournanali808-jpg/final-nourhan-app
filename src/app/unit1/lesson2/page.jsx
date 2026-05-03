export default function LessonTwo() {
  return (
    <article className="max-w-4xl mx-auto p-6 text-right" dir="rtl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-blue-900">الدرس الثاني: المسطحات المائية العذبة</h1>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-red-700">المخاوف الرئيسية</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border-r-4 border-red-500 bg-red-50">
            <h3 className="font-bold text-lg">ندرة الموارد</h3>
            <p>وجود المياه بكميات محدودة في العديد من مناطق العالم بسبب الإفراط في الاستخدام أو الجفاف.</p>
          </div>
          <div className="p-4 border-r-4 border-orange-500 bg-orange-50">
            <h3 className="font-bold text-lg">نقص الجودة</h3>
            <p>سوء جودة المياه نتيجة إلقاء المخلفات، مما يؤدي لفقدان حياة الآلاف وانقراض الكائنات.</p>
          </div>
        </div>
      </section>

      <section className="p-6 bg-blue-50 rounded-2xl">
        <h2 className="text-2xl font-bold mb-4">مستجمعات المياه (Watersheds)</h2>
        <p className="mb-4">هي منطقة تتجمع فيها المياه من مصادر مختلفة وتتحرك في اتجاه واحد نحو منطقة مشتركة.</p>
        
        <div className="overflow-x-auto">
          <table className="w-full text-center bg-white rounded-lg">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-2">كمية الأمطار</th>
                <th className="p-2">النتيجة</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-b">
                <td className="p-2">أكبر من استيعاب المجرى</td>
                <td className="p-2 font-bold text-blue-600">فيضانات</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">قليلة جداً</td>
                <td className="p-2 font-bold text-orange-600">جفاف</td>
              </tr>
              <tr>
                <td className="p-2">معتدلة</td>
                <td className="p-2 font-bold text-green-600">مورد ثابت</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </article>
  );
}