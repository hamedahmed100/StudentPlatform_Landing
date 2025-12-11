import { UserPlus, BookMarked, PlayCircle } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    { icon: UserPlus, step: '١', title: 'إنشاء حساب', description: 'سجّل حساباً جديداً في ثوانٍ معدودة' },
    { icon: BookMarked, step: '٢', title: 'اختيار الصف والمادة', description: 'حدد صفك واختر المواد التي تحتاجها' },
    { icon: PlayCircle, step: '٣', title: 'ابدأ التعلم', description: 'شاهد المحاضرات وحل التدريبات وتابع تقدمك' },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm">
            كيف يعمل؟
          </span>
          <h2 className="heading-2 mb-4">ابدأ رحلتك التعليمية في ٣ خطوات</h2>
          <p className="text-body max-w-2xl mx-auto">
            الانضمام لمنصة معلمي سهل وسريع
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              <div className="card-elevated p-8 text-center h-full">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center text-2xl font-bold">
                  {item.step}
                </div>
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -left-4 w-8 h-0.5 bg-primary/30" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#register-student"
            className="btn-accent inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            سجّل الآن وابدأ التعلم مجاناً
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
