import { Play, BookOpen, FileText, Smartphone, Star, Users } from 'lucide-react';
import studentImage from '@/assets/student-hero.jpg';
import appMockup1 from '@/assets/app-mockup-1.png';
import appMockup2 from '@/assets/app-mockup-2.png';

const HeroSection = () => {
  const topLectures = [
    { title: 'مراجعة الرياضيات النهائية', chapter: 'الباب الأول', rating: 4.9 },
    { title: 'شرح التفاضل والتكامل', chapter: 'الباب الثاني', rating: 4.8 },
    { title: 'حل نماذج الامتحانات', chapter: 'مراجعة شاملة', rating: 4.9 },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="section-container w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-right flex flex-col justify-center">
            <div className="inline-block mb-6 px-5 py-2.5 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold text-sm sm:text-base">
                🎓 منصتك التعليمية المخصصة للثانوية العامة
              </span>
            </div>
            
            <h1 className="heading-1 mb-8 lg:mb-10">
              تعلّم مع{' '}
              <span className="text-primary">معلمك الخاص</span>
              {' '}بطريقة مميزة ومنظمة
            </h1>
            
            <p className="text-body mb-10 lg:mb-12 max-w-2xl mx-auto lg:mx-0 text-lg sm:text-xl lg:text-2xl">
              منصة معلمي مصممة خصيصاً لطلاب المرحلة الثانوية، توفر لك محتوى تعليمي 
              عالي الجودة، منظم حسب المنهج، وسهل الوصول من أي مكان عبر الويب وتطبيق الجوال.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start mb-10 lg:mb-12">
              <a href="#register-student" className="btn-accent inline-flex items-center justify-center gap-2 text-base sm:text-lg px-8 py-4 sm:px-10 sm:py-5">
                <Play size={24} />
                ابدأ التعلم الآن
              </a>
              <a href="#grades" className="btn-secondary inline-flex items-center justify-center gap-2 text-base sm:text-lg px-8 py-4 sm:px-10 sm:py-5">
                <Users size={24} />
                اختر صفك الدراسي
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-5 sm:gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-base sm:text-lg text-muted-foreground">
                <BookOpen size={20} className="text-primary flex-shrink-0" />
                <span>محتوى منظم حسب الصف والمادة</span>
              </div>
              <div className="flex items-center gap-2 text-base sm:text-lg text-muted-foreground">
                <FileText size={20} className="text-primary flex-shrink-0" />
                <span>محاضرات مسجلة + مذكرات PDF</span>
              </div>
              <div className="flex items-center gap-2 text-base sm:text-lg text-muted-foreground">
                <Smartphone size={20} className="text-primary flex-shrink-0" />
                <span>تطبيق جوال سهل الاستخدام</span>
              </div>
            </div>
          </div>
          
          {/* Visual Content */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center lg:justify-end min-h-[400px] lg:min-h-[600px]">
            {/* Student Card */}
            <div className="relative z-10 bg-card rounded-3xl shadow-large p-6 sm:p-8 max-w-md w-full mx-auto lg:mx-0">
              <div className="flex items-start gap-4 mb-6">
                <img
                  src={studentImage}
                  alt="طالب"
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="font-bold text-xl sm:text-2xl text-foreground">أحمد محمود</h3>
                  <div className="inline-block mt-2 px-4 py-1.5 bg-primary/10 rounded-full">
                    <span className="text-primary text-sm sm:text-base font-medium">ثالثة ثانوي</span>
                  </div>
                </div>
              </div>
              
              {/* Top Rated Lectures */}
              <div>
                <h4 className="font-semibold text-lg sm:text-xl text-foreground mb-4 flex items-center gap-2">
                  <Star className="text-accent fill-accent" size={20} />
                  أكثر المحاضرات تقييماً
                </h4>
                <div className="space-y-3">
                  {topLectures.map((lecture, index) => (
                    <div
                      key={index}
                      className="bg-secondary/50 rounded-xl p-4 hover:bg-secondary transition-colors"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-foreground text-sm sm:text-base">{lecture.title}</p>
                          <p className="text-muted-foreground text-xs sm:text-sm mt-1">{lecture.chapter}</p>
                        </div>
                        <div className="flex items-center gap-1 text-accent">
                          <Star size={16} className="fill-current" />
                          <span className="text-sm sm:text-base font-semibold">{lecture.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* App Mockups */}
            <div className="absolute -bottom-8 -left-4 lg:-left-16 xl:-left-20 z-20">
              <img
                src={appMockup1}
                alt="تطبيق معلمي"
                className="w-40 sm:w-48 lg:w-56 xl:w-64 rounded-2xl shadow-large animate-float"
              />
            </div>
            <div className="absolute top-0 -right-4 lg:-right-12 xl:-right-16 z-0">
              <img
                src={appMockup2}
                alt="تطبيق معلمي"
                className="w-36 sm:w-44 lg:w-52 xl:w-60 rounded-2xl shadow-medium opacity-80 animate-float-delayed"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary/5 to-accent/5 rounded-full -z-10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
