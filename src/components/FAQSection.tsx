import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: 'كيف أسجّل في المنصة كطالب؟',
      answer: 'التسجيل سهل وسريع! اضغط على زر "سجّل كطالب" واملأ بياناتك الأساسية (الاسم، البريد الإلكتروني، الصف الدراسي). بعد التأكيد، يمكنك البدء في تصفح المحتوى فوراً.',
    },
    {
      question: 'هل يمكنني استخدام المنصة مجاناً؟',
      answer: 'نعم! يمكنك تصفح المنصة ومشاهدة بعض المحتوى المجاني. للوصول للمحتوى الكامل والمحاضرات المتميزة، يمكنك الاشتراك أو شراء المحاضرات التي تحتاجها.',
    },
    {
      question: 'كيف أرفع محاضراتي كمعلم؟',
      answer: 'بعد إنشاء حساب معلم، ادخل إلى لوحة التحكم واضغط على "إضافة محاضرة جديدة". ارفع الفيديو أو ملف PDF، أضف العنوان والوصف والسعر، ثم اضغط نشر. محاضراتك ستكون متاحة للطلاب فوراً.',
    },
    {
      question: 'كيف يتم الدفع مقابل المحتوى؟',
      answer: 'نوفر عدة طرق للدفع تشمل البطاقات الائتمانية والمحافظ الإلكترونية. للمعلمين، يتم تحويل أرباحهم بشكل دوري إلى حساباتهم البنكية.',
    },
    {
      question: 'هل يوجد تطبيق جوال؟',
      answer: 'نعم! تطبيق معلمي متوفر على App Store و Google Play. حمّل التطبيق لتتمكن من التعلم في أي وقت ومن أي مكان مع إشعارات ذكية بالمحتوى الجديد.',
    },
    {
      question: 'كيف أتواصل مع الدعم الفني؟',
      answer: 'يمكنك التواصل معنا من خلال نموذج التواصل في أسفل الصفحة، أو عبر قنواتنا على وسائل التواصل الاجتماعي. فريقنا متواجد للمساعدة من السبت للخميس من 9 صباحاً حتى 9 مساءً.',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm">
            الأسئلة الشائعة
          </span>
          <h2 className="heading-2 mb-4">هل لديك سؤال؟</h2>
          <p className="text-body max-w-2xl mx-auto">
            إليك إجابات لأكثر الأسئلة شيوعاً. لم تجد إجابتك؟ تواصل معنا!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-elevated px-6 border-none"
              >
                <AccordionTrigger className="text-right font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
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
