import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: 'كيف أسجّل في المنصة؟',
      answer: 'التسجيل سهل وسريع! اضغط على زر "سجّل الآن" واملأ بياناتك الأساسية (الاسم، البريد الإلكتروني، الصف الدراسي). بعد التأكيد، يمكنك البدء في تصفح المحتوى فوراً.',
    },
    {
      question: 'هل يمكنني استخدام المنصة مجاناً؟',
      answer: 'نعم! يمكنك تصفح المنصة ومشاهدة بعض المحتوى المجاني. للوصول للمحتوى الكامل والمحاضرات المتميزة، يمكنك الاشتراك أو شراء المحاضرات التي تحتاجها.',
    },
    {
      question: 'كيف يتم الدفع مقابل المحتوى؟',
      answer: 'نوفر عدة طرق للدفع تشمل البطاقات الائتمانية والمحافظ الإلكترونية وطرق الدفع المحلية لتناسب الجميع.',
    },
    {
      question: 'هل يوجد تطبيق جوال؟',
      answer: 'نعم! تطبيق معلمي متوفر على App Store و Google Play. حمّل التطبيق لتتمكن من التعلم في أي وقت ومن أي مكان مع إشعارات ذكية بالمحتوى الجديد.',
    },
    {
      question: 'هل يمكنني مشاهدة المحاضرات أكثر من مرة؟',
      answer: 'بالتأكيد! بعد الاشتراك أو شراء المحاضرة، يمكنك مشاهدتها عدد غير محدود من المرات خلال فترة اشتراكك.',
    },
    {
      question: 'كيف أتواصل مع الدعم الفني؟',
      answer: 'يمكنك التواصل معنا من خلال نموذج التواصل في أسفل الصفحة، أو عبر قنواتنا على وسائل التواصل الاجتماعي. فريقنا متواجد للمساعدة من السبت للخميس من 9 صباحاً حتى 9 مساءً.',
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-20 lg:mb-24">
          <span className="inline-block mb-5 px-5 py-2.5 bg-primary/10 rounded-full text-primary font-semibold text-sm sm:text-base">
            الأسئلة الشائعة
          </span>
          <h2 className="heading-2 mb-6 lg:mb-8">هل لديك سؤال؟</h2>
          <p className="text-body max-w-3xl mx-auto text-lg sm:text-xl">
            إليك إجابات لأكثر الأسئلة شيوعاً. لم تجد إجابتك؟ تواصل معنا!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-5 lg:space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-elevated px-6 lg:px-8 border-none"
              >
                <AccordionTrigger className="text-right font-semibold hover:no-underline py-6 lg:py-8 text-base lg:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 lg:pb-8 leading-relaxed text-base lg:text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
