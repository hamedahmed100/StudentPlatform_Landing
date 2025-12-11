import { useState } from 'react';
import { Send, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    grade: 'first',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'تم إرسال رسالتك بنجاح!',
      description: 'سنتواصل معك في أقرب وقت ممكن.',
    });
    setFormData({ name: '', email: '', grade: 'first', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-20 lg:mb-24">
          <span className="inline-block mb-5 px-5 py-2.5 bg-primary/10 rounded-full text-primary font-semibold text-sm sm:text-base">
            تواصل معنا
          </span>
          <h2 className="heading-2 mb-6 lg:mb-8">نسعد بتواصلك معنا</h2>
          <p className="text-body max-w-3xl mx-auto text-lg sm:text-xl">
            للاستفسارات والدعم الفني، يسعدنا تواصلك معنا
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="card-elevated p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
              <div>
                <label className="block text-base lg:text-lg font-medium text-foreground mb-3">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 text-base rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              <div>
                <label className="block text-base lg:text-lg font-medium text-foreground mb-3">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 text-base rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="example@email.com"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-base lg:text-lg font-medium text-foreground mb-3">
                  الصف الدراسي
                </label>
                <select
                  value={formData.grade}
                  onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                  className="w-full px-5 py-4 text-base rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="first">أولى ثانوي</option>
                  <option value="second">ثانية ثانوي</option>
                  <option value="third">ثالثة ثانوي</option>
                </select>
              </div>

              <div>
                <label className="block text-base lg:text-lg font-medium text-foreground mb-3">
                  رسالتك
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 text-base rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="اكتب رسالتك أو استفسارك هنا..."
                />
              </div>

              <button type="submit" className="btn-primary w-full inline-flex items-center justify-center gap-2 text-base lg:text-lg px-8 py-5">
                <Send size={20} />
                إرسال الرسالة
              </button>
            </form>
          </div>

          {/* Social Links & Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-10 lg:mb-12">
              <h3 className="heading-3 mb-6 lg:mb-8">تابعنا على وسائل التواصل</h3>
              <p className="text-muted-foreground mb-8 text-base lg:text-lg leading-relaxed">
                تابع آخر الأخبار والمحتوى الجديد على صفحاتنا الرسمية
              </p>
              <div className="flex gap-5">
                <a
                  href="#"
                  className="w-14 h-14 lg:w-16 lg:h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label="فيسبوك"
                >
                  <Facebook size={28} />
                </a>
                <a
                  href="#"
                  className="w-14 h-14 lg:w-16 lg:h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label="إنستغرام"
                >
                  <Instagram size={28} />
                </a>
                <a
                  href="#"
                  className="w-14 h-14 lg:w-16 lg:h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label="تيليجرام"
                >
                  <MessageCircle size={28} />
                </a>
              </div>
            </div>

            <div className="card-elevated p-8 lg:p-10 bg-primary/5">
              <h4 className="font-bold text-foreground mb-4 text-lg lg:text-xl">ساعات الدعم</h4>
              <p className="text-muted-foreground text-base lg:text-lg mb-2">
                السبت - الخميس: 9 صباحاً - 9 مساءً
              </p>
              <p className="text-muted-foreground text-base lg:text-lg">
                الجمعة: مغلق
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
