import { ArrowLeft } from 'lucide-react';

const GradesSection = () => {
  const grades = [
    {
      name: 'أولى ثانوي',
      description: 'شروحات تأسيسية ومراجعات شاملة لجميع المواد لبناء أساس قوي',
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'ثانية ثانوي',
      description: 'محتوى متقدم مع تدريبات وامتحانات تجريبية لرفع مستواك',
      color: 'from-primary to-primary-light',
    },
    {
      name: 'ثالثة ثانوي',
      description: 'مراجعات نهائية مكثفة واختبارات على نمط الامتحانات الرسمية',
      color: 'from-accent to-orange-500',
    },
  ];

  return (
    <section id="grades" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm">
            المحتوى التعليمي
          </span>
          <h2 className="heading-2 mb-4">محتوى مخصص لكل صف</h2>
          <p className="text-body max-w-2xl mx-auto">
            اختر صفك الدراسي واستكشف المحتوى المتاح من شروحات ومراجعات واختبارات
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {grades.map((grade, index) => (
            <div
              key={index}
              className="card-elevated overflow-hidden group"
            >
              <div className={`h-3 bg-gradient-to-l ${grade.color}`} />
              <div className="p-8 text-center">
                <h3 className="heading-2 mb-4">{grade.name}</h3>
                <p className="text-muted-foreground mb-6">{grade.description}</p>
                <button className="btn-secondary w-full inline-flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-primary-foreground">
                  استكشف محتوى الصف
                  <ArrowLeft size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GradesSection;
