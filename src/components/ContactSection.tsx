import { useState } from 'react';
import { Send, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    userType: 'student',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'تم إرسال رسالتك بنجاح!',
      description: 'سنتواصل معك في أقرب وقت ممكن.',
    });
    setFormData({ name: '', email: '', userType: 'student', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm">
            تواصل معنا
          </span>
          <h2 className="heading-2 mb-4">نسعد بتواصلك معنا</h2>
          <p className="text-body max-w-2xl mx-auto">
            للاستفسارات والدعم الفني، يسعدنا تواصلك معنا
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="card-elevated p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="example@email.com"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  نوع المستخدم
                </label>
                <select
                  value={formData.userType}
                  onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="student">طالب</option>
                  <option value="teacher">معلم</option>
                  <option value="other">أخرى</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  رسالتك
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="اكتب رسالتك هنا..."
                />
              </div>

              <button type="submit" className="btn-primary w-full inline-flex items-center justify-center gap-2">
                <Send size={18} />
                إرسال الرسالة
              </button>
            </form>
          </div>

          {/* Social Links & Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="heading-3 mb-4">تابعنا على وسائل التواصل</h3>
              <p className="text-muted-foreground mb-6">
                تابع آخر الأخبار والتحديثات على صفحاتنا الرسمية
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label="فيسبوك"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label="إنستغرام"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label="تيليجرام"
                >
                  <MessageCircle size={24} />
                </a>
              </div>
            </div>

            <div className="card-elevated p-6 bg-primary/5">
              <h4 className="font-bold text-foreground mb-2">ساعات العمل</h4>
              <p className="text-muted-foreground">
                السبت - الخميس: 9 صباحاً - 9 مساءً
              </p>
              <p className="text-muted-foreground">
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
