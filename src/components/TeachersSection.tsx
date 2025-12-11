import { UserPlus, Upload, LayoutDashboard, Headphones, ArrowLeft } from 'lucide-react';

const TeachersSection = () => {
  const features = [
    {
      icon: UserPlus,
      title: 'إنشاء حساب معلم بسهولة',
      description: 'سجّل في دقائق وابدأ في إعداد ملفك التعريفي',
    },
    {
      icon: Upload,
      title: 'رفع وبيع المحاضرات والمذكرات',
      description: 'ارفع محتواك التعليمي واجعله متاحاً للطلاب بسعرك المناسب',
    },
    {
      icon: LayoutDashboard,
      title: 'لوحة تحكم لمتابعة المبيعات',
      description: 'تابع أداءك وأرباحك وتفاعل طلابك من مكان واحد',
    },
    {
      icon: Headphones,
      title: 'دعم فني وتقني مستمر',
      description: 'فريقنا متواجد لمساعدتك في أي وقت تحتاج فيه للدعم',
    },
  ];

  return (
    <section id="teachers" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm">
            للمعلمين
          </span>
          <h2 className="heading-2 mb-4">كيف تساعد معلمي المعلمين على التوسع في تأثيرهم؟</h2>
          <p className="text-body max-w-2xl mx-auto">
            انضم إلى منصة معلمي ووسّع نطاق تأثيرك التعليمي مع تحقيق دخل إضافي
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-elevated p-6 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-5 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="heading-3 text-lg mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA for Teachers */}
        <div className="text-center">
          <a
            href="#register-teacher"
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            انضم إلى معلمي وابدأ في نشر محتواك اليوم
            <ArrowLeft size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
