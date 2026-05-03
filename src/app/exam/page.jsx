"use client";
import { useState } from "react";

export default function ExamPage() {
  const [isStarted, setIsStarted] = useState(false); // حالة لبداية الاختبار
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    {
      id: 1,
      q: "أي مما يلي يُعد من الموارد الطبيعية التي يحصل عليها الإنسان من الطبيعة؟",
      options: ["البلاستيك", "المعادن (الذهب والفضة)", "السيارات", "الكتب"],
      answer: "المعادن (الذهب والفضة)"
    },
    {
      id: 2,
      q: "ما هي الحالة التي تكون عليها أغلب المياه الموجودة على سطح الأرض؟",
      options: ["مياه عذبة", "مياه جوفية", "مياه مالحة", "مياه متجمدة"],
      answer: "مياه مالحة"
    },
    {
      id: 3,
      q: "أي من الأنشطة التالية يمثل طريقة لترشيد استهلاك المياه؟",
      options: ["ترك الصنبور مفتوحاً", "زيادة زمن الاستحمام", "غلق صنبور المياه أثناء غسل الشعر", "رش الشوارع بالخراطيم"],
      answer: "غلق صنبور المياه أثناء غسل الشعر"
    },
    {
      id: 4,
      q: "تُعرف المنطقة التي تتجمع فيها المياه من مصادر مختلفة بـ:",
      options: ["المصب", "مستجمع المياه", "المياه الجوفية", "المحيط"],
      answer: "مستجمع المياه"
    },
    {
      id: 5,
      q: "يعيش في مواطن المياه العذبة تقريباً ........ من أنواع الحيوانات في العالم.",
      options: ["50%", "25%", "10%", "90%"],
      answer: "10%"
    }
  ];

  const handleSelect = (questionId, option) => {
    if (submitted) return;
    setUserAnswers({ ...userAnswers, [questionId]: option });
  };

  const calculateResult = (e) => {
    e.preventDefault();
    let finalScore = 0;
    questions.forEach((q) => {
      if (userAnswers[q.id] === q.answer) {
        finalScore++;
      }
    });
    setScore(finalScore);
    setShowResult(true);
    setSubmitted(true);
  };

  const getOptionStyle = (qId, option) => {
    if (!submitted) {
      return userAnswers[qId] === option ? "bg-indigo-50 border-indigo-600" : "border-slate-100 hover:bg-slate-50";
    }
    const isCorrect = questions.find(q => q.id === qId).answer === option;
    const isUserChoice = userAnswers[qId] === option;
    if (isCorrect) return "bg-green-100 border-green-600 text-green-800";
    if (isUserChoice && !isCorrect) return "bg-red-100 border-red-600 text-red-800";
    return "border-slate-100 opacity-50";
  };

  // --- 1. شاشة البداية (قبل الدخول للاختبار) ---
  if (!isStarted) {
    return (
      <main className="max-w-2xl mx-auto p-6 text-right py-20" dir="rtl">
        <div className="bg-white border-2 border-indigo-100 rounded-3xl p-10 text-center shadow-2xl animate-in fade-in zoom-in duration-500">
          <div className="text-8xl mb-6">📝</div>
          <h1 className="text-4xl font-black text-indigo-900 mb-4">اختبار الوحدة الأولى</h1>
          <p className="text-slate-600 mb-8 text-lg">
            أهلاً بك يا بطل! هذا الاختبار يحتوي على <b>{questions.length} أسئلة</b> لقياس مدى استيعابك لدرس الموارد المائية.
          </p>
          <div className="flex flex-col gap-4">
            <button 
              onClick={() => setIsStarted(true)}
              className="bg-indigo-600 text-white py-4 px-10 rounded-2xl font-black text-xl shadow-lg hover:bg-indigo-700 hover:-translate-y-1 transition-all"
            >
              دخول الاختبار الآن
            </button>
            <p className="text-sm text-slate-400 italic">تأكد من مراجعة الدروس جيداً قبل البدء</p>
          </div>
        </div>
      </main>
    );
  }

  // --- 2. شاشة الأسئلة (بعد الضغط على دخول) ---
  return (
    <main className="max-w-2xl mx-auto p-6 text-right mb-20 animate-in slide-in-from-bottom duration-500" dir="rtl">
      <div className="flex justify-between items-center mb-8 border-b-4 border-indigo-500 pb-4">
        <h1 className="text-3xl font-black text-indigo-900">الأسئلة</h1>
        <span className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full font-bold">وحدة الموارد المائية</span>
      </div>

      <form onSubmit={calculateResult} className="space-y-6">
        {questions.map((item) => (
          <fieldset key={item.id} className="p-6 border-2 border-slate-200 rounded-2xl bg-white shadow-sm transition-all">
            <legend className="font-bold text-sm px-4 py-1 bg-indigo-600 text-white rounded-full">السؤال {item.id}</legend>
            <p className="mb-6 mt-2 text-lg font-semibold text-slate-800">{item.q}</p>
            <div className="grid gap-3">
              {item.options.map((opt, idx) => (
                <label 
                  key={idx} 
                  className={`flex items-center justify-between gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${getOptionStyle(item.id, opt)}`}
                >
                  <div className="flex items-center gap-3">
                    <input 
                      type="radio" 
                      name={`q${item.id}`} 
                      required
                      disabled={submitted}
                      onChange={() => handleSelect(item.id, opt)}
                      className="w-5 h-5 accent-indigo-600" 
                    />
                    <span className="font-medium">{opt}</span>
                  </div>
                  {submitted && (
                    <span className="text-sm font-bold">
                      {item.answer === opt && "✅ إجابة صحيحة"}
                      {userAnswers[item.id] === opt && item.answer !== opt && "❌ إجابتك"}
                    </span>
                  )}
                </label>
              ))}
            </div>
          </fieldset>
        ))}

        {!submitted ? (
          <button type="submit" className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-xl shadow-xl hover:bg-indigo-700 transition-all">
            إنهاء الاختبار وعرض النتيجة
          </button>
        ) : (
          <button 
            type="button" 
            onClick={() => window.location.reload()}
            className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xl shadow-xl hover:bg-black transition-all"
          >
            إعادة الاختبار
          </button>
        )}
      </form>

      {/* نافذة عرض النتيجة - Modal */}
      {showResult && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 z-[100]">
          <div className="bg-white rounded-3xl p-10 max-w-sm w-full text-center shadow-2xl border-t-8 border-indigo-600 animate-in zoom-in duration-300">
            <div className="text-7xl mb-4">{score >= 4 ? "🌟" : score >= 3 ? "👏" : "📚"}</div>
            <h2 className="text-2xl font-black text-slate-900 mb-2">انتهى الاختبار!</h2>
            <div className="bg-indigo-50 rounded-2xl py-6 my-6">
              <span className="text-sm text-indigo-600 font-bold block mb-1">درجتك هي</span>
              <span className="text-6xl font-black text-indigo-700">{score}</span>
              <span className="text-2xl font-bold text-indigo-400"> / {questions.length}</span>
            </div>
            <button 
              onClick={() => setShowResult(false)}
              className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors"
            >
              مراجعة الأخطاء
            </button>
          </div>
        </div>
      )}
    </main>
  );
}