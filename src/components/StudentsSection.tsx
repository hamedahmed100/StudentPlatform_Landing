import { BookOpen, Video, Bell, Smartphone } from 'lucide-react';

const StudentsSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'محتوى مرتب حسب الصف والمادة',
      description: 'كل المواد منظمة بشكل واضح لتصل لما تحتاجه بسهولة وسرعة',
    },
    {
      icon: Video,
      title: 'محاضرات مسجلة بجودة عالية',
      description: 'شروحات احترافية من أفضل المعلمين يمكنك مشاهدتها في أي وقت',
    },
    {
      icon: Bell,
      title: 'إشعارات وتنبيهات ذكية',
      description: 'تذكيرات بالمواعيد والمراجعات المهمة حتى لا يفوتك شيء',
    },
    {
      icon: Smartphone,
      title: 'تطبيق جوال سهل وبسيط',
      description: 'تعلّم من هاتفك في أي مكان مع تجربة استخدام مريحة وسلسة',
    },
  ];

  return (
    <section id="students" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm">
            للطلاب
          </span>
          <h2 className="heading-2 mb-4">لماذا يحب الطلاب منصة معلمي؟</h2>
          <p className="text-body max-w-2xl mx-auto">
            نوفر لك كل ما تحتاجه للتفوق في دراستك بطريقة سهلة ومنظمة
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
