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
    <section id="grades" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-20 lg:mb-24">
          <span className="inline-block mb-5 px-5 py-2.5 bg-primary/10 rounded-full text-primary font-semibold text-sm sm:text-base">
            المحتوى التعليمي
          </span>
          <h2 className="heading-2 mb-6 lg:mb-8">محتوى مخصص لكل صف</h2>
          <p className="text-body max-w-3xl mx-auto text-lg sm:text-xl">
            اختر صفك الدراسي واستكشف المحتوى المتاح من شروحات ومراجعات واختبارات
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {grades.map((grade, index) => (
            <div
              key={index}
              className="card-elevated overflow-hidden group"
            >
              <div className={`h-4 bg-gradient-to-l ${grade.color}`} />
              <div className="p-8 lg:p-10 text-center">
                <h3 className="heading-2 mb-5 lg:mb-6 text-3xl lg:text-4xl">{grade.name}</h3>
                <p className="text-muted-foreground mb-8 text-base lg:text-lg leading-relaxed">{grade.description}</p>
                <button className="btn-secondary w-full inline-flex items-center justify-center gap-2 text-base lg:text-lg px-6 py-4 group-hover:bg-primary group-hover:text-primary-foreground">
                  استكشف محتوى الصف
                  <ArrowLeft size={20} />
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
