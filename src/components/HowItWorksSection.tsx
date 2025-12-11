import { UserPlus, BookMarked, PlayCircle } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    { icon: UserPlus, step: '١', title: 'إنشاء حساب', description: 'سجّل حساباً جديداً في ثوانٍ معدودة' },
    { icon: BookMarked, step: '٢', title: 'اختيار الصف والمادة', description: 'حدد صفك واختر المواد التي تحتاجها' },
    { icon: PlayCircle, step: '٣', title: 'ابدأ التعلم', description: 'شاهد المحاضرات وحل التدريبات وتابع تقدمك' },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-20 lg:mb-24">
          <span className="inline-block mb-5 px-5 py-2.5 bg-primary/10 rounded-full text-primary font-semibold text-sm sm:text-base">
            كيف يعمل؟
          </span>
          <h2 className="heading-2 mb-6 lg:mb-8">ابدأ رحلتك التعليمية في ٣ خطوات</h2>
          <p className="text-body max-w-3xl mx-auto text-lg sm:text-xl">
            الانضمام لمنصة معلمي سهل وسريع
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              <div className="card-elevated p-8 lg:p-10 text-center h-full">
                <div className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-5 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center text-3xl lg:text-4xl font-bold">
                  {item.step}
                </div>
                <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-5 bg-primary/10 rounded-xl flex items-center justify-center">
                  <item.icon className="w-8 h-8 lg:w-10 lg:h-10 text-primary" />
                </div>
                <h4 className="font-bold text-xl lg:text-2xl mb-3">{item.title}</h4>
                <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">{item.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -left-5 lg:-left-6 w-10 lg:w-12 h-0.5 bg-primary/30" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <a
            href="#register-student"
            className="btn-accent inline-flex items-center gap-2 text-lg lg:text-xl px-10 py-5 lg:px-12 lg:py-6"
          >
            سجّل الآن وابدأ التعلم مجاناً
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
