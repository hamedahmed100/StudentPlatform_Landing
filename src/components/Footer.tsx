import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img src={logo} alt="معلمي" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-background/70 max-w-md">
              منصة معلمي التعليمية - محتوى تعليمي عالي الجودة لطلاب المرحلة الثانوية، 
              منظم ومتاح في أي وقت ومن أي مكان.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#home" className="hover:text-background transition-colors">الرئيسية</a></li>
              <li><a href="#students" className="hover:text-background transition-colors">المميزات</a></li>
              <li><a href="#grades" className="hover:text-background transition-colors">الصفوف الدراسية</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">تواصل معنا</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-background/60">
          <p>© {currentYear} منصة معلمي. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-background transition-colors">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
