// src/app/layout.js
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "منصة تعلمية | التعليم الإلكتروني",
  description: "منصة تعليمية متخصصة في تبسيط مناهج العلوم باستخدام أحدث التقنيات التربوية",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased bg-slate-50 text-slate-900 min-h-screen flex flex-col font-sans">
        
        {/* شريط التنقل - Navigation Bar */}
        <nav className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              
              <div className="flex items-center gap-10">
                {/* شعار المنصة */}
                <Link href="/" className="flex items-center gap-2 group">
                  <span className="text-2xl font-black text-blue-700 tracking-tighter group-hover:text-blue-800 transition-colors">نواعية</span>
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                </Link>

                {/* روابط القائمة الرئيسية */}
                <div className="hidden md:flex gap-8 text-sm font-bold">
                  <Link href="/" className="text-slate-600 hover:text-blue-600 transition-colors">الرئيسية</Link>
                  <Link href="/unit1" className="text-slate-600 hover:text-blue-600 transition-colors">الدروس</Link>
                  <Link href="/exam" className="text-slate-600 hover:text-blue-600 transition-colors">الاختبارات</Link>
              
                </div>
              </div>

              {/* الجزء الأيسر - زر الدخول السريع */}
              <div className="flex items-center gap-4">
                <Link 
                  href="/exam" 
                  className="bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 shadow-md transition-all active:scale-95"
                >
                  ابدأ الاختبار الآن
                </Link>
              </div>

            </div>
          </div>
        </nav>

        {/* منطقة المحتوى الرئيسي */}
        <main className="grow">
          {children}
        </main>

        {/* التذييل - Footer */}
        <footer className="bg-white border-t border-slate-200 pt-12 pb-8 mt-auto">
          <div className="max-w-7xl mx-auto px-4 text-center">
            {/* تم تصحيح الوسم هنا من < إلى <div */}
            <div className="mb-6 flex justify-center gap-6 text-slate-500 text-sm font-bold">
              <Link href="/" className="hover:text-blue-600 transition-colors">الرئيسية</Link>
              <Link href="/unit1" className="hover:text-blue-600 transition-colors">الدروس</Link>
              <Link href="/exam" className="hover:text-blue-600 transition-colors">الاختبارات</Link>
              <Link href="/about" className="hover:text-blue-600 transition-colors">عن المنصة</Link>
            </div>
            
            <p className="text-slate-500 text-sm font-medium">
              &copy; {new Date().getFullYear()} منصة نواعية التعليمية - جميع الحقوق محفوظة
            </p>
            <div className="mt-4 border-t border-slate-100 pt-4">
              <p className="text-xs text-slate-400 inline-block">
                 مطوّر لدعم المناهج التعليمية | Next.js 16 & Tailwind 4
              </p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}