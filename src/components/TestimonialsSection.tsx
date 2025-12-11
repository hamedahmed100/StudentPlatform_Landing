import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'يوسف إبراهيم',
      role: 'طالب في ثالثة ثانوي',
      content: 'المنصة ساعدتني أحسّن درجاتي بشكل ملحوظ. المحاضرات واضحة ومنظمة، والتطبيق سهّل عليّ المذاكرة في أي وقت.',
      rating: 5,
    },
    {
      name: 'نور محمد',
      role: 'طالبة في ثانية ثانوي',
      content: 'أحب طريقة تنظيم المحتوى حسب المادة والوحدة. التنبيهات بتفكرني بالمراجعات المهمة قبل الامتحانات.',
      rating: 5,
    },
    {
      name: 'أحمد خالد',
      role: 'طالب في أولى ثانوي',
      content: 'أفضل منصة للمذاكرة! الشروحات بسيطة وواضحة والمذكرات مفيدة جداً. أنصح كل زملائي بالاشتراك.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm">
            آراء الطلاب
          </span>
          <h2 className="heading-2 mb-4">ماذا يقول طلابنا؟</h2>
          <p className="text-body max-w-2xl mx-auto">
            تجارب حقيقية من طلاب يستخدمون منصة معلمي
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-elevated p-8 relative">
              <Quote className="absolute top-4 left-4 w-10 h-10 text-primary/10" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>
              
              <p className="text-foreground mb-6 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-muted-foreground text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
