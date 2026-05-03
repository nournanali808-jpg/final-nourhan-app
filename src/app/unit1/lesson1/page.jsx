export default function LessonOne() {
  const waterBodies = [
    { name: "الأنهار", type: "عذبة", location: "تبدأ من الجبال", formation: "تدفق المياه العذبة من أعلى الجبال" },
    { name: "البحيرات", type: "غالبًا عذبة (بعضها مالح)", location: "المناطق المنخفضة", formation: "تجمع المياه في منطقة منخفضة" },
    { name: "الأراضي الرطبة", type: "عذبة", location: "المستنقعات والبرك", formation: "مناطق يغمرها الماء بشكل جزئي" },
    { name: "المصب", type: "مزيج (مالح وعذب)", location: "نقطة التقاء النهر بالبحر", formation: "اختلط مياه المحيطات بمياه النهر" }
  ];

  return (
    <main className="max-w-4xl mx-auto p-6 text-right" dir="rtl">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">الدرس الأول: الموارد الطبيعية والمياه</h1>
      
      <section className="mb-8 bg-green-50 p-6 rounded-xl border-r-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4">طرق ترشيد استهلاك المياه</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-700">
          <li>غلق صنبور المياه أثناء غسل الشعر.</li>
          <li>تقليل زمن الاستحمام.</li>
          <li>غلق صنبور الماء أثناء غسل الأسنان.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">أنواع المسطحات المائية</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {waterBodies.map((body, index) => (
            <figure key={index} className="p-4 border border-slate-200 rounded-lg shadow-sm">
              <figcaption className="text-xl font-bold text-blue-700 mb-2">{body.name}</figcaption>
              <p><strong>نوع المياه:</strong> {body.type}</p>
              <p><strong>المكان:</strong> {body.location}</p>
              <p className="text-sm text-slate-500 mt-2">{body.formation}</p>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}