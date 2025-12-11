import { BookOpen, Video, Bell, Smartphone, CheckCircle, Award } from 'lucide-react';

const StudentsSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'محتوى منظم بعناية',
      description: 'كل الدروس مرتبة حسب المنهج والوحدات لتصل لما تحتاجه بسهولة',
    },
    {
      icon: Video,
      title: 'محاضرات احترافية',
      description: 'شروحات واضحة ومفصلة بجودة عالية يمكنك مشاهدتها في أي وقت',
    },
    {
      icon: Bell,
      title: 'تنبيهات ذكية',
      description: 'تذكيرات بالمراجعات والمحتوى الجديد قبل الامتحانات',
    },
    {
      icon: Smartphone,
      title: 'تطبيق جوال متكامل',
      description: 'تعلّم من هاتفك في أي مكان مع تجربة استخدام سلسة',
    },
    {
      icon: CheckCircle,
      title: 'تدريبات وامتحانات',
      description: 'اختبر نفسك مع تدريبات متنوعة ونماذج امتحانات سابقة',
    },
    {
      icon: Award,
      title: 'متابعة التقدم',
      description: 'تابع مستواك وتقدمك في كل مادة بشكل مستمر',
    },
  ];

  return (
    <section id="students" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-20 lg:mb-24">
          <span className="inline-block mb-5 px-5 py-2.5 bg-primary/10 rounded-full text-primary font-semibold text-sm sm:text-base">
            مميزات المنصة
          </span>
          <h2 className="heading-2 mb-6 lg:mb-8">كل ما تحتاجه للتفوق في مكان واحد</h2>
          <p className="text-body max-w-3xl mx-auto text-lg sm:text-xl">
            منصة معلمي مصممة لتوفر لك تجربة تعلم متكاملة ومميزة
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-elevated p-8 lg:p-10 text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-10 h-10 lg:w-12 lg:h-12 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="heading-3 mb-4 text-xl lg:text-2xl">{feature.title}</h3>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentsSection;
