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
    <section id="students" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm">
            مميزات المنصة
          </span>
          <h2 className="heading-2 mb-4">كل ما تحتاجه للتفوق في مكان واحد</h2>
          <p className="text-body max-w-2xl mx-auto">
            منصة معلمي مصممة لتوفر لك تجربة تعلم متكاملة ومميزة
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-elevated p-6 text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-5 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="heading-3 text-lg mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentsSection;
