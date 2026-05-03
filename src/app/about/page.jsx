export default function AboutPage() {
  const goals = [
    {
      title: "تعلم تفاعلي",
      description: "تقديم المادة العلمية بأسلوب مبسط وجذاب يناسب الطلاب.",
      icon: "💡",
    },
    {
      title: "وعي بيئي",
      description: "غرس قيم الحفاظ على الموارد الطبيعية مثل المياه والطاقة.",
      icon: "🌍",
    },
    {
      title: "تقييم مستمر",
      description: "اختبارات دورية لقياس مستوى استيعاب المفاهيم العلمية.",
      icon: "📊",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50" dir="rtl">
      {/* Hero Section */}
      <section className="bg-indigo-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 animate-fade-in">
          عن منصة التعليمية
        </h1>
        <p className="text-xl text-indigo-100 max-w-2xl mx-auto leading-relaxed">
          نحن نسعى لبناء جيل واعٍ، يدرك قيمة الموارد الطبيعية من حوله، ويمتلك المعرفة العلمية لحمايتها واستدامتها.
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-r-4 border-indigo-600 pr-4">
              رؤيتنا
            </h2>
            <p className="text-gray-700 text-lg leading-loose mb-6 text-justify">
              تأسست منصة <strong>نوعية</strong> لتكون رفيق الطالب في رحلة استكشاف العلوم. نركز في المرحلة الحالية على "الموارد المائية" لما تمثله من أهمية قصوى للحياة على كوكب الأرض. نؤمن بأن المعرفة هي الخطوة الأولى نحو التغيير الإيجابي في استهلاكنا للمياه.
            </p>
            <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
              <p className="text-indigo-800 font-medium italic">
                "الماء ليس مجرد مورد، بل هو أساس البقاء والنمو لكل كائن حي."
              </p>
            </div>
          </div>

          {/* Goals Grid */}
          <div className="grid grid-cols-1 gap-6">
            {goals.map((goal, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <span className="text-4xl">{goal.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{goal.title}</h3>
                  <p className="text-gray-600">{goal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics or Footer Note */}
      <section className="bg-white border-t border-gray-200 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">لماذا تختار منصة التعليمية؟</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-black text-indigo-600">100%</div>
              <div className="text-sm text-gray-500">محتوى علمي دقيق</div>
            </div>
            <div>
              <div className="text-3xl font-black text-indigo-600">تفاعلية</div>
              <div className="text-sm text-gray-500">دروس رقمية</div>
            </div>
            <div>
              <div className="text-3xl font-black text-indigo-600">سهولة</div>
              <div className="text-sm text-gray-500">واجهة مستخدم بسيطة</div>
            </div>
            <div>
              <div className="text-3xl font-black text-indigo-600">مجانية</div>
              <div className="text-sm text-gray-500">لدعم جميع الطلاب</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}