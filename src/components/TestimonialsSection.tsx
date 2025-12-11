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
    <section className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-20 lg:mb-24">
          <span className="inline-block mb-5 px-5 py-2.5 bg-primary/10 rounded-full text-primary font-semibold text-sm sm:text-base">
            آراء الطلاب
          </span>
          <h2 className="heading-2 mb-6 lg:mb-8">ماذا يقول طلابنا؟</h2>
          <p className="text-body max-w-3xl mx-auto text-lg sm:text-xl">
            تجارب حقيقية من طلاب يستخدمون منصة معلمي
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-elevated p-8 lg:p-10 relative">
              <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/10" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-accent fill-accent" />
                ))}
              </div>
              
              <p className="text-foreground mb-8 text-base lg:text-lg leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>
              
              <div className="border-t border-border pt-6">
                <p className="font-bold text-foreground text-lg lg:text-xl">{testimonial.name}</p>
                <p className="text-muted-foreground text-base lg:text-lg mt-1">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
