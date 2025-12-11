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
    <section id="home" className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-secondary/30 to-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-right">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold text-sm">
                🎓 منصتك التعليمية المخصصة للثانوية العامة
              </span>
            </div>
            
            <h1 className="heading-1 mb-6">
              تعلّم مع{' '}
              <span className="text-primary">معلمك الخاص</span>
              {' '}بطريقة مميزة ومنظمة
            </h1>
            
            <p className="text-body mb-8 max-w-xl mx-auto lg:mx-0">
              منصة معلمي مصممة خصيصاً لطلاب المرحلة الثانوية، توفر لك محتوى تعليمي 
              عالي الجودة، منظم حسب المنهج، وسهل الوصول من أي مكان عبر الويب وتطبيق الجوال.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a href="#register-student" className="btn-accent inline-flex items-center justify-center gap-2">
                <Play size={20} />
                ابدأ التعلم الآن
              </a>
              <a href="#grades" className="btn-secondary inline-flex items-center justify-center gap-2">
                <Users size={20} />
                اختر صفك الدراسي
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <BookOpen size={18} className="text-primary" />
                <span>محتوى منظم حسب الصف والمادة</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <FileText size={18} className="text-primary" />
                <span>محاضرات مسجلة + مذكرات PDF</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Smartphone size={18} className="text-primary" />
                <span>تطبيق جوال سهل الاستخدام</span>
              </div>
            </div>
          </div>
          
          {/* Visual Content */}
          <div className="order-1 lg:order-2 relative">
            {/* Student Card */}
            <div className="relative z-10 bg-card rounded-3xl shadow-large p-6 max-w-md mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <img
                  src={studentImage}
                  alt="طالب"
                  className="w-20 h-20 rounded-2xl object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg text-foreground">أحمد محمود</h3>
                  <div className="inline-block mt-1 px-3 py-1 bg-primary/10 rounded-full">
                    <span className="text-primary text-sm font-medium">ثالثة ثانوي</span>
                  </div>
                </div>
              </div>
              
              {/* Top Rated Lectures */}
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Star className="text-accent fill-accent" size={18} />
                  أكثر المحاضرات تقييماً
                </h4>
                <div className="space-y-3">
                  {topLectures.map((lecture, index) => (
                    <div
                      key={index}
                      className="bg-secondary/50 rounded-xl p-3 hover:bg-secondary transition-colors"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-foreground text-sm">{lecture.title}</p>
                          <p className="text-muted-foreground text-xs">{lecture.chapter}</p>
                        </div>
                        <div className="flex items-center gap-1 text-accent">
                          <Star size={14} className="fill-current" />
                          <span className="text-sm font-semibold">{lecture.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* App Mockups */}
            <div className="absolute -bottom-8 -left-4 lg:-left-12 z-20">
              <img
                src={appMockup1}
                alt="تطبيق معلمي"
                className="w-32 lg:w-40 rounded-2xl shadow-large animate-float"
              />
            </div>
            <div className="absolute top-0 -right-4 lg:-right-8 z-0">
              <img
                src={appMockup2}
                alt="تطبيق معلمي"
                className="w-28 lg:w-36 rounded-2xl shadow-medium opacity-80 animate-float-delayed"
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
