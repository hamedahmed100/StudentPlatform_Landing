import { UserPlus, BookMarked, PlayCircle, Upload, DollarSign } from 'lucide-react';

const HowItWorksSection = () => {
  const studentSteps = [
    { icon: UserPlus, step: '١', title: 'إنشاء حساب', description: 'سجّل حساباً جديداً في ثوانٍ' },
    { icon: BookMarked, step: '٢', title: 'اختيار الصف والمادة', description: 'حدد صفك واختر المواد التي تحتاجها' },
    { icon: PlayCircle, step: '٣', title: 'مشاهدة المحاضرات', description: 'استمتع بالتعلم وحل التدريبات' },
  ];

  const teacherSteps = [
    { icon: UserPlus, step: '١', title: 'إنشاء حساب معلم', description: 'سجّل كمعلم وأكمل ملفك التعريفي' },
    { icon: Upload, step: '٢', title: 'رفع المحاضرات', description: 'ارفع محاضراتك ومذكراتك للطلاب' },
    { icon: DollarSign, step: '٣', title: 'تحقيق الدخل', description: 'ابدأ في جني الأرباح من محتواك' },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm">
            كيف يعمل؟
          </span>
          <h2 className="heading-2 mb-4">خطوات بسيطة للبدء</h2>
          <p className="text-body max-w-2xl mx-auto">
            ابدأ رحلتك مع معلمي بخطوات سهلة وواضحة
          </p>
        </div>

        {/* Students Steps */}
        <div className="mb-16">
          <h3 className="heading-3 text-center mb-8 text-primary">للطلاب</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {studentSteps.map((item, index) => (
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
                {index < studentSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -left-4 w-8 h-0.5 bg-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Teachers Steps */}
        <div>
          <h3 className="heading-3 text-center mb-8 text-accent">للمعلمين</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teacherSteps.map((item, index) => (
              <div key={index} className="relative">
                <div className="card-elevated p-8 text-center h-full">
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent text-accent-foreground rounded-2xl flex items-center justify-center text-2xl font-bold">
                    {item.step}
                  </div>
                  <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
                {index < teacherSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -left-4 w-8 h-0.5 bg-accent/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
